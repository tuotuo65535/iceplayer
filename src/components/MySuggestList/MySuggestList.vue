<!-- Created by chenzy on 2018/4/19. -->
<!-- 搜索建议页列表组件 -->
<template>
    <my-scroll class="my-suggest-list"
               ref="scrollRef"
               :data="result"
               :beforeScroll="beforeScrollData"
               :pullup="pullup">
        <ul class="suggest-list">
            <li class="suggest-item" v-for="item in result">
                <div class="icon">
                    <i :class="icon"></i>
                </div>

                <div class="name">
                    <p class="text" v-html="getSingernameOrSongname(item)"></p>
                </div>
            </li>

            <MyLoading v-show="hasMore" title=""></MyLoading>
        </ul>

        <div class="no-result-wrapper" v-if="!hasMore && !result.length">
            <my-no-result></my-no-result>
        </div>
    </my-scroll>
</template>

<script>
    import MyScroll from '@/components/base/MyScroll/MyScroll'
    import MyLoading from '@/components/base/MyLoading/MyLoading'
    import { search } from '@/api/search.js'
    import { createSingerSong } from '@/common/js/SingerSongClass.js'
    import { Singer } from '@/common/js/SingerClass.js'
    import { mapMutations, mapActions } from 'vuex'

    const TYPE_SINGER = 'singer'

    export default {
        components: {
            MyScroll,
            MyLoading
        },
        data() {
            return {
                // 当前检索页数，用于下拉加载
                page: 1,
                // 每一页的数量
                perpage: 20,
                // 接受检索结果
                result: [],
                // 标识位，是否加载完
                hasMore: true,
                beforeScrollData: true,
                pullup: true

            }
        },
        props: {
            // 接受的检索值
            query: {
                type: String,
                default: ''
            },
            // 是否显示歌手
            zhida: {
                type: Boolean,
                default: true
            }
        },
        watch: {
            query(newVal) {
                this.search()
            }
        },
        filters: {},
        methods: {
            // vuex
            ...mapMutations({
                'setSinger': 'SET_SINGER'
            }),
            ...mapActions(['inserSong']),
            // parent call
            refresh() {
                this.$refs.scrollRef.refresh()
            }
        },
        computed: {},
        created () {},
        mounted () {},
        destroyed () {}
    }
</script>

<style lang="scss" scoped>
    @import '~@/common/scss/const.scss';
    @import '~@/common/scss/mymixin.scss';

    .my-suggest-list {
        height: 100%;
        overflow: hidden;
        .suggest-list {
            padding: 0 30px;
            .suggest-item {
                display: flex;
                align-items: center;
                padding-bottom: 20px;
            }
            .icon {
                flex: 0 0 30px;
                width: 30px;
                [class^="icon-"] {
                    font-size: 14px;
                    color: $color-text-d;
                }
            }
            .name {
                flex: 1;
                font-size: $font-size-medium;
                color: $color-text-d;
                overflow: hidden;
                .text {
                    @include no-wrap();
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