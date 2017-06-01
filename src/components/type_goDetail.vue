<!--详情页-->
<template>
  <div class="cate_goDetail">
    <a href="javascript:history.go(-1)" class="cate_goReturn"></a>
    <router-link to="/" class="cate_goHome"></router-link>
    <div class="cate_goDePicWrap">
      <img :src="foods.img" alt="" class="cate_goDe_pic">
    </div>
    <p class="cate_goDe_word">
      {{foods.title}}
    </p>
    <p class="cate_goDe_Info">
      <span class="cate_goDe_price">￥{{foods.price/100}}</span>
      <span class="cate_goDe_oldPrice">￥{{foods.promotionInfo.offPrice/100}}</span>
      <span class="cate_goDe_disInfo">特价</span>
    </p>
    <div class="cate_goDe_bookShop">
      <img src="../assets/type_img/speaker.png" alt="" class="cate_goDe_noticePic">
      现在下单，预计今日半小时内到达
    </div>
    <div class="cate_goDe_kiRe">
      温馨提示：散卖商品称重时可能会有少许误差，请您谅解！
    </div>
    <div class="cate_doDe_shop">
      <img src="../assets/type_img/8d28b812-5e30-4c8a-a381-f2b54f54ba30_750H.png" alt="" class="cate_doDe_shopPic">
      三旗百汇店
    </div>
    <div class="cate_goDe_otherShop">
      <p class="cate_goDe_otWord">购买该商品的人还买了</p>
      <ul class="cate_goDe_otShopIn">
        <li class="cate_goDe_otShInList">
          <img src="../assets/type_img/ed45003d-7e93-48eb-8f09-e55cdb788bf1-dwwt20170316134925_240x240H.jpg" alt="" class="cate_goDe_otShInLiPic">
          <p class="cate_goDe_otShInLiWord">油桃 1.2kg/份</p>
          <div class="cate_goodsInOp">
            <span class="cate_goodsPrice">￥3.5</span>
            <img src="../assets/type_img/add.png" alt="" class="cate_goodsPlusPic" @click="cate_plusEvent()">
          </div>
        </li>
        <li class="cate_goDe_otShInList">
          <img src="../assets/type_img/779744cb-9529-406e-ad47-abae6148d3e3_800x800H.jpg" alt="" class="cate_goDe_otShInLiPic">
          <p class="cate_goDe_otShInLiWord">国产香蕉 2.2kg</p>
          <div class="cate_goodsInOp">
            <span class="cate_goodsPrice">￥3.5</span>
            <img src="../assets/type_img/add.png" alt="" class="cate_goodsPlusPic" @click="cate_plusEvent()">
          </div>
        </li>
        <li class="cate_goDe_otShInList">
          <img src="../assets/type_img/640e0e25-254c-474e-a108-a6595ed9f766_360x360H.jpg" alt="" class="cate_goDe_otShInLiPic">
          <p class="cate_goDe_otShInLiWord">国产香蕉 1.2kg/份</p>
          <div class="cate_goodsInOp">
            <span class="cate_goodsPrice">￥3.5</span>
            <img src="../assets/type_img/add.png" alt="" class="cate_goodsPlusPic" @click="cate_plusEvent()">
          </div>
        </li>
      </ul>
    </div>
    <div class="cate_goDe_describe">
      <img src="../assets/type_img/faba3d23-f389-46e1-8c87-5250119f99ea_m640.png" alt="" class="cate_goDe_desciPic">
      <img src="../assets/type_img/7f581142-792f-46d7-b75a-5c93d496c32f_m640.png" alt="" class="cate_goDe_desciPic">
      <img src="../assets/type_img/f07daef2-4902-443c-95a4-b586521e48a6_m640.png" alt="" class="cate_goDe_desciPic">
      <img src="../assets/type_img/27fbaabd-783e-4e1e-9716-0afa25c8868b_m640.png" alt="" class="cate_goDe_desciPic">
    </div>
    <div class="cate_joinCart">
      <div class="cate_cartIconBox">
        <img src="../assets/type_img/r.png" alt="" class="cate_cartIcon">
      </div>
      <div class="cate_cartPlusBox" @click="cate_plusEvent(foods)">
        加入购物车
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from "vue"
  import VueResource from "vue-resource"
  import eventHub from "../bus.js"
  Vue.use(VueResource)
  export default{
    data (){
      return {
        foods:eventHub.todos
      }
    },
    methods : {
      cate_plusEvent : function(toCart){
        eventHub.$emit("addcart",toCart);
        console.log(eventHub.foods);
      }
    },
    mounted (){
    }
  }
</script>

<style type="text/css">
  .cate_goDetail{
    position: relative;
    display: flex;
    flex-direction:column;
    align-items: center;
  }
  .cate_goReturn{
    position: fixed;
    top:.5rem;
    left:.5rem;
    width:1.6rem;
    height:1.6rem;
    border-radius:50%;
    background: rgba(0,0,0,.6);
  }
  .cate_goReturn::after{
    position: absolute;
    top:.4rem;
    left:.6rem;
    content: '';
    display: block;
    width:.6rem;
    height:.6rem;
    background: transparent;
    transform:rotate(45deg);
    border-left:2px solid white;
    border-bottom:2px solid white;
  }
  .cate_goHome{
    position: fixed;
    top:.3rem;
    right:.5rem;
    width:1.7rem;
    height:1.6rem;
    background:url(../assets/type_img/btm-bar-sprt.png) 0rem 0rem/15rem 6rem no-repeat
  }

  .cate_goDePicWrap{
    padding:.2rem 0 2rem 0;
  }
  .cate_goDe_pic{
    width:100%;
  }
  .cate_goDe_word{
    width:95%;
    font-size:.9rem;
    line-height:2rem;
  }
  .cate_goDe_Info{
    width:95%;
    font-size:.9rem;
    line-height:2rem;
    border-bottom:1px solid #e0e0e0;
  }
  .cate_goDe_price{
    color: #FD7138;
    font-size:1rem;
  }
  .cate_goDe_oldPrice{
    text-decoration: line-through;
    color: #e0e0e0;
    font-size:.8rem;
    padding: 0 .5rem 0 .1rem;
  }
  .cate_goDe_disInfo{
    padding: .1rem .2rem;
    border-radius : 10%;
    color: white;
    font-size:.7rem;
    background: #FF706E;
  }
  .cate_goDe_noticePic{
    width:1.3rem;
    height:1.3rem;
    padding-right:.3rem;
  }
  .cate_goDe_bookShop{
    width:95%;
    font-size:.8rem;
    line-height:2.7rem;
    border-bottom:1px solid #e0e0e0;
  }
  .cate_goDe_kiRe{
    width:95%;
    font-size:.6rem;
    color:#999999;
    line-height:2rem;
    border-bottom:1px solid #e0e0e0;
  }
  .cate_doDe_shop{
    width:95%;
    line-height:2.5rem;
    font-size:.8rem;
    border-bottom:1px solid #e0e0e0;
    position: relative;
  }
  .cate_doDe_shopPic{
    width:1.6rem;
    height:1.6rem;
    margin:0 .4rem 0;
    border:1px solid #e0e0e0;
  }
  .cate_doDe_shop::after{
    position: absolute;
    right:.5rem;
    top:1rem;
    content: '';
    display: block;
    width:.4rem;
    height:.4rem;
    border-top:2px solid #999;
    border-right:2px solid #999;
    transform:rotate(45deg);
  }

  .cate_goDe_otherShop{
    width:95%;
    padding:1rem 0;
  }
  .cate_goDe_otWord{
    font-size:.8rem;
    color: #555;
    line-height:2.5rem;
  }
  .cate_goDe_otShopIn{
    display: flex;
  }
  .cate_goDe_otShInList{
    width:33.33%;
    box-sizing:border-box;
    border:1px solid #efefef;
    border-right:0;
    display: flex;
    flex-direction:column;
    align-items:center;
  }
  .cate_goDe_otShInList:last-of-type{
    border-right:1px solid #efefef;
  }
  .cate_goDe_otShInLiPic{
    width:70%;
    padding:.5rem 0;
  }
  .cate_goDe_otShInLiWord{
    width:85%;
    font-size:.8rem;
    height:2.5rem;
  }
  .cate_goDe_describe{
    width:100%;
  }
  .cate_goDe_desciPic{
    width:100%;
  }

  .cate_joinCart{
    position: fixed;
    bottom:0;
    width:100%;
    height:3rem;
    background: #fff;
    border-top:1px solid #efefef;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .cate_cartIconBox{
    width:3rem;
    height:3rem;
    display: flex;
    justify-content:center;
    align-items: center;
    margin:0;
  }
  .cate_cartIcon{
    width:1.9rem;
    height:1.9rem;
  }
  .cate_cartPlusBox{
    width:6rem;
    height:3rem;
    background: #ff712b;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #fff;
    font-size:.85rem;
    margin:0;
  }

</style>
