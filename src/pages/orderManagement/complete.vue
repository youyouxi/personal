<template lang="">
<div id='page' class='dingdanxiangqing'>
    <div class='main'>
        <div class='right'>
            <div class='title'>订单详情<span @click='back'>返回供货列表</span></div>
            <div>
                <div class="state">
                    <p>订单状态：<span style="color: #ff4747;">{{state}}</span></p>
                    <p style="font-size: 14px;">
                        <span>订单号：</span><span style="margin-right: 40px;">{{childnum}}</span>
                        <span>发货时间：</span><span style="margin-right: 40px;">{{stime}}</span>
                    </p>
                </div>
                <div class="logistics">
                    <div class="stitle">物流信息</div>
                    <div class="tab">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="包裹1" name="first">包裹1</el-tab-pane>
                        <el-tab-pane label="包裹2" name="second">包裹2</el-tab-pane>
                        <el-tab-pane label="包裹3" name="third">包裹3</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
                <div class="stitle">订单明细</div>
                <div class="shop-main">
                    <p>收货信息：<span>{{name}}</span>，<span>{{phone}}</span>，<span>{{province}}{{district}}{{adr}}</span>，<span>0000000</span></p>
                    <p>报关信息：<span>{{name}}</span>，<span>{{phone}}</span>，<span>{{ID}}</span></p>
                    <div class="shop-table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%;margin: 20px 0;">
                            <el-table-column
                                prop="name"
                                label="商品"
                                width="400">
                                <template slot-scope="scope">
                                <div class="s-shop">
                                    <img class='s-img' src=""/>
                                    <p class="s-name">
                                        <span class="s-form">[保税仓]</span>海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货</p>
                                    <p class="s-bot"><span class="s-data">2017年7月-2018年8月</span><span class="s-num">2罐装</span></p>
                                </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="price"
                                label="规格单价">
                            </el-table-column>
                            <el-table-column
                                prop="amount"
                                label="规格数量">
                            </el-table-column>
                            <el-table-column
                                prop="freight"
                                label="运费(元)">
                            </el-table-column>
                            <el-table-column
                                prop="discounts"
                                label="优惠(元)">
                            </el-table-column>
                            <el-table-column
                                prop="money"
                                label="金额总计(元)">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="beizhu">
                        <span>备注：<span>{{tips}}</span></span>
                    </div>
                    <div class="s-time">
                        <p><span>下单时间：<i>{{ctime}}</i></span><span>订单来源：<i>APP订单</i></span></p>
                        <p><span>支付时间：<i>{{ptime}}</i></span><span>支付编码：<i>{{pnum}}</i></span></p>
                        <p><span>支付平台：<i>{{pay}}</i></span><span>接单时间：<i>{{atime}}</i></span></p>
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
      activeName: 'first',
      childnum: '',
      name: '',
      phone: '',
      province: '',
      district: '',
      adr: '',
      ID: '身份证号码',
      tips: '',
      tmoney: '',
      ctime: '',
      ptime: '',
      state: '',
      stime: '',
      pay: '',
      atime: '',
      pnum: '',
      tableData: [
        {
          name: '',
          price: '99.00',
          amount: '2',
          freight: '15.00',
          discounts: '-￥0.00',
          money: '187.00'
        }
      ]
    }
  },
  mounted () {
    this.$http.get('api/sup/orderMsg/2', {params: {}}).then(res => {
      console.log(res.data.data.item)
      var array = res.data.data
        // var list = res.data.data.item
      this.stime = array.shippingTime
      this.pay = array.payMode
      this.atime = array.acceptOrderTime
      this.pnum = array.payNo
      this.childnum = array.secondaryOrderNo
      this.province = array.provinceName
      this.district = array.areaName
      this.adr = array.addrDetail
      this.name = array.userName
      this.phone = array.cellPhone
      this.tipss = array.remark
      this.tmoney = array.receivedPrice
      this.ctime = array.created
      this.ptime = array.payTime
      if (array.status == 0) {
        array.status = '待支付'
      } else if (array.status == 1) {
        array.status = '待发货'
      } else if (array.status == 2) {
        array.status = '待收货'
      } else if (array.status == 3) {
        array.status = '已完成'
      } else if (array.status == 4) {
        array.status = '已取消'
      }
      this.state = array.status
      if (array.remark !== '') {
        this.tips = array.remark
      } else {
        this.tips = '无'
      }
    }, error => {
      console.log(2)
    })
  },
  methods: {
    back () {
      window.history.back()
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang='scss'>
// .dingdanxiangqing{
//     .el-tabs--card>.el-tabs__header .el-tabs__item{
//         border: none;
//     }
//     .el-tabs--card>.el-tabs__header .el-tabs__nav{
//         border: none;
//     }
//     .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
//         color:#fff;
//         background: #ff5e5e;
//         border-radius:3px;
//     }
//     .el-tabs--card>.el-tabs__header{
//         border-bottom:1px solid #ff5e5e;
//     }
//     .el-tabs__item:hover{
//         color:#424242;
//     }
//     .el-tabs__content{
//         padding: 0 20px;
//     }
// }
</style>
<style lang="scss" scoped>
#page{
    width: 100%;
    background: #f5f5f5;
}
.main{
    display: flex;
    color: #424242;
    span{
        line-height: 36px;
    }
    .right{ 
        width:100%;
        background: #FFF;
        font-size: 14px;
        .title{
            height: 58px;
            font-size: 18px;
            line-height: 58px;
            border-bottom: 1px solid #d9d9d9;
            text-indent: 20px;
            span{
                color: #12A1F3;
                font-size: 14px;
                margin-left: 10px;
                cursor:pointer;
            }
        }
        .stitle{
            font:16px/32px '';
            padding: 0 20px;
            color: #2a3542;
            height:34px ;
            background:#fafbfc;
            line-height: 34px; 
        }
        .bor{
            border-bottom: 1px solid #d6e2ed;
        }
        .state{
            height: 88px;
            background: #fff;
            padding:10px 20px 10px 20px;
            p{
                font-size: 16px;
                color:#777777;
                span{
                     color:#777777;
                     line-height: 34px;
                }
            }
        }
        .shop-main{
            background: #fff;
            padding:20px 20px 0 20px;
            font-size:14px;
            line-height: 24px;
            color: #6e7381;
        }
        /*tab切换*/
        .tab{
            padding: 0 20px;
            height: 200px;
            background: #fff;
            
        }

        .s-shop{
            .s-img{
                width: 62px;
                height:62px ;
                float: left;
                margin-right: 20px;
                border: 1px solid #d6e2ed;
            }
            p{
                float: left;
                width: 246px;
                font-size:14px;
                line-height: 24px;
                color:#6e7381
            }
            .s-form{
                font-weight: 600;
            }
            .s-bot{
                color:#b4b8c3;
                span{
                    margin-right: 20px;
                }
            }
        }
        .beizhu{
            height: 60px;
            border-bottom: 1px dashed #d6e2ed;
        }
        .s-time{
            width: 100%;
            span{
                display: inline-block;
                width: 300px;
                margin-right: 20px;
            }
        }
    }
}
</style>

