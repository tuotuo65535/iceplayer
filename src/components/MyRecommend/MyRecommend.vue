<!-- Created by chenzy on 2018/4/19. -->
<!-- 推荐页组件 -->
<template>
    <div class="my-recommend" ref="recommendRef">
        <!-- better-scroll 滚动组件，当请求到lists时才渲染 -->
        <my-scroll ref="scroll" :data="lists" class="recommend-content">
            <div>
                <div v-if="recommends.length" class="slider-wrapper">
                </div>

                <!-- 歌单推荐列表 -->
                <div class="recommend-list">
                    <h1>热门歌单推荐</h1>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </my-scroll>

        <router-view></router-view>
    </div>
</template>

<script>
    import { getRecommend, getList } from '@/api/recommend.js'
    import MyScroll from '@/components/base/MyScroll/MyScroll'
    export default {
        components: {
            MyScroll
        },
        data () {
            return {
                recommends: [],
                lists: []
            }
        },
        created () {
            this._getRecommend()
        },
        methods: {
            _getRecommend () {
                getRecommend().then((res) => {
                    if (res.code === 0) {
                        this.recommends = res.data.slider
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/common/scss/const.scss";
    @import "~@/common/scss/mymixin.scss";

    .my-recommend {
        position: fixed;
        width: 100%;
        top: 88px;
        bottom: 0;
        .recommend-content {
            height: 100%;
            overflow: hidden;
            .slide-wrapper {
                position: relative;
                width: 100%;
                overflow: hidden;
            }
        }
    }
</style>