<template>
	<footer>
		<router-link :to="{name:'Point'}" active-class="active1">
			<span>首页</span>
		</router-link>
		<router-link to="/home/type" active-class="active2">
			<span>分类</span>
		</router-link>
		<router-link to="vip" active-class="active3">
			<span>会员</span>
		</router-link>
		<router-link to="cart" active-class="active4">
			<i class="footer_cart" v-show='foodCounts.length'>{{foodCounts.length}}</i>
			<span>购物车</span>
		</router-link>
		<router-link to="mine" active-class="active5">
			<span>我的</span>
		</router-link>
    </footer>
</template>
<script type="text/javascript">
	import eventHub from "../bus.js"
	export default{
		data(){
			return{
				foodCounts:eventHub.sumCount
			}
		},
		created() {
			this.$on("changCount", function(c) {
				this.foodCounts = c;
			})
		},
		mounted() {
			// console.log(foodCount)
		}
	}
</script>
<style type="text/css">
	footer {
		width: 100%;
		padding: 0.5rem 0;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		background: #fff;
	}
	footer a {
		display: block;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		width: 2.2rem;
		height: 2.1rem;
		position: relative;
	}
	footer a:first-of-type {
		background: url(../assets/home_img/btm-bar-sprt.png) no-repeat 8px 0;
		background-size: 250px auto;
	}
	footer a:nth-of-type(2) {
		background: url(../assets/home_img/btm-bar-sprt.png) no-repeat -42px 0;
		background-size: 250px auto;
	}
	footer a:nth-of-type(3) {
		background: url(../assets/home_img/btm-bar-sprt.png) no-repeat -92px 0;
		background-size: 250px auto;
	}
	footer a:nth-of-type(4) {
		background: url(../assets/home_img/btm-bar-sprt.png) no-repeat -142px 0;
		background-size: 250px auto;
	}
	footer a:nth-of-type(5) {
		background: url(../assets/home_img/btm-bar-sprt.png) no-repeat -192px 0;
		background-size: 250px auto;
	}
	footer a span {
		font-size: .6rem;
		color: grey;
		text-align: center;
		width: 2.1rem;
		margin-left: 0.1rem;
	}
	.footer_cart {
		font-style:normal;
		display:block;
		background: red;
		width: 1.2rem;
		height: 1.2rem;
		line-height: 1.2rem;
		border-radius: 50%;
		text-align: center;
		position: absolute;
		top:-8px;
		font-size: .8rem;
		right: -8px;
		color: #fff;
	}
	footer .active1{
		background-image: url(../assets/home_img/btm-bar-sprt.png) no-repeat;
		background-position:  8px -50px!important;
	}
	footer .active2{
		background-image: url(../assets/home_img/btm-bar-sprt.png) no-repeat;
		background-position:  -42px -50px!important;
	}
	footer .active3{
		background-image: url(../assets/home_img/btm-bar-sprt.png) no-repeat;
		background-position:  -92px -50px!important;
	}
	footer .active4{
		background-image: url(../assets/home_img/btm-bar-sprt.png) no-repeat;
		background-position:  -142px -50px!important;
	}
	footer .active5{
		background-image: url(../assets/home_img/btm-bar-sprt.png) no-repeat;
		background-position:  -192px -50px!important;
	}
	.router-link-exact-active span{
		color: #ff712b;
	}
</style>
