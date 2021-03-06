System.register(["angular2/core", "angular2/router", "../services/restaurante.service", "../model/restaurante"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, restaurante_service_1, restaurante_1, RestauranteAddComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            },
            function (restaurante_1_1) {
                restaurante_1 = restaurante_1_1;
            }
        ],
        execute: function () {
            "./components/footer.component";
            RestauranteAddComponent = (function () {
                function RestauranteAddComponent(_restauranteService, _routeParams, _router) {
                    this._restauranteService = _restauranteService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                RestauranteAddComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._restauranteService.addRestaurante(this.restaurante).subscribe(function (response) {
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            alert("Error en el servidor");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error");
                        }
                    });
                    this._router.navigate(["Home"]);
                };
                RestauranteAddComponent.prototype.ngOnInit = function () {
                    this.restaurante = new restaurante_1.Restaurante(0, this._routeParams.get("descripcion"), this._routeParams.get("nombre"), this._routeParams.get("direccion"), "null", "bajo");
                };
                RestauranteAddComponent.prototype.callPrecio = function (value) {
                    this.restaurante.precio = value;
                };
                RestauranteAddComponent.prototype.fileChangeEvent = function (fileInput) {
                    var _this = this;
                    this.filesToUpload = fileInput.target.files;
                    this.makeFileRequest('http://localhost:81/slim/restaurantes-api.php/upload-file', [], this.filesToUpload).then(function (result) {
                        _this.restaurante.imagen = result.name;
                    }, function (error) {
                        console.log(error);
                    });
                };
                RestauranteAddComponent.prototype.makeFileRequest = function (url, params, files) {
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("uploads[]", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.send(formData);
                    });
                };
                return RestauranteAddComponent;
            }());
            RestauranteAddComponent = __decorate([
                core_1.Component({
                    selector: "restaurante-add",
                    templateUrl: "app/view/restaurante-add.html",
                    providers: [restaurante_service_1.RestauranteService]
                }),
                __metadata("design:paramtypes", [restaurante_service_1.RestauranteService,
                    router_1.RouteParams,
                    router_1.Router])
            ], RestauranteAddComponent);
            exports_1("RestauranteAddComponent", RestauranteAddComponent);
        }
    };
});
//# sourceMappingURL=restaurante-add.component.js.map