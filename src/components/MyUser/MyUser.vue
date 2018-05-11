<!-- Created by chenzy on 2018/4/19. -->
<!-- 个人中心 组件 -->
<template>
    <transition name="slide">
        <div class="my-user">
            <div class="back">
                <i class="icon-back"></i>
            </div>

            <div class="switches-wrapper">
                <my-switches :switches="switches"></my-switches>
            </div>

            <div ref="playBtn" class="play-btn">
                <i class="icon-play"></i>
                <span class="text">随机播放全部</span>
            </div>

            <!-- 两个列表 -->
            <div class="list-wrapper" ref="listWrapper">
                <!-- 我的收藏 -->
                <my-scroll ref="favoriteRef" class="list-scroll">
                    <div class="list-inner">
                        <my-song-list></my-song-list>
                    </div>
                </my-scroll>

                <!-- 最近播放 -->
                <my-scroll ref="playListRef">
                    <div class="list-inner">
                        <my-song-list></my-song-list>
                    </div>
                </my-scroll>
            </div>

            <div class="no-result-wrapper" v-show="noResult">
                <my-no-result></my-no-result>
            </div>

        </div>
    </transition>
</template>

<script>
    import MySwitches from '@/components/base/MySwitches/MySwitches'
    import MyScroll from '@/components/base/MyScroll/MyScroll'
    import MySongList from '@/components/base/MySongList/MySongList'
    import MyNoResult from '@/components/base/MyNoResult/MyNoResult'
    import { mapActions, mapGetters } from 'vuex'
    import { SingerSong } from '@/common/js/SingerSongClass.js'
    import { playlistMixin } from '@/common/js/mixin.js'

    export default {
        mixins: [playlistMixin],
        components: {
            MySwitches,
            MyScroll,
            MySongList,
            MyNoResult,
        },
        data() {
            return {
                switches[
                    {name: '我的收藏'},
                    {name: '最近播放'}
                ],
                currentIndex: 0
            }
        },
        props: {},
        watch: {},
        methods: {
            ...mapActions(['savefavoriteList', 'delfavoriteList', 'insertSong', 'randomPlay'])
        },
        filters: {},
        // 若要实现更复杂的数据变换，你应该使用计算属性
        computed: {
            ...mapGetters(['pmapGetterslayHistory', 'favoriteList']),
            noResult() {
                if (this.currentIndex === 0) {
                    return !this.favoriteList.length
                }
                if (this.currentIndex === 1){
                    return !this.playHistory.length
                }
            }
        },
        created() {},
        mounted() {},
        destroyed() {}
    }
</script>

<style lang="scss" scoped>
    @import '~@/common/scss/const.scss';
    @import '~@/common/scss/mymixin.scss';

    .my-user {
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 100;
        width: 100%;
        background: $color-background;
        &.slide-enter-active, &.slide-leave-active {
            transition: all 0.3s;
        }
        &.slide-enter, &.slide-leave-to {
            transform: translate3d(100%, 0, 0);
        }
        .back {
            position: absolute;
            top: 0;
            left: 6px;
            z-index: 50;
            .icon-back {
                display: block;
                padding: 10px;
                font-size: $font-size-large-x;
                color: $color-theme;
            }
        }
        .switches-wrapper {
            margin: 10px 0 30px 0;
        }
        .play-btn {
            box-sizing: border-box;
            width: 135px;
            padding: 7px 0;
            margin: 0 auto;
            text-align: center;
            border: 1px solid  $color-text-l;
            color: $color-text-l;
            border-radius: 100px;
            font-size: 0;
            .icon-play {
                display: inline-block;
                vertical-align: middle;
                margin-right: 6px;
                font-size: $font-size-medium-x;
            }
            .text {
                display: inline-block;
                vertical-align: middle;
                font-size: $font-size-small;
            }
        }
        .list-wrapper {
            position: absolute;
            top: 110px;
            bottom: 0;
            width: 100%;
            .list-scroll {
                height: 100%;
                overflow: hidden;
                .list-inner {
                    padding: 20px 30px
                }
            }
        }
        .no-result-wrapper {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>