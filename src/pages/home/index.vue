<template>
  <div id='page'>
    <div class='main'>
        <div class='main-top'>
            <div class='s-title'><img src="../../../static/images/Volume.png"><span>重要提醒</span></div>
            <ul>
                <li>
                    <p>待受理订单：<span>14</span></p>
                    <p>待发货订单：<span>15</span></p>
                </li>
                <li>
                    <p>待审核售后订单：<span>14</span></p>
                    <p>已寄回待审核售后订单：<span>15</span></p>
                </li>
                <li>
                    <p>待上架商品：<span>14</span></p>
                    <p>出售中的商品：<span>15</span></p>
                </li>
                <li>
                    <p>待确认账单：<span>14</span></p>
                    <p>资金审批中的账单：<span>15</span></p>
                </li>
                <li>
                    <p>库存预警：<span>14</span></p>
                </li>
            </ul>
        </div>
        <div class='main-bottom'>
            <div class='bottom-left'>
                <div class='s-title'><span>近7日销售情况</span></div>
            </div>
            <div class='bottom-right'>
                <div class='s-title'><span>近7日热卖商品</span></div>
                <ul>
                    <li v-for='item in list'>
                        <img src="../../../static/images/shop.png" alt="">
                        <p style="font-weight:700">{{item.name}}</p>
                        <p>价格：<span style="color:#ff776d">￥ {{item.price}}</span></p>
                        <p>销量：<span style="color:#2a3542">{{item.num}}</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class='news'>
        <newsBox></newsBox>
    </div>   
    </div>
</template>
<script>
import newsBox from '../../components/alert/newsbox'
export default {
  data () {
    return {
      activeName: 'first',
      list: [
        {
          name: '贝亲婴儿纸尿裤NB 70片',
          price: '126.00',
          num: '121565'
        },
        {
          name: '贝亲婴儿纸尿裤NB 70片',
          price: '126.00',
          num: '121565'
        },
        {
          name: '贝亲婴儿纸尿裤NB 70片',
          price: '126.00',
          num: '121565'
        },
        {
          name: '贝亲婴儿纸尿裤NB 70片',
          price: '126.00',
          num: '121565'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    newsBox
  }
}
</script>
<style lang="scss" scoped>
#page{
    background:#f2f4f7;
    width: 100%;
    height: 93.7%;
    display: flex;
    justify-content:space-between;
    .news{
        overflow:auto;
        width: 15%;
        height: 97.7%;
        background: #fff;
        padding: 10px 20px;
        color: #6e7381;
    }
    .main{
       width: 85%;
       padding:20px;
        // display: flex;
        .s-title{
            font:16px/46px '';
            height: 46px;
            color:#445364;
            border-bottom:1px solid #ebedf1;
            padding:0 20px;
            img{
                margin-right:10px;
            }
        }
        .main-top{
            width: 100%;
            background: #fff;
            margin-bottom:30px;
            ul{
                padding:30px 0;
                display: flex;
                li{
                    float:left;
                    width: 20%;
                    border-right:1px solid #dbdde1;
                    padding-left:20px;
                    &:last-child{border: none}
                    p{
                        cursor: pointer;
                        font-size:14px;
                        color:#6e7381;
                        margin-bottom: 15px;
                        span{
                            display: inline-block;
                            width:34px;
                            background: #f2f2f2;
                            border-radius: 10px;
                            text-align: center;
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
        .main-bottom{
            width: 100%;
            height: 420px;
            display: flex;
            justify-content: space-between;
            .bottom-left{
                width: 49%;
                background: #fff;
            }
            .bottom-right{
                width: 49%;
                background: #fff;
                overflow: auto;
                ul{
                    padding:0 20px;
                   
                    li{
                        border-bottom:1px solid #ebedf1;
                        padding: 10px 0;
                        img{
                            float: left;
                            width:62px;
                            height:62px;
                            margin-right: 17px;
                            border: 1px solid #ebedf1;
                        }
                        p{
                            color: #6e7381;
                            font:14px/24px '';
                        }
                    }
                }
            }
        }
    }
    
}
</style>