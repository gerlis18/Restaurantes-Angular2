import {Component, OnInit} from "angular2/core"; "./components/footer.component";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "restaurante-add",
    templateUrl: "app/view/restaurante-edit.html",
    providers: [RestauranteService]
})

export class RestauranteEditComponent implements OnInit{
    public restaurante: Restaurante;
    public status:string;
    public errorMessage:string;
    constructor(
            private _restauranteService: RestauranteService,
            private _routeParams: RouteParams,
            private _router: Router
    ){}

    ngOnInit(){
        this.restaurante = new Restaurante(
            parseInt(this._routeParams.get("id")),
            this._routeParams.get("nombre"),
            this._routeParams.get("direccion"),
            this._routeParams.get("descripcion"),
            "null",
            this._routeParams.get("precio"));
            this.getRestaurantes();
    }

    onSubmit(){
        let id = this._routeParams.get("id");
        this._restauranteService.editRestaurante(id, this.restaurante).subscribe(
            result => {
                this.restaurante = result.data;
                this.status = result.status;

                if(this.status != "success"){
                    alert("Error en el servidor");
                }
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage !== null){
                    console.log(this.errorMessage);
                    alert("Error");
                }
            }
        );
        this._router.navigate(["Home"]);
    }

    getRestaurantes(){
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id).subscribe(
            result => {
                this.restaurante = result.data;
                this.status = result.status;

                if(this.status != "success"){
                    alert("Error en el servidor");
                }
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

    callPrecio(value){
        this.restaurante.precio = value;
    }

}
