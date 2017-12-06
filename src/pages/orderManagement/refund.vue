<template lang="">
  <div class="shouhoudingdan">
    <div class="list-top">
      <p class="title">售后订单</p>
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
          <el-radio-button label="待寄回"></el-radio-button>
          <el-radio-button label="已收货"></el-radio-button>
          <el-radio-button label="退款完成"></el-radio-button>
          <el-radio-button label="退款关闭"></el-radio-button>
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


        <ul class="table-content-ul" v-for='(item,index) in shopList'>

          <li>
            <div class="table-content-header">
              <p>申请时间:<span>{{item.created}}</span></p>
              <p>退款编号:<span>{{item.orderno}}</span></p>
              <p>付款时间:<span>{{item.price}}</span></p>
              <p>订单号:<span>{{item.price}}</span></p>
              <p><span>{{item.price}}</span></p>
            </div>
              <div class="box">
                <div class='s-box'>
                  <div class='box-shop'>
                    <div class="box-img">
                      <img :src='item.itemImg'/>
                      <p>{{item.itemName}}</p>
                      <p>{{item.producedDate}}    {{item.quantity}}罐装</p>
                    </div>
                    <p style='width:20%'>{{item.price}}</p>
                    <p style='width:20%'>{{item.quantity}}</p>
                  </div>
                </div>
                <p>
                  <span style='font-size:18px;color:#6e7381;font-weight:700'>{{item.tmoney}}</span>
                  <span>含运费：<i>{{item.freight}}</i></span>
                  <span>总计：<i>{{item.tnum}}</i>件</span>
                </p>
                <p>
                  <span>{{item.name}}</span>
                  <span>{{item.phone}}</span>
                  <span>{{item.adress}}</span>
                </p>
                <p class='sta'>
                  <router-link to='/Complete'><span class='trant'>{{item.state}}</span></router-link>
                  <router-link to='/Details'><span style='color:#12a1f3' :sid='item.id' @click="toDetail($event)">订单详情</span></router-link>
                </p>
                <p class='shouhou'>
                  <span style='color:#ff776d'>{{item.state1}}</span>
                  <span>{{item.state2}}</span>
                  <router-link to='/Aftersale'><span style='color:#12a1f3'>查看详情</span></router-link>
                </p>
                <p><el-button type="primary" size='small'>接单</el-button></p>
              </div>
          </li>
        </ul>
    </div>

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
        shopList: [],
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
            name: '退款金额/件数'
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
            name: '售后状态'
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
        showIt: false,
        checked: false,
        tableHeight: 748,
        multipleSelection: [],

        tableItem: '全部订单',
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
      this.$http.get('api/sup/refund/1', {params: {}}).then(res => {
        console.log(res)
        var arr = res.data.data.list
        for (let i in arr) {
          if (arr[i].status == 0) {
            arr[i].status = '待支付'
          } else if (arr[i].status == 1) {
            arr[i].status = '待发货'
          } else if (arr[i].status == 2) {
            arr[i].status = '已完成'
          } else if (arr[i].status == 3) {
            arr[i].status = '已取消'
          } else if (arr[i].status == 4) {
            arr[i].status = '已取消'
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
          if (arr[i].refundType == 0) {
            arr[i].refundType = '仅退款'
          } else if (arr[i].refundType == 1) {
            arr[i].refundType = '申请补偿'
          } else if (arr[i].refundType == 2) {
            arr[i].refundType = '退货退款'
          } 
          this.shopList.push({
            itemName: arr[i].itemName,
            producedDate: arr[i].producedDate,
            price: arr[i].price,
            quantity: arr[i].specsNumber,
            name: arr[i].userName,
            phone:arr[i].cellPhone,
            adress: arr[i].addressMsg,
            tmoney: arr[i].orderPrice,
            tips: arr[i].remark,
            toplist: arr[i].item,
            state:arr[i].status,
            state1: arr[i].afterStatus,
            state2: arr[i].refundType
          })
        }
      }, error => {
        console.log(2)
      })
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
.shouhoudingdan{
    position: relative;
    height:93.5%;
    .box{
  border-bottom:1px solid #d6e2ed;
  p{
    span{
      font:14px/24px '';
      color:#6e7381;
      display: block;
    }
  }
  .s-box{
    width:44.8%;
    float:left;
      .box-shop{
        width:800px;
      }
  }
}
}
.shouhou{
  height:
  span{
    display: block;
    cursor:pointer 
  }
}
</style>

