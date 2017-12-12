<template lang="">
  <div class="shopmanage">
    <div class="list-top">
      <p class="title">供货列表</p>
      <div class="demo-input-suffix">
        <el-input
          class="list-search"
          placeholder="输入商品名称搜索">
          <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
          <i slot="suffix" class="el-input__icon el-icon-search"></i>

        </el-input>
        <span class="search" id='show' @click='showSeach'>高级搜素</span>
      </div>
      <el-button class="top-button" type="primary" size="small"  @click="addGoods">我要供货</el-button>
    </div>
    <el-collapse-transition>
    <div class="seniorSearch transition-box" v-if='showIt'>
      <ul class='seniorSearch-ul'>
        <li>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>商品编号：</span>
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
              <span>商品名称：</span>
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
              <span>运费模板：</span>
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
        <li>
          <div class="seniorSearch-content">
            <div class="seniorSearch-content-child">
              <span>报价时间：</span>
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
    <div class="list-item">
      <div class="item-group">
        <el-radio-group class='checkedF' v-model="tableItem" v-if='multipleSelection.length<=0' >
          <el-radio-button label="全部商品"></el-radio-button>
          <el-radio-button label="待上架"></el-radio-button>
          <el-radio-button label="出售中"></el-radio-button>
          <el-radio-button label="已下架"></el-radio-button>
          <el-radio-button label="停售中"></el-radio-button>
        </el-radio-group>
        <p style="float:left;height:50px;line-height:50px;font-size:14px;" v-if='multipleSelection.length>0'>已选择<span style="color:#12a1f3;padding:5px;">6</span>条</p>
        <el-radio-group class="caozuo" v-model="tableItem" v-if='multipleSelection.length>0' @change='showalert'>
          <el-radio-button label="停售"></el-radio-button>
          <el-radio-button label="出售"></el-radio-button>
          <el-radio-button label="删除"></el-radio-button>
        </el-radio-group>


      </div>
      <div class="item-delete" v-if='multipleSelection.length<=0' >
        <i class="iconfont icon-empty" style="font-size:14px"></i>
        <router-link to='Recycle'><span style="cursor:pointer;color:#6e7381">商品回收站</span></router-link>
         <!-- <el-button type="text" @click="open2">点击打开 Message Box</el-button> -->
      </div>
      <div class="item-delete" v-if='multipleSelection.length>0' >
        <i class="el-input__icon el-icon-circle-close" style="font-size:14px"></i>
        <span   style="cursor:pointer" @click='closeIt'>关闭</span>
         <!-- <el-button type="text" @click="open2">点击打开 Message Box</el-button> -->
      </div>

    </div>
    
    <div class="item-content" >
      <el-table
              ref="multipleTable"
              :data="tableData"
              style="width: 100%;"
               @selection-change="handleSelectionChange"
              :height='tableHeight'
              >
              <el-table-column
                fixed='left'
                type="selection"
                >
              </el-table-column>
              <el-table-column
                label="商品"
                width='100px'
                >
                <template slot-scope="scope">
                  <img class='shopimg' :src="scope.row.pic"/>
                </template>
              </el-table-column>
              <el-table-column
                label=""
                prop="name"
                width='400px'
                >
              </el-table-column>
              <el-table-column
                prop="Commodity"
                label="商品编号"
                >
              </el-table-column>
              <el-table-column
                prop="num"
                label="规格"
                >
              </el-table-column>
              <el-table-column
                prop="price"
                label="规格价/折合单价"
                >
              </el-table-column>
              <el-table-column
                prop="totle"
                label="总库存/规格库存"
                >
              </el-table-column>
              <el-table-column
                prop="states"
                label="状态"
                >
                </el-table-column>
                <el-table-column
                prop="time"
                label="报价时间"
                >
              </el-table-column>
              <el-table-column
                label="操作"
                >
                <template slot-scope="scope">
                    <div class="operation-box">
                    <p class='operation' @click="addGoods">编辑商品</p>
                    <p class='operation'>查看报价</p>
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
        tableHeight:745,
        multipleSelection: [],
        outerHeight: 240,
        tableData: [],
        tableItem: '全部商品',
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
    mounted () {
      this.$http.get('api/item/applylist/2', {params: {
      }}).then(res => {
        console.log(res.data.data.list)
        var arr = res.data.data.list
        for (let i in arr) {
          if (arr[i].state == 4) {
            arr[i].state = '停售中'
          } else if (arr[i].state == 1) {
            arr[i].state = '待上架'
          } else if (arr[i].state == 2) {
            arr[i].state = '出售中'
          } else if (arr[i].state == 3) {
            arr[i].state = '已下架'
          }
          this.tableData.push({
            pic: arr[i].imgMain,
            name: arr[i].title,
            Commodity: arr[i].itemCode,
            num: arr[i].specsStr,
            price: arr[i].totalPrice,
            totle: arr[i].unitPrice,
            states: arr[i].state,
            time: arr[i].created
          })
        }
        console.log(this.tableData)
      }, error => {
        console.log(2)
      })
  },
    computed: {

      tableHeight: function () {
        return $(window).height() - this.outerHeight
      }
    },
    watch: {
      tableHeight: {
        handler (val) {

        },
        deep: true
      }
    },
    methods: {
      addGoods () {
        this.$router.push({ name: 'Supply' })
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
<style lang='scss'>
@import '../../../static/style/order.scss';
</style>

<style lang="scss" scoped>
.shopmanage{
  position: relative;
  height:93.5%;
}
.shopimg{
  border:1px solid #ebedf1;
  width: 62px;
  height:62px;
}
// .commodity{
//     img{
//         width: 62px;
//         height:62px;
//     }
// }
</style>
