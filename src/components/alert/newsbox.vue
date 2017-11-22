<template>
<div class='messagealert'>
<div class="messagePage">
        <div class="title">
            <span>通知</span>
            <span>全部标记已读</span>
        </div>
        <div>
            <template>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="全部" name="first">
                        <template>
                            <ul class='messagePage-ul'>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/View2.png"></i>新品发布<span>今天 13:08</span></p>
                                    <p class='news-main'>花王L54已加入纸尿裤供货区 ,  您可以报价啦。<span>去报价</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/dollar.png"></i>账单生成<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔结款账单已生成。<span>查看</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/Notepad.png"></i>有新订单<span>今天 13:08</span></p>
                                    <p class='news-main'>您有新订单啦，商品：贝亲婴儿纸尿裤NB 70片<span>去接单</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/退.png"></i>售后处理<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔退款订单待处理。<span>去处理</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/dollar.png"></i>等待收款<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔结款账单已生成。<span>查看</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/Clock.png"></i>等待发货<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔订单已超过3天未发货，请及时发货。<span>发货</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/exclamation.png"></i>库存预警<span>今天 13:08</span></p>
                                    <p class='news-main'>商品 贝亲婴儿纸尿裤NB 70片库存不足，请及时补充库存<span>查看</span></p>
                                    </div>
                                </li>
                                </ul>
                        </template>
                    </el-tab-pane>
                    <el-tab-pane label="已读" name="second"></el-tab-pane>
                    <el-tab-pane label="未读" name="third"></el-tab-pane>
                </el-tabs>
            </template>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang='scss'>
.messagealert{
    .el-tabs--card>.el-tabs__header{
        border-bottom:none;
    }
    .el-tabs__nav{
        margin-left: 30px;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{border-bottom: 1px solid #dfe4ed;}
    .el-tabs__nav-wrap{
        margin-bottom: -2px;
    }
    .el-tabs__item{
        height:30px;
        line-height: 30px;
        &:hover{
            color:#000;
        }
    }
    .el-tabs__item.is-active{
        color:#fff;
        background:#626673;
    }
}
</style>
<style lang="scss" scoped>
.messagePage{
    .title{
        display: flex;
        justify-content: space-between;
        margin-bottom:20px;
        span{
            font: 20px/36px '';
            &:last-child{
                font: 12px/36px "";
            }
        }
    }
    .messagePage-ul{
        padding:0;
        li{
            border-bottom:1px dashed #ebedf1;
            padding:20px 0;
            .box{
                margin-left:30px;
                p{
                    color:#6e7381;
                    span{
                        &:last-child{
                            font:14px/18px '';
                            color:#bdc1cc;
                            margin-left:10px;
                            
                        }
                    }
                }
                i{
                    margin-left:-30px;
                        margin-right:7px;
                }
                .news-main{
                    font-size:13px;
                    span{
                        color:#13b1eb!important;
                    }
                }
            }
            
        }
    }
}    

</style>

