import Vue from "vue"
 var eventHub = new Vue({
 	data:function(){
 		return {
			todos:{},//单个商品详情
 			foods:[],//商品数组
 			foodsname:[],//商品名字
 			sumCount:[],
 			priceSum:[0]//商品总价
 	}},
 	// 创建钩子监听add事件
 	created:function(){
 		this.$on("add",this.addTodo)
 		this.$on("delcart",this.delCarts)
 		this.$on("addcart",this.addCarts)
    	this.$on("addClassify",this.addToClassify)
 	},
 	beforeDestroy:function(){
 		this.$off("add",this.addTodo)
 		this.$off("delcart",this.delCarts)
 		this.$off("addcart",this.addCarts)
    	this.$off("addClassify",this.addToClassify)
 	},
 	methods:{
 		addTodo:function(newTodo){
 			this.todos= newTodo;
 		},
 		addToClassify:function(newClassify){
 		  this.secClassify = newClassify
    	},
 		addCarts:function(newfood){
 			this.priceSum[0]+=newfood.data.promotionPrice/100;
 			this.sumCount.push(newfood);
 			var a = this.foodsname.indexOf(newfood.data.name)
 			if(a==-1){
 				this.$set(newfood,'count',1)//给商品添加count(数量)的属性，保证属性是响应的
 				newfood.count=1;
 				this.foodsname.push(newfood.data.name);
				this.foods.push(newfood);
 			}else{
 				this.foods[a].count++
 			}
 		},
 		delCarts:function(delfood){
 			this.sumCount.splice(0,1);
 			this.priceSum[0]-=delfood.data.promotionPrice/100;			
 			delfood.count--;
 			var b =this.foodsname.indexOf(delfood.data.name);
			if(delfood.count==0){
				this.foods.splice(b,1);
				this.foodsname.splice(b,1);
			}
 		}
 	}
 })
 export default eventHub
