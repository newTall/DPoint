<template>
	<!-- 点击vip头部会员中心跳转 -->
	<div class="vip-minevip">
		<!--头部 --> 
		<div class="vipminehead">
			<a href="javascript:history.back(-1)" class="backvipmine">
				<img src="../assets/cart_img/vipmine1.jpg" alt="" class="vipimgtogo">
			</a>
			<p>我的会员</p>
			<router-link to="Vipallqy">
				<p class="vipmine-qy" style="color:red">权益说明</p>
			</router-link>
		</div>
		<!-- 定时器部分 -->
		<div class="vip-timer">
			<!-- 上半部分 -->
			<div class="vip-timer-top">
				<!-- <img src="../assets/vip_img/cvb.png" alt="" class="viptimer-bj"> -->
				<img src="../assets/vip_img/abs.png" alt="" class="viptimer-bj2">
				<div class="minescroll">
					<span class="mine-hy1" style="color :#D8E1E6;font-size: 0.5rem">普通会员</span>
					<span class="mine-hy2" style="color :#D8E1E6;font-size: 0.5rem">银卡会员</span>
					<span class="mine-hy3" style="color :#D8E1E6;font-size: 0.5rem">金卡会员</span>
					<span class="mine-hy4" style="color :#D8E1E6;font-size: 0.5rem">铂金卡会员</span>
					<span class="mine-hy5" style="color :#fff;font-size: 0.3rem">距离下一等级还有4000成长值</span>
				</div>
			</div>
			<!-- 下半部分 -->
			<div class="vip-timer-bottom">
				<p>
					积分<strong class="viptimernum">0</strong>
				</p>
				<p>
					成长值<strong class="viptimernum">0</strong>
				</p>
			</div>
		</div>
		<!-- 会员权益 -->
		<div class="vip-mine-qyall">
			<div class="vip-qyalls-center">
				<p>会员专属权益</p>
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
	</div>	
</template>
<script>
	
</script>
<style type="text/css">
.vip-minevip{
	position : relative;
	width : 100%;
	height: 35rem;
	background: #f0f0f0;
}
.vipmine-qy{
	margin-right: .5rem;
}
.vipminehead{
	position : fixed;
	top : 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	height: 2.1rem;
	font-size: 0.8rem;
	background: #fff;
}
.backvipmine{
	margin-left: .6rem;
}
.vipimgtogo{
	width :1.5rem;
	height :1.5rem;
}
/*第二部分 定时器动画上半部分*/
.vip-timer{
	width : 100%;
	height : 16rem;
	background: #fff;
}
.vip-timer-top{
	width :100%;
	height: 12rem;
	background: url(../../src/assets/vip_img/cvb.png);
	background-size : 100% 100%;
}
.viptimer-bj{
	width :100%;
	height: 12rem;
}
/*定时器动画下半部分*/
.vip-timer-bottom{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width : 100%;
	height : 2.1rem;
	font-size: 0.8rem;
	color : #A5A5A5;
}
.viptimernum{
	color : #FFBC66;
	margin-left: 1rem;
}
.vip-mine-qy{
	height :20rem;
}
.vip-qyalls-center{
	height :18rem;
}
.vip-allqy-dls{
	height: 4rem;
}
.vip-allqy-dls>dl{
	height: 2rem;
}
.vip-allqy-dts{
	margin-bottom: 1rem;
}
.vip-allqy-imgs{
	height : 2rem;
}
.minescroll{
	
	width: 100%;
	height: 0.2rem;
	background: #62686D;
}
.viptimer-bj2{
	margin : 2.5rem 5rem 2rem 7rem;
	width : 23%;
	height: 4rem;
}
.minescroll{
	position : relative;
}
.minescroll>span{
	margin-left :1rem;
}
.mine-hy5{
	position : absolute;
	top : 2rem;
	right : 4rem;
	width: 43%;
    height :0.3rem;

}
</style>