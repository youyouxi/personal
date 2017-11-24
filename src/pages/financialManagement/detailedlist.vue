<template lang="">
  <div class="dingdanjiesuan">
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
  import Pagenation from '../../components/pagenations/pagenations.vue'
  export default {
    components: {
      'pagenation': Pagenation
    },
    data () {
      return {
        showIt: false,
        tableHeight: 745,
        tableData: [{
          shopnum: '2017021424058141',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          num: '2罐装',
          num2: '￥256',
          money: '9654.00',
          time: '2017-02-15 00:50:00',
          price: '￥657',
          state2: '已完成'
        }, {
          shopnum: '2017021424058141',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          num: '2罐装',
          num2: '￥256',
          money: '9654.00',
          time: '2017-02-15 00:50:00',
          price: '￥657',
          state2: '已完成'
        }, {
          shopnum: '2017021424058141',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          num: '2罐装',
          num2: '￥256',
          money: '9654.00',
          time: '2017-02-15 00:50:00',
          price: '￥657',
          state2: '已完成'
        }, {
          shopnum: '2017021424058141',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          num: '2罐装',
          num2: '￥256',
          money: '9654.00',
          time: '2017-02-15 00:50:00',
          price: '￥657',
          state2: '已完成'
        }, {
          shopnum: '2017021424058141',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          num: '2罐装',
          num2: '￥256',
          money: '9654.00',
          time: '2017-02-15 00:50:00',
          price: '￥657',
          state2: '已完成'
        }, {
          shopnum: '2017021424058141',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          num: '2罐装',
          num2: '￥256',
          money: '9654.00',
          time: '2017-02-15 00:50:00',
          price: '￥657',
          state2: '已完成'
        }],
        tableData2: [{
          name: '201725698845',
          snum: '201725698845',
          time: '2017-08-011 00：05',
          back: '仅退款',
          smoney: '306.00(含运费：6.00)',
          bmoney: '6.00',
          tmoney: '254.00',
          state1: '待发货',
          state2: '已完成'
        },
        {
          name: '201725698845',
          snum: '201725698845',
          time: '2017-08-011 00：05',
          back: '仅退款',
          smoney: '306.00(含运费：6.00)',
          bmoney: '6.00',
          tmoney: '254.00',
          state1: '待发货',
          state2: '已完成'
        },
        {
          name: '201725698845',
          snum: '201725698845',
          time: '2017-08-011 00：05',
          back: '仅退款',
          smoney: '306.00(含运费：6.00)',
          bmoney: '6.00',
          tmoney: '254.00',
          state1: '待发货',
          state2: '已完成'
        },
        {
          name: '201725698845',
          snum: '201725698845',
          time: '2017-08-011 00：05',
          back: '仅退款',
          smoney: '306.00(含运费：6.00)',
          bmoney: '6.00',
          tmoney: '254.00',
          state1: '待发货',
          state2: '已完成'
        },
        {
          name: '201725698845',
          snum: '201725698845',
          time: '2017-08-011 00：05',
          back: '仅退款',
          smoney: '306.00(含运费：6.00)',
          bmoney: '6.00',
          tmoney: '254.00',
          state1: '待发货',
          state2: '已完成'
        }],
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
.dingdanjiesuan{
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
