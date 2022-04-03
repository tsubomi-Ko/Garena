<template>
  <div class="characters">
    <Header />
    <div class="content">
        <div class="content-title">
            <div class="line-left"></div>
            <div class="title">
                CHARACTERS
            </div>
            <div class="line-right"></div>
        </div>
        <div class="content-image-pc">
            <el-row class="big-image-row" :gutter="50">
                <el-col :span="8" v-for="item in roleList" :key="item.name" class="big-image-col">
                    <div class="grid-content-big">
                        <img :src="item.imageUrl" alt="">
                        <div class="role-info">
                            <div>姓名: {{ item.name }}</div>
                            <div>年龄: {{ item.age }}</div>
                            <div>生日: {{ item.birthday }}</div>
                            <div>角色: {{ item.role }}</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="big-image-col">
                    <div class="grid-content-big">
                        <el-row class="small-image-row">
                            <el-col :span="12" v-for="item in imageListSmall" :key="item.name" class="small-image-col">
                                <div class="grid-content-small">
                                    <img :src="item.imageUrl" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-image-ipad">
            <el-row class="big-image-row" :gutter="50">
                <el-col :span="12" v-for="item in roleList" :key="item.name" class="big-image-col">
                    <div class="grid-content-big">
                        <img :src="item.imageUrl" alt="">
                        <div class="role-info">
                            <div>姓名: {{ item.name }}</div>
                            <div>年龄: {{ item.age }}</div>
                            <div>生日: {{ item.birthday }}</div>
                            <div>角色: {{ item.role }}</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" class="big-image-col">
                    <div class="grid-content-big">
                        <el-row class="small-image-row">
                            <el-col :span="12" v-for="item in imageListSmall" :key="item.name" class="small-image-col">
                                <div class="grid-content-small">
                                    <img :src="item.imageUrl" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-image-iphone">
            <el-row class="big-image-row" :gutter="50">
                <el-col :span="24" v-for="item in roleList" :key="item.id" class="big-image-col">
                    <div class="grid-content-big">
                        <img :src="item.imageUrl" alt="">
                        <div class="role-info">
                            <div>姓名: {{ item.name }}</div>
                            <div>年龄: {{ item.age }}</div>
                            <div>生日: {{ item.birthday }}</div>
                            <div>角色: {{ item.role }}</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24" class="big-image-col">
                    <div class="grid-content-big">
                        <el-row class="small-image-row">
                            <el-col :span="12" v-for="item in imageListSmall" :key="item.name" class="small-image-col">
                                <div class="grid-content-small">
                                    <img :src="item.imageUrl" alt="">
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="portrait-screen">
        <div class="scape-image"></div>
        <div class="screen-text">为了您更好的体验,请用横屏浏览</div>
    </div>
  </div>
</template>

<script type="text/javascript" >
import Header from '@/components/Header';
import { webAPI } from '../../api/service';

export default {
  name: 'characters',
  components: {
      Header
  },
  data () {
      return {
          imageList: [
              {
                  id: '1',
                  name: 'one',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  id: '2',
                  name: 'two',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  id: '3',
                  name: 'three',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  id: '4',
                  name: 'four',
                  imageUrl: require('@/assets/img-1.jpg')
              },
              {
                  id: '5',
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
          ],
          roleList: []
      }
  },
  async created() {
      await this.getRoleList();
  },
  methods: {
      async getRoleList() {
        const res = await webAPI('/api/list', 'GET');
        res.data.forEach(r => {
            this.imageList.forEach(i => {
                if (r.id === i.id) {
                    this.roleList.push({
                        id: r.id,
                        name: r.name,
                        age: r.age,
                        birthday: r.birthday,
                        role: r.role,
                        imageUrl: i.imageUrl,
                    });
                }
            });
        });
      }
  }
}
</script>

<style lang="stylus" scoped>

/** 竖屏 */
@media screen and (orientation: portrait) {
    .characters {
        width: 100%
        height: 100%;
        overflow: hidden
        position: absolute
        top: 0
        left: 0
        .content {
            background-color: #1D2229
            .content-title {
                display: flex
                justify-content: space-between
                align-items: center
                padding: 30px 0
                .line-left {
                    height: 1px
                    background-color: #4d4d4d
                    flex-grow: 0.5
                }
                .title {
                    width: 200px
                    height: 40px
                    border: 1px solid #4d4d4d
                    display: flex
                    justify-content: center
                    align-items: center
                    color: #FFFFFF
                }
                .line-right {
                    height: 1px
                    background-color: #4d4d4d
                    flex-grow: 0.5
                }
            }
        }
        .portrait-screen {
            position absolute
            left: 0
            top: 0
            width: 100%
            height 100%
            background: rgba(0,0,0,0.5)
            display: flex
            flex-direction: column
            justify-content: space-around
            color: #FFFFFF
            .scape-image {
                position relative
                width: 300px;
                height: 200px;
                top: 20%
                left: 0
                background: url('../../assets/scape.png') no-repeat;
                background-size: 100%
                margin: 0 auto
                animation: spin 1s infinite;
                -webkit-animation: spin 1s infinite;
            }
            @keyframes spin {
                0% {
                    transform: rotate(0)
                }
                50% {
                    transform: rotate(90deg)
                }
                100% {
                    transform: rotate(0)
                }
            }
        }
    }
}

/** 横屏 */
@media screen and (orientation: landscape) {
    .characters {
        margin: 0 auto;
        min-height: 100vh;
        overflow: hidden;
        .content {
            background-color: #1D2229
            .content-title {
                display: flex
                justify-content: space-between
                align-items: center
                padding: 30px 0
                .line-left {
                    height: 1px
                    background-color: #4d4d4d
                    flex-grow: 0.5
                }
                .title {
                    width: 200px
                    height: 40px
                    border: 1px solid #4d4d4d
                    display: flex
                    justify-content: center
                    align-items: center
                    color: #FFFFFF
                }
                .line-right {
                    height: 1px
                    background-color: #4d4d4d
                    flex-grow: 0.5
                }
            }
        }
        .portrait-screen{
            display: none
        }
    }
}


/** pc  */
@media screen and (min-width: 1024px) {
    .content-image-pc {
        display: flex
        justify-content: center
        padding: 0 100px
        .big-image-row {
            .big-image-col {
                margin-bottom: 50px
                max-height: 402px
                display: flex
                justify-content: center
                .grid-content-big {
                    max-width: 403px
                    height: 100%
                    position relative
                    .role-info{
                        width: 100%
                        background: rgba(255,255,255,0.5)
                        position: absolute
                        bottom: 5px
                        left: 2px
                    }
                    img {
                            width: 100%
                            height: 100%
                    }
                        .small-image-row {
                            width: 100%
                            height: 100%
                            .small-image-col {
                                margin-bottom: 25px
                                width: 45%
                                height: 45%
                                margin-bottom: 10%
                                .grid-content-small {
                                    width: 100%
                                    height 100%
                                    img {
                                        width: 100%
                                        height: 100%
                                    }
                                }
                            }
                            .small-image-col:nth-child(2n) {
                                margin-left: 10%
                            }
                        }
                }
            }
        }
    }
    .content-image-ipad {
        display: none
    }
    .content-image-iphone {
        display: none
    }
}

/** ipad  */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .content-image-pc {
        display: none
    }
    .content-image-ipad {
        display: flex
        justify-content: center
        padding: 0 50px
        .big-image-row {
            .big-image-col {
                margin-bottom: 50px
                max-height: 402px
                display: flex
                justify-content: center
                .grid-content-big {
                    max-width: 403px
                    height: 100%
                    position relative
                    .role-info{
                        width: 100%
                        background: rgba(255,255,255,0.5)
                        position: absolute
                        bottom: 5px
                        left: 2px
                    }
                    img {
                        width: 100%
                        height: 100%
                    }
                    .small-image-row {
                        width: 100%
                        height: 100%
                        .small-image-col {
                            margin-bottom: 25px
                            width: 45%
                            height: 45%
                            margin-bottom: 10%
                            .grid-content-small {
                                width: 100%
                                height 100%
                                img {
                                    width: 100%
                                    height: 100%
                                }
                            }
                        }
                        .small-image-col:nth-child(2n) {
                            margin-left: 10%
                        }
                    }
                }
            }
        }
    }
    .content-image-iphone {
        display: none
    }
}

/** iphone */
@media screen and (max-width: 768px) {
    .content-image-pc {
        display: none
    }
    .content-image-ipad {
        display: none
    }
    .content-image-iphone {
        display: flex
        justify-content: center
        padding: 0 25px
        .big-image-row {
            .big-image-col {
                margin-bottom: 50px
                max-height: 402px
                display: flex
                justify-content: center
                .grid-content-big {
                    max-width: 403px
                    height: 100%
                    position relative
                    .role-info{
                        width: 100%
                        background: rgba(255,255,255,0.5)
                        position: absolute
                        bottom: 5px
                        left: 2px
                    }
                    img {
                        width: 100%
                        height: 100%
                    }
                    .small-image-row {
                        width: 100%
                        height: 100%
                        .small-image-col {
                            margin-bottom: 25px
                            width: 45%
                            height: 45%
                            margin-bottom: 10%
                            .grid-content-small {
                                width: 100%
                                height 100%
                                img {
                                    width: 100%
                                    height: 100%
                                }
                            }
                        }
                        .small-image-col:nth-child(2n) {
                            margin-left: 10%
                        }
                    }
                }
            }
        }
    }
}
</style>