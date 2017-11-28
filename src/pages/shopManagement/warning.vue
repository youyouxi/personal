<template>
  <div class='kucunyujing'>
      <div class='title'>
        <span @click='begin'>库存预警</span>
        <div class='search'>
            <el-input
            class='nnm'
            placeholder="输入商品名称搜索">
                <i slot="suffix" class="el-input__icon el-icon-circle-close"></i>
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
      </div>
      <div class='main'>
          <template>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop='img'
                label="tupian"
                width="260">
                <template>
                  <img :src='img'/>
                </template>
                </el-table-column>
                <el-table-column
                prop='name'
                label="商品"
                width="460">
                </el-table-column>
                <el-table-column
                prop="num"
                label="商品编号">
                </el-table-column>
                <el-table-column
                prop="sales"
                label="近30天销量"
                sortable>
                </el-table-column>
                <el-table-column
                prop="days"
                label="近30天动销天数">
                </el-table-column>
                <el-table-column
                prop="totle"
                label="剩余总库存"
                >
                </el-table-column>
                <el-table-column
                prop="fate"
                label="剩余可周转天数"
                sortable>
                </el-table-column>
            </el-table>
        </template>
      </div>
      <div class='pageNum'>
            <Page></Page>
      </div>
  </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
import qs from 'qs'
import Page from '../../components/pagenations/pagenations'
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.$http.get('api/inventory', {params: {
      id: 1,
      usableDay: 20,
      salesDay: 4,
      salesVolume: 13,
      itemCode: 21015515151,
      inventory: 222,
      title: '大手大脚卡萨丁看手机',
      imgMain: ''
    }}).then(res => {
      console.log(res.data.data.list)
      var arr = res.data.data.list
      for (let i in arr) {
        this.tableData.push({
          img: arr[i].imgMain,
          name: arr[i].title,
          num: arr[i].itemCode,
          sales: arr[i].salesDay,
          days: arr[i].salesVolume,
          totle: arr[i].inventory,
          fate: arr[i].usableDay
        })
      }
      console.log(this.tableData)
    }, error => {
      console.log(2)
    })
  },
  methods: {
    begin () {
      this.$http.get('api/inventory', {params: {

      }}).then(res => {
        console.log(1)
        // this.tableData.num=res.itemCode,
        // this.tableData.sales=res.salesDay,
        // this.tableData.day=res.salesVolume,
        // this.tableData.totle=res.inventory,
        // this.tableData.fate=res.usableDay
      }, error => {
        console.log(2)
      })
        // $.ajax({
        //   type: 'GET',
        //   url: '/api/inventory',
        //   data: {},
        //   dataType: 'JSON',
        //   success: function (res) {
        //     alert(1)
        //   },
        //   error: function () {
        //     console.log(2)
        //   }
        // })
    }
  },
  components: {
    Page
  }
}
</script>
<style>
/*.el-table--border td, .el-table--border th{border:none;}*/
.el-table_1_column_25 .cell{
  color: blue;
}
</style>

<style lang="scss" scoped>
.kucunyujing{
    position: relative;
    height:93.5%;
}
.title{
    height:60px;
    background: #F4F6F9;
    border:1px solid #dfe2e9;
    text-indent: 20px;
    span{ 
        font:18px/60px '';
    }
    .search{
        display: inline-block;
        width: 280px;
        margin-left:500px;
    }
}
.shop-inf{
    img{
        width: 64px;
        height: 64px;
        border:1px solid #dfe2e9;
        float: left;
        margin-right:20px;
    }
    p{
        width: 310px;
        font:14px/20px '';
        color:#12a1f3;
        
    }
}
.pageNum{
  width: 100%;
  height: 60px;
  background: #f4f6f9;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 4;
}
</style>

