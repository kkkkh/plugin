#### how to use
```vue
<template>
    <div v-for="(item,index) in list" :key="index">
        <img :src="item.url" alt="" @click="preview(index)">
    </div>
</template>
<script lang="ts">
import vueLookPicture from 'vue-look-picture'
import 'vue-look-picture/lib/index.css'
export default {
    data(){
        return {
            list:[
                {
                    url:'https://img.zcool.cn/community/0148425d6b2ff6a801211f9ef0bc5d.jpg@1280w_1l_2o_100sh.jpg',
                    text:'111',
                },
                {
                    url:'https://img.zcool.cn/community/01ad245d6b2ff7a80120526d2075a5.jpg@1280w_1l_2o_100sh.jpg',
                    text:'222',
                },
            ],
            lookPicture:null
        }
    },
    mounted(){
        this.lookPicture = vueLookPicture.init(this.list)
    }
    methods:{
        preview(i){
            this.lookPicture.open(i)//查看大图方法
        }
    }
}
</script>
```
