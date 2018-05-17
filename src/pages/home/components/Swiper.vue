<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl"></img>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data () {
        return {
           swiperOption:{
               pagination:'.swiper-pagination',
               loop:true
           }
        };
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }



 
}

</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff !important
    .wrapper
      overflow: hidden
      width: 100%
      height: 0
      background: #eee
      padding-bottom:31%
      .swiper-img
        width: 100%
</style>