"use strict";
exports.__esModule = true;
var index_vue_1 = require("./index.vue");
var install_1 = require("../../utitls/install");
var install = install_1.installCon(index_vue_1["default"]).install;
index_vue_1["default"].install = install;
exports["default"] = index_vue_1["default"];
