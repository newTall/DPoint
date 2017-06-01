<template>
  <div>
    <div class="cate">
      <!--头部-->
      <div class="cate_head_wrap">
        <div class="cate_head">
          <div class="cate_head_fiSe_box">
            <img src="../assets/type_img/filter_white.png" alt="" class="cate_head_fiSeImg cate_head_filter" @click="clickFilterEvent()">
            <router-link to="TypeSerch">
              <img src="../assets/type_img/search_white.png" alt="" class="cate_head_fiSeImg cate_head_serch">
            </router-link>
          </div>
          <div class="cate_head_marketInfo">
            <img src="../assets/type_img/8d28b812-5e30-4c8a-a381-f2b54f54ba30_750H.png" alt="" class="cate_head_marketIcon">
            <p class="cate_head_marketTxt" @click="clickSeMaEvent()">
              多点超市(北京物美三旗百汇店)
              <img src="../assets/type_img/down_arrow.png" class="cate_head_marketArray">
            </p>
          </div>
          <div class="cate_head_classify">
            <div class="cate_head_cla_iconBox" @click="clickACEvent()">
              <img src="../assets/type_img/all.png" alt="" class="cate_head_cla_icon">
            </div>
            <div class="cate_head_cla_info">
              <ul class="cate_head_cla_infoBox">
                <li class="cate_head_cla_infoTxt cate_head_cla_infoAllTxt" @click="clickACEvent()">全部分类</li>
                <li class="cate_head_cla_infoTxt" @click="currentView='typeDoFruit'">国产水果</li>
                <li class="cate_head_cla_infoTxt" @click="currentView='typeAbFruit'">进口水果</li>
                <li class="cate_head_cla_infoTxt" @click="currentView='typeVerget'">生鲜蔬菜</li>
                <li class="cate_head_cla_infoTxt" @click="currentView='typeBulkCargo'">散称干货</li>
                <li class="cate_head_cla_infoTxt" @click="currentView='typeIceCream'">冰激凌</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--通知-->
      <div class="cate_notice">
        <img src="../assets/type_img/speaker.png" alt="" class="cate_noticePic">
        <p class="cate_noticeTxt">
          79元免运费/59元~79元仅2元运费
        </p>
      </div>
      <!--商品-->
      <div class="cate_goods">
        <keep-alive>
          <component v-bind:is="currentView"></component>
        </keep-alive>
      </div>
      <!--可选超市-->
      <div class="cate_seMaLightBox fadeIn animated" v-show="seMarketBox">
        <ul class="cate_seMaBox bounceInUp animated">
          <li class="cate_seMaList">
            <img src="../assets/type_img/w.png" alt="" class="cate_seMaAll cate_seMaPic">
            发现附近门店
            <span class="cate_seMaCancel" @click="clickSeMaEvent()">取消</span>
          </li>
          <li class="cate_seMaList ">
            <router-link to="/" class="cate_seMaListLink">
              <img src="../assets/type_img/5491eb6a-8a7b-4621-89ad-f22e904b6e7f.png" alt="" class="cate_seMaAll cate_seMaPic">
              多点超市(北京物美三旗百汇店)
            </router-link>
          </li>
          <li class="cate_seMaList">
            <router-link to="/" class="cate_seMaListLink">
              <img src="../assets/type_img/1bf901f7-a57f-4176-ad53-16d709a10322.png" alt="" class="cate_seMaAll cate_seMaPic">
              全球精选(北京物美三旗百汇店)
            </router-link>
          </li>
        </ul>
      </div>
      <!--排序-->
      <div class="cate_filterLightBox" v-show="isFilterSort" @click="clickFilterEvent()">
        <ul class="cate_filterBox fadeIn animated">
          <li class="cate_filterList">智能排序</li>
          <li class="cate_filterList">销量从高到低</li>
          <li class="cate_filterList">销量从低到高</li>
          <li class="cate_filterList">价格从高到低</li>
          <li class="cate_filterList">价格从低到高</li>
        </ul>
      </div>
      <!--三级联动-->
      <div class="cate_TLlinkage bounceInUp animated" v-show="isShow">
        <div class="cate_allClassify">
          <img src="../assets/type_img/all.png" alt="" class="cate_allClassifyIcon">
          <span class="cate_allClassifyTxt">全部分类</span>
          <span class="cate_allClassifyCancle" @click="clickACEvent()">取消</span>
        </div>
        <div class="cate_TLinkageWrap">
          <ul class="cate_TLinkageBox cate_firstLinkage">
            <li v-for="y in itemAlClData" class="cate_Linkage_list" @click="clickSecCla(y)">
              {{y.catName}}
            </li>
          </ul>
          <keep-alive>
            <componentSec v-bind:is="CurrSeView" :secView="secList"></componentSec>
          </keep-alive>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <footers></footers>
  </div>
</template>
<script>
  import doFruit from '@/components/type_doFruit.vue'
  import abFruit from '@/components/type_abFruit.vue'
  import vergetabal from '@/components/type_vergetabel.vue'
  import bulkCargo from '@/components/type_bulkCargo.vue'
  import iceCream from '@/components/type_iceCream.vue'
  import secLink from '@/components/type_secLink.vue'
  import Footer from '@/components/footer'
  import eventHub from "../bus.js"
  import Vue from "vue"
  import VueResource from "vue-resource"
  Vue.use(VueResource)
  export default{
    data (){
      return {
        isShow : false,
        isFilterSort : false,
        seMarketBox : false,
        currentView:"typeDoFruit",
        CurrSeView:"typeCuSeView",
        itemAlClData:[],
        secList:''
      }
    },
    components : {
      footers:Footer,
      typeDoFruit : doFruit,
      typeAbFruit : abFruit,
      typeCuSeView : secLink,
      typeVerget : vergetabal,
      typeBulkCargo : bulkCargo,
      typeIceCream : iceCream
    },
    mounted (){
      this.$http.get("../../static/data/t_allClassify.json").then(function (res) {
        this.itemAlClData = res.body.data.categoryInfo.categorys;
      })
    },
    methods : {
      clickACEvent : function(){
        this.isShow =! this.isShow;
      },
      clickFilterEvent : function(){
        this.isFilterSort = !this.isFilterSort;
      },
      clickSeMaEvent : function(){
        this.seMarketBox = !this.seMarketBox;
      },
      clickSecCla : function(classify){
        this.secList = classify;
      }
    }
  }
</script>
<style type="text/css">
  @import '../../static/css/animate.css';
  li{
    list-style: none;
  }
  *{
    padding:0;
    margin:0;
  }
  /*页眉*/
  .cate{
    padding-bottom:3.3rem;
  }
  .cate_head_wrap{
    height:8.5rem;
    background:url(../assets/type_img/ccdad067-5c74-47e1-87fe-4c01d41e993b_750H.jpg) center center/100% 8.5rem no-repeat;
  }
  .cate_head{
    height:8.5rem;
    background: rgba(0,0,0,.5);
    /*opacity:0.8;*/
    position: relative;
    color: #fff;
    font-size:.7rem;
  }
  .cate_head_fiSe_box{
    position: absolute;
    z-index:6;
    top:0.3rem;
    right:0;
  }
  .cate_head_fiSeImg{
    width:1.7rem;
    height:1.7rem;
  }
  .cate_head_serch{
    margin-right:.5rem;
  }

  /*超市图标*/
  .cate_head_marketIcon{
    width:3.7rem;
    height:3.7rem;
    margin-bottom:.7rem;
  }
  .cate_head_marketInfo{
    width:100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    position: absolute;
    bottom:2.3rem;
  }
  .cate_head_marketArray{
    width:1rem;
    height:1rem;
  }
  .cate_head_marketTxt{
    position: relative;
  }
  .cate_head_marketArray{
    position: absolute;
    right:-1.15rem;
    top:.03rem;
  }

  /*超市三级分类信息*/
  .cate_head_classify{
    width:100%;
    display: flex;
    position: absolute;
    bottom:0;
    /*background: red;*/
  }
  .cate_head_cla_iconBox{
    width:2rem;
    height:2rem;
    /*width:10%;*/
    /*background: #000;*/
  }
  .cate_head_cla_icon{
    width:1.7rem;
    height:1.7rem;
    padding:.1rem .2rem;

  }
  .cate_head_cla_info{
    width:90%;
    height:2rem;
    /*overflow: hidden;*/
  }
  .cate_head_cla_infoBox{
    height:2rem;
    width:100%;
    align-items: center;
    font-size:.8rem;
    display: -webkit-box;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .cate_head_cla_infoBox::-webkit-scrollbar{
    display: none;
  }
  .cate_head_cla_infoTxt{
    box-sizing:border-box;
    padding:.411rem .2rem;
    margin:0 .2rem;
    height:2rem;
    display: block;

  }
  .cate_head_cla_infoTxt:hover{
    color: #FD7138;
    border-bottom:.2rem solid #FD7138;
  }
  
  /*通知信息*/
  .cate_notice{
    width:100%;
    height:1.3rem;
    display: flex;
    align-items: center;
    background:#FEF2DE;
  }
  .cate_noticePic{
    width:1rem;
    height:1rem;
    padding:0 .6rem;
  }
  .cate_noticeTxt{
    font-size:.6rem;
  }

  /*三级联动*/
  .cate_TLlinkage{
    position: fixed;
    z-index:9;
    bottom:0;
    width:100%;
    height:95%;
    background: #eee;
    font-size: .8rem;
  }
  .cate_allClassify{
    height:6%;
    background: #FFFFFF;
    /*line-height:2rem;*/
    /*padding-top:.2rem;*/
    box-sizing:border-box;
    border-bottom:1px solid #efefef;
  }
  .cate_allClassifyIcon{
    width:1.6rem;
    height:1.6rem;
    padding:.2rem .2rem 0rem .4rem;
    float: left;

  }
  .cate_allClassifyTxt{
    float: left;
    padding-top: .5rem;
  }
  .cate_allClassifyCancle{
    float: right;
    color: #FD7138;
    padding: .5rem .7rem 0;
  }
  .cate_TLinkageWrap{
    width:100%;
    height:94%;
    display: flex;
  }
  .cate_firstLinkage{
    background: #ffffff;
    width:33.33%;
  }
  .cate_Linkage_list{
    width:100%;
    height:2rem;
    /*background:red;*/
    line-height:2rem;
    text-indent:.8rem;
  }
  .cate_Linkage_list:hover{
    color: #FD7138;
    background: #F0F0F0;
  }

  /*排序列表*/
  .cate_filterLightBox{
    /*display: none;*/
    z-index:3;
    position: fixed;
    background: rgba(0,0,0,.4);
    top:0;
    width:100%;
    height: 100vh;
  }
  .cate_filterBox{
    position: absolute;
    top: 2.3rem;
    right:3%;
    width: 8rem;
    height:12rem;
    background: #fff;
    font-size:.8rem;
    display: flex;
    flex-direction:column;
    justify-content:space-around;

  }
  .cate_filterList{
    height:20%;
    text-indent:.7rem;
    color:#666;
    border-bottom:1px solid #efefef;
    display: flex;
    align-items:center;
  }
  .cate_filterList:hover{
    color: #FD7138;
  }

  /*选择超市*/
  .cate_seMaLightBox{
    z-index:6;
    position: fixed;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
  }
  .cate_seMaBox{
    width:100%;
    height: 6.5rem;
    background: #fff;
    position: absolute;
    bottom:0;
  }
  .cate_seMaList{
    width:100%;
    height:33.33%;
    box-sizing:border-box;
    background: #fff;
    border-bottom:1px solid #efefef;
    display: flex;
    align-items: center;
    position: relative;
    /*justify-content:space-around;*/
    font-size:.7rem;
  }
  .cate_seMaList:first-of-type{
    color: #888;
  }
  .cate_seMaAll{
    width:1.5rem;
    height:1.5rem;
    padding:0 .5rem;
  }
  .cate_seMaCancel{
    position: absolute;
    right:1rem;
    top:.5rem;
    color: #FD7138;
  }

</style>
