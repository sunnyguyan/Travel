<template>
<div>
  <div class="banner" @click="hanleBannerClick">
    <img  class="banner-img" :src="bannerImg"></img>
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe626;</span>  
        {{this.bannerImgs.length}}
      </div>
    </div>
  </div>
  <fade-animation>
  <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  props:{
    sightName:String,
    bannerImg:String,
    bannerImgs:Array
  },
  data () {
    return {
      showGallary:false
  }
},
  components: {
    CommonGallary,
    FadeAnimation
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