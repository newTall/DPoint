<!--第二级联动-->
<template>
  <div class="cate_secLink">
    <ul class="cate_TLinkageBox cate_secondLinkage">
      <li v-for="z in secView.childCmCategories" class="cate_Linkage_list" @click="clickThiCla(z)">
        {{z.catName}}
      </li>
    </ul>
    <keep-alive>
      <componentThi v-bind:is="CurrThiView" :thiView="thiList"></componentThi>
    </keep-alive>
  </div>
</template>

<script type="text/javascript">
  import Vue from "vue"
  import VueResource from "vue-resource"
  import thiLink from '@/components/type_thiLink.vue'
  import eventHub from "../bus.js"
  Vue.use(VueResource)
  export default{
    data (){
      return {
        CurrThiView:"typeCuThView",
        thiList:''
      }
    },
    methods : {
      clickThiCla : function(secParData){
        console.log(secParData);
        this.thiList = secParData;
      }
    },
    components : {
      typeCuThView : thiLink
    },
    props:["secView"]
  }
</script>

<style>
  .cate_secLink{
    width:66.66%;
    display: flex;
  }
  .cate_secondLinkage{
    background: #F6F6F6;
    width:50%;
    height:100%;
  }
</style>
