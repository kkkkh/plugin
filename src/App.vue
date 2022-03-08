<template>
  <div id="app">
    <div class="app-main">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
export default defineComponent({
  name: "app",
  components: {},
  setup(props, ctx) {
    const menus = ctx.root.$router.options.routes?.filter((item) => item.name);
    const defaultActive = computed(() => {
      const routes = menus![0];
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.app-main {
  display: flex;
}
</style>
