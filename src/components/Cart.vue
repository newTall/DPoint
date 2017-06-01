<template>
    <div class="cart-cartmod">
        <!--购物车头部-->
         <div class="cart-shopcar_header_frame">
            <div class="cart-shopcar_header">购物车</div>
        </div>
    <!-- 多点君需要详细地址 -->
        <div class="cart-shop-addres">
            <p class="cart-shop-line"></p>
            <p class="cart-multi-poin">多点君需要你的详细地址哟~</p>
            <p class="cart-send-to">送至：北京市昌平区人民政府</p>
            <span> 
                <img src="../../src/assets/cart_img/carttogo.png" alt="" class="cart-to-go">
            </span>
        </div>
    <!--未添加商品时默认页面-->
        <div class="shopcar_content" v-if="!cartData.length">
            <div class="shopcar_empty_frame">
                <img src="../../src/assets/cart_img/car1.jpg" alt="" class="shopcar_empty_pic">
                <p class="shopcar_empty">购物车还木有商品？</p>
                <a class="shopcar_go-buy">我要买买买</a>
            </div>
        </div>
    <!-- 添加商品时的页面 -->
    <div class="cartContent" v-else>
    <!-- 第一部分 -->
        <div class="cart-tapactive">
            <span class="cart-checkall1"></span>
            <span class="cart-logo">
                <img src="../../src/assets/cart_img/car11.jpg" alt="">
            </span>
            <h6 class="cart-text1">多点超市 (昌平西关店)</h6>
            <span> 
                <img src="../assets/cart_img/carttogo.png" alt="" class="cart-to-gos">
            </span>
        </div>
        <!-- 第二部分 -->
        <div class="cart-selected" v-for="(x,index) in cartData">
            <span class="cart-checkall2"></span>
            <div class="cart-goods">
                <p class="cart-sldgoods">{{x.data.name}}</p>
                <span class="cart-price1">
                    ￥<strong>{{x.data.promotionPrice/100}}</strong>
                </span>
            </div>
            <div class="cart-act-j_num">
                <i class="cart-iconminus" @click="cartDel(x)">-</i>
                <span>{{x.count}}</span>
                <i class="cart-iconadd" @click="cartAdd(x)">+</i>
            </div>
        </div>
        <!-- 第三部分 -->
        <div class="cart-makeuplist">
            <span class="cart-reminder"></span>
            <strong>差75.10元，运费立减6.00元</strong>
            <p class="cart-coudan">
                <strong>去凑单</strong>
                <img src="../../src/assets/cart_img/carttogo.png" alt="" class="cart-jkh4">
            </p>
        </div>
        <!-- 第四部分 -->
        <div class="cart-total">
            <div class="cart-xhld">
                <p class="cart-orange">
                    <span>合计：¥{{cartPriceSum[0]|float}}<strong class="cart-prcolor">3.90</strong>(不含运费)</span>
                </p>
                <p class="cart-amout">促销已抵扣金额：￥0.00</p>
            </div>
            <p class="cart-okok">
                <span>选好了</span>
            </p>
        </div>
    </div>
        <footers></footers>
    </div> 
</template>
<script>
    import Vue from "vue";
    import VueResource from "vue-resource";
    import Footer from '@/components/footer'
    import eventHub from "../bus.js"
    export default{
        data(){
            return {
                cartData:eventHub.foods,
                cartPriceSum:eventHub.priceSum
            }
        },
        components:{
            footers:Footer
        },
        filters:{
            float:function(value){
                return value.toFixed(2);
            }
        },
        methods:{
            cartAdd:function(item){
                eventHub.$emit("addcart",item); 
            },
            cartDel:function(item){
                eventHub.$emit("delcart",item); 
            }
        }
    }
</script>
<style type="text/css">
    /*没有时的商品的默认页面*/
    .cart_count{
        width: 1rem;
    }
    .cart-cartmod{
        width: 100%;
        height: 30rem;
        background: #F6F6F6;
    }
    .cart-shopcar_header_frame{
        width: 100%;
        height: 2.8rem;
        position: relative;
    }
    .cart-shopcar_header{
        width: 100%;
        height: 2.8rem;
        position: fixed;
        top: 0;
        background: #fff;
        text-align: center;
        font: 0.8rem/2.8rem "微软雅黑";
        border-bottom: 0.05rem solid #e0e0e0;
        box-sizing: border-box;
        color: #333;
        z-index: 1;
    }
    .cart-shop-addres{
        position : relative;
        display: flex;
        flex-wrap: wrap;
        width : 100%;
        height : 3.35rem;
        margin-top: 1rem;
        font-size: 0.9rem;
        background: #fff;
    }
    .cart-shop-line{
        width : 100%;
        height : 0.1rem;
        background : url(../../src/assets/cart_img/shoppingline.png);
    }
    .cart-multi-poin{
        width : 80%;
        height : 1.5rem;
        margin: 0.5rem 0 0 0.5rem;
    }
    .cart-send-to{
        width : 80%;
        height : 1.5rem;
        margin-left: 0.5rem;
    }
    .cart-to-go{
        position : absolute;
        top : 1rem;
        right : 0.5rem;
        height : 1.5rem;
        height :1.5rem;
    }
    /*/*无货时*/
    .shopcar_content{
        width: 100%;
    }
    .shopcar_empty_frame{
        width: 100%;
        text-align: center;
        padding-top: 3rem;
    }
    .shopcar_empty_pic{
        width: 4.8rem;
        height: 4.8rem;
    }
    .shopcar_empty,.shopcar_go-buy{
        font: 0.8rem/2.4rem "微软雅黑";
        color: #999;
        text-align: center;background: #F6F6F6;
    }
    .shopcar_go-buy{
        padding: 0.25rem 1.8rem;
        border: 0.05rem solid #e0e0e0;
        color : #fff;
        background: #FF712B;
    }   
    /*添加商品时的页面*/
    .cartContent{
        width : 100%;
        height : 12.85rem;
        background: #fff;
    }
    .cart-tapactive{
        display: flex;
        width : 100%;
        height : 2.1rem;
        line-height: 2.1rem;
        border-bottom : 1px solid #f0f0f0;
    }
    .cart-text1{
        width : 60%;
        font-size: 0.7rem;
    }
    .cart-checkall1{
        width : 1.5rem;
        height : 1.5rem;
        margin : 0.5rem 0.5rem 0 0.5rem;
        background: url(../assets/cart_img/sprt.png) -15.35rem -11.65rem no-repeat;
        background-size: 30rem;
    }
    .cart-logo{
        width : 1.5rem;
        height : 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        margin : 0.3rem 0.5rem 0 0;
        border : 1px solid #F0F0F0;
    }
    .cart-logo>img{
        width : 1.1rem;
        height : 1.1rem;
    }
    .cart-text1{
        color : #A3A3A3;
    }
    .cart-togoimg1{
        width: 8%;
        line-height: 1.3rem;
        height: 1.3rem;
        margin: 0.3rem 0 0 0.8rem;
    }
    .cart-prcolor{
        margin-left: 1rem;
    }
    .cart-to-gos{
        width : 1.5rem;
        height : 1.5rem;
    }
    .cart-selected{
        display: flex;
        width : 100%;
        height : 3.45rem;
        font-size: 0;
        background: #fff;
    }
    .cart-checkall2{
        width : 1.5rem;
        height : 1.5rem;
        margin : 1rem 0 0 0.5rem;
        background: url(../assets/cart_img/sprt.png) -15.35rem -11.65rem no-repeat;
        background-size: 30rem;
    }
    .cart-goods{
     width: 60%;
     height: 3.45rem;
     line-height: 1.2rem;
     font-size: 0.7rem;
     margin-top : 0.7rem;
     }
     .cart-iconminus{
        width: 0.8rem;
        height : 0.8rem;
        margin-right : 0.5rem ;
        line-height: 0.8rem;
        text-align: center;
        border : 1px solid #FFC1A1;
        color : #FFC1A1;
    }
    .cart-iconadd{
        width: 0.8rem;
        height : 0.8rem;
        margin-left : 0.5rem ;
        line-height: 0.8rem;
        text-align: center;
        border : 1px solid #FFC1A1;
        color : #FFC1A1;
    }
    .cart-act-j_num{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        font-size: 0.8rem;
    }
    .cart-makeuplist{
        display: flex;
        width: 100%;
        height : 1.7rem;
        line-height: 1.7rem;
        background: #FFF7EB;
        font-size: 0.7rem;
        border-bottom : 1px solid #f0f0f0;
    }
    .cart-pricecj{
        width: 90%;
        height : 1.7rem;
    }
    .cart-reminder{
        width : 1.5rem;
        height : 1.5rem;
        margin: 0 0.5rem 0 0.7rem;
        background: url(../assets/cart_img/sprt.png) -3.75rem -17.15rem no-repeat;
        background-size: 30rem;
    }
    .cart-jkh4{
        width : 1.5rem;
        height : 1.5rem;
        margin-bottom : 0.1rem;
    }
    .cart-coudan{
        width : 22%;
        font-size: 0.8rem;
        color : #FF9661;
    }
    .cart-total{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height : 2.6rem;
        background: #fff;
        border-bottom : 1px solid #f0f0f0;
    }
    .cart-xhld{
       width :70%;
       height: 2.6rem;
       margin-left : 0.5rem;
    }
    .cart-orange{
        width :80%;
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: 0.8rem;
        color : #FF712B;
    }
    .cart-amout{
        width: 70%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.5rem;
        color : #808080;
    }
    .cart-okok{
        width: 20%;
        height: 1.8rem;
        border-radius: 0.1rem;
        line-height: 1.8rem;
        text-align: center;
        margin: 0.5rem 0.5rem;
        background: #FF712B;
    }
    .cart-okok>span{
        font-size: 1rem;
        color :#fff;
    }
</style>