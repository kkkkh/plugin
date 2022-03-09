"use strict";
exports.__esModule = true;
exports.installCon = void 0;
var installCon = function (components) {
    var install = function (Vue) {
        if (Array.isArray(components)) {
            components.map(function (component) {
                Vue.component(component.name, component);
            });
        }
        else {
            Vue.component(components.name, components);
        }
    };
    return { install: install };
};
exports.installCon = installCon;
