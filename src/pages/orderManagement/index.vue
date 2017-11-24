<template lang="">
  <div class="">
    <div class="list-top">
      <p class="title">订单汇总</p>
      <div class="demo-input-suffix">
        <el-input
          class="list-search"
          placeholder="输入商品名称">
          <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <span class="search">高级搜素</span>
      </div>
    </div>
    <div class="list-item">
      <div class="commodity-item-group">
        <el-radio-group class="caozuo" v-model="tableItem"  @change='showalert'>
          <el-radio-button label="全部订单"></el-radio-button>
          <el-radio-button label="待审核"></el-radio-button>
          <el-radio-button label="待发货"></el-radio-button>
          <el-radio-button label="已发货"></el-radio-button>
          <el-radio-button label="交易完成"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="item-delete" v-if='multipleSelection.length<=0' >
        <i class="iconfont icon-empty" style="font-size:14px"></i>
      </div>
      <div class="item-delete" v-if='multipleSelection.length>0'>
        <i class="el-input__icon el-icon-circle-close" style="font-size:14px"></i>
        <span   style="cursor:pointer" @click='closeIt'>关闭</span>
      </div>

    </div>
    <el-collapse-transition>
    <div class="seniorSearch transition-box" v-if='showIt'>
      <ul class='seniorSearch-ul'>
        <li>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>商品类目：</span>
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
              <span>所属公司：</span>
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
              <span>参与竞价：</span>
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
              <span>商品类目：</span>
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
              <span>所属公司：</span>
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
              <span>参与竞价：</span>
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
              <span>商品类目：</span>
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
              <span>所属公司：</span>
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
      </ul>
    </div>
    </el-collapse-transition>
    <div class="salesTable" >

    <div class="table-header">
      <ul class="table-header-ul">

        <li v-for='(item,i) in tabletitle' :style="'width:' + item.titleWidth + 'px'" ><p>{{item.name}}</p></li>
      </ul>
    </div>
    <div class="table-content" >


        <ul class="table-content-ul" v-for='(item,i) in 5'>

          <li>
            <div class="table-content-header">
              <p>订单号:20171016563214</p>
              <p>订单号:20171016563214</p>
              <p>订单号:20171016563214</p>
              <p>订单号:20171016563214</p>
            </div>
              <div class="box">
                <div class="box-img">
                    <img src='../../../static/images/test.png'/>
                  <p>{{tableContent.box1}}</p>
                  <p>2017年7月-2018年8月    2罐装</p>
                </div>
                <p>{{tableContent.box2}}</p>
                <p>{{tableContent.box2}}</p>
                <p>{{tableContent.box2}}</p>
                <p>{{tableContent.box2}}</p>
                <p class='sta'>
                  <router-link to='/Complete'><span style='color:#79cd51'>{{tableContent.state1}}</span></router-link>
                  <router-link to='/Details'><span style='color:#12a1f3'>{{tableContent.box4}}</span></router-link>
                </p>
                <p>{{tableContent.box3}}</p>
                <p><el-button type="primary" size='small'>接单</el-button></p>
              </div>
          </li>
        </ul>
    </div>

    </div>
  </div>
</template>
<script lang="">
  export default {
    data () {
      return {
        tabletitle: [
          {
            name: '商品',
            titleWidth: '400'
          },
          {
            name: '规格价'
            //  titleWidth:"80",
          },
          {
            name: '数量'
            //  titleWidth:"80",
          },
          {
            name: '总金额/件数'
            //  titleWidth:"120",
          },
          {
            name: '买家'
            //  titleWidth:"100",
          },
          {
            name: '订单状态'
            //  titleWidth:"80",
          },
          {
            name: '备注'
            //  titleWidth:"80",
          },
          {
            name: '操作'
            //  titleWidth:"60",
          }

        ],
        tableData: {
          list: [
            {
              a: 1
            },
            {
              a: 1
            },
            {
              a: 1
            }
          ]
        },
        tableContent: {
          box1: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          box2: '200333',
          box3: '请发顺丰快递',
          box4: '订单详情',
          state1: '交易完成'
        },
        showIt: false,
        checked: false,
        tableHeight: 748,
        multipleSelection: [],
        tableData3: [{
          date: '2016-05-03',
          img: '../../../static/image/commodity.jpg',
          Commodity: '200333',
          name: '海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          Commodity: '200333',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          Commodity: '200333',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          Commodity: '200333',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          Commodity: '200333',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          Commodity: '200333',
          address: '上海市普陀区金沙江路 1518 弄'
        } ],
        tableItem: '全部订单',
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
      showSeach () {
        this.showIt = !this.showIt
        if (this.showIt) {
          this.tableHeight = 578
        } else {
          this.tableHeight = 748
        }
      },
      showalert (val) {
        if (this.tableItem === '删除') {
          this.open2()

          this.tableItem = ''
        }
      },
      open2 () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
        console.log(val)
      },
      closeIt () {
        this.$refs.multipleTable.clearSelection()
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
</style>
<style lang="scss" scoped>
.sta{
  span{
    display: block;
    cursor:pointer 
  }
}
</style>
