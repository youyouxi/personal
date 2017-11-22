<template>
	<div class="pubilctop">
		<div class="publicheader">
			<div class='left'>
				<el-tooltip class="item" effect="dark" content="隐藏左边菜单" placement="bottom">
					<img src="../../../static/images/hideleft.png" alt="" @click="hide">
				</el-tooltip>
				<p>您好 <span>{{name}}</span>，欢迎回来！</p>
			</div>
			<div class='right'>
				<el-tooltip class="item" effect="dark"  placement="bottom" >
                  <div slot="content">
										<p @click='basic'>基本信息</p>
                    <p @click='showCpsw'>修改密码</p>
                    <p @click='sales'>退货地址</p>
                  </div>
                 <p><img src="../../../static/images/Settings.png" alt=""><span>设置</span></p>
                </el-tooltip>
				
				<p><img src="../../../static/images/-.png" alt=""><span>帮助</span></p>
				<p @click='logOut'><img src="../../../static/images/5.png" alt=""><span>退出</span></p>
			</div>
		</div>
		<Change :visible='isShow' @visible ='showCpsw'></Change>
	</div>
</template>

<script>
import $ from 'jquery'
import Change from '../../components/alert/changepassword.vue'
export default{
  name: 'rightTop',
  data () {
    return {
      name: '小宝贸易',
      isShow: false,
      hider: 0

    }
  },
  components: {
    Change
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logOut () {
      this.$confirm('你确定要退出系统?', '退出登录', {
        cancelButtonText: '取消',
        confirmButtonText: '确定'

      }).then(() => {
        this.$router.push({
          name: 'login'
        })
        this.$message({
          type: 'success',
          message: '已退出登录!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    showCpsw () {
      this.isShow = !this.isShow
    },
    hide () {
		  if (this.hider == 0) {
			  $('.cebianlan').css('display', 'none')
			  this.hider = 1
		  } else {
			  $('.cebianlan').css('display', 'block')
			  this.hider = 0
		  }
	  },
    basic () {
      this.$router.push({
        name: 'Personal'
      })
    },
    sales () {
      this.$router.push({
        name: 'Return'
      })
    }

  }
}
</script>

<style lang='scss' scoped>
	.pubilctop{
		height: 60px;
		border-bottom: solid 1px #e6e6e6;
		box-shadow: 0px 0px 10px #ddd;
		padding: 0 20px;
		.publicheader{
			width: 100%;
			height: 100%;
			text-align: center;
			display: flex;
			justify-content: space-between;
			p{
				color: #767676;
				font-size: 14px;
				display: inline-block;
				padding-top:10px; 
				img{
					width: 15px;
					height: 15px;
				}
			}
			.left{
				span{
						color: #ff776d;
						line-height: 42px;
					}
					img{
						margin-right:10px;
					}
			}
			.right{
				p{
					width: 56px;
					height: 46px;
					text-align: center;
					margin: 0;
					span{
						display:block;
					}
				}
				
			}
			.content{
				p{
					&:hover{
						color:#ff776d;
					}
				}
			}
		}
	}
	
</style>