<!-- Created by chenzy on 2018/5/2. -->
<!-- 歌手列表 -->
<template>
    <my-scroll ref="scrollRef"
                :data="data"
                class="my-phone-list">
        <ul>
            <!-- 左侧歌手列表 -->
            <li ref="leftRef" v-for="group in data" class="list-group">
                <h2 class="list-group-title">{{ group.title }}</h2>
                <ul>
                    <li v-for="item in group.items" class="list-group-item">
                        <img v-lazy="item.avatar" class="avatar">
                        <span class="name">{{ item.name }}</span>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- 右侧字母列表 -->
        <div class="list-shortcut">
            <ul>
                <li v-for="(item, index) in shortcut"
                    :data-index="index"
                    :class="{ 'current' : currentIndex === index}"
                    class="item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <!-- 滚动固定标题实现 -->
        <div ref="fixedTitleRef" v-show="fixedTitle" class="list-fixed">
            <h1 class="fixed-title">{{ fixedTitle }}</h1>
        </div>
    </my-scroll>
</template>

<script>
    import MyScroll from '@/components/base/MyScroll/MyScroll'
    import {myDOM} from '@/common/js/myutils'
    export default {
        components: {
            MyScroll
        },
        data() {
            return {
                scrollY: -1,
                currentIndex: 0,
                // 标题上推y值（热门标题 - A 标题）
                diff: -1
            }
        },
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        watch: {
            data() {

            }
        },
        methods: {
            // 对父元素提供的刷新 better-scroll方法
            refresh() {
                this.$refs.scrollRef.refresh
            }
        },
        computed: {
            // 快速入口排列数组
            shortcut() {
                return this.data.map(group => {
                    return group.title.substr(0, 1)
                })
            },
            fixedTitle() {
                if (this.scrollY > 0) {
                    return ''
                }
                return this.data[this.currentIndex] ? this.data[this.currentIndex].title: ''
            }
        },
        created() {

        },
        mounted() {},
        destroyed() {}
    }
</script>

<style lang="scss" scoped>
    @import '~@/common/scss/const.scss';
    @import '~@/common/scss/mymixin.scss';

    .my-phone-list {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: $color-background;
        .list-group {
            padding-bottom: 30px;
            .list-group-title {
                height: 30px;
                line-height: 30px;
                padding-left: 20px;
                font-size: $font-size-small;
                color: $color-text-l;
                background: $color-highlight-background;
            }
            .list-group-item {
                display: flex;
                align-items: center;
                padding: 20px 0 0 30px;
                .avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                .name {
                    margin-left: 20px;
                    color: $color-text-l;
                    font-size: $font-size-medium;
                }
            }
        }
        .list-shortcut {
            position: absolute;
            z-index: 30;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            padding: 20px 0;
            border-radius: 10px;
            text-align: center;
            background: $color-background-d;
            font-family: Helvetica;
            .item {
                padding: 3px;
                line-height: 1;
                color: $color-text-l;
                font-size: $font-size-small;
                &.current {
                    color: $color-theme;
                }
            }
        }
        .list-fixed {
            position: absolute;
            top: -1px;
            left: 0;
            width: 100%;
            .fixed-title {
                height: 30px;
                line-height: 30px;
                padding-left: 20px;
                font-size: $font-size-small;
                color: $color-text-l;
                background: $color-highlight-background;
            }
        }
        .loading-container {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>