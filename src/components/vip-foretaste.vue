<template>
	<!-- 1分钱试吃页面 -->
    <div class="vipforetaste-page">
	<!-- 评论页头部 -->
		<div class="vipforetaste-head">
			<a href="javascript:history.back(-1)">
				<img src="../../src/assets/vip_img/vipcomment1.jpg" alt="" class="vipforetasteimg1">
			</a>
			<p>会员权益</p>
			<img src="../../src/assets/vip_img/vipcomment2.jpg" alt="" class="vipforetasteimg2">
		</div>
	<!-- 评论页中间部分 -->
	<div class="vipforetaste-centert">
		<dl class="vipforetaste-centert1">
			<dt>
				<img src="../../src/assets/vip_img/sc.png" alt="" class="vipforetasteimg9">
			</dt>
			<dd>
				<p>1分钱试吃</p>
				<p>每月新品，邀您尝鲜</p>
			</dd>
		</dl>
		<dl class="vipforetaste-centert2">
			<dt class="vipforetaste-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment7.png" alt="" >
			</dt>
			<dd class="vipforetastepall">
				<p>权益内容：每月享受1分钱试吃权益</p>
			</dd>
		</dl>
		<dl class="vipforetaste-centert3">
			<dt class="vipforetaste-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment5.png" alt="" >
			</dt>
			<dd class="vipforetastepall">
				<p>权益对象：银卡-铂金卡会员</p>
			</dd>
		</dl>
		<dl class="vipforetaste-centert4">
			<dt class="vipforetaste-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment6.png" alt="" >
			</dt>
			<dd class="vipforetastepall">
				<p>使用渠道：多点</p>
			</dd>
		</dl>
	</div>
		<!--会员权益下面部分  -->
		<div class="vipforetaste-bottom">
			<p>权益介绍</p>
			<p>1. 银卡-铂金卡会员，每月可在多点会员中心-会员专属权益-1分钱试吃权益页面，进入试吃专区，选择可试吃商品，敬请关注</p>
			<p>2. 级别越高，可试吃商品越多</p>
		</div>
	</div>
	
	
</template>
<script>
	
</script>
<style type="text/css">
.vipforetaste-page{
	width : 100%;
	height : 40rem;
	background: #F5F5F5;
}
.vipforetaste-head{
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
.vipforetasteimg1{
	width :48%;
	height : 1.9rem;
	margin: 0 0  0 0.5rem;
}
.vipforetasteimg2{
	width :8%;
	height : 1.3rem;
	margin : 0.8rem 1rem 0 0;
}
/*中间部分*/
.vipforetaste-centert{
	width: 100%;
	height : 15.55rem;
	line-height: 2.5rem;
	background: url(../../src/assets/vip_img/vipcomment3.png) no-repeat;
}

.vipforetasteimg9{
	width : 100%;
	height : 4.05rem ;
	margin: 1rem 0 1.5rem 0;
}
.vipforetaste-centert1{
	display: flex;
	padding-left: 20%;
}
.vipforetaste-centert1>dt{
	width: 23%;
}
.vipforetaste-centert1>dd{
	height : 3rem;
	margin-top : 1rem;
	justify-content: center;
	align-items: center;
}
.vipforetaste-centert1>dd>p:nth-of-type(1){
	height :　1rem;
	margin-left : 1rem;
}
.vipforetaste-centert1>dd>p:nth-of-type(2){
	font-size: 0.5rem;
	width: 100%;
	height :　0.5rem;
	margin-left : 1rem;
}
.vipforetaste-centert-dt{
	width : 10%;
	height : 1.5rem;
	justify-content: center;
	align-items: center;
}
.vipforetaste-centert2{
	display: flex;
	font-size: 0.7rem;
	line-height: 1.5rem;
}
.vipforetaste-centert2>dt>img{
	width : 45%;
	margin-left: 1rem;
}
.vipforetastepall{
	margin-left: 0.5rem;
}
.vipforetaste-centert3{
	display: flex;
	font-size: 0.7rem;
}

.vipforetaste-centert3>dt>img{
	width : 42%;
	margin-left: 1rem;
}
.vipforetaste-centert4{
	display: flex;
	font-size: 0.7rem;
}
.vipforetaste-centert4>dt>img{
	width : 40%;
	margin-left: 1rem;
}
.vipforetaste-bottom{
	width: 90%;
	height : 8.6rem;
	font-size: 0.7rem;
	padding-left: 5%;
}
.vipforetaste-bottom>p:nth-of-type(2){
	font-size: 0.7rem;
	margin : 1rem 0 1rem 0;
	line-height: 1.4rem
}
.vipforetaste-bottom>p:nth-of-type(1){
	font-size: 0.8rem;
	margin-top: 0.5rem;
}
</style>