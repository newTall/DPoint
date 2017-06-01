<template>
   <div class="content_canc">
        <div class="content_none">
            <img src="../assets/mine_img/order-list-empty.png" alt="">
            <p>近三个月内无订单记录</p>
            <a href="#/home" class="content_none_text">去逛逛</a>
        </div>
   </div>
</template>
<script>
    
</script>
<style type="text/css">
    .content_none{
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content_none img{
        width: 128px;
        heigjt: 128px;
        margin-top: 70px;
        margin-bottom: 30px;
    }
    .content_none p{
        font-size: 0.75rem;
        color: #979797;
        margin-bottom: 30px;
    }
    .content_none_text{
        display: flex;
        align-items: center;
        height: 2rem;
        background: #ff6d01;
        font-size: 0.7rem;
        color: #fff;
        padding:0 40px;
        border-radius: 4px;
    }
</style>