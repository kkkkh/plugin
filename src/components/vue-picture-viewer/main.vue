<template>
  <div class="vue-look-picture" v-show="visible">
    <div class="vue-look-main">
      <div
        class="vue-look-arrow arrow-left"
        v-show="arrowVisible"
        @click="last"
      ></div>
      <div
        class="vue-look-arrow arrow-right"
        v-show="arrowVisible"
        @click="next"
      ></div>
      <div class="vue-look-close" @click="close" v-show="!scale"></div>
      <div class="vue-look-page" v-show="!scale">
        <span>{{ currIndex + 1 }}</span
        >/{{ length }}
      </div>
      <div
        :class="[
          'vue-look-wrap',
          currIndex === index ? 'vue-look-wrap-active' : '',
          currIndex === index && scale ? 'vue-look-wrap-scale' : '',
          currIndex !== index && scale ? 'vue-look-wrap-scale-none' : '',
        ]"
        v-for="(item, index) in list"
        :key="index"
      >
        <img
          @click="scaleTick"
          :class="[
            'vue-look-image',
            currIndex === index && scale ? 'vue-look-scale' : '',
          ]"
          :src="item.url"
        />
        <div class="vue-look-text" v-show="!scale">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-look-picture",
  data() {
    return {
      list: [
        {
          name: "1",
        },
      ],
      visible: false,
      currIndex: 0,
      scale: false,
    };
  },
  computed: {
    arrowVisible() {
      return this.list.length > 1 && !this.scale;
    },
    length() {
      return this.list && this.list.length ? this.list.length : "0";
    },
  },
  methods: {
    scaleTick() {
      this.scale = !this.scale;
    },
    last() {
      if (this.currIndex === 0) {
        this.currIndex = this.list.length - 1;
      } else {
        this.currIndex--;
      }
    },
    next() {
      if (this.currIndex < this.list.length - 1) {
        this.currIndex++;
      } else {
        this.currIndex = 0;
      }
    },
    open(index) {
      this.currIndex = index;
      this.visible = true;
    },
    close() {
      this.currIndex = 0;
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.vue-look-picture {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  .vue-look-main {
    width: 100%;
    height: 100%;
    .vue-look-page {
      color: #fff;
      position: absolute;
      left: 2%;
      top: 2%;
    }
    .vue-look-close {
      position: absolute;
      top: 2%;
      right: 2%;
      transform: translate(5%, 5%);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #222;
      background-image: url("./image/close.png");
      background-repeat: no-repeat;
      background-size: 35%;
      background-position: center;
      cursor: pointer;
      z-index: 10000;
      &:hover {
        opacity: 0.7;
      }
    }
    .vue-look-arrow {
      cursor: pointer;
      position: absolute;
      top: 48%;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #222;
      background-image: url("./image/arrow2.png");
      background-repeat: no-repeat;
      background-size: 50%;
      background-position: 11px center;
      z-index: 10000;
      &:hover {
        opacity: 0.7;
      }
      &.arrow-left {
        left: 0;
        margin-left: 2%;
      }
      &.arrow-right {
        right: 0;
        margin-right: 2%;
        transform: translateY(-50%) rotate(180deg);
      }
    }
    .vue-look-wrap {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 100%;
      transition: all ease 300ms;
      &.vue-look-wrap-active {
        opacity: 1;
      }
      &.vue-look-wrap-scale {
        z-index: 20000;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        // align-items: flex-start;
      }
      &.vue-look-wrap-scale-none {
        display: none;
      }
      .vue-look-image {
        position: absolute;
        left: 50%;
        top: 48%;
        transform: translate(-50%, -50%);
        cursor: -moz-zoom-in;
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
        z-index: 10000;
      }
      .vue-look-scale {
        position: static;
        cursor: -moz-zoom-out;
        cursor: -webkit-zoom-out;
        cursor: zoom-out;
        width: 96%;
        max-width: none;
        max-height: none;
        transform: none;
        margin: 2% 2%;
      }

      img {
        transition: opacity ease 500ms;
        max-width: 100%;
        max-height: 90%;
      }
      .vue-look-text {
        margin: 10px 0;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
}
</style>
