import {Component, OnInit} from "angular2/core"; "./components/footer.component";
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../model/restaurante";

@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurante-detail.html",
    providers: [RestauranteService]
})

export class RestauranteDetailComponent{
    public parametro;
    public restaurante: Restaurante[];
    public status:string;
    public errorMessage;
    constructor(
            private _restauranteService: RestauranteService,
            private _routeParams: RouteParams,
            private _router: Router
    ){}
    ngOnInit(){
        this.getRestaurante();
    }

    getRestaurante(){
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id).subscribe(
            response => {
                this.restaurante = response.data;
                this.status = response.status;
                    if(this.status != "success"){
                        //alert("Error en el servidor");
                        this._router.navigate(['Home']);
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

}
