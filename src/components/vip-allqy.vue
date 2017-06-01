<template>
	<!-- 我的全部权益页面 -->
    <div class="vipallqy-page">
	<!-- 评论页头部 -->
		<div class="vipallqy-head">
			<a href="javascript:history.back(-1)">
			   <img src="../../src/assets/vip_img/vipcomment1.jpg" alt="" class="vipallqyimg1">
			</a>
			<p>我的全部权益</p>
		</div>
	<!-- 全部权益中间部分 -->
		<div class="vip-qyalls-center">
		    <p>我的全部权益</p>
		    <router-link to="Vipcomment" class="vip-allqy-dls">
				<dl >
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/one.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">评论奖励</dd>
				</dl>
			</router-link>
			<router-link to="/Vipforetaste" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/two.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">1分钱试吃</dd>
				</dl>
			</router-link>
			<router-link to="/Vipenjoyact" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/three.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">活动尊享</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/four.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">物美特惠</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/qy8.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">百天礼包</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/qy6.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">周年礼包</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/qy4.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">积分加价购</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/1y2.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">生日特权</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl>
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/qy3.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">新手特权</dd>
				</dl>
			</router-link>
			<router-link to="/Vipprefrenc" class="vip-allqy-dls">
				<dl >
					<dt class="vip-allqy-dts">
						<img src="../../src/assets/vip_img/qy5.png" alt="" class="vip-allqy-imgs">
					</dt>
					<dd class="vip-allqy-dds">专享礼包</dd>
				</dl>
			</router-link>
		</div>
	</div>
	
	
</template>
<script>
	
</script>
<style type="text/css">
.vipallqy-page{
	width : 100%;
	height : 40rem;
	background: #F5F5F5;
}
.vipallqy-head{
	display: flex;
	margin-bottom: 0.5rem;
	width :　100%;
	height : 2.75rem;
	font-size: 0.7rem;
	line-height: 2.75rem;
	background: #fff;
	box-shadow: 0.2rem 0.2rem 0.5rem #888888;
}
.vipallqy-head>p{
	margin-left: 25%;
}
.vipallqyimg1{
	width :48%;
	height : 1.9rem;
	margin: 0 0  0 0.5rem;
}
/*中间部分*/
.vip-qyalls-center{
	padding-left: 5%;
	padding-right: 5%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width : 90%;
	height : 12rem;
	margin-top :1rem;
	background: #fff;
}
.vip-qyalls-center>p{
	width: 100%;
	height : 1.9rem;
	font-size: 0.5rem;
	line-height: 1.9rem;
	text-indent: 0.3rem;
	border-bottom: 1px solid #F7F7F7;
}
.vip-allqy-dls{
	margin:0.3rem 0  0 0.1rem;
	width : 23%;
	height :　2rem;
	text-align: center;
}
.vip-allqy-dls:last-of-type{
   margin-right: 51%;
}
.vip-allqy-dts{
	width: 100%;
	height : 1.5rem;
	line-height: 1.5rem;
	margin-left : 0.2rem;
}
.vip-allqy-imgs{
	width: 50%;
	height : 1.5rem;
	margin-right: 0.2rem;
}
.vip-allqy-dds{
	width: 100%;
	height: 1rem;
	margin-top: 0.5rem;
	font-size: 0.5rem;
	color : #808080;
}

</style>