"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PiesListComponent = (function () {
    function PiesListComponent() {
        this.favoritePies = ["Apple", "Banana Cream", "Blackberry"];
    }
    return PiesListComponent;
}());
PiesListComponent = __decorate([
    core_1.Component({
        selector: 'pies',
        template: "\n  <h3>Here are my favorite pies!</h3>\n  <div *ngFor=\"let currentPie of favoritePies\">\n    <p>{{currentPie}}</p>\n  </div>\n\n  "
    })
], PiesListComponent);
exports.PiesListComponent = PiesListComponent;
//# sourceMappingURL=pies-list.component.js.map