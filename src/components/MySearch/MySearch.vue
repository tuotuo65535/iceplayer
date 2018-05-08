<!-- Created by chenzy on 2018/5/8. -->
<!-- 搜索页组件 -->
<template>
    <div class="my-search">
        <!-- 搜索框 -->
        <div class="search-box-wrapper">
            <my-search-box ref="searchBoxRef"></my-search-box>
        </div>

        <div class="shortcut-wrapper" v-show="!query" ref="shortcutRef">
            <my-scroll class="shortcut" ref="scrollRef"
                       :data="scrollData" :refreshDelay="refreshDelay">
                <div>
                    <!-- 热门搜索 -->
                    <div class="hot-key">
                        <h1 class="title">热门搜索</h1>
                        <ul>
                            <li class="item" v-for="item in hotkey">
                                <span>{{item.k}}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 搜素历史 -->
                    <div class="search-history" v-show="searchHistory.length">
                        <h1 class="title">
                            <span class="text">搜索历史</span>
                            <span class="clear">
                                <i class="icon-clear"></i>
                            </span>
                        </h1>

                        <my-search-list :searches="searchHistory"></my-search-list>
                    </div>
                </div>
            </my-scroll>
        </div>

        <!-- 搜索结果 -->
        <div class="search-result" ref="resultRef" v-show="query">
            <my-suggest-List ref="suggestRef"></my-suggest-List>
        </div>

        <!-- 清空弹窗 -->
        <my-confirm ref="confirmRef"></my-confirm>

        <router-view></router-view>
    </div>
</template>

<script>
    import MySearchBox from '@/components/base/MySearchBox/MySearchBox'
    import MySuggestList from '@/components/MySuggestList/MySuggestList'
    import MySearchList from '@/components/base/MySearchList/MySearchList'
    import MyConfirm from '@/components/base/MyConfirm/MyConfirm'
    import MyScroll from '@/components/base/MyScroll/MyScroll'
    import { getHotKey } from '@/api/search.js'
    import { mapActions, mapGetters } from 'vuex'
    import { playlistMixin } from '@/common/js/mixin.js'

    export default {
        mixins: [playlistMixin],
        components: {
            MySearchBox,
            MySuggestList,
            MySearchList,
            MyConfirm,
            MyScroll
        },
        data() {
            return {
                // 热门搜索关键字
                hotkey: [],
                // 搜索字段
                query: '',
                // 是否显示歌手
                zhida: true,
                refreshDelay: 100
            }
        },
        methods: {
            ...mapActions(['saveHistory', 'delHistory', 'clearHistory']),
            // 获取热搜索数据
            _getHotKey() {
                getHotKey().then(res => {
                    if (res.code === 0) {
                        this.hotkey= res.data.hotkey.slice(0,10)
                    }
                })
            },
            // 当有迷你播放器时，调整滚动底部距离
            handlePlaylist(playlist) {
                let bottom = playlist.length > 0 ? '60px' : ''

                this.$refs.shortcutRef.style.bottom = bottom
                this.$refs.scrollRef.refresh()

                this.$refs.resultRef.style.bottom = bottom
                this.$refs.suggestRef.refresh()
            }
        },
        computed: {
            ...mapGetters(['searchHistory']),
            scrollData() {
                return this.hotkey.concat(this.searchHistory)
            }
        },
        created() {
            this._getHotKey()
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/common/scss/const.scss';
    @import '~@/common/scss/mymixin.scss';

    .my-search {
        .search-box-wrapper {
            margin: 20px;
        }
        .shortcut-wrapper {
            position: fixed;
            top: 178px;
            bottom: 0;
            width: 100%;
            .shortcut {
                height: 100%;
                overflow: hidden;
                .hot-key {
                    // height: 170px;
                    // overflow: hidden;
                    margin: 0 20px 20px 20px;
                    .title {
                        margin-bottom: 20px;
                        font-size: $font-size-medium;
                        color: $color-text-l;
                    }
                    .item {
                        display: inline-block;
                        padding: 5px 10px;
                        margin: 0 20px 10px 0;
                        border-radius: 6px;
                        background: $color-highlight-background;
                        font-size: $font-size-medium;
                        color: $color-text-d;
                        &.special {
                            color: rgba(255, 255, 255, 0.7);
                            // border: 1px solid #fc4524;
                        }
                    }
                }
                .search-history {
                    position: relative;
                    margin: 0 20px;
                    .title {
                        display: flex;
                        align-items: center;
                        height: 40px;
                        font-size: $font-size-medium;
                        color: $color-text-l;
                        .text {
                            flex: 1;
                        }
                        .clear {
                            @include extend-click();
                            .icon-clear {
                                font-size: $font-size-medium;
                                color: $color-text-d;
                            }
                        }
                    }
                }
            }
        }
        .search-result {
            position: fixed;
            width: 100%;
            top: 178px;
            bottom: 0;
        }
    }
</style>