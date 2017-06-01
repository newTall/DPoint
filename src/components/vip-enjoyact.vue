<template>
	<!-- 活动尊享页面 -->
    <div class="vipenjoyact-page">
	<!-- 评论页头部 -->
		<div class="vipenjoyact-head">
			<a href="javascript:history.back(-1)">
				<img src="../../src/assets/vip_img/vipcomment1.jpg" alt="" class="vipenjoyactimg1">
			</a>
			<p>会员权益</p>
			<img src="../../src/assets/vip_img/vipcomment2.jpg" alt="" class="vipenjoyactimg2">
		</div>
	<!-- 评论页中间部分 -->
	<div class="vipenjoyact-centert">
		<dl class="vipenjoyact-centert1">
			<dt>
				<img src="../../src/assets/vip_img/salon.png" alt="" class="vipenjoyactimg9">
			</dt>
			<dd>
				<p>活动尊享</p>
				<p>多点会员日 会员狂欢节</p>
			</dd>
		</dl>
		<dl class="vipenjoyact-centert2">
			<dt class="vipenjoyact-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment7.png" alt="" >
			</dt>
			<dd class="vipenjoyactpall">
				<p>权益内容：每月定期举办线上线下会员专享豪礼活动</p>
			</dd>
		</dl>
		<dl class="vipenjoyact-centert3">
			<dt class="vipenjoyact-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment5.png" alt="" >
			</dt>
			<dd class="vipenjoyactpall">
				<p>权益对象：银卡-铂金卡会员</p>
			</dd>
		</dl>
		<dl class="vipenjoyact-centert4">
			<dt class="vipenjoyact-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment6.png" alt="" >
			</dt>
			<dd class="vipenjoyactpall">
				<p>使用渠道：多点</p>
			</dd>
		</dl>
	</div>
		<!--会员权益下面部分  -->
		<div class="vipenjoyact-bottom">
			<p>权益介绍</p>
			<p>1. 银卡-铂金卡会员，N多好礼等你来抢</p>
			<p>2. 每月活动，敬请留意多点APP首页及会员中心</p>
		</div>
	</div>
	
	
</template>
<script>
	
</script>
<style type="text/css">
.vipenjoyact-page{
	width : 100%;
	height : 40rem;
	background: #F5F5F5;
}
.vipenjoyact-head{
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
.vipenjoyactimg1{
	width :48%;
	height : 1.9rem;
	margin: 0 0  0 0.5rem;
}
.vipenjoyactimg2{
	width :8%;
	height : 1.3rem;
	margin : 0.8rem 1rem 0 0;
}
/*中间部分*/
.vipenjoyact-centert{
	width: 100%;
	height : 15.55rem;
	line-height: 2.5rem;
	background: url(../../src/assets/vip_img/vipcomment3.png) no-repeat;
}

.vipenjoyactimg9{
	width : 100%;
	height : 4.05rem ;
	margin: 1rem 0 1.5rem 0;
}
.vipenjoyact-centert1{
	display: flex;
	padding-left: 20%;
}
.vipenjoyact-centert1>dt{
	width: 23%;
}
.vipenjoyact-centert1>dd{
	height : 3rem;
	margin-top : 1rem;
	justify-content: center;
	align-items: center;
}
.vipenjoyact-centert1>dd>p:nth-of-type(1){
	height :　1rem;
	margin-left : 1rem;
}
.vipenjoyact-centert1>dd>p:nth-of-type(2){
	font-size: 0.5rem;
	width: 100%;
	height :　0.5rem;
	margin-left : 1rem;
}
.vipenjoyact-centert-dt{
	width : 10%;
	height : 1.5rem;
	justify-content: center;
	align-items: center;
}
.vipenjoyact-centert2{
	display: flex;
	font-size: 0.7rem;
	line-height: 1.5rem;
}
.vipenjoyact-centert2>dt>img{
	width : 45%;
	margin-left: 1rem;
}
.vipenjoyactpall{
	margin-left: 0.5rem;
}
.vipenjoyact-centert3{
	display: flex;
	font-size: 0.7rem;
}

.vipenjoyact-centert3>dt>img{
	width : 42%;
	margin-left: 1rem;
}
.vipenjoyact-centert4{
	display: flex;
	font-size: 0.7rem;
}
.vipenjoyact-centert4>dt>img{
	width : 40%;
	margin-left: 1rem;
}
.vipenjoyact-bottom{
	width: 90%;
	height : 8.6rem;
	font-size: 0.7rem;
	padding-left: 5%;
}
.vipenjoyact-bottom>p:nth-of-type(2){
	font-size: 0.7rem;
	margin : 1rem 0 1rem 0;
	line-height: 1.4rem
}
.vipenjoyact-bottom>p:nth-of-type(1){
	font-size: 0.8rem;
	margin-top: 0.5rem;
}
</style>