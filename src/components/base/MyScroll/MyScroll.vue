<!-- Created by chenzy on 2018/4/20. -->
<!-- 滚动组件 -->
<template>
    <div ref="wrapper" class="my-scroll">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        components: {},
        data() {
            return {}
        },
        props: {
            //传入的数据
            data: {
                type: Array,
                default: null
            },
            probeType: {
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            _initScroll() {
                if (!this.$refs.wrapper) {
                    return
                }

                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click
                })
            }
        },
        created () {},
        mounted () {
            setTimeout(() => {
                this._initScroll()
            }, 20)
        }
    }
</script>

<style lang="scss" scoped>

</style>