<template>
  <div class='kucunyujing'>
      <div class='title'>
        <span>库存预警</span>
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
                prop='name'
                label="商品"
                width="460">
                <template slot-scope="scope">
                    <div class='shop-inf'>
                        <img src="../../../static/images/shop.png">
                        <p>海外原装进口德国爱他美3段婴儿成长配方宝宝奶粉三段2段国内现货</p>
                    </div>
                </template>
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
import Page from '../../components/pagenations/pagenations'
export default {
  data () {
    return {
      tableData: [{
        num: '125',
        sales: '572',
        days: '5',
        totle: '360',
        fate: '3'
      }, {
        num: '125',
        sales: '524',
        days: '5',
        totle: '360',
        fate: '5'
      }, {
        num: '125',
        sales: '785',
        days: '5',
        totle: '360',
        fate: '4'
      }, {
        num: '125',
        sales: '75',
        days: '5',
        totle: '360',
        fate: '7'
      }, {
        num: '125',
        sales: '757',
        days: '5',
        totle: '360',
        fate: '9'
      }, {
        num: '125',
        sales: '75',
        days: '5',
        totle: '360',
        fate: '3'
      }]
    }
  },
  methods: {

  },
  components: {
    Page
  }
}
</script>
<style>
/*.el-table--border td, .el-table--border th{border:none;}*/
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

