<template>
    <div class="content">
        <div class="classify-list" :key="index" v-for="(c,index) in classifyList">
            <p class="classify-name">{{c.className}}</p>
            <div class="class-items">
                <div class="class-item" @click="goSearchPage" :class="index === 0? 'color-green': index === 1 ?  'color-orange':
                 index === 2 ? 'color-blue': index === 3 ? 'color-yellow' : 'color-light-green'"
                     :key="item" v-for="(i,item) in c.classItem">A法芙娜</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                classifyList: [
                    {
                        className: '肉类',
                        classItem: [
                            {},
                            {},
                            {},
                            {}
                        ]
                    },
                    {
                        className: '热门食材',
                        classItem: [
                            {},
                            {},
                            {},
                            {}
                        ]
                    },
                    {
                        className: '流行学做',
                        classItem: [
                            {},
                            {},
                        ]
                    },
                    {
                        className:'烘培',
                        classItem: [
                            {},
                            {},
                        ]
                    }
                ]
            }
        },
        methods: {
            goSearchPage() {
                uni.navigateTo({
                    url:'../searchPage/index'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .classify-list {
        margin-top: 60upx;
        width: 100%;
        .classify-name {
            width: 100%;
            font-weight: bold;
            font-family: "微软雅黑";
            font-size: 40upx;
            text-align: center;
            line-height: 40upx;
        }
        .class-items {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 25upx;
            width: 100%;
            .class-item {
                line-height: 60upx;
                padding: 0 35upx;
                font-family: "微软雅黑";
                font-size: 25upx;
                text-align: center;
                white-space: nowrap;
                border: 1px solid red;
                margin: 15upx 15upx;
                border-radius: 35upx;
            }
            .color-green {
                color: rgb(135,203,125);
                border: 1px solid rgb(135,203,125);
            }
            .color-orange {
                color: rgb(239,137,115);
                border: 1px solid rgb(239,137,115);
            }
            .color-blue {
                color: rgb(108,199,228);
                border: 1px solid rgb(108,199,228);
            }
            .color-yellow {
                color: rgb(249,153,66);
                border: 1px solid rgb(249,153,66);
            }
            .color-light-green {
                color: rgb(134,221,196);
                border:1px solid rgb(134,221,196);
            }
        }
    }
    .classify-list:nth-child(1) {
        margin-top: 20upx;
    }
</style>