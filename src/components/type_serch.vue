<!--搜索-->
<template>
  <div class="cate_search">
    <div class="cate_search_head">
      <a href="javascript:history.go(-1)" class="cate_goReturn"></a>
      <form action="" class="cate_searchForm">
        <input type="text" class="cate_search_serBox" placeholder="搜索想要的商品">
      </form>
    </div>

    <div class="cate_search_hot">
      <p class="cate_search_hotWord">
        热门搜索
      </p>
      <ul class="cate_search_hotList">
        <li class="cate_search_hotListEle">啤酒</li>
        <li class="cate_search_hotListEle">牛奶</li>
        <li class="cate_search_hotListEle">面包</li>
        <li class="cate_search_hotListEle">酸奶</li>
      </ul>
    </div>
    <div class="cate_search_hot">
      <p class="cate_search_hotWord">
        历史搜索
      </p>
      <ul class="cate_search_hotList">
        <li class="cate_search_hotListEle">啤酒</li>
        <li class="cate_search_hotListEle">苹果</li>
        <li class="cate_search_hotListEle">面包</li>
        <li class="cate_search_hotListEle">牙刷</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">

</script>

<style type="text/css">
  .cate_goReturn{
    position: fixed;
    top:.5rem;
    left:.5rem;
    width:1.6rem;
    height:1.6rem;
    border-radius:50%;
    background: rgba(0,0,0,.6);
  }
  .cate_goReturn::after{
    position: absolute;
    top:.4rem;
    left:.6rem;
    content: '';
    display: block;
    width:.6rem;
    height:.6rem;
    background: transparent;
    transform:rotate(45deg);
    border-left:2px solid white;
    border-bottom:2px solid white;
  }
  .cate_search_head{
    height:2.3rem;
    box-shadow: 1px 1px 1.5px 1px #ccc;
  }
  .cate_searchForm{
    position: relative;
  }
  .cate_search_serBox{
    position: absolute;
    right:.8rem;
    top:.55rem;
    width:80%;
    height:1.4rem;
    border:1px solid #efefef;
    background: url(../assets/type_img/search_gray.png) top left/1.3rem 1.3rem no-repeat;
    text-indent:1.5rem;
  }
  .cate_search_hot{
    display: flex;
    flex-direction:column;
    align-items: center;
    color: #888;
    font-size: .85rem;
  }
  .cate_search_hotWord{
    width:95%;
    color: #888;
    font-size: .7rem;
    line-height:2.3rem;
    margin-top:.3rem;
    border-bottom:1px solid #e0e0e0;
  }
  .cate_search_hotList{
    width:95%;
    display: flex;
  }
  .cate_search_hotListEle{
    padding:.3rem .5rem;
    border:1px solid #e0e0e0;
    margin:.5rem .5rem 0 0;
    border-radius:1rem;
    font-size:.7rem;
  }
</style>
