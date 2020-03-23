<template>
    <view class="content">
        <div class="scan-box">
            <div class="input-box">
                <!--<icon :type="'search'" style="float: left;padding-top: 15upx" size="13"/>-->
                <icon :type="'search'" style="padding-left: 15upx;display: inline-block;float: left;margin-top: 20upx"
                      size="14"/>
                <input class="uni-input input" confirm-type="search" value="搜索"/>
            </div>
            <button type="primary" class="search-btn" size="mini">搜索</button>
        </div>

        <div class="navTab">
            <div class="tab" :class="tabActive?'tab-active':''" @click="changeTab(0)">今日推荐</div>
            <div class="tab" :class="!tabActive? 'tab-active':''" @click="changeTab(1)">排行榜</div>
        </div>

    </view>
</template>

<script>
    export default {
        data() {
            return {
                tabActive:true
            }
        },
        methods: {
            changeTab(index) {
                if (index === 0) {
                    this.tabActive = true
                }
                else {
                    this.tabActive = false;
                }
            }
        },
        onLoad() {


        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .scan-box {
        width: 100%;
        height: 90upx;
        padding-top: 20upx;

        .input-box {
            float: left;
            width: 70%;
            height: 74upx;
            background-color: rgb(240, 240, 240);
            border-radius: 74upx;
            padding-left: 20upx;
            line-height: 64upx;
            .input {
                float: left;
                display: inline-block;
                width: 80%;
                margin-left: 37upx;
                margin-top: 13upx;
                color: rgb(154, 154, 154);
                font-size: 12px;
            }
        }
        .search-btn {
            width: 150upx;
            height: 74upx;
            border-radius: 64upx;
            line-height: 74upx;
            margin-left: 40upx;
            background-color: rgb(100, 100, 100);
        }
    }

    .navTab {
        width: 100%;
        height: 75upx;
        margin-top: 10upx;
        display: flex;
        flex-direction: row;
        .tab {
            width: 50%;
            height: 100%;
            line-height: 75upx;
            font-size: 20upx;
            border-radius: 15upx;
            color: black;
            text-align: center;
            font-size: 35upx;
            font-family: "微软雅黑";
        }
        .tab-active {
            background-color: black;
            color: rgb(255,255,255);
        }
    }
</style>
