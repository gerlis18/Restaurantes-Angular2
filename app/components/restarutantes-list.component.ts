import {Component, OnInit} from "angular2/core"; "./components/footer.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [RestauranteService]
})


export class RestaurantesListComponent implements OnInit{
    public titulo = "Listado de Restaurantes";
    public restaurantes: Restaurante[];
    public status:string;
    public errorMessage;
    public loading;
    public confirmado;

    constructor(private _restauranteService: RestauranteService){}

    ngOnInit(){
        this.loading = 'show';
        this.getRestaurantes();
        console.log("restaurantes-list Component cargado")
    }

    getRestaurantes(){

        this._restauranteService.getRestaurantes().subscribe(
            result => {
                this.restaurantes = result.data;
                this.status = result.status;

                if(this.status != "success"){
                    alert("Error en el servidor");
                }
                this.loading = 'hide';
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage !== null){
                    console.log(this.errorMessage);
                    alert("Error");
                }
            }
        );
    }

    onBorrarConfirm(id){
        this.confirmado = id;
    }

    onCancelarConfirm(id){
        this.confirmado = null;
    }

    onBorrarRestaurante(id){
        this._restauranteService.deleteRestaurante(id).subscribe(
            result => {
                this.status = result.status;

                if(this.status != "success"){
                    alert("Error en el servidor");
                }
                this.getRestaurantes();
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage !== null){
                    console.log(this.errorMessage);
                    alert("Error");
                }
            }
        );
    }
}
