<template>
    <div class="Header">
        <div class="menu">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-pc"
                mode="horizontal"
                @select="handleSelectMenu"
                active-text-color="#ffd04b">
                <el-menu-item v-for="item in menuList" :key="item.name" :index="item.index">{{ item.name }}</el-menu-item>
            </el-menu>
        </div>
        <div class="logo"></div>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    data () {
        return {
            activeIndex: 'characters',
            menuList: [
                {
                    name: 'HOME',
                    index: 'home',
                    path: '/home'
                },
                {
                    name: 'NEWS',
                    index: 'news',
                    path: '/news'
                },
                {
                    name: 'WEAPONS',
                    index: 'weapons',
                    path: '/weapons'
                },
                {
                    name: 'MAP',
                    index: 'map',
                    path: '/map'
                },
                {
                    name: 'CHARACTERS',
                    index: 'characters',
                    path: '/characters'
                },
                {
                    name: 'WALLPAPER',
                    index: 'wallpaper',
                    path: '/wallpaper'
                }
            ]
        }
    },
    methods: {
        /** 切换menu */
        handleSelectMenu(key) {
            this.activeIndex = key;
            this.$router.push({
                path: key
            });
        }
    }
})
</script>

<style lang="stylus" scoped>
/** pc  */
@media screen and (min-width: 1024px) {
    .Header {
        width: 100%;
        height: 260px;
        background: url('../assets/bg.png') no-repeat;
        .menu {
            padding: 40px 60px
            .el-menu-pc {
                height: 50px;
                border-bottom: none
                background-color: rgba(255, 255, 255, 0.2)
                border-radius: 8px
                border-left: 10px solid #ffd04b
                border-right: 10px solid #ffd04b
                .el-menu-item {
                    height: 100%
                    line-height: 50px
                    border-bottom: none
                    background-color: transparent
                    color: #FFFFFF
                }
                .el-menu-item:hover {
                    color: #ffd04b
                }
            }
        }
        .logo {
            background: url('../assets/logo.png') no-repeat;
            width: 270px;
            height: 65px;
            margin-left: 10%
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