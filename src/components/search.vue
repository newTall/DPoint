<template>
	<div class="search">
		<div class="search_head">
			<a href="javascript:history.go(-1)" class="cate_goReturn"></a>
			<span><img src="../assets/home_img/search_gray.png"></span>
			<input type="text" name="" placeholder="搜索想要的商品" class="startSearch" @keydown.enter="evenNumbers()">
		</div>
		<div class="search_main" v-if="!search.length">
			<ul>
				<li class="search_title">热门搜索</li>
				<li class="search_branch">
					<span>土豆</span>
					<span>啤酒</span>
					<span>儿童牙刷</span>
					<span>酸奶</span>
					<span>牛奶</span>
				</li>
				<li class="search_title">历史搜索</li>
				<li class="search_branch">
					<span>酸奶</span>
					<span>面包</span>
					<span>啤酒</span>
					<span>蔬菜豆菇</span>
				</li>
			</ul>
		</div>
		<div v-else>
			<div class="search_sort">
				<ul>
					<li>三旗百汇</li>
					<li>销量</li>
					<li>价格</li>
				</ul>
			</div>
			<div class="search_item">
				<ul>
					<li v-for="x in search">
						<img :src="x.imageUrl">
						<span class="search_name">{{x.data.name}}</span>
						<p class="search_p">
							<span class="home_promotionPrice"><b>¥</b>{{x.data.promotionPrice/100}}</span>
							<img src="../assets/home_img/add.png">
						</p>						
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import eventHub from "../bus.js"
	export default {
		data(){
			return{
				numbers: eventHub.foods,
				home_vegetable_ss:'',
				search:[]
			}			
		},
		computed:{
			
		},
		mounted(){
			this.$http.get("../../static/data/h_point_market.json").then(function(res){
				this.itemData = res.body.data;
				this.home_vegetable_ss= this.itemData.pageModules[9].dataList;
			})
		},
		filters:{
			milk:function(value){
			}
		},
		methods:{
			evenNumbers:function(){
				var searchCont = document.querySelector('.startSearch').value;
				for(var i=0;i<this.home_vegetable_ss.length;i++){
					var str = this.home_vegetable_ss[i].data.name
					var serachResult = str.indexOf(searchCont)
					if(serachResult!=-1){
						this.search.push(this.home_vegetable_ss[i])
						console.log(this.search)
					}
				}
				
			}
		}
	}
</script>
<style type="text/css">
	.search_head{
		height: 44px;
		display: flex;
		align-items: flex-end;
		background-color: #fff;
	}
	.search_head span{
		display: inline-block;
		height: 1.5rem;
		width: 1.5rem;
		border: 1px solid #333;
		border-right: 0;
		margin-left: 2.5rem;
	}
	.search_head span img{
		width: 100%;
		height: 100%;
	}
	.search_head input{	
		height: 1.5rem;
		width: 13rem;
		font-size: .7rem;
		text-indent: .5rem;
		border: none;
		border: 1px solid #333;
		border-left: 0;
		outline:none;
	}
	.search_main ul li{
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: .7rem;
		color: grey;
		padding: 0 .5rem;
	}
	.search_branch{
		margin-left: .5rem;
	}
	.search_branch span{
		display: inline-block;
		border: 1px solid grey;
		border-radius: 1rem;
		height: 1.2rem;
		line-height: 1.2rem;
		padding: .2rem .5rem
	}
	.search_sort{
		margin: .5rem 0;
	}
	.search_sort{
		border-top: .2rem solid #F7F7F7;
	}
	.search_sort ul{
		display: flex;
		padding: .5rem 2rem;
		justify-content: space-between;
		font-size: .7rem;
		color: grey;
	}
	.search_item ul{
		background-color: #F7F7F7;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 10px;
		justify-content: space-between;
	}
	.search_item ul li{
		background-color: #fff;
		width: 48%;
		height: 12rem;
		display: flex;
		flex-direction: column;
	}
	.search_item ul li>img{
		width: 100%;
	}
	.home_promotionPrice b{
		font-size: 0.4rem;
	}
	.search_name{
		color: #21292b;
		font-size: 0.7rem;
		display: block;
		height: 1rem;
		margin-bottom: 10px;
		padding-left: 0.5rem;
	}
	.search_p{
		padding: 0 .5rem;
	}
	.search_p img{
		float:right;
		width: 1.5rem;
	}
</style>