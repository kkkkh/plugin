import { VueConstructor, PluginObject, PluginFunction } from "vue";

export const installCon = (
  components: VueConstructor[] | VueConstructor
): PluginObject<undefined> => {
  const install: PluginFunction<undefined> = (Vue: VueConstructor) => {
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
