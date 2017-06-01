<template>
	<!-- 物美特惠页面 -->
    <div class="vipprefrenc-page">
	<!-- 评论页头部 -->
		<div class="vipprefrenc-head">
			<a href="javascript:history.back(-1)">
				<img src="../../src/assets/vip_img/vipcomment1.jpg" alt="" class="vipprefrencimg1">
			</a>
			<p>会员权益</p>
			<img src="../../src/assets/vip_img/vipcomment2.jpg" alt="" class="vipprefrencimg2">
		</div>
	<!-- 评论页中间部分 -->
	<div class="vipprefrenc-centert">
		<dl class="vipprefrenc-centert1">
			<dt>
				<img src="../../src/assets/vip_img/wmte.png" alt="" class="vipprefrencimg9">
			</dt>
			<dd>
				<p>物美特惠</p>
				<p>物美超市购物返积分</p>
			</dd>
		</dl>
		<dl class="vipprefrenc-centert2">
			<dt class="vipprefrenc-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment7.png" alt="" >
			</dt>
			<dd class="vipprefrencpall">
				<p>权益内容：物美超市线下购物享受积分</p>
			</dd>
		</dl>
		<dl class="vipprefrenc-centert3">
			<dt class="vipprefrenc-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment5.png" alt="" >
			</dt>
			<dd class="vipprefrencpall">
				<p>权益对象：所有会员</p>
			</dd>
		</dl>
		<dl class="vipprefrenc-centert4">
			<dt class="vipprefrenc-centert-dt">
				<img src="../../src/assets/vip_img/vipcomment6.png" alt="" >
			</dt>
			<dd class="vipprefrencpall">
				<p>使用渠道：物美超市</p>
			</dd>
		</dl>
	</div>
		<!--会员权益下面部分  -->
		<div class="vipprefrenc-bottom">
			<p>权益介绍</p>
			<p>会员在实体门店，打开多点APP扫描用户二维码，计算会员订单金额，每消费10元可积1分（购买香烟、家电、促销商品及使用积分作为支付方式部分不积分）。积分在完成结账后发放到账户中</p>
			
		</div>
	</div>
	
	
</template>
<script>
	
</script>
<style type="text/css">
.vipprefrenc-page{
	width : 100%;
	height : 40rem;
	background: #F5F5F5;
}
.vipprefrenc-head{
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
.vipprefrencimg1{
	width :48%;
	height : 1.9rem;
	margin: 0 0  0 0.5rem;
}
.vipprefrencimg2{
	width :8%;
	height : 1.3rem;
	margin : 0.8rem 1rem 0 0;
}
/*中间部分*/
.vipprefrenc-centert{
	width: 100%;
	height : 15.55rem;
	line-height: 2.5rem;
	background: url(../../src/assets/vip_img/vipcomment3.png) no-repeat;
}

.vipprefrencimg9{
	width : 100%;
	height : 4.05rem ;
	margin: 1rem 0 1.5rem 0;
}
.vipprefrenc-centert1{
	display: flex;
	padding-left: 20%;
}
.vipprefrenc-centert1>dt{
	width: 23%;
}
.vipprefrenc-centert1>dd{
	height : 3rem;
	margin-top : 1rem;
	justify-content: center;
	align-items: center;
}
.vipprefrenc-centert1>dd>p:nth-of-type(1){
	height :　1rem;
	margin-left : 1rem;
}
.vipprefrenc-centert1>dd>p:nth-of-type(2){
	font-size: 0.5rem;
	width: 100%;
	height :　0.5rem;
	margin-left : 1rem;
}
.vipprefrenc-centert-dt{
	width : 10%;
	height : 1.5rem;
	justify-content: center;
	align-items: center;
}
.vipprefrenc-centert2{
	display: flex;
	font-size: 0.7rem;
	line-height: 1.5rem;
}
.vipprefrenc-centert2>dt>img{
	width : 45%;
	margin-left: 1rem;
}
.vipprefrencpall{
	margin-left: 0.5rem;
}
.vipprefrenc-centert3{
	display: flex;
	font-size: 0.7rem;
}

.vipprefrenc-centert3>dt>img{
	width : 42%;
	margin-left: 1rem;
}
.vipprefrenc-centert4{
	display: flex;
	font-size: 0.7rem;
}
.vipprefrenc-centert4>dt>img{
	width : 40%;
	margin-left: 1rem;
}
.vipprefrenc-bottom{
	width: 90%;
	height : 8.6rem;
	font-size: 0.7rem;
	padding-left: 5%;
}
.vipprefrenc-bottom>p:nth-of-type(2){
	font-size: 0.7rem;
	margin : 1rem 0 1rem 0;
	line-height: 1.4rem
}
.vipprefrenc-bottom>p:nth-of-type(1){
	font-size: 0.8rem;
	margin-top: 0.5rem;
}
</style>