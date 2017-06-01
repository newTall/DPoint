<template>
	<div class="Mine">
	<!-- 头部 --> 
		<div class="Mine-top">
			<div class="Mine-vipCode">
				<div class="Mine-mine">
					<a href=""><span>Hello,你好</span><div class="Mine-login">去登录</div></a>
				</div>
				<a href=""><div class="Mine-icon icon-vipCode"></div><span>会员专属码</span></a>
			</div>
			<div class="Mine-top-bottom">
				<a href="">0.00<br><span>余额</span></a>
				<a href="">0<br><span>积分</span></a>
				<a href="">0<br><span>卡包</span></a>
				<a href="">0<br><span>优惠券</span></a>
			</div>
		</div>
	<!-- 中间部分 --> 
		<div class="Mine-div">
				<a href="#/order/needpay"><div class="Mine-icon icon-needpay"></div><span>待支付</span></a>
				<a href="#/order/nofinish"><div class="Mine-icon icon-nofinish"></div><span>未完成</span></a>
				<a href="#/order/finish"><div class="Mine-icon icon-finish"></div><span>已完成</span></a>
				<a href="#/order/allpay"><div class="Mine-icon icon-allpay"></div><span>全部订单</span></a>
		</div>		
	<!-- 底部 --> 
		<div class="Mine-div">
				<a href="#/home/vip"><div class="Mine-icon icon-minevip"></div><span>会员中心</span></a>
				<a href=""><div class="Mine-icon icon-location"></div><span>收货地址</span></a>
				<a href="#/help"><div class="Mine-icon icon-help"></div><span>帮助中心</span></a>
				<a href=""><div class="Mine-icon icon-phone"></div><span>客服电话</span></a>
				<a href=""><div class="Mine-icon icon-App"></div><span>体验APP</span></a>
				<a href=""><div class="Mine-icon icon-Fcenter"></div><span>发票中心</span></a>
				<a href=""><div class="Mine-icon icon-card"></div><span>绑卡</span></a>
		</div>
		<!-- footer -->
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
	.Mine{
		width: 100%;
		background: #F6F6F6;
	}
	a{
		color:#000;
	}
	div{
		margin: 0 auto;
	}
	/*头部样式*/
	.Mine-top{
		display: flex;
		width: 100%;
		height: 8rem;
		background-image: url(../assets/mine_img/mine-top-img.png);
		background-size: 100% 100%;
		align-items:flex-end;
		flex-wrap: wrap;
	}
	.Mine-top a{
		color: #fff;
	}
	.Mine-mine{
		width: 100px;
	}
	/*头部vip样式以及头像资料*/
	.Mine-vipCode{
		width: 100%;
		padding:0 0.5rem;
		display: flex;
		justify-content: space-around;
	}
	.Mine-vipCode  span{
		font-size: 0.7rem;
	}
	.Mine-mine{
		width:60%;
		display: flex;
		justify-content: flex-start;
	}
	.Mine-login{
		margin-top: 0.3rem;
		text-align: center;
		font-size: 0.65rem;
		color: #F78028;
		background: #fff;
		border-radius: 15px;
	}
	.Mine-top-bottom{
		line-height:0.8rem;
		height:3rem;
		width: 100%;
		background:rgba(0,0,0,0.1);
		display: flex;
		justify-content: space-around;
		align-items:center;
	}
	.Mine-top-bottom a{
		font-size: 0.9rem;
		text-align: center;
	}
	.Mine-top-bottom span{
		font-size: 0.6rem;
		text-align: center;
	}
	.Mine-div{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background: #fff;
		font-size: 0.65rem;
		margin-top: 0.5rem;
		flex-wrap: wrap;
	}
	/*所有icon*/ 
	.Mine-icon{
		background-image: url(../assets/mine_img/sprt.png);
		background-repeat: no-repeat;
		background-size: 400px auto;
		width: 30px;
		height: 30px;
	}
	/*所有icon下a*/ 
	.Mine-div a{
		display: flex;
		width: 25%;
		flex-direction: column;
		padding: 0.5rem 0;
		text-align: center;
	}
	.icon-vipCode{
		background-position: -250px -500px;
	}
	.icon-needpay{
		background-position: 0px -550px;
	}
	.icon-nofinish{
		background-position: -50px -550px; 
	}
	.icon-finish{
		background-position: -100px -550px; 
	}
	.icon-allpay{
		background-position: -150px -550px; 
	}
	.icon-minevip{
		background-position: 0px -510px;
	}
	.icon-location{
		background-position: -50px -510px;
	}
	.icon-help{
		background-position: -100px -510px;
	}
	.icon-phone{
		background-position: -150px -510px;
	}
	.icon-App{
		background-position: -200px -510px;
	}
	.icon-Fcenter{
		background-position: -250px -550px;
	}
	.icon-card{
		background-position: -200px -550px;
	}
</style>
