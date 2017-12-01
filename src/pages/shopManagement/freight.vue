<template lang="">
  <div class="freights">
    <div class="list-top">
      <p class="title">运费模板</p>
      <div class="demo-input-suffix">
        <el-input
          class="list-search"
          placeholder="输入门店名称">
          <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
       <router-link to='/AddFreight'><el-button class="top-button" type="primary" size="small">新增商品</el-button></router-link>
    </div>
    <div class="list-item">
      <div class="item-group">
        <el-radio-group class='checkedF' v-model="tableItem"  >
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="按重量"></el-radio-button>
          <el-radio-button label="按件数"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="item-delete" v-if='multipleSelection.length>0' >
        <i class="el-input__icon el-icon-circle-close" style="font-size:14px"></i>
        <span   style="cursor:pointer" @click='closeIt'>关闭</span>
         <!-- <el-button type="text" @click="open2">点击打开 Message Box</el-button> -->
      </div>
    </div>
    <div class="supplier-item-content" >
      <el-table
          ref="multipleTable"
          v-if='tableItem == "全部"'
          :data="tableData"
          style="width: 100%;"
            @selection-change="handleSelectionChange"
          :height='tableHeight'
          border
          >
          <el-table-column
            style="border-right:none"
            prop="name"
            label="模板名称"
            width='320px'
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="配送区域"
            width='800px'
            >
          </el-table-column>
          <el-table-column
            prop="Commodity"
            label="计价方式"
            >
          </el-table-column>
          <el-table-column
            prop='dongjie'
            label="操作"
            >
            <template slot-scope="scope">
            <div class="operation-box">
              <router-link to='/AddFreight'><p class='operation'>编辑</p></router-link>
              <p class='operation'>删除</p>
              <!-- <p class='operation'  @click='jiedong'>编辑</p> -->
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
  import Pagenation from '../../components/pagenations/pagenations.vue'
  export default {
    components: {
      'pagenation': Pagenation
    },
    data () {
      return {
        showIt: false,
        tableHeight: 745,
        multipleSelection: [],
        tableData: [],
        tableItem: '全部',
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
      this.$http.get('api/list/1', {params: {}}).then(res => {
        console.log(res.data.data.list)
        var arr = res.data.data.list
        for (let i in arr) {
          this.tableData.push({
            name: arr[i].templateName,
            address: arr[i].countWay,
            Commodity: arr[i].templateArea
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
      sign () {
        this.$store.commit('setSignSupplier', {
          id: 1
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
.freights{
  position: relative;
  height:93.5%;
}

</style>
