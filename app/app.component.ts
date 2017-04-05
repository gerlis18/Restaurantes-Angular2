import {Component} from "angular2/core"; "./components/footer.component";
import {RestaurantesListComponent} from "./components/restarutantes-list.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteDetailComponent} from "./components/restaurante-detil.component";
import {RestauranteAddComponent} from "./components/restaurante-add.component";
import {RestauranteEditComponent} from "./components/restaurante-edit.component";

@Component({
    selector: "my-app",
    templateUrl: "app/view/index.html",
    directives: [ROUTER_DIRECTIVES,RestaurantesListComponent]
})

@RouteConfig([
    {path: '/',name: "Home", component: RestaurantesListComponent, useAsDefault: true},
    {path: "/restaurante/:id", name: "Restaurante", component: RestauranteDetailComponent},
    {path: "/crear-restaurante/", name: "CrearRestaurante", component: RestauranteAddComponent},
    {path: "/editar-restaurante/", name: "EditarRestaurante", component: RestauranteEditComponent}
])

export class AppComponent{
    public titulo = "Restaurantes";
}
