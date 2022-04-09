import Vue from "vue";
import Main from "./main.vue";
let MessageConstructor = Vue.extend(Main);

const vueLookPicture = {
  init(data) {
    const options = {
      data: {
        list: data,
      },
    };
    const instance = new MessageConstructor(options);
    instance.$mount();
    document.body.appendChild(instance.$el);
    return instance;
  },
};
export default vueLookPicture;
