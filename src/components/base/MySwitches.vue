<!-- Created by chenzy on 2018/5/11. -->
<!-- 开关切换 组件 -->
<template>
    <div class="my-switches">
        <li class="switch-item" :class="{'active': currentIndex === index}"
            v-for="(item, index) in switches">
            <span>{{ item.name }}</span>
        </li>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        props: {
            switches: {
                type: Array,
                default: []
            },
            currentIndex: {
                type: Number,
                default: 0
            }
        },
        watch: {},
        methods: {
            switchItem(index) {
                this.$emit('switch', index)
            }
        },
        filters: {},
        computed: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/common/scss/const.scss';
    @import '~@/common/scss/mymixin.scss';

    .my-switches {
        display: flex;
        align-items: center;
        width: 240px;
        margin: 0 auto;
        border: 1px solid $color-highlight-background;
        border-radius: 5px;
        .switch-item {
            flex: 1;
            padding: 8px;
            text-align: center;
            font-size: $font-size-medium;
            color: $color-text-d;
            &.active {
                background: $color-highlight-background;
                color: $color-text;
            }
        }
    }
</style>