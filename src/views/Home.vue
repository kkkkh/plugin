<template>
  <div class="home">
    <p>welcome visit p2 plugin libs</p>
    <el-button @click="enter">enter</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  components: {},
  methods: {
    enter() {
      this.$router.push("plugins");
    },
  },
});
</script>
<style lang="scss">
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
