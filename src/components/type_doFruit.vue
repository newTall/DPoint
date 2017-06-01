<!--国产水果-->
<template>
  <ul class="cate_goodsBox cate_goodsCnBox">
    <li v-for="x in itemCnData" class="cate_goodsList">
      <a href="#/goDetail" class="cate_goodsListLink"  @click="storageData(x)">
        <img :src="x.img" class="cate_goodsPic">
        <p class="cate_goodsTxt">{{x.title}}</p>
      </a>
      <div class="cate_goodsInOp">
        <span class="cate_goodsPrice">￥{{x.price/100}}</span>
        <img src="../assets/type_img/add.png" alt="" class="cate_goodsPlusPic" @click="cate_plusEvent(x)">
      </div>
    </li>
  </ul>
</template>

<script>
  import Vue from "vue"
  import VueResource from "vue-resource"
  import eventHub from "../bus.js"
  Vue.use(VueResource)
  export default{
    data (){
      return {
        itemCnData : [],
      }
    },
    mounted (){
      this.$http.get("../../static/data/t_fruit_cn.json").then(function (res) {
        this.itemCnData = res.body.data.list;
      })
    },
    methods : {
      cate_plusEvent : function(toCart){
        eventHub.$emit("addcart",toCart);
         console.log(eventHub.foods);
      },
      storageData : function(food){
        eventHub.$emit("add",food);
      }
    }
  }

</script>

<style type="text/css">

  .cate_goodsBox{
    width:100%;
    display: flex;
    flex-wrap:wrap;
  }
  .cate_goodsList{
    width:33.33%;
    box-sizing: border-box;
    border-bottom:1px solid #efefef;
    border-right:1px solid #efefef;
    display: flex;
    flex-direction:column;
    align-items:center;
  }
  .cate_goodsListLink{
    width:95%;
    display: flex;
    flex-direction:column;
    align-items:center;
    color: #000;
    padding:.3rem 0;
  }
  .cate_goodsPic{
    width:77%;
    padding:.3rem 0;
    margin: .5rem 0;
  }
  .cate_goodsTxt{
    width:90%;
    height:2.1rem;
    font-size:.73rem;
  }
  .cate_goodsInOp{
    width:90%;
    display: flex;
    justify-content:space-between;
    margin:0 0 .3rem 0;
    align-items: center;
  }
  .cate_goodsPrice{
    color:#FD7138;
    font-size:.9rem;
  }
  .cate_goodsPlusPic{
    width:1.45rem;
    height:1.25rem;
  }

</style>
