<template>
<div class='cebianlan'>
	<el-aside width="220px" class="left">
	    <el-menu>
					<img src="../../../static/images/logo.png" style="width:220px;margin-bottom:20px;">
		      <el-submenu index="1">
		        <template slot="title"><router-link to='/Home'><i><img src="../../../static/images/home.png"></i>首页</router-link></template>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title"><i><img src="../../../static/images/order(1).png"></i>订单管理</template>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Order'>订单汇总</router-link></template>
		        </el-menu-item-group>
						<el-menu-item-group>
		          <template slot="title"><router-link to='/Refund'>退款处理</router-link></template>
		       </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title"><i><img src="../../../static/images/product.png"></i>商品管理</template>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Shop' class="clearr">供货清单</router-link></template>
		        </el-menu-item-group>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Freight' class="clearr1">运费模板</router-link></template>
		        </el-menu-item-group>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Warning'>库存预警</router-link></template>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="4">
		        <template slot="title"><i><img src="../../../static/images/money.png"></i>财务管理</template>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Financial'>订单明细</router-link></template>
		        </el-menu-item-group>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Management' class="clearr2">账单管理</router-link></template>
		        </el-menu-item-group>
		        <el-menu-item-group>
		          <template slot="title"><router-link to='/Fund' class="clearr3">资金收入</router-link></template>
		        </el-menu-item-group>
		      </el-submenu>
					<p class='logo-size'>POWERED BY 妈妈去哪儿</p>
	    </el-menu>
  	</el-aside>
</div>
</template>

<script>
	export default{
	  name: 'Left',
	  data () {
    return {
    }
  }
	}
</script>
<style>
.router-link-active{
	color: #fff!important;
}
.router-link-exact-active{
	color: #fff!important;
}
</style>

<style lang='scss'>
.cebianlan{
	.el-menu{
		 background-color: #2a3542;
		 border:none;
		 height:100%;
	}
	.el-aside{
		background-color: #2a3542;
		height: 100%;
		.el-submenu__title{
				color: #a3adc8;
				font:16px/36px "";
				font-weight: 800;
				a{
					// 首页
					// color: #fff;
					color: #a3adc8;
					font:16px/36px "";
					font-weight: 800;
				}
		}
		.el-submenu__title:hover{
			color: #fff;
			background: none;
		}
		.el-menu-item-group__title{
				background-color: #2a3542;
				color: #a3adc8;
				font:16px/36px "";
				font-weight: 800;
				padding-left: 50px!important;
				&:hover{
					color: #fff;
				}
				a{
					color: #a3adc8;
				}
				.router-link-exact-active.router-link-active{color:#fff}
		}
	}
	
	
}
</style>
<style lang='scss' scoped>
	.cebianlan{
		position: relative;
		height:100%;
		a{
				cursor: pointer;
				text-decoration: none;
				color: #666;
			} 
			.logo-size{
				width:100%;
				font: 12px/36px '';
				color:#6c7f95;
				text-align:center; 
				position: absolute;
				left:0;
				bottom:0;
			}
			.el-submenu{
				i{
					img{
						margin:0 10px;
					}
				}
			}
	}
</style>