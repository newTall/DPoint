<template>
	<div class="home_box">
		<header>
			<div>
				<label>送至：</label>
				<span>三旗百汇购物中心</span>
			</div>
			<a 	href="#/search"><img src="../assets/home_img/search_gray.png"></a>
		</header>
		<div class="header_down">
			<ul>
				<li>
					<router-link to="/home/point">多点超市</router-link>
				</li>
				<li>
					<img src="../assets/home_img/a7ccbc8a-af56-4d64-9cdb-671fccc18f82.png">
					<router-link to="/home/global">全球精选</router-link>
				</li>
			</ul>			
		</div>
		<router-view></router-view>
		<footers></footers>
	</div>
</template>
<script>
	import Footer from '@/components/footer'
	import Swiper from '../../static/js/swiper-3.3.1.min.js'
	export default{
		data(){
			return {
				currentView:"homePoint",
				foods:''
			}			
		},
		mounted(){
			window.onscroll=function(){
				var dis =window.scrollTop||document.body.scrollTop||document.documentElement.scrollTop;
				var header_down = document.querySelector('.header_down');
				if(dis!=0){	
					if(header_down.className!=null){
						header_down.className="header_down header_down_fix"
					}								
				}else{
					if(header_down.className!=null){
						header_down.className="header_down";
					}					
				}
			};
			$(".header_down").on("click","li",function(){
				$(this).css("border-bottom","2px solid #ff8143").siblings().css("border-bottom","0")
			})
		},
		beforeDestroy(){
			window.onscroll = null;
		},
		components:{
			footers : Footer
		},
		methods:{
			recieveMessage:function(res){
				this.foods = res;
				console.log(this.foods)
			}
		}
	}
</script>
<style type="text/css">
	@import '../../static/css/swiper-3.3.1.min.css';
	.home_box{
		width: 100%;
	}
	header{
		display: flex;
		padding: .5rem .8rem .2rem;
		justify-content: space-between;
		font-size: .7rem;
		color:#404040;
		line-height: 1.5rem;
	}
	header div{
		margin: 0;
	}
	header img{
		width: 1.5rem;
		height: 1.5rem;
	}
	.header_down{
		width: 100%;
		background: #fff;
	}
	.header_down_fix{
		position: fixed;
		top:0;
		z-index: 2;
	}
	.header_down ul{
		display: flex;
		padding-left:17px;	
	}
	.header_down ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		padding-bottom: 0.2rem;
		margin-right: 1rem;
		height: 2rem;
		width: 2.8rem;
	}
	.header_down ul li:first-of-type{
		border-bottom: 2px solid #ff8143;
	}
	.header_down ul li img{
		margin-left: 20px;
		height: .6rem;
		width: 2rem;
	}
	.header_down a{
		font-size: 0.7rem;
		color:#333;
	}	
</style>