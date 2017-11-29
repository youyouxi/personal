<template lang="">
  <div class="dingdanjiesuan">
    <div class="list-top">
      <p class="title">资金收入</p>
      <div class="smalldemo">
        <span class="demonstration">打款时间：</span>
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        </div>
        <div class="demo-input-suffix">
        <el-input
          class="list-search"
          placeholder="输入账单号搜索">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="s-top">
        <p>累计收入</p>
        <p><img src='../../../static/images/dollar.png' :data='list'>{{list.index}}</p>
    </div>
    <div class="supplier-item-content" >
      <el-table
              ref="multipleTable"
              :data="tableData"
              style="width: 100%;"
               @selection-change="handleSelectionChange"
              :height='tableHeight'
              border
              >
              <el-table-column
                style="border-right:none"
                label="订单编号"
                width='533px'
                >
                <template slot-scope="scope">
                    <span @click='routeGo'>20170214240581412</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="time"
                label="支付时间"
                >
              </el-table-column>
              <el-table-column
                prop='num'
                label="银行流水号"
                width='300px'
                >
              </el-table-column>
              <el-table-column
                prop='money'
                label="收款金额"
                >
              </el-table-column>
              <el-table-column
                prop='person'
                label="打款人"
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
        tableHeight: 600,
        value6:'',
        tableData:[],
        list:'',
        // tableData: [{
        //   shopnum: '2017021424058141',
        //   time: '2017-02-15 00:50:00',
        //   num: '564646498461687994912',
        //   money: '25498.00',
        //   person: '李丽春'
        // },
        // {
        //   shopnum: '2017021424058141',
        //   time: '2017-02-15 00:50:00',
        //   num: '564646498461687994912',
        //   money: '25498.00',
        //   person: '李丽春'
        // },
        // {
        //   shopnum: '2017021424058141',
        //   time: '2017-02-15 00:50:00',
        //   num: '564646498461687994912',
        //   money: '25498.00',
        //   person: '李丽春'
        // },
        // {
        //   shopnum: '2017021424058141',
        //   time: '2017-02-15 00:50:00',
        //   num: '564646498461687994912',
        //   money: '25498.00',
        //   person: '李丽春'
        // },
        // {
        //   shopnum: '2017021424058141',
        //   time: '2017-02-15 00:50:00',
        //   num: '564646498461687994912',
        //   money: '25498.00',
        //   person: '李丽春'
        // }],
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
    this.$http.get('api/sup/revenue/1', {params: {}}).then(res => {
      console.log(res.data.data.list)
      var list = this.list.index
      console.log(list)
      var arr = res.data.data.list
      for (let i in arr) {
        this.tableData.push({
          money: arr[i].bankFlowNo,
          shopnum: arr[i].billNo,
          time: arr[i].collectionTime,
          num: arr[i].bankFlowNo,
          money: arr[i].transferMoney,
          person: arr[i].transferUserName
        })
      }
      console.log(this.tableData)
    }, error => {
      console.log(2)
    })
  },
    computed: {

    },
    watch: {

    },
    methods: {
      back () {
        window.history.back()
      },
      routeGo () {
        this.$router.push({
          name: 'FundDetail'
        })
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
  position: relative;
  height:93.5%;
    .el-table__row{
        .el-table_1_column_1{
            color:#12a1f3;
            cursor:pointer;
        }  
        td:last-child{
            .cell{
                text-indent: 40%;
            }
    }
    }
    .list-top .demo-input-suffix{
      margin:10px;
    }
    .smalldemo{
      .el-date-editor--daterange{
        width: 280px;
        margin:10px 0 0 500px;
        position: relative;
      }
      .demonstration{
        position: absolute;
        top:20px;
        left:420px;
        color:#6e7381;
      }
    }
} 
</style>
<style lang="scss" scoped>
    .s-top{
        font-size:12px;
        height:90px;
        background:#fff;
        padding:20px;
        p{
            img{
                width:40px;
                height:40px;
                margin-right:10px;
                float: left;
            }
            &:last-child{
                font:36px/40px '';
                margin-top:20px;
            }
        }
    }
    .backs{
        color: #12A1F3;
        font-size: 14px;
        margin-left: 10px;
        cursor:pointer;
    }
</style>
