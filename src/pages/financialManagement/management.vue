<template lang="">
  <div class="zhangdanguanli">
    <div class="list-top">
      <p class="title">账单管理</p>
      <div class="demo-input-suffix">
        <el-input
          class="list-search"
          placeholder="输入订单号">
          <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
         <span class="search" id='show' @click='showSeach'>高级搜素</span> 
      </div>
    </div>
    <el-collapse-transition>
    <div class="seniorSearch transition-box" v-if='showIt'>
      <ul class='seniorSearch-ul'>
        <li>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>账单日期：</span>
              <el-date-picker
                  v-model="value9"
                  type="daterange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  default-value="2010-10-01">
                </el-date-picker>
            </div>
          </div>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>付款状态：</span>
              <el-select v-model="value8" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
          </div>
        </li>
        <li>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>创建时间：</span>
              <el-select v-model="value8" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
        </div>
        <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>账单编号：</span>
              <el-input v-model="input" placeholder=""></el-input>
            </div>
        </div>
        </li>
        <li>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>对账状态：</span>
              <el-select v-model="value8" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
          </div>
          <div class="seniorSearch-content">
          <div class="seniorSearch-content-child third">
                <el-button type="primary" size='medium'>搜索</el-button>
                <el-button type="info" size='medium'>清空</el-button>
                <el-button type="info" size='medium' @click='close'>关闭</el-button>
          </div>
         </div>
        </li>
      </ul>
    </div>
    </el-collapse-transition>
    <div class="list-item">
      <div class="item-group">
        <el-radio-group class='checkedF' v-model="tableItem"  >
          <el-radio-button label="全部账单"></el-radio-button>
          <el-radio-button label="待确认账单"></el-radio-button>
          <el-radio-button label="确认失败"></el-radio-button>
          <el-radio-button label="已确认"></el-radio-button>
          <el-radio-button label="未确认收款"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="supplier-item-content" >
      <el-table
              ref="multipleTable"
                v-if='tableItem == "全部账单"'
              :data="tableData"
              style="width: 100%;"
               @selection-change="handleSelectionChange"
              :height='tableHeight'
              border
              >
              <el-table-column
                style="border-right:none"
                label="账单编号"
                width='200px'
                >
                <template slot-scope="scope">
                  <router-link to='/FinancialDetails'><span>{{scope.row.num}}</span></router-link>
                </template>
              </el-table-column>
              <el-table-column
                prop="btime"
                label="创建时间"
                width='200px'
                >
              </el-table-column>
              <el-table-column
                label="账单日期"
                >
                <template slot-scope="scope">
                  <span>{{scope.row.bengin}}</span>至<span>{{scope.row.ending}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="money"
                label="订单金额"
                >
              </el-table-column>
              <el-table-column
                prop="bmoney"
                label="退款金额"
                >
              </el-table-column>
              <el-table-column
                prop="tmoney"
                label="结算金额"
                >
              </el-table-column>
              <el-table-column
                prop='state1'
                label="对账状态"
                >
              </el-table-column>
              <el-table-column
                prop='state2'
                label="转账状态"
                >
              </el-table-column>
              <el-table-column
                prop='dongjie'
                label="操作"
                width='220px'
                >
                <template slot-scope="scope">
                <div class="operation-box">
                  <router-link to='/Detailedlist'><p class='operation' >查看流水</p></router-link>
                  <p class='operation' >确认通过</p>
                  <p class='operation' >拒绝</p>
                </div>
               </template>
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
  import axios from 'axios'
  import qs from 'qs'
  import Pagenation from '../../components/pagenations/pagenations.vue'
  export default {
    components: {
      'pagenation': Pagenation
    },
    data () {
      return {
        showIt: false,
        tableHeight: 745,
        value9: '',
        input: '',
        tableData: [],
        tableItem: '全部账单',
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
      this.$http.get('api/sup/bill/1', {params: {}}).then(res => {
        console.log(res.data.data.list)
        var arr = res.data.data.list
        for (let i in arr) {
          if (arr[i].contrastBillStatus == 0) {
            arr[i].contrastBillStatus = '待确认'
          } else if (arr[i].contrastBillStatus == 1) {
            arr[i].contrastBillStatus = '确认账单正确'
          } else if (arr[i].contrastBillStatus == 2) {
            arr[i].contrastBillStatus = '确认账单错误'
          }
          if (arr[i].transferStatus == 0) {
            arr[i].transferStatus = '资金审批待审批'
          } else if (arr[i].transferStatus == 1) {
            arr[i].transferStatus = '资金审批中'
          } else if (arr[i].transferStatus == 2) {
            arr[i].transferStatus = '资金审批成功'
          } else if (arr[i].transferStatus == 3) {
            arr[i].transferStatus = '资金审批失败'
          } else if (arr[i].transferStatus == 4) {
            arr[i].transferStatus = '已付款'
          } else if (arr[i].transferStatus == 5) {
            arr[i].transferStatus = '未付款'
          } else if (arr[i].transferStatus == 6) {
            arr[i].transferStatus = '待收款'
          } else if (arr[i].transferStatus == 7) {
            arr[i].transferStatus = '已收款'
          }
          this.tableData.push({
            num: arr[i].billNo,
            btime: arr[i].created,
            bengin: arr[i].startTime,
            ending: arr[i].endTime,
            money: arr[i].orderMoney,
            bmoney: arr[i].refundMoney,
            tmoney: arr[i].clearingMoney,
            state1: arr[i].contrastBillStatus,
            state2: arr[i].transferStatus
          })
        }
        console.log(this.tableData.btime)
      }, error => {
        console.log(2)
      })
  },
    computed: {

    },
    watch: {

    },
    methods: {
      sign () {
        this.$store.commit('setSignSupplier', {
          id: 1

        })
      },
      routerGo () {
        this.$router.push({
          name: 'storeAddress'
        })
      },
      showSeach () {
        this.showIt = !this.showIt
        if (this.showIt) {
          $('#show').html('普通搜索')
          this.outerHeight += 120
          console.log(this.outerHeight)
        } else {
          $('#show').html('高级搜索')
          this.outerHeight -= 120
          console.log(this.outerHeight)
        }
      },
      close () {
        this.showIt = !this.showIt
        $('#show').html('高级搜索')
      },
      showalert (val) {
        if (this.tableItem === '删除') {
          this.open2()

          this.tableItem = ''
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
        console.log(val)
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
    }
  }
</script>
<style lang="scss">
@import '../../../static/style/order.scss';
.zhangdanguanli{
  position: relative;
  height:93.5%;
    .el-table__row{
        .el-table_1_column_1 span{
            color:#12a1f3;
            cursor:pointer;
        }  
    }
} 
.cell{
  width: 100%;
  .operation-box{
    width: 100;
    display: flex;
    p{
      display: inline-block;
      margin-left: 5px;
      color:#12a1f3;
            cursor:pointer;
    }
  }
}
</style>