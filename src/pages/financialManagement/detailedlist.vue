<template lang="">
  <div class="liushuimingxi">
    <div class="list-top">
      <p class="title">流水明细<span @click='back' class='backs'>返回账单管理</span></p>
      <div class="demo-input-suffix">
        <el-input
          class="list-search"
          placeholder="输入订单号搜索">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="list-item">
      <div class="item-group">
        <el-radio-group class='checkedF' v-model="tableItem"  >
          <el-radio-button label="订单清单"></el-radio-button>
          <el-radio-button label="退款清单"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="supplier-item-content" >
      <el-table
              ref="multipleTable"
                v-if='tableItem == "订单清单"'
              :data="tableData"
              style="width: 100%;"
               @selection-change="handleSelectionChange"
              :height='tableHeight'
              border
              >
              <el-table-column
                style="border-right:none"
                prop="shopnum"
                label="订单编号"
                width='200px'
                >
              </el-table-column>
              <el-table-column
                prop="name"
                label="商品名称"
                width='382px'
                >
              </el-table-column>
              <el-table-column
                prop="num"
                label="规格"
                >
              </el-table-column>
              <el-table-column
                prop="money"
                label="规格价"
                >
              </el-table-column>
              <el-table-column
                prop="num2"
                label="件数"
                >
              </el-table-column>
              <el-table-column
                prop="time"
                label="支付时间"
                >
              </el-table-column>
              <el-table-column
                prop='price'
                label="支付金额"
                >
              </el-table-column>
              <el-table-column
                prop='state2'
                label="订单状态"
                >
              </el-table-column>
            </el-table>
    </div>
    <div class="supplier-item-content secondlist" >
      <el-table
              ref="multipleTable"
              v-if='tableItem == "退款清单"'
              :data="tableData2"
              style="width: 100%;"
               @selection-change="handleSelectionChange"
              :height='tableHeight'
              border
              >
              <el-table-column
                style="border-right:none"
                prop="num"
                label="退款编号"
                width='200px'
                >
                <template slot-scope="scope"><router-link to='/FinancialDetails'><span style='color:#12a1f3;;'>2017021424058141</span></router-link></template>
              </el-table-column>
              <el-table-column
                prop="snum"
                label="订单编号"
                width='200px'
                >
              </el-table-column>
              <el-table-column
                prop="time"
                label="申请退款时间"
                >
              </el-table-column>
              <el-table-column
                prop="back"
                label="退款类型"
                >
              </el-table-column>
              <el-table-column
                prop="smoney"
                label="订单金额"
                width='300px'
                >
              </el-table-column>
              <el-table-column
                prop="bmoney"
                label="退回运费金额"
                >
              </el-table-column>
              <el-table-column
                prop="tmoney"
                label="退款金额"
                >
              </el-table-column>
              <el-table-column
                prop='state1'
                label="订单状态"
                >
              </el-table-column>
              <el-table-column
                prop='state2'
                label="退款状态"
                >
              </el-table-column>
            </el-table>
    </div>
    <div class="pageNum">
      <pagenation></pagenation>
    </div>
  </div>
</template>
<script lang="">
  import $ from 'jquery'
  import Pagenation from '../../components/pagenations/pagenations.vue'
  export default {
    components: {
      'pagenation': Pagenation
    },
    data () {
      return {
        shopnum: '',
        name: '',
        num: '',
        num2: '',
        money: '',
        time: '',
        price: '',
        state2: '',
        showIt: false,
        tableHeight: 745,
        tableData: [],
        tableData2: [],
        tableItem: '订单清单',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value8: ''
      }
    },
    props: [

    ],
    mounted () {
      setTimeout(function () {
        $('.clearr2').addClass('router-link-active')
      }, 10)
      this.$http.get('api/sup/bill/orderMsg/1', {params: {}}).then(res => {
        console.log(res.data.data.list)
        var arr = res.data.data.list
        for (let i in arr) {
          if (arr[i].status == 0) {
            arr[i].status = '待支付'
          } else if (arr[i].status == 1) {
            arr[i].status = '待发货'
          } else if (arr[i].status == 2) {
            arr[i].status = '待收货'
          } else if (arr[i].status == 3) {
            arr[i].status = '已完成'
          } else if (arr[i].status == 4) {
            arr[i].status = '已取消'
          }
          console.log(arr.status)
          this.tableData.push({
            shopnum: arr[i].secondaryOrderNo,
            name: arr[i].itemName,
            num: arr[i].specsNumber + '罐装',
            num2: arr[i].quantity,
            money: arr[i].price,
            time: arr[i].payTime,
            price: arr[i].receivedPrice,
            state2: arr[i].status
          })
        }
      }, error => {
        console.log(2)
      })
      this.$http.get('api/sup/bill/orderMsg/refund/2', {params: {}}).then(res => {
        var arr = res.data.data.list
        for (let i in arr) {
          if (arr[i].refundType == 0) {
            arr[i].refundType = '仅退款'
          } else if (arr[i].refundType == 1) {
            arr[i].refundType = '申请补偿'
          } else if (arr[i].refundType == 2) {
            arr[i].refundType = '退货退款'
          }
          if (arr[i].orderStatus == 0) {
            arr[i].orderStatus = '待支付'
          } else if (arr[i].orderStatus == 1) {
            arr[i].orderStatus = '待发货'
          } else if (arr[i].orderStatus == 2) {
            arr[i].orderStatus = '待收货'
          } else if (arr[i].orderStatus == 3) {
            arr[i].orderStatus = '已完成'
          } else if (arr[i].orderStatus == 4) {
            arr[i].orderStatus = '已取消'
          }
          if (arr[i].afterStatus == 0) {
            arr[i].afterStatus = '待审核'
          } else if (arr[i].afterStatus == 1) {
            arr[i].afterStatus = '供应商拒绝'
          } else if (arr[i].afterStatus == 2) {
            arr[i].afterStatus = '供应商同意'
          } else if (arr[i].afterStatus == 3) {
            arr[i].afterStatus = '同意退款'
          } else if (arr[i].afterStatus == 4) {
            arr[i].afterStatus = '拒绝退款'
          } else if (arr[i].afterStatus == 5) {
            arr[i].afterStatus = '待寄回'
          } else if (arr[i].afterStatus == 6) {
            arr[i].afterStatus = '退款成功'
          } else if (arr[i].afterStatus == 7) {
            arr[i].afterStatus = '退款失败'
          } else if (arr[i].afterStatus == 8) {
            arr[i].afterStatus = '退款关闭'
          } else if (arr[i].afterStatus == 9) {
            arr[i].afterStatus = '撤销退款'
          }
          this.tableData2.push({
            name: arr[i].refundNo,
            snum: arr[i].secondaryOrderNo,
            time: arr[i].created,
            back: arr[i].refundType,
            smoney: arr[i].price,
            bmoney: arr[i].price,
            tmoney: arr[i].refundPrice,
            state1: arr[i].orderStatus,
            state2: arr[i].afterStatus
          })
        }
      }, error => {
        console.log(2)
      })
    },
    destroyed () {
      setTimeout(function () {
        $('.clearr2').removeClass('router-link-active')
      }, 10)
    },
    computed: {

    },
    watch: {

    },
    methods: {
      back () {
        window.history.back()
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
        console.log(val)
      }
    }
  }
</script>
<style lang="scss">
@import '../../../static/style/order.scss';
.liushuimingxi{
    .el-table__row{
        .el-table_1_column_1{
            color:#12a1f3;
        }  
        .el-table_1_column_2{
            color:#12a1f3;
        }
        td:last-child{
            .cell{
                text-indent: 40%;;
            }
    }
    .secondlist{
        .el-table__row{
            td:first-child{
                border-right: none;
            }
            td:nth-child(2){
                border-right: 1px solid #d6e2ed;
                color:#12a1f3;   
            }
            
        }
    }
    }
} 
</style>
<style lang="scss" scoped>
    .backs{
        color: #12A1F3;
        font-size: 14px;
        margin-left: 10px;
        cursor:pointer;
        
    }
</style>
