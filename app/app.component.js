System.register(["angular2/core", "./components/restarutantes-list.component", "angular2/router", "./components/restaurante-detil.component", "./components/restaurante-add.component", "./components/restaurante-edit.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restarutantes_list_component_1, router_1, restaurante_detil_component_1, restaurante_add_component_1, restaurante_edit_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restarutantes_list_component_1_1) {
                restarutantes_list_component_1 = restarutantes_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_detil_component_1_1) {
                restaurante_detil_component_1 = restaurante_detil_component_1_1;
            },
            function (restaurante_add_component_1_1) {
                restaurante_add_component_1 = restaurante_add_component_1_1;
            },
            function (restaurante_edit_component_1_1) {
                restaurante_edit_component_1 = restaurante_edit_component_1_1;
            }],
        execute: function() {
            "./components/footer.component";
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Restaurantes";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/view/index.html",
                        directives: [router_1.ROUTER_DIRECTIVES, restarutantes_list_component_1.RestaurantesListComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: "Home", component: restarutantes_list_component_1.RestaurantesListComponent, useAsDefault: true },
                        { path: "/restaurante/:id", name: "Restaurante", component: restaurante_detil_component_1.RestauranteDetailComponent },
                        { path: "/crear-restaurante/", name: "CrearRestaurante", component: restaurante_add_component_1.RestauranteAddComponent },
                        { path: "/editar-restaurante/", name: "EditarRestaurante", component: restaurante_edit_component_1.RestauranteEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map