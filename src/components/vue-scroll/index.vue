<template>
  <div class="index" @wheel.stop="throttleScroll">
    <div class="index-container" :style="moveStyle">
      <div class="index-page">
        <h1>1</h1>
      </div>
      <div class="index-page">
        <h1>2</h1>
      </div>
      <div class="index-page">
        <h1>3</h1>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { throttle } from '@/utils/common/index'
export default {
    name: 'homeIndex',
    data () {
        return {
            num: 0,
            throttleScroll: throttle(this.pageMove, 800),
            moveStep: 0,
            maxStep: 2,
            minStep: 0
        }
    },
    computed: {
        moveStyle() {
            return {
                transform: `translateY(-${this.moveStep}00%)`
            }
        }
    },
    methods: {
        moveHandle(type = 0) {
            // debugger;
            type ? this.moveStep++ : this.moveStep--
        },
        pageMove(e) {
            if (e.deltaY > 0 && this.moveStep < this.maxStep) {
                this.moveStep++
            } else if (e.deltaY < 0 && this.moveStep > this.minStep) {
                this.moveStep--
            }
        }
    },

}
</script>

<style scoped lang="scss">
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  h1 {
    margin: 0;
  }
}
.index-container {
  transition: linear all 300ms;
  height: 100%;
  overflow: visible;
}
.index-page {
  width: 100%;
  height: 100%;
  color: #fff;
  > div {
    background-position: top center;
    background-size: 100%;
  }
  &:nth-child(1) {
    background-color: #c79090;
  }
  &:nth-child(2) {
    background-color: #717152;
  }
  &:nth-child(3) {
    background-color: #5e5e9e;
  }
}
</style>
