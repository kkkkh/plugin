<template>
  <div class="plugins">
    <el-menu
      :default-active="defaultActive"
      :router="true"
      :background-color="backgroundColor"
    >
      <el-menu-item v-for="item in menus" :index="item.path" :key="item.name">
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "@vue/composition-api";
export default defineComponent({
  name: "app",
  components: {},
  setup(props, ctx) {
    const menus = ref([]);
    const routes = ctx.root.$router.options.routes;
    const res = routes.find((item) => item.name === "plugins");
    if (res) {
      menus.value = res.children?.filter((item) => item.name);
    }
    const defaultActive = computed(() => {
      const routes = menus.value[0];
      return routes.path;
    });
    const backgroundColor = "#ccc";
    return {
      menus,
      defaultActive,
      backgroundColor,
    };
  },
});
</script>
<style lang="scss">
.plugins {
  display: flex;
}
</style>
