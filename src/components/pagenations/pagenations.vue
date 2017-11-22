<template lang="">
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="5"
      layout="slot,jumper"
      :total="20">
      <template>
        <div class="pagenations">
          <span class='pagenations-total'>当前第<span>{{currentPage3}}</span>页/共{{currentPageT}}页{{currentPageT2}}条</span>
          <el-button>
            上一页
          </el-button>
          <el-button>
            下一页
          </el-button>
        </div>
      </template>
    </el-pagination>
  </div>
</template>
<script lang="">
  export default {
    data () {
      return {
        currentPage3: 5,
        currentPageT: 5,
        currentPageT2: 5
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
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style lang="scss" scoped>
.pageNum{
  position: fixed;
  left: 200px;
  .block{
    height: 60px;
    .el-pagination{
      position: absolute;
      height: 36px;
      left: 15px;
      top: 16px;
    }
  }
}
.pagenations{
float: left;
  .pagenations-total{
    float: left;
    font-size: 14px ;
    color: #2a3542 ;
    font-weight: 400;
    margin-right: 20px;
  }
  .el-button{
    float: left;
    width: 58px;
    height: 28px;
    border: 1px solid #d6e2ed;
    background: #fff;
  }
}
.el-pagination__total{
  float: left;
}
.el-pagination__jump{
  float: left;
}

</style>
