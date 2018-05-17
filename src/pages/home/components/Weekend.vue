<template>
<div>
  <div class="title">
      周末去哪儿
  </div>
  <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
         <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl"></img>
         </div>
         <div class="item-info">
             <p class="item-title">{{item.title}}</p>
             <p class="item-desc">{{item.desc}}</p>
         </div>
      </li>
  </ul>
 </div> 
</template>

<script>
export default {
  name:"HomeRecommend",
  data () {
    return {
        recommendList:[{
            id:"0001",
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
            title:'南京万达主题乐园',
            desc:'南京特色'
        },{
            id:"0002",
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
            title:'南京万达主题乐园',
            desc:'南京特色'
        },{
            id:"0003",
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
            title:'南京万达主题乐园',
            desc:'南京特色'
        },{
            id:"0004",
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
            title:'南京万达主题乐园',
            desc:'南京特色'
        },{
            id:"0005",
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
            title:'南京万达主题乐园',
            desc:'南京特色'
        }]
    };
  },

 
}

</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
      line-height:.8rem
      background:#eee
      text-indent:.2rem
      margin-top:.2rem
    .item-img-wrapper
      overflow:hidden
      height:0
      padding-bottom:33.9%
      .item-img
        width:100%
    .item-info
      min-width:0
      flex:1
      padding:.1rem
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellpsis()
      .item-desc
        line-height:.4rem
        color:#ccc
        ellpsis()
      .item-button
        line-height:.44rem
        margin-top:.16rem
        background:#ff9300
        padding:0 .1rem
        border-radius: .06rem





</style>