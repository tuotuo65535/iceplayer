<!-- Created by chenzy on 2018/5/2. -->
<!-- 歌手列表 -->
<template>
    <my-scroll ref="scrollRef">
        <ul>
            <!-- 左侧歌手列表 -->
            <li ref="leftRef" v-for="group in data" class="list-group">
                <h2 class="list-group-title">{{ group.title }}</h2>
                <ul>
                    <li v-for="item in group.items" class="list-group-item">
                        <img v-lazy="isTemplateLike.avatar" class="avatar">
                        <span class="name">{{ item.name }}</span>
                    </li>
                </ul>
                <!-- 右侧字母列表 -->
                <div class="list-shortcut">
                    <ul>
                        <li v-for="(item, index) in shortcut">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <!-- 滚动固定标题实现 -->
                <div ref="fixedTitleRef" v-show="fixedTitle" class="list-fixed">
                    <h1 class="fixed-title">{{ fixedTitle }}</h1>
                </div>
            </li>
        </ul>
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

        },
        created() {

        },
        mounted() {},
        destroyed() {}
    }
</script>

<style lang="scss" scoped>

</style>