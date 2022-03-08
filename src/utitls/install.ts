import { VueConstructor, PluginObject, PluginFunction } from "vue";

export const installCon = (
  components: VueConstructor[] | VueConstructor
): PluginObject<any> => {
  const install: PluginFunction<any> = (Vue: VueConstructor) => {
    if (Array.isArray(components)) {
      components.map((component) => {
        Vue.component(component.name, component);
      });
    } else {
      Vue.component(components.name, components);
    }
  };
  return { install };
};
