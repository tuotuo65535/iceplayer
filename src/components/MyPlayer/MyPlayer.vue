<!-- Created by chenzy on 2018/4/13. -->
<!-- 播放器组件 -->
<template>
    <div class="my-player">
        <!-- 正常的播放器 -->
        <transition name="normal"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                    @after-leave="afterLeave"
        >
            <div v-show="fullscreen" class="normal-player">
                <!-- 背景图 -->
                <div>
                    <img :src="currentSong.img" width="100%" height="100%"/>
                </div>

                <!-- 顶部 -->
                <div class="top">
                    <!-- 顶部 -->
                    <div @click="back" class="back">
                        <i class="icon-back"></i>
                    </div>
                    <div>
                        <p v-html="currentSong.name"></p>
                        <p v-html="currentSong.singer" class="desc"></p>
                    </div>
                </div>
            </div>

        </transition>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {
                // 标志位，歌曲已缓存好，可以播放了
                songCanplay: false,
                // 当前播放时间
                currentTime: 0,
                // 当前的歌词
                currentLyric: null,
                // 当前的歌词在第几行
                currentLyricLine: 0,
                // 当前在哪个分页
                currentDot: 'cd',
                // cd页小段歌词
                playingLyric: '无歌词数据',
                // 是否显示播放列表
                showList: false
            }
        },
        props: {},
        watch: {
            //监控当前歌曲
            currentSong(newValue, oldValue) {
                //播放列表没有歌曲就退出
                if (!newValue.id) {
                    return;
                }

                if (newValue.id === oldValue.id) {

                }
            }
        },
        filter: {
            format: function (value) {
                if (!value) return ''
                return myTime.format(value)
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>