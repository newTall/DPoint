<template>
	<!-- 评论页 -->
    <div class="vipcomment-page">
	<!-- 评论页头部 -->
		<div class="vipcomment-head">
			<a href="javascript:history.back(-1)">
				<img src="../../src/assets/vip_img/vipcomment1.jpg" alt="" class="vipcommentimg1">
			</a>
			<p>会员权益</p>
			<img src="../../src/assets/vip_img/vipcomment2.jpg" alt="" class="vipcommentimg2">
		</div>
	<!-- 评论页中间部分 -->
	<div class="vipcomment-centert">
		<dl class="vipcomment-centert1">
			<dt>
				<img src="../../src/assets/vip_img/vipcomment9.png" alt="" class="vipcommentimg9">
			</dt>
			<dd>
				<p>评论奖励</p>
				<p>评价送积分，积分当钱花</p>
			</dd>
		</dl>
		<dl class="vipcomment-centert2">
			<dt class="vipcomment-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment7.png" alt="" >
			</dt>
			<dd class="vipcommentpall">
				<p>权益内容：评价线上订单，获得相应积分，等级越高，积分越多</p>
			</dd>
		</dl>
		<dl class="vipcomment-centert3">
			<dt class="vipcomment-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment5.png" alt="" >
			</dt>
			<dd class="vipcommentpall">
				<p>权益对象：银卡-铂金卡会员</p>
			</dd>
		</dl>
		<dl class="vipcomment-centert4">
			<dt class="vipcomment-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment6.png" alt="" >
			</dt>
			<dd class="vipcommentpall">
				<p>使用渠道：多点</p>
			</dd>
		</dl>
	</div>
		<!--会员权益下面部分  -->
		<div class="vipcomment-bottom">
			<p>权益介绍</p>
			<p>1. 银卡-铂金卡会员评价线上订单，可获得积分奖励</p>
			<p>2. 会员等级不同，评价订单奖励积分不同，等级越高，奖励越高。银卡会员成功评价一个订单获得10积分；金卡会员成功评价一个订单获得20积分；铂金会员成功评价一个订单获得30积分</p>
		</div>
	</div>
	
	
</template>
<script>
	
</script>
<style type="text/css">
.vipcomment-page{
	width : 100%;
	height : 40rem;
	background: #F5F5F5;
}
.vipcomment-head{
	display: flex;
	margin-bottom: 0.5rem;
	justify-content: space-between;
	width :　100%;
	height : 2.75rem;
	font-size: 0.7rem;
	line-height: 2.75rem;
	background: #fff;
	box-shadow: 0.2rem 0.2rem 0.5rem #888888;
}
.vipcommentimg1{
	width :48%;
	margin: 0 0  0 0.5rem;
}
.vipcommentimg2{
	width :8%;
	height : 1.3rem;
	margin : 0.8rem 1rem 0 0;
}
/*中间部分*/
.vipcomment-centert{
	width: 100%;
	height : 15.55rem;
	line-height: 2.5rem;
	background: url(../../src/assets/vip_img/vipcomment3.png) no-repeat;
}

.vipcommentimg9{
	width : 100%;
	height : 4.05rem ;
	margin: 1rem 0 1.5rem 0;
}
.vipcomment-centert1{
	display: flex;
	padding-left: 20%;
}
.vipcomment-centert1>dt{
	width: 23%;
}
.vipcomment-centert1>dd{
	height : 3rem;
	margin-top : 1rem;
	justify-content: center;
	align-items: center;
}
.vipcomment-centert1>dd>p:nth-of-type(1){
	height :　1rem;
	margin-left : 1rem;
}
.vipcomment-centert1>dd>p:nth-of-type(2){
	font-size: 0.5rem;
	width: 100%;
	height :　0.5rem;
	margin-left : 1rem;
}
.vipcomment-centert-dt{
	width : 10%;
	height : 1.5rem;
	justify-content: center;
	align-items: center;
}
.vipcomment-centert2{
	display: flex;
	font-size: 0.7rem;
	line-height: 1.5rem;
}
.vipcomment-centert2>dt>img{
	width : 45%;
	margin-left: 1rem;
}
.vipcommentpall{
	margin-left: 0.5rem;
}
.vipcomment-centert3{
	display: flex;
	font-size: 0.7rem;
}

.vipcomment-centert3>dt>img{
	width : 42%;
	margin-left: 1rem;
}
.vipcomment-centert4{
	display: flex;
	font-size: 0.7rem;
}
.vipcomment-centert4>dt>img{
	width : 40%;
	margin-left: 1rem;
}
.vipcomment-bottom{
	width: 90%;
	height : 8.6rem;
	font-size: 0.7rem;
	padding-left: 5%;
}
.vipcomment-bottom>p:nth-of-type(1){
	font-size: 0.8rem;
	margin : 1rem 0 1rem 0;
}
.vipcomment-bottom>p:nth-of-type(2){
	font-size: 0.7rem;
	margin-bottom: 0.5rem;
}
.vipcomment-bottom>p{
	width: 100%;
	height: 1rem;
	line-height: 1.4rem
}
</style>