import { VueConstructor, PluginObject } from "vue";

export type VueConstructorPlugin<T> = VueConstructor & PluginObject<T>;
