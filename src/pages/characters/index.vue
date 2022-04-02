<template>
  <div class="characters">
    <Header />
    <div class="content">
        <div class="content-title">CHARACTERS</div>
        <div class="content-image-pc">
            <el-row class="big-image-row">
                <el-col :span="8" v-for="item in imageList" :key="item.name" class="big-image-col">
                    <div class="grid-content-big">
                        <img :src="item.imageUrl" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-row class="small-image-row">
                        <el-col :span="12" v-for="item in imageListSmall" :key="item.name" class="small-image-col">
                            <div class="grid-content-small">
                                <img :src="item.imageUrl" alt="">
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'characters',
  components: {
      Header
  },
  data () {
      return {
          imageList: [
              {
                  name: 'one',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'two',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'three',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'four',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'five',
                  imageUrl: require('@/assets/img-1.jpg')
              }
          ],
          imageListSmall: [
              {
                  name: 'one',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'two',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'three',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  name: 'four',
                  imageUrl: require('@/assets/img-1.jpg')
              },
          ]
      }
  }
}
</script>

<style lang="stylus" scoped>
/** pc  */
@media screen and (min-width: 1024px) {
    .characters {
        margin: 0 auto;
        min-height: 100vh;
        overflow: hidden;
        .content {
            background-color: black
            .content-title {
                
            }
        }
    }
}

/** ipad  */
@media screen and (min-width: 768px) and (max-width: 1024px) {

}

/** iphone */
@media screen and (max-width: 768px) {

}
</style>