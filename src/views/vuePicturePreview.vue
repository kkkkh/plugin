<template>
  <div class="picture-preview">
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.url" alt="" @click="preview(index)" />
    </div>
  </div>
</template>

<script>
import vueLookPicture from "@/components/vue-picture-viewer/index";

export default {
  name: "app",
  data() {
    return {
      list: [
        {
          url: "https://img.zcool.cn/community/0148425d6b2ff6a801211f9ef0bc5d.jpg@1280w_1l_2o_100sh.jpg",
          text: "111",
        },
        {
          url: "https://img.zcool.cn/community/01ad245d6b2ff7a80120526d2075a5.jpg@1280w_1l_2o_100sh.jpg",
          text: "222",
        },
        {
          url: "https://img.zcool.cn/community/0164495d6b2ff8a801211f9ef2ce24.jpg@1280w_1l_2o_100sh.jpg",
          text: "333",
        },
        {
          url: "https://img.zcool.cn/community/0170f55d68f1afa80120526de87bed.gif",
          text: "4444",
        },
      ],
      lookPicture: null,
    };
  },
  mounted() {
      debugger
      console.log(vueLookPicture)
    this.lookPicture = vueLookPicture.init(this.list);
  },
  components: {},
  methods: {
    preview(i) {
      this.lookPicture.open(i);
    },
  },
};
</script>
<style lang="scss">
.picture-preview {
  img {
    width: 100px;
  }
}
</style>
