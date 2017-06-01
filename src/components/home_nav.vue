<template>
	<div class="home_item">
		<div>
			<a href="javascript:history.go(-1)" class="cate_goReturn"></a>
	        <router-link to="/" class="cate_goHome"></router-link>
	        <img :src="foods.imageUrl">
		</div>
		<ul class="home_pass">
			<li class="home_itemname">{{foods.data.name}}</li>
			<li class="home_itemprice"><span>¥</span>{{foods.data.price/100}}</li>
		</ul>
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
	    <div class="cate_joinCart">
	    	<div class="cate_cartIconBox">
	    		<img src="../assets/type_img/r.png"	 class="cate_cartIcon">
	    	</div>
	    	<div class="cate_cartPlusBox" @click="nav_addCart(foods)">
	    		加入购物车
	    	</div>
	    </div>
	</div>	
</template>
<script type="text/javascript">
	import eventHub from "../bus.js"
	export default{
		data(){
			return {
				foods:eventHub.todos
			}
		},
		methods:{
			nav_addCart:function(items){
				eventHub.$emit("addcart",items);
			}
		}
	}
</script>
<style type="text/css">
	.home_item{
		width: 100%;
	}
	.home_pass li{
		margin-left: .5rem;
	}
	.home_itemname{
		font-size: .9rem;
		color: #21292b;
	}
	.home_itemprice{
		font-size: 1rem;
		color: #ff712b;
	}
	.home_itemprice span{
		font-size: .7rem;
		vertical-align: top;
	}
</style>