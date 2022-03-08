import { VueConstructor, PluginObject } from "vue";

export type VueConstructorPlugin = VueConstructor & PluginObject<object>;
