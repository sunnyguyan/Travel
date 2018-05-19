<template>
<div>
  <div class="banner" @click="hanleBannerClick">
    <img  class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"></img>
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界(AAA)</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe626;</span>  
        39
      </div>
    </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  data () {
    return {
      showGallary:false,
      imgs:['http://img1.qunarzz.com/sight/p0/1804/ef/ef090d8cf80ed202a3.img.jpg_r_800x800_393f5f42.jpg',
          'http://img1.qunarzz.com/sight/p0/1804/d2/d28d4b47b695a58a3.img.jpg_r_800x800_1ddd2737.jpg']
  }
},
  components: {
    CommonGallary
  },
  methods:{
    hanleBannerClick(){
      this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  }
}

</script>
<style lang="stylus" scoped >
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      display:flex
      position:absolute
      left:0
      right:0
      bottom:0
      line-height: .6rem
      color:#fff
      .banner-title
        flex:1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top:.14rem
        padding:0 .32rem
        height:.32rem
        line-height:.32rem
        border-radius:.2rem
        background: rgba(0, 0, 0, .8)
    
</style>