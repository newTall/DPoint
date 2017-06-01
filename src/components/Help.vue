<template>
    <div>
        <div class="order_top">
            <div class="order_top1">
                <a href="#/home/mine"><div class="Mine-icon icon-back"></div></a>
                <span>
                    帮助中心
                </span>
            </div>
        </div>
        <div class="Help_menu">
            <a href="#/help/newhand">
                <p>新手入门</p>
                <span>＞</span>
            </a>
        </div>
        <div class="Help_menu">
            <a href="#/help/paymend">
                <p>支付方式</p>
                <span>＞</span>
            </a>
            <a href="#/help/shipping">
                <p>配送方式</p>
                <span>＞</span>
            </a>
        </div>
        <div class="Help_menu">
            <a href="#/help/return">
                <p>退货服务</p>
                <span>＞</span>
            </a>
        </div>
        <div class="Help_menu">
            <a href="#/help/question">
                <p>常见问题</p>
                <span>＞</span>
            </a>
        </div>
        <div class="Help_verson"><p>版本号:201606122200</p></div>
    </div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
    .Help_menu{
        width: 100%;
        margin-top: 0.8rem;
        font-size: 0.7rem;
    }
    .Help_menu a{
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        color: gray;
    }
    .Help_menu a:nth-of-type (2) {
        border-top: 1px solid #f6f6f6;
    }
    .Help_verson{
        margin-top: 0.8rem;
    }
    .Help_verson p{
        color: gray;
        font-size: 0.7rem;
        padding-left: 0.5rem;
    }
</style>