<template>
  <div>
    <el-button @click="getCode" type="primary" :disabled="wish.codeTime !== 0">
      {{ wish.codeTime === 0 ? "发送验证码" : "剩余" + wish.codeTime + "秒" }}
    </el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wish: {
        code: "",
        codeTime: 0,
        timer: null,
      },
    };
  },
  methods: {
    // methods
    getCode() {
      this.wish.codeTime = 60;
      this.timmer = setInterval(() => {
        if (this.wish.codeTime === 0) {
          clearInterval(this.timmer);
        } else {
          this.wish.codeTime--;
        }
      }, 1000);
      this.$emit("start");
    },
  },
};
</script>
<style lang="scss"></style>

