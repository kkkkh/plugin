<template>
  <div class="">
    <vue-select-tree v-model="value" :tree="tree"> </vue-select-tree>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
import VueSelectTree from "@/components/vue-select-tree/index.vue";
import { defaultTree } from "@/components/vue-select-tree/hooks/default";

export default defineComponent({
  components: {
    VueSelectTree,
  },
  setup() {
    const value = ref("");
    const tree = reactive(defaultTree());
    setTimeout(() => {
      tree.props.data = [
        {
          label: "111",
          id: "1",
          children: [
            {
              label: "222",
              id: "2",
            },
            {
              label: "333",
              id: "3",
            },
          ],
        },
      ];
    }, 2000);
    return {
      value,
      tree,
    };
  },
});
</script>
<style lang="scss"></style>
