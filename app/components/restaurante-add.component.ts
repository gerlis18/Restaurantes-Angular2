import {Component, OnInit} from "angular2/core"; "./components/footer.component";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "restaurante-add",
    templateUrl: "app/view/restaurante-add.html",
    providers: [RestauranteService]
})

export class RestauranteAddComponent implements OnInit{
    public restaurante: Restaurante;
    public status:string;
    public errorMessage:string;
    constructor(
            private _restauranteService: RestauranteService,
            private _routeParams: RouteParams,
            private _router: Router
    ){}

    onSubmit(){
        this._restauranteService.addRestaurante(this.restaurante).subscribe(
            response => {
                this.status = response.status;
                if (this.status !== "success") {
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

    ngOnInit(){
        this.restaurante = new Restaurante(
                                            0,
                                            this._routeParams.get("nombre"),
                                            this._routeParams.get("direccion"),
                                            this._routeParams.get("descripcion"),
                                            "null",
                                            "bajo");
    }

    callPrecio(value){
        this.restaurante.precio = value;
    }
}
