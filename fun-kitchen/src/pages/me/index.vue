<template>
    <div class="content">
        <view v-if="isLogin">
            <div class="user-content">
                <img class="user-img" :src="userInfo.avatarUrl" alt="">
                <p class="user-name">{{userInfo.nickName}}</p>
            </div>
            <uni-list>
                <uni-list-item  title="收藏"  :thumb="require('../../static/img/collect.png')" :show-arrow="true"></uni-list-item>
                <uni-list-item  title="浏览历史"  :thumb="require('../../static/img/history.png')" :show-arrow="false"></uni-list-item>
            </uni-list>

            <div class="look-history">
                <div class="history-items">
                    <img src="../../static/img/ycm.jpg" alt="">
                    <p class="item-name">阳春面</p>
                </div>
                <div class="history-items">
                    <img src="../../static/img/ycm.jpg" alt="">
                    <p class="item-name">阳春面</p>
                </div>
                <div class="history-items">
                    <img src="../../static/img/ycm.jpg" alt="">
                    <p class="item-name">阳春面</p>
                </div>
            </div>
        </view>
        <button v-if="!isLogin" type="default" class="login-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登陆</button>
    </div>
</template>

<script>
    import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list'
    import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item'
    export default {
        name: "index",
        data() {
            return {
                isLogin:false,
                userInfo: {}
            }
        },
        created() {
        },
        mounted() {

        },
        methods: {
            getUserInfo(data) {
                console.log(data)
                const _this = this;
                uni.login({
                    provider: 'weixin',
                    success: function (loginRes) {
                        console.log(loginRes);
                        _this.$axios.postData('http://127.0.0.1:7002/login',{code: loginRes.code})
                            .then((res) => {
                                _this.userInfo = data.mp.detail.userInfo;
                                _this.isLogin = true;
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                });
            }
        },
        components: {
            uniList,
            uniListItem
        }
    }
</script>

<style  lang="scss" scoped>
    .user-content {
        margin-top: 30upx;
        height: 300upx;
        border-bottom: 1px solid rgb(237,237,237);
        .user-name {
            float: left;
            line-height: 110upx;
            font-family: 微软雅黑;
            font-size: 40upx;
            font-weight: bold;
            margin-left: 50upx;
            width: 500upx;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .user-img {
            display: block;
            float: left;
            width: 120upx;
            height: 120upx;
            border-radius: 60upx;
            margin-left: 20upx;
        }
    }

    .look-history {
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: left;
        width: 100%;
        margin-top: 30upx;
        .history-items {
            width: 29%;
            height: 350upx;
            margin-right: 25upx;
            margin-bottom: 22upx;
            img {
                width: 100%;
                height: 300upx;
                border-radius: 15upx;
            }
            .item-name {
                font-weight: bold;
                font-size: 28upx;
                text-align: left;
                font-family: 微软雅黑;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    .login-btn {
        width: 100%;
        background-color: rgb(7,193,96);
        border-radius: 40upx;
        color: white;
    }
</style>