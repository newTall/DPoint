<!--第三级联动-->
<template>
  <ul class="cate_TLinkageBox cate_thirdLinkage">
    <li v-for="q in thiView.childCmCategories" class="cate_Linkage_list" @click="clickACEvent()">
      {{q.catName}}
    </li>
  </ul>
</template>

<script type="text/javascript">
  import Vue from "vue"
  import VueResource from "vue-resource"
  import eventHub from "../bus.js"
  Vue.use(VueResource)
  export default{
    data (){
      return {
      }
    },
    methods : {
      clickACEvent : function(){
        console.log("跳转到相应链接")
      }
    },
    props:["thiView"]
  }
</script>

<style type="text/css">
  .cate_thirdLinkage{
    width:50%;
    height:100%;
    background:#F0F0F0;
  }
</style>
