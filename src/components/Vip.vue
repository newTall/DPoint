<template>
	 <!-- 银卡会员 头部 -->
	<div class="vip-head">
		<!-- 头部第一部分 会员中心和会员专属码-->
		 <div class="vip-head-top">
		 	<h3 class="vip-welcome-title">Hello,银卡会员</h3>
		 	<!-- 头部第二部分 会员中心、会员专属码-->
		 	<div class="vip-membership">
				<div class="vip-member_center">
				    <router-link to="/Vipminevip">
						<p class="vip-item-col-0">
							<img src="../../src/assets/vip_img/hg.png" alt="" >
						</p>
						<p class="vip-item-col-1">会员中心</p>
					</router-link>
				</div>
				<div class="vip-member_code">
					<p class="vip-item-col-2"><img src="../../src/assets/vip_img/ewm.png" alt=""></p>
					 <router-link to="/Vipminevip">
					<p class="vip-item-col-1">会员专属码</p>
					</router-link>
					<p class="vip-enjoy"><a href="">立享优惠</a>
					</p>
				</div>
			</div>
		</div> 
		<!-- 第二部分 余额、积分.. -->
		 <div class="vip-head-center">
			<ul class="vip-row-clearfix">
				<li class="vip-item-col-3">
					<span>￥0.00</span>
					<p>余额</p>
				</li>
				<li class="vip-item-col-3">
					<span>0</span>
					<p>积分</p>
				</li>
				<li class="vip-item-col-3">
				    <span>0</span>
					<p>成长值</p>
				</li>
				<li class="vip-item-col-3">
					<span>0</span>
					<p>优惠券</p>
				</li>	
			</ul>
		</div> 
		<!-- 头部第三部分 --> 
		<div class="vip-head-bottom">
			<router-link to="/Vipcomment" class="vip-items-disabled">
				<dl>
					<dt>
						<img src="../../src/assets/vip_img/one.png" alt="" class="vip-items-imgall">
					</dt>
					<dd class="vip-items-dd">评论奖励</dd>
				</dl>
			</router-link>
			<router-link to="/Vipforetaste" class="vip-items-disabled">
				<dl>
					<dt>
						<img src="../../src/assets/vip_img/two.png" alt="" class="vip-items-imgall">
					</dt>
					<dd class="vip-items-dd">1分钱试吃</dd>
				</dl>
			</router-link>
			<router-link to="/Vipenjoyact" class="vip-items-disabled">
				<dl>
					<dt>
						<img src="../../src/assets/vip_img/three.png" alt="" class="vip-items-imgall">
					</dt>
					<dd class="vip-items-dd">活动尊享</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-items-disabled">
				<dl>
					<dt>
						<img src="../../src/assets/vip_img/four.png" alt="" class="vip-items-imgall">
					</dt>
					<dd class="vip-items-dd">物美特惠</dd>
				</dl>
			</router-link>
			<router-link to="/Vipallqy" class="vip-items-disabled">
				<dl>
					<dt>
						<img src="../../src/assets/vip_img/five.png" alt="" class="vip-items-imgall">
					</dt>
					<dd class="vip-items-dd">全部权益</dd>
				</dl>
			</router-link>
		</div>
	<!-- 多点秒付 开通就送 -->
	<div class="vip-member-notice">
		<div class="vip-member-notice-head">
			<h3>会员公告</h3>|<p>物美会员升级，点击了解更多升级福利！</p>
		</div>	
		<img src="../../src/assets/vip_img/ddff.jpg" alt="" class="vip-member-imgs1">
		<img src="../../src/assets/vip_img/imgs2.jpg" alt="" class="vip-member-imgs2">
		<img src="../../src/assets/vip_img/imgs3.jpg" alt="" class="vip-member-imgs3">
	</div>
	<!-- 支付宝免密 中间滚动部分 -->
		<ul class="vip-navgation">
			<li class="vip-navgation-li">
				<a href="">支付宝免密</a>
			</li>
			<li class="vip-navgation-li">
				<a href="">微信免密</a>
			</li>
			<li class="vip-navgation-li">
				<a href="">电子美通卡</a>
			</li>
			<li class="vip-navgation-li">
				<a href="">实体美通卡</a>
			</li>
		</ul>
		<img src="../../src/assets/vip_img/imgs4.jpg" alt=""  class="vip-member-imgs4">
		<img src="../../src/assets/vip_img/imgs5.jpg" alt=""  class="vip-member-imgs5">
		<img src="../../src/assets/vip_img/imgs6.jpg" alt=""  class="vip-member-imgs6">
		<img src="../../src/assets/vip_img/imgs7.jpg" alt=""  class="vip-member-imgs7">
		<img src="../../src/assets/vip_img/imgs8.jpg" alt=""  class="vip-member-imgs8">
		<img src="../../src/assets/vip_img/imgs9.jpg" alt=""  class="vip-member-imgs9">
	    <footers></footers>
	</div>
</template>
<script>
	import Footer from '@/components/footer'
	export default{
		components:{
			footers:Footer
		}
	}
</script>
<style type="text/css">
/*头部 vip-head*/
.vip-head{
	position : relative;
	width: 100%;
	background: #F6F6F6;
}
/* hello 银卡会员*/
.vip-welcome-title{
	width:100%;
	height : 2rem;
	text-align: center;
	line-height: 2rem;
	font-size: 0.7rem;
	color: #fff;
}
/*会员中心*/
.vip-membership{
   display: flex;
   justify-content: space-around;
   width : 100%;
   height :3rem;
}
.vip-item-col-1{
	width: 100%;
	height:0.5rem;
	font-size: 0.5rem;
	color : #fff;
}
/*会员专属码*/
.vip-member_code{
  position:relative;
  width:30%;
  height : 2rem ;
}
.vip-enjoy{
	position : absolute;
	top:-0.3rem;
	left : 1.5rem;
	width : 50%;
	height : 0.7rem;
	line-height: 0.5rem;
	text-align: center;
	background: #000;
	border-radius: 1rem;
}
.vip-enjoy>a{
	font-size: 0.5rem;
	color : #fff;
}
.vip-item-col-0{
	width : 100%;
	height: 1rem;
	line-height: 1rem;
	margin: 0.5rem 0  0.5rem 0.6rem;
}
.vip-item-col-0>img{
	width: 20%;
	height: 1rem;
}
.vip-item-col-2{
	width : 100%;
	height: 1rem;
	line-height: 1rem;
	margin: 0.5rem 0  0.5rem 1rem;
}
.vip-item-col-2>img{
	width: 20%;
	height: 1rem;
}
.vip-member_center{
	padding-left: 5%;
	padding-right: 5%;
	width:30%;
	height : 2rem ;
    font-size: 0.5rem;
}
.vip-head-top{
	width : 100%;
	height : 8.45rem;
	background-image:linear-gradient(to right,#C8D4DC,#90A3B1); 
}
/*第二部分 余额、积分.. */
.vip-head-center{
	position : absolute;
	top :5.9rem;
	left: 3%;
	width : 94%;
	height : 3rem;
	background: #fff;
	box-shadow:  0px 0.03rem 0px 0px #878B8B; 
}
.vip-row-clearfix{
	display: flex;
	width : 100%;
}
.vip-item-col-3{
	border-right: 2px solid #F9F7F3;
    width: 25%;
    text-align: center;
}
.vip-item-col-3:last-of-type{
	border-right: 0;
}
.vip-item-col-3>span{
	font-size: 0.5rem;
	font-weight: bold;
	margin-top: 0.5rem;
	display: inline-block;
}
.vip-item-col-3>p{
	font-size: 0.6rem;
	color: #878B8B;
	margin:0.2rem 0.2rem;
}
/*中间滚动导航*/
.vip-navgation{
	display: flex;
	justify-content: space-around;
	width :100%;
	height : 2.3rem;
	align-items: center;
	background: #fff;
}
.vip-navgation-li{
	width : 20%;
	height : 1.25rem;
	line-height: 1.25rem;
	text-align: center;
	background: orange;
	border-radius: 1rem;
}
.vip-navgation-li>a{
	font-size :0.55rem;
	color : #000;
}
/*头部第三部分*/
.vip-head-bottom{
	padding-left: 4%;
	padding-right: 4%; 
	display: flex;
	justify-content: space-around;
	width: 92%;
	height: 4.25rem;
	box-shadow:  0px 0.03rem 0px 0px #878B8B; 
	background: #fff;
}
.vip-items-disabled{
	width : 16%;
	height: 4.25rem;
}
.vip-items-imgall{
	width : 60%;
	height : 1.7rem;
	margin : 1rem 0 0.5rem 0.5rem;
}
.vip-items-dd{
   font-size: 0.5rem;
   color : #878B8B;
}
/*会员公告 vip-member-notice*/
.vip-member-notice{
	margin-top: 1rem;
	width: 100%;
}
.vip-member-notice-head{
	width: 100%;
	height: 1.95rem;
	line-height: 1.95rem;
	display: flex;
	font-size: 0.7rem;
	background: #fff;
}
.vip-member-notice-head>h3{
	margin :0 1rem 0 1rem;
}
.vip-member-notice-head>p{
	margin-left: 1rem;
}
.vip-member-imgs1{
	width:100%;
	height : 13.35rem;
}
.vip-member-imgs2{
	width:100%;
	height : 4.25rem;
}
.vip-member-imgs3{
	width:100%;
	height : 13.35rem;
}
.vip-member-imgs4{
	width:100%;
	height :59.85rem;
}
.vip-member-imgs5{
	width:100%;
	height :59.85rem;
}
.vip-member-imgs6{
	width:100%;
	height :59.85rem;
}
.vip-member-imgs7{
	width:100%;
	height :34.95rem;
}
.vip-member-imgs8{
	width:100%;
	height :22.5rem;
	margin-bottom : 2.5rem;
}
.vip-member-imgs9{
	position:fixed;
    bottom: 4rem;
    right : 1rem;
	width: 18%;
	height : 3rem;
}
</style>