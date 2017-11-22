<template>
  <div class='right'>
            <div class='title'>基本信息<span>修改基本信息请联系平台客服人员</span></div>
            <div class='right-main'>
                <div class='first'>
                    <div class='s-title'>基本信息</div>
                    <div class='bot'>
                        <p style="text-indent:0">联系人姓名：<span>张天成</span></p>
                        <p>&nbsp;&nbsp;&nbsp;手机号：<span>13525485854</span></p>
                        <p>经营品类：<span>奶粉；纸尿裤；童装 > 女装 > 外套；婴儿用品；洗护用品；儿童玩具</span></p>
                        <div class='image'>
                            <p>身份证：</p>
                            <i><img src="../../../static/images/test.png"><span>经营者身份证正面照片</span></i>
                        </div>
                    </div>
                </div>
                <div class='second'>
                    <div class='s-title'>经营许可证书</div>
                    <div class='image'>
                        <i><img src="../../../static/images/test.png"><span>营业执照</span></i>
                    </div>
                </div>
                <div class='third'>
                    <div class='s-title'>银行账户</div>
                    <div class='bot'>
                        <p style="text-indent:60px">银行开户名：<span>小宝贸易有限公司</span></p>
                        <p style="text-indent:46px">公司银行账号：<span>53456451654549849145665498</span></p>
                        <p>开户银行支行名称：<span>某某支行</span></p>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .right{
  
        background: #FFF;
        font-size: 14px;
        .title{
            height: 58px;
            font-size: 24px;
            line-height: 58px;
            border-bottom: 1px solid #d9d9d9;
            padding: 0 20px;
            background: #f2f4f7;
            span{
                font:14px/58px '';
                color: #6e7381;
                margin-left:30px;
            }
        }
        .right-main{
            .s-title{
                height:40px;
                background:#fafbfc ;
                font:16px/40px '';
                padding: 0 20px;

            }
            .first,.second,.third{
                margin-bottom: 166px;
                .bot{
                    padding: 0 20px;
                }
                .image{
                    margin-top: 10px;
                    p{
                        float: left;
                        text-indent: 31px;
                        // display: inline-block;
                    }
                    i{
                        float: left;
                        width: 90px;
                        height: 100px;
                        margin: 0 10px;
                        text-align: center;
                        span{
                            width: 90px;
                            margin: 0;
                        }
                    }
                }
                p{
                    font: 14px/34px '';
                    text-indent: 17px;
                }
                span{
                    color: #6e7381;
                    margin-left: 20px
                }
            }
            .second{
                .image{
                    margin: 20px 0 40px 105px;
                }
            }
            
        }
    }
</style>


