<template>
    <div class="order">
        <div class="order_top">
            <div class="order_top1">
                <a href="#/home/mine"><div class="Mine-icon icon-back"></div></a>
                <span>
                    全部订单
                </span>
            </div>
            <div class="order_top2">
                <router-link to='/order/allpay'>全部</router-link>
                <router-link to='/order/needpay'>待支付</router-link>
                <router-link to='/order/nofinish'>未完成</router-link>
                <router-link to='/order/finish'>已完成</router-link>
                <router-link to='/order/canc'>已取消</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {}
</script>
<style type="text/css">
    .order_top {
        width: 100%;
        padding: 0.5rem 0;
    }
    .order_top1 {
        display: flex;
        font-size: 0.8rem;
        align-items: space-around;
        justify-content: space-between;
    }
    .order_top1 a{
        display: flex;
        align-items: space-around;
        justify-content: flex-start;
    }
    .order_top span{
        display: flex;
        width:100%;
        justify-content: center;
        margin-right: 1.5rem;
    }
    .order_top2 {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    }
    .order_top2 a {
        display: flex;
        width: 18%;
        height: 2rem;
        font-size: 0.7rem;
        color: #000;
        align-items: center;
        justify-content: center;
    }
	.icon-back{
        border-radius: 16px;
        background-color: #333;
		background-position: 1px -150px;
	}
</style>