<template>
<div id='page' class='shouhoudingdan'>
    <div class='main'>
        <div class='right'>
            <div class='title'>售后订单<span @click='back'>返回售后列表</span></div>
            <div class='right-main'>
            <div class="basics">
                    基本信息
                </div>
                <div class="pageone">
                    <div class="rowone">
                        <p><span>商品信息：</span><span>德国爱他美Aptamil3段  </span><span style="color: #12A1F3;margin-left: 20px;">查看详情</span></p>
                        <p><span>支付金额：</span><span style="color: #FF5656;">331.98</span><span>元</span></p>
                    </div>
                    <div class="rowone">
                        <p><span>规格数量：</span><span>2</span></p>
                        <p><span>订单编号：</span><span>1234567990</span></p>
                    </div>
                    <div class="rowone">
                        <p><span>买家：</span><span style="color: #12A1F3;">小宝贸易</span></p>
                        <p><span>供应商：</span><span style="color: #12A1F3;">小宝贸易111</span></p>
                    </div>
                    <div class="rowone">
                        <p><span>订单来源：</span><span>APP订单</span></p>
                        <p><span>支付平台：</span><span>支付宝</span></p>
                    </div>
                </div>
                <div class="basics">
                    退款信息
                </div>
                <div class="pageone">
                    <div class="rowone">
                        <p><span>售后类型：</span><span style="color:  #FF5656;">仅退款</span></p>
                        <p><span>退款金额：</span><span style="color:  #FF5656;">331.98</span><span>元</span></p>
                    </div>
                    <div class="rowone">
                        <p><span>退款数量：</span><span>2</span></p>
                        <p><span>订单编号：</span><span>1234567990</span></p>
                    </div>
                    <div class="rowone">
                        <p><span>退款原因：</span><span style="color: #12A1F3;">爆罐</span></p>
                        <p><span>原因说明：</span><span style="color: #12A1F3;">爆罐12</span></p>
                    </div>
                    <div class="rowone">
                        <span style="margin-right: 20px;float:left;">图片：</span>
                        <ul>
                            <li><img src="../../../static/images/test.png"></li>
                            <li><img src="../../../static/images/test.png"></li>
                            <li><img src="../../../static/images/test.png"></li>
                            <li><img src="../../../static/images/test.png"></li>
                        </ul>
                    </div>
                </div>
                <div class="basics" style='margin-top:90px;'>
                    售后记录
                </div>
                <div class="pageone1">
                    <div class="rowone">
                        <p><span>售后状态：</span>
                            <span style="color:  #FF5656;"  v-if="type === 'A'">仅退款</span>
                            <!--<span style="color:  #FF5656;"  v-if="type === 'A'">退款完成</span>
                            <span style="color:  #FF5656;"  v-if="type === 'A'">供应商拒绝</span>
                            <span style="color:  #FF5656;"  v-else-if="type === 'B'">退款补偿</span>
                            <span style="color:  #FF5656;"  v-else-if="type === 'B'">待审核</span>
                            <span style="color:  #FF5656;"  v-else-if="type === 'B'">供应商同意</span>
                            <span style="color:  #FF5656;"  v-else-if="type === 'B'">退款完成</span>
                            <span style="color:  #FF5656;"  v-else>退款退货</span>
                            <span style="color:  #FF5656;"  v-else>待审核</span>
                            <span style="color:  #FF5656;"  v-else>供应商同意</span>
                            <span style="color:  #FF5656;"  v-else>退款完成</span>-->
                        </p>
                    </div>
                    <div class="change">
                        <div class="page1">
                            <div class="rowone tit">
                                <p><span>操作对象</span></p>
                                <p ><span>操作内容</span></p>
                                <p><span>操作时间</span></p>
                            </div>
                            <div class="rowone">
                                <p><span>买家</span</p>
                                <p><span>孕婴店</span></p>
                                <p><span>2017-09-26 10:17:35</span></p>
                            </div>
                            <div class="rowone">
                                <p><span>平台</span></p>
                                <p><span>妈妈去哪</span></p>
                                <p><span>2017-09-26 10:17:35</span></p>
                            </div>
                            <div class="rowone">
                                <p><span>供应商</span></p>
                                <p><span>小宝贸易111</span></p>
                                <p><span>2017-09-26 10:17:35</span></p>
                            </div>
                        </div>
                        <div class="doing">
                            <el-button type="danger">供应商处理</el-button>
                            <el-button type="primary">同意退款</el-button>
                            <el-button>拒绝退款</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      type: 'A',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>
<style lang="scss" scoped>
#page{
    width: 100%;
    background: #f5f5f5;
  
}
.main{
    display: flex;
    color: #424242;
    position: relative;
    .right{
        width: 100%;
        background: #FFF;
        .title{
            height: 58px;
            font-size: 18px;
            line-height: 58px;
            border-bottom: 1px solid #d9d9d9;
            text-indent: 20px;
            background:#F4F6F9;
            span{
                color: #12A1F3;
                font-size: 14px;
                margin-left: 10px;
                cursor:pointer;
            }
        }
        .right-main{
            .bor{
                border-bottom: 1px solid #d6e2ed;
            }
            .page-tit{
                font-size: 18px;
                line-height: 36px;
                color:#2a3542;
                padding: 10px 20px;
                background: #F4F6F9;
                span{
                    margin-right: 15px;
                    &:last-child{
                        color: #12A1F3;
                        font-size: 12px;
                        line-height: 36px;
                    }
                }
            }
            .basics{
                font-size: 14px;
                line-height: 32px;
                padding: 0 20px;
                color: #2a3542;
                background:#fafbfc;
            }
            .pageone{
                padding: 20px;
                background: #fff;
            }
            .pageone{
                .rowone{
                    width: 100%;
                    p{
                        display: inline-block;
                        width: 40%;
                    }
                    span{
                        color:#6e7381;
                        font-size: 14px;
                        line-height: 36px;
                    }
                    ul{
                        li{
                            float: left;
                            margin-right:10px;
                            img{
                                width: 95px;
                                height:95px;
                            }
                        }
                    }
                }
            }
            .page1{
                // border:1px solid #d6e2ed ;
                // background: #FCFCFC;
                text-indent: 10px;
                .rowone{
                    width: 100%;
                    border-bottom:1px dashed #d6e2ed ;
                }
                .rowone:first-child{
                    background: #fff;
                    
                }
            } 
            .pageone1{
                padding:20px 20px 0 20px;
                background: #fff;
                .rowone{
                    p{
                        display: inline-block;
                        width: 30%;
                    }
                    span{
                        color:#6e7381;
                        font-size: 14px;
                        line-height: 36px;
                    }
                    .tit{
                        span{
                            color: #9fa4b1;
                            font-size: 14px;
                            line-height: 36px;
                            }
                    } 	
                }
            }
            .doing{
                margin-top: 30px;
            }
        }
        
    }
}


</style>


