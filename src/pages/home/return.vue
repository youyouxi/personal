<template>
<div class="page">
	<div class="pag" v-if="this.num==1"></div>
    <div class="page-tit bor">
        <span class="b-title">寄回地址</span>
        <div class="right">
            <el-button type="primary" style="padding:0"  @click="openBox">新增地址</el-button>
        </div>
    </div>
    <div class="btable">
  		<el-table
		    ref="multipleTable"
		    :data="tableData3"
		    border
		    tooltip-effect="dark"
		    style="width: 100%;border-top: none;text-align:left"
		    @selection-change="tableSelectionChange">
			    <el-table-column
			      label="收货人"
			      width="300"
                  >
				    <template slot-scope="scope"><p style="color:#12A1F3;padding-left:20px ;">{{ scope.row.name}}</p></template>
			    </el-table-column>
			    <el-table-column
			      label="联系方式"
			      width="380">
			     		<template slot-scope="scope">{{ scope.row.phone}}</template>
			    </el-table-column>
			    <el-table-column
			      prop="img"
			      label="地区"
			       width="300">
			     		<template slot-scope="scope">{{ scope.row.region}}</template>
			    </el-table-column>
			    <el-table-column
			      prop="num"
			      label="详细地址"
			      show-overflow-tooltip>
                  <template slot-scope="scope">{{ scope.row.region}}</template>
			    </el-table-column>
			    <el-table-column
			      prop="isshow"
			      label="默认地址"
			      show-overflow-tooltip>
			      <template slot-scope="scope">
			      	<el-switch
						v-model="form.delivery"
						on-text=""
						off-text=""
						on-color="#13ce66"
						off-color="">
					</el-switch>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作" width="150">
			      <template slot-scope="scope">
			      	<el-button
						type="text"
						class="editor"
			        	@click="handleEdit(scope.$index, tableData3,$event)">
			          	编辑
			        </el-button>
			        <el-button
						type="text"
			        	@click="handleDelete(scope.$index, tableData3)">
			        	删除
			        </el-button>
			      </template>
			    </el-table-column>
		</el-table>
    </div>
    <!--插件-->
    <!--<my-box v-if="this.num==1"></my-box>-->
    <!--弹出框-->
    <div class="box" v-if="this.num==1">
	  		<div class="title">
	  				<span>{{showtitle}}</span>
	  				<i class="el-icon-close" style="color: #ACB5CD;" @click="close"></i>
	  		</div>
	  		<el-form ref="form" :model="form" label-width="90px">
				  <el-form-item label="收货人姓名:" style="position: relative;">
				    <el-input v-model="form.name"
				     	:maxlength=15
				    	@input="onInput"
				    	></el-input>
				    <span class="tiShi" style="color:#FF6B60 ;margin-left: 10px;display: none;">*姓名不能为空</span>
				  </el-form-item>
                  <el-form-item label="联系方式:">
				    <el-input v-model="form.num" placeholder=""></el-input>
				    <span class="tiShi" style="color:#FF6B60 ;margin-left: 10px;display: none;">*联系方式不能为空</span>
				  </el-form-item>
				  <el-form-item label="地址:">
				    <el-input v-model="form.num" placeholder=""></el-input>
				    <span class="tiShi" style="color:#FF6B60 ;margin-left: 10px;display: none;">*地址不能为空</span>
				  </el-form-item>
				  <el-form-item label="是否默认:">
				    <el-switch on-text="" off-text="" v-model="form.delivery"  on-color="#13ce66"></el-switch>
				  </el-form-item>
				</el-form>
				<div class="bottom">
					<div class="bott">
						<el-button type="primary" @click="onSubmit">保存</el-button>
				  		<el-button @click="close">取消</el-button>
					</div>
				</div>
	  	</div>


</div>


</template>
<script>
// import $ from 'jquery';
export default {
  data () {
    return {
            //	 上传logo
      dialogImageUrl: 'scope.row.img',
      dialogVisible: false,
      num: 0,
      multipleSelection: [],
      selectArr: [],
      tableData3: [],
      input2: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      search: '',

      form: {
        name: '',
        region: '',
        img: '',
        num: '',
        delivery: true
      },
      tableData3: [{
        name: '张立虎',
        phone: '13525486598',
        region: '浙江省杭州市西湖区紫霞街',
        delivery: true
      },
      {
        name: '张立虎',
        phone: '13525486598',
        region: '浙江省杭州市西湖区紫霞街',
        delivery: true
      },
      {
        name: '张立虎',
        phone: '13525486598',
        region: '浙江省杭州市西湖区紫霞街',
        delivery: true
      } 
      ]
    }
  },
  methods: {
    handleEdit (index, row, e) {
      console.log(e.target)
      this.num = 1
      this.showtitle = '新增地址'
      this.num1 = 1
      var str = $(e.target).parent().prev().prev().prev().prev().attr('class')
      localStorage.setItem('name', str)
    },
    handleDelete (index, row) {
      row.splice(index, 1)
    },
    tableSelectionChange (val) {
      console.log(val)
      this.selected = val
    },
    handleIconClick (ev) {
      console.log(ev)
    },
    openBox () {
      this.num = 1
      this.showtitle = '新增地址'
    },
    close () {
      this.form = {name: '', num: '', region: '', img: '', delivery: false}
      this.num = 0
    },
    onInput () {
      var textVal = document.getElementsByClassName('el-input__inner')[0].value.length
      this.remnant = textVal
    },
    onSubmit () {
      var tiShi = document.getElementsByClassName('tiShi')
      if (this.form.name.length <= 0) {
        tiShi[0].style.display = 'block'
        return false
      }
      if (this.form.num.length <= 0) {
        tiShi[1].style.display = 'block'
        return false
      }
      var obj = {
        name: this.form.name,
        num: this.form.num,
        region: this.form.region,
        img: this.form.img
      }
      this.tableData3.push(obj)
      this.form = {name: '', num: '', region: '', img: '', delivery: false}
      this.num = 0
    }
  },
  watch: {

  }
}
</script>
<style lang='scss'>
.page{
    .el-table__body-wrapper{
        overflow: hidden;
    }
}
</style>
<style scoped>
.el-table__body-wrapper{
	position: initial;
}
.bor{
	border-bottom: 1px solid #d6e2ed;
}
.page-tit{
	display: flex;
	justify-content: space-between;
	font: 18px/36px "";
	color:#2a3542;
	padding: 10px 20px;
    background: #f2f4f7;
}
.search-top{
	width: 280px;
}
.right .el-button{
	height:36px;
	width: 80px;
}

.shop-img{
	width: 30px;
	height: 30px;
}
tbody .el-table .el-table__row td{
	padding: 2px 0!important;
}

/*弹出框插件*/
.pag{
	position: absolute;
	width: 100%;
	height: 100%;
	background: #000;
	opacity: 0.3;
	z-index: 10;
}
.box{
	margin: 0 auto;
	color: #000;
	/*font-weight: 700;*/
	margin-top: 100px;
	margin-bottom: 200px;
	background: #fff;
	width: 700px;
	text-align: left;
	border: 1px solid #E0E3E6;
	position: absolute;
	z-index: 11;
	top: 10px;
	left: 25%
}
.el-form{
	padding: 20px 20px;
}
.title{
	padding:18px 20px 0 20px ;
	height: 40px;
	border-bottom: 1px solid #E0E3E6;
	display: flex;justify-content: space-between;
}
.box .el-input{
	width: 340px
}
.box .el-select{
	width: 340px
}

.el-form-item{
	margin-bottom: 16px;
}
.box button{
	padding: 0;
	width: 80px;
	height: 34px;
}
.bottom{
	height: 42px;
	background:#F4F6F9 ;
	border-top: 1px solid #E0E3E6;
	padding-top: 20px;
}
.bott{
	float: right;
	margin-right: 20px;
}

</style>
