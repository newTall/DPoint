<template>
	<div class="home_global">
		<!-- 轮播图 -->
		<div class="globalSlide">
			<div class="slideshow"> 
				<div class="swiper-container global_slide">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="x in slideshowGlobalData"><img :src="x.imageUrl"></div>
				    </div>
				    <!-- 如果需要分页器 -->
				    <div class="swiper-pagination"></div>
				</div>
			</div>
		</div>
		<!-- 轮播图下的导航 -->
		<div class="global_nav">
			<ul>
				<li v-for="x in global_navDataUp">
					<img :src="x.imageUrl">
					<span>{{x.remark}}</span>
				</li>
			</ul>
			<ul>
				<li v-for="x in global_navDataDown">
					<img :src="x.imageUrl">
					<span>{{x.remark}}</span>
				</li>
			</ul>
		</div>
		<!-- 爆款直降 -->
		<div class="global_nav_down">
			<ul>
				<li v-for="x in global_navDown">
					<a href="#"><img :src="x.imageUrl"></a>
				</li>
			</ul>			
		</div>
		<!-- 精选会场 -->
		<div class="global_shop_select">
			<!-- 报错了 -->
			<p><img :src="global_shop_select_img[0] && global_shop_select_img[0].imageUrl"></p>
			<ul>
				<li v-for="x in global_shop_select_up">
					<a href="#"><img :src="x.imageUrl"></a>
				</li>
			</ul>
			<ul>
				<li v-for="x in global_shop_select_down">
					<a href="#"><img :src="x.imageUrl"></a>
				</li>
			</ul>
		</div>
		<!-- 超值单品 -->
		<div class="global_type">
			<p><img :src="global_Supervalu_img[0] && global_Supervalu_img[0].imageUrl"></p>
			<ul>
				<li v-for="x in global_Supervalu_cont" class="home_content">
					<img :src="x.imageUrl">
					<span class="global_promotionDisplayLable">{{x.data.promotionDisplayLable}}</span>
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
		<!-- 水果楼层 -->
		<div class="global_type">
			<p><img :src="global_fruit[0]&&global_fruit[0].imageUrl"></p>
			<p><img :src="global_fruit[1]&&global_fruit[1].imageUrl"></p>
			<ul>
				<li v-for="x in global_fruit_s" class="home_content">
					<img :src="x.imageUrl">
					<span class="global_promotionDisplayLable">{{x.data.promotionDisplayLable}}</span>
					<span class="global_promotionDisplayLable">{{x.data.promotionList[0].subTypeName}}</span>
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
		<!-- 蔬菜楼层 -->
		<div class="global_type">
			<p><img :src="global_vegetable[0]&&global_vegetable[0].imageUrl"></p>
			<p><img :src="global_vegetable[1]&&global_vegetable[1].imageUrl"></p>
			<ul>
				<li v-for="x in global_vegetable_s" class="home_content">
					<img :src="x.imageUrl">
					<span class="global_promotionDisplayLable">{{x.data.promotionDisplayLable}}</span>
					<span class="global_promotionDisplayLable">{{x.data.promotionList[0].subTypeName}}</span>
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
		<!-- 肉禽蛋楼层 -->
		<div class="global_type home_foot">
			<p><img :src="global_meat[0]&&global_meat[0].imageUrl"></p>
			<p><img :src="global_meat[1]&&global_meat[1].imageUrl"></p>
			<ul>
				<li v-for="x in global_meat_s" class="home_content">
					<img :src="x.imageUrl">
					<span class="global_promotionDisplayLable">{{x.data.promotionDisplayLable}}</span>
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

<script type="text/javascript">
	export default{
		data(){
			return {
				slideshowGlobalData:[],
				global_navDataUp:[],
				global_navDataDown:[],
				global_navDown:[],
				global_shop_select_img:[],
				global_shop_select_up:[],
				global_shop_select_down:[],
				global_Supervalu_img:[],
				global_Supervalu_cont:[],
				global_fruit:[],
				global_fruit_s:[],
				global_vegetable:[],
				global_vegetable_s:[],
				global_meat:[],
				global_meat_s:[]
			}
		},
		mounted(){
			this.$http.get("../../static/data/h_global.json").then(function(res){
				this.globalData = res.body.data;
				this.slideshowGlobalData = this.globalData.pageModules[0].dataList;
				this.global_navDataUp = this.globalData.pageModules[1].dataList;
				this.global_navDataDown = this.globalData.pageModules[2].dataList;
				this.global_navDown = this.globalData.pageModules[4].dataList;
				this.global_shop_select_img = this.globalData.pageModules[5].dataList;
				this.global_shop_select_up = this.globalData.pageModules[6].dataList;
				this.global_shop_select_down = this.globalData.pageModules[7].dataList;
				this.global_Supervalu_img = this.globalData.pageModules[8].dataList;
				this.global_Supervalu_cont = this.globalData.pageModules[9].dataList;
				this.global_fruit = this.globalData.pageModules[10].dataList;
				this.global_fruit_s = this.globalData.pageModules[11].dataList;
				this.global_vegetable = this.globalData.pageModules[12].dataList;
				this.global_vegetable_s = this.globalData.pageModules[13].dataList;
				this.global_meat = this.globalData.pageModules[14].dataList;
				this.global_meat_s = this.globalData.pageModules[15].dataList;
				this.$nextTick(function(){
				//设置轮播图
				    var mySwiper1 = new Swiper ('.global_slide', {
						direction: 'horizontal',
			           	autoplay: 1000, 
			           	observer:true,
		                loop:true,
		                pagination: '.swiper-pagination',	// 如果需要分页器
		                paginationClickable: true
					}) 
				})

			}); 
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
	.global_nav{
		padding:1rem 0;
		border-bottom: 10px solid #F6F6F6;
	}
	.global_nav ul{
		display: flex;
		flex-wrap:wrap;
	}
	.global_nav ul li{
		width: 20%;
		color: #888;
		font-size: 0.6rem;
		text-align: center;
	}
	.global_nav ul li img{
		width: 100%;
	}
	.global_nav_down{
		border-bottom: 10px solid #F6F6F6;
	}
	.global_nav_down ul{
		/*display: flex;
		flex-direction: column;
		flex-wrap: wrap;*/
		width: 100%;
		height: 11rem;
	}
	.global_nav_down li{
		float: left;
		height: 5.5rem;
		width: 50%;
	}
	.global_nav_down li img{
		width: 100%;
	}
	.global_nav_down li:first-of-type{
		height: 11rem;
	}
	.global_nav_down li:nth-of-type(3){
		width: 25%;
		height: 5.5rem;
	}
	.global_nav_down li:nth-of-type(4){
		width: 25%;
		height: 5.5rem;
	}
	/*超值会场*/
	.global_shop_select{
		border-bottom: 10px solid #F6F6F6;
	}
	.global_shop_select p{
		width: 100%;
		height: 35px;
	}
	.global_shop_select p img{
		width: 100%;
	}
	.global_shop_select ul{
		display: flex;
		flex-wrap: wrap;
	}
	.global_shop_select ul li{
		width: 33%;
	}
	.global_shop_select ul li img{
		width: 100%;
	}
	/*超值单品*/
	.global_type{
		border-bottom: 10px solid #F6F6F6;
	}
	.global_type p{
		width: 100%;
	}
	.global_type p img{
		width: 100%;
	}
	.global_type>ul{
		display: flex;
		flex-wrap:wrap;
	}
	.global_type .home_content{
		width: 33%;
		margin-bottom: .5rem;
	}
	.home_content img{
		width: 100%;
	}
	.global_promotionDisplayLable{
		display: inline-block;
		margin-left:.5rem;
		font-size: .5px;
		background: #ff6161;
		color:#fff;
		width: 1.8rem;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
	}
	.home_content span:nth-of-type(2){
		margin-left: -2px;
	}
	.home_name{
		color: #21292b;
		font-size: 0.7rem;
		display: block;
		height: 1.8rem;
		margin-bottom: 10px;
		padding-left: 0.5rem;
		overflow: hidden;
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
</style>