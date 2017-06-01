<template>
	<div class="home_point">
		<!-- 轮播图 -->
		<div class="slideshow"> 
			<div class="swiper-container point_slide">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="x in slideshowData"><img :src="x.imageUrl"></div>
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			</div>
		</div>
		<!-- 轮播图下的导航 -->
		<div class="nav">
			<ul>
				<li v-for="x in itemData1">
					<img :src="x.imageUrl">
					<span>{{x.remark}}</span>
				</li>
			</ul>
		</div>	
		<!-- 优选生鲜 -->
		<div class="nav_down">
			<ul>
				<li v-for="x in nav_down_data">
					<a href="#"><img :src="x.imageUrl"></a>
				</li>
			</ul>			
		</div>
		<!-- 超市优选 -->
		<div class="home_shop_select">
			<!-- 报错了 -->
			<p><img :src="home_shop_select_img[0]&&home_shop_select_img[0].imageUrl"></p>
			<ul>
				<li v-for="x in home_shop_select_up">
					<a href="#"><img :src="x.imageUrl"></a>
				</li>
			</ul>
			<ul>
				<li v-for="x in home_shop_select_down">
					<a href="#"><img :src="x.imageUrl"></a>
				</li>
			</ul>
		</div>
		<!-- 健康蔬菜 -->
		<div class="home_type">
			<p><img :src="home_vegetable[0]&&home_vegetable[0].imageUrl"></p>
			<ul>
				<li v-for="x in home_vegetable_s" class="home_content">
					<a href="#/home_nav" @click="goDetail(x)"><img :src="x.imageUrl" ></a>
					<span class="home_name">{{x.data.name}}</span>
					<div class="home_content_massage">
						<ul>
							<li>
								<span class="home_price">¥{{x.data.price/100}}</span>
								<i class="home_promotionPrice">¥{{x.data.promotionPrice/100}}</i>
							</li>
							<li class="home_add" @click="getFood(x)"><img src="../assets/home_img/add.png"></li>
						</ul>						
					</div>
				</li>
			</ul>
		</div>
		<!-- 新鲜水果 -->
		<div class="home_type">
			<p><img :src="home_fruit[0]&&home_fruit[0].imageUrl"></p>
			<ul>
				<li v-for="x in home_fruit_s" class="home_content">
					<a href="#/home_nav" @click="goDetail(x)"><img :src="x.imageUrl" ></a>
					<span class="home_name">{{x.data.name}}</span>
					<div class="home_content_massage">
						<ul>
							<li>
								<span class="home_price">¥{{x.data.price/100}}</span>
								<i class="home_promotionPrice">¥{{x.data.promotionPrice/100}}</i>
							</li>
							<li class="home_add"><img src="../assets/home_img/add.png"></li>
						</ul>						
					</div>
				</li>
			</ul>
		</div>
		<!-- 奶饮冰品 -->
		<div class="home_type home_foot">
			<p><img :src="home_milk[0]&&home_milk[0].imageUrl"></p>
			<ul>
				<li v-for="x in home_milk_s" class="home_content">
					<img :src="x.imageUrl">
					<span class="home_name">{{x.data.name}}</span>
					<div class="home_content_massage">
						<ul>
							<li>
								<span class="home_price">¥{{x.data.price/100}}</span>
								<i class="home_promotionPrice">¥{{x.data.promotionPrice/100}}</i>
							</li>
							<li class="home_add"><img src="../assets/home_img/add.png"></li>
						</ul>						
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueResource from "vue-resource"
	import eventHub from "../bus.js"
	Vue.use(VueResource)
	export default{
		data(){
			return {
				slideshowData:'',
				itemData1:'',
				nav_down_data:'',
				home_shop_select_img:'',
				home_shop_select_up:'',
				home_shop_select_down:'',
				home_vegetable:'',
				home_vegetable_s:'',
				home_fruit:'',
				home_fruit_s:'',
				home_milk:'',
				home_milk_s:'',
				selectedFood:''
			}
		},
		mounted(){			
			// 请求的数据
			this.$http.get("../../static/data/h_point_market.json").then(function(res){
				this.itemData = res.body.data;
				// console.log(res.body);
				this.slideshowData = this.itemData.pageModules[0].dataList;
				this.itemData1 = this.itemData.pageModules[2].dataList;
				this.nav_down_data = this.itemData.pageModules[3].dataList;
				this.home_shop_select_img = this.itemData.pageModules[4].dataList;
				this.home_shop_select_up = 	this.itemData.pageModules[5].dataList;
				this.home_shop_select_down = this.itemData.pageModules[6].dataList;
				this.home_vegetable = this.itemData.pageModules[8].dataList;	
				this.home_vegetable_s = this.itemData.pageModules[9].dataList;
				this.home_fruit = this.itemData.pageModules[10].dataList;
				this.home_fruit_s = this.itemData.pageModules[11].dataList;
				this.home_milk= this.itemData.pageModules[12].dataList;
				this.home_milk_s = this.itemData.pageModules[13].dataList;
				this.$nextTick(function(){
				//设置轮播图
				    var mySwiper = new Swiper ('.point_slide', {
						direction: 'horizontal',
			           	autoplay: 1000, 
			           	observer:true,
		                loop:true,
		                pagination: '.swiper-pagination',	// 如果需要分页器
		                paginationClickable: true
					}); 	
				})

			})				
		},
		methods:{
			goDetail:function(food){	//触发add事件
				eventHub.$emit("add",food)
				// console.log(eventHub.todos)
			},
			getFood:function(foodData){
				eventHub.$emit("addcart",foodData);
				// console.log(foodData)
			}
		}
	}
</script>
<style type="text/css">
	/*轮播图*/
	.swiper-container{
	    width: 100%;
	    height: 150px;
	}
	.swiper-container img{
		width: 100%;
	}
	/*轮播图下的导航*/
	.nav{
		padding:1rem 0;
		border-bottom: 10px solid #F6F6F6;
	}
	.nav ul{
		display: flex;
	}
	.nav ul li{
		width: 20%;
		color: #888;
		font-size: 0.6rem;
		text-align: center;
	}
	.nav ul li img{
		width: 100%;
	}
	/*优选生鲜*/
	.nav_down{
		border-bottom: 10px solid #F6F6F6;
	}
	.nav_down ul{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
		height: 11rem;
	}
	.nav_down li{
		height: 5.5rem;
		width: 50%;
	}
	.nav_down li img{
		width: 100%;
	}
	.nav_down li:first-of-type{
		height: 11rem;
	}
	/*超市优选*/
	.home_shop_select{
		border-bottom: 10px solid #F6F6F6;
	}
	.home_shop_select p{
		width: 100%;
		height: 35px;
	}
	.home_shop_select p img{
		width: 100%;
	}
	.home_shop_select ul{
		display: flex;
		flex-wrap: wrap;
	}
	.home_shop_select ul li{
		width: 33%;
	}
	.home_shop_select ul li img{
		width: 100%;
	}
	/*健康蔬菜*/
	.home_type{
		border-bottom: 10px solid #F6F6F6;
	}
	.home_type p{
		width: 100%;
	}
	.home_type p img{
		width: 100%;
	}
	.home_type>ul{
		display: flex;
		flex-wrap:wrap;
	}
	.home_type .home_content{
		width: 33%;
		margin-bottom: .5rem;
	}
	.home_content img{
		width: 100%;
	}
	.home_name{
		color: #21292b;
		font-size: 0.7rem;
		display: block;
		height: 1.8rem;
		margin-bottom: 10px;
		padding-left: 0.5rem;
	}
	.home_content_massage ul{
		padding:  0 0.5rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.home_content_massage ul li{
		height: 1.5rem;
	}
	.home_content_massage ul li:first-of-type{
		display: flex;
		flex-direction: column;
	}
	.home_price{
		font-size: 0.6rem;
		color: grey;
	}
	.home_promotionPrice{
		font-style: normal;
		font-size:0.7rem;
		color: #ff712b;
	}
	.home_add{
		width: 1.5rem;
	}
	.home_add img{
		margin-top: 0.3rem;
		width: 100%;
		height: 1.2rem;
	}
	.home_foot{
		margin-bottom: 3rem;
	}
</style>

