<template>
    <view style="width: 100%">
        <img class="food-img":src="require('../../static/img/1.jpg')" />
        <view class="content detail-content">
            <p class="food-name">
                <span >蛋黄酥</span>
                <view class="collection-img">
                    <span class="collect-font" v-if="collected === 0" @click="collectFood">收藏</span>
                    <span class="iconfont icon-zan collection"  v-if="collected === 0" @click="collectFood"></span>
                    <span class="collect-font"  v-if="collected === 1" @click="cancelCollection">已收藏</span>
                    <span class="iconfont icon-xin collection" style="color: rgb(254,69,111)"  v-if="collected === 1" @click="cancelCollection"></span>
                </view>
            </p>
            <p class="looked-num">105555人浏览 · 251425人收藏</p>
            <p class="food-introduce">一直想做蛋黄酥，胖胖圆圆的很可爱，正好入新烤箱，必须试试</p>
            <view class="user-message">
                <img class="user-img" :src="require('../../static/img/1.jpg')" alt="">
                <span class="user-name">小秘密</span>
            </view>

            <ul class="food-list">
                <p style="line-height: 40upx;
            font-size: 38upx;font-family: 微软雅黑;
            text-align: center;margin-top: 40upx;
            margin-bottom: 50upx;
            font-weight: bold">-  食材清单  -</p>
                <li class="food-item" :key="index" v-for="(f,index) in foodList">
                    <span class="item-name">{{f.itemName}}</span>
                    <span class="item-weight">{{f.itemWeight}}</span>
                </li>
            </ul>

            <p style="line-height: 40upx;
            font-size: 38upx;font-family: 微软雅黑;
            text-align: center;margin-top: 60upx;
            margin-bottom: 60upx;
            font-weight: bold">-  烹饪步骤  -</p>

            <view class="make-steps">
                <rich-text :nodes="strings"></rich-text>
            </view>
        </view>
    </view>

</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                foodList: [
                    {
                        itemName: '中筋面粉',
                        itemWeight: '200克'
                    },
                    {
                        itemName: '猪油',
                        itemWeight: '70克'
                    },
                    {
                        itemName: '糖',
                        itemWeight: '20克'
                    },
                    {
                        itemName: '水',
                        itemWeight: '82克'
                    },
                    {
                        itemName: '低筋面粉',
                        itemWeight: '140克'
                    },
                    {
                        itemName: '红豆沙',
                        itemWeight: '252克'
                    }
                ],
                strings:"<p style=\"text-align: center;\">\n" +
                "    <img src=\"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2344459948,1213616844&fm=173&app=49&f=JPEG?w=400&h=400&s=BFD8A95E9753526E02FDE04F0300E071\"/>\n" +
                "</p>\n" +
                "<p>\n" +
                "    <span style=\"color: rgb(51, 51, 51); font-family: arial; text-align: justify; background-color: rgb(255, 255, 255);\">1、将油皮材料全部放进碗里，用手揉成光滑面团，这里不需要揉出手套膜。有面包机的可以用面包机揉省事（我有面包机但是我觉得手揉出来的更酥脆一点）</span>\n" +
                "</p>\n" +
                "<p>\n" +
                "    <br/>\n" +
                "</p>\n" +
                "<p style=\"text-align: center;\">\n" +
                "    <img src=\"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2050289693,1998212280&fm=173&app=49&f=JPEG?w=400&h=400&s=46F8EA7E47175A7D0271C14A0300E071\"/>\n" +
                "</p>\n" +
                "<p>\n" +
                "    <span style=\"color: rgb(51, 51, 51); font-family: arial; text-align: justify; background-color: rgb(255, 255, 255);\">2、油酥材料全部混合，揉成面团</span>\n" +
                "</p>\n" +
                "<p>\n" +
                "    <br/>\n" +
                "</p>\n" +
                "<p style=\"text-align: center;\">\n" +
                "    <img src=\"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3596493378,3863346723&fm=173&app=49&f=JPEG?w=400&h=400&s=24A9F214D101E34F420FCF790300B07B\"/>\n" +
                "</p>\n" +
                "<p>\n" +
                "    <span style=\"color: rgb(51, 51, 51); font-family: arial; text-align: justify; background-color: rgb(255, 255, 255);\">3、两种面团都揉好后盖上保鲜膜室温静置30分钟（因为现在天气较冷，直接室温，如果天热的话，要放冰箱冷藏）</span>\n" +
                "</p>",
                collected: 0
            }
        },
        methods: {
            collectFood() {
                this.collected = 1;
            },
            cancelCollection() {
                this.collected = 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .food-img {
        display: block;
        width: 100%;
        height: 500upx;
    }

    .detail-content {
        margin-top: 50upx;
        .food-name {
            position: relative;
            font-size: 40upx;
            font-family: 微软雅黑;
            font-weight: bold;
            text-align: center;
            line-height: 40upx;
            .collection-img {
                position: absolute;
                right: 0;
                top: 0;
                .collection {
                    float: right;
                    margin-right: 10upx;
                    line-height: 40upx;
                }
                .collect-font {
                    float: right;
                    margin-right: 20upx;
                    line-height: 40upx;
                    font-size: 12px;
                }
            }

        }
        .looked-num {
            margin-top: 20upx;
            font-size: 25upx;
            font-family: 微软雅黑;
            color: rgb(190,190,190);
            text-align: center;
        }
        .food-introduce {
            padding: 25upx;
            width: 100%;
            margin-top: 40upx;
            font-family: 微软雅黑;
            font-size: 35upx;
            text-align: left;
            font-weight: 500;
        }

        .user-message {
            padding: 25upx;
            width: 100%;
            margin-top: 10upx;
            .user-img {
                width: 80upx;
                height: 80upx;
                border-radius: 80upx;
                vertical-align: middle;
            }
            .user-name {
                font-weight: 600;
                font-family: 微软雅黑;
                font-size: 25upx;
                vertical-align: middle;
                margin-left: 30upx;
            }
        }
        .food-list {
            width: 100%;
            .food-item {
                list-style: none;
                border-bottom: 1px solid rgb(228,228,228);
                font-family: 微软雅黑;
                font-size: 30upx;
                line-height: 40upx;
                .item-name {
                    padding: 30upx 0;
                    float: left;
                }
                .item-weight {
                    padding: 30upx 0;
                    float: right;
                }
            }
            .food-item:after {
                content: " ";
                clear: both;
                display: block;
                visibility: hidden;
                height: 0;

            }
        }

        .make-steps {
            width: 100%;
            overflow: hidden;
        }
    }
</style>