<template lang="">
  <div class="dingdanjiesuan">
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
              :data="tableData3"
              style="width: 100%;"
               @selection-change="handleSelectionChange"
              :height='tableHeight'
              border
              >
              <el-table-column
                style="border-right:none"
                prop="num"
                label="账单编号"
                width='200px'
                >
                <template slot-scope="scope"><router-link to='/FinancialDetails'><span style='color:#12a1f3;;'>2017021424058141</span></router-link></template>
              </el-table-column>
              <el-table-column
                prop="btime"
                label="创建时间"
                width='200px'
                >
              </el-table-column>
              <el-table-column
                prop="time"
                label="账单日期"
                >
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
        tableData3: [{
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }, {
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }, {
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }, {
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }, {
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }, {
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }, {
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          btime: '2017-02-15 00:50:00',
          time: '2017-08-011 00：05至2017-08-04 00：05',
          money: '￥9654.00',
          bmoney: '￥5624.00',
          tmoney: '￥254.00',
          state1: '待确认',
          state2: '未付款'
        }],
        tableItem: '全部账单',
        list: [
          {
            name: '首页1',
            icon: '',
            index: '1',
            path: 'main1',
            children: []
          },
          {
            name: '首页2',
            icon: '',
            index: '2',
            path: 'main2',
            children: []
          },
          {
            name: '首页3',
            icon: '',
            index: '3',
            path: 'main3',
            children: []
          },
          {
            name: '首页4',
            icon: '',
            index: '4',
            path: 'main4',
            children: []
          }
        ],
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
.dingdanjiesuan{
    .el-table__row{
        .el-table_1_column_1{
            color:#12a1f3;
            cursor:pointer;
        }  
    }
} 
</style>