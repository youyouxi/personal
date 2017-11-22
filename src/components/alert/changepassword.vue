<template lang="">
  <div class="changeword">
    <el-dialog title="修改密码" :visible.sync="visible">
    <el-form :model="form">
      <el-form-item label="原密码" :label-width="formLabelWidth">
        <el-input v-model="form.oldPassword" auto-complete="off" style="width:340px;height:35px;" ></el-input>
      </el-form-item>
      <el-form-item label="新密码" :label-width="formLabelWidth">
        <el-input v-model="form.newPassword" auto-complete="off"
          style="width:340px;height:35px;"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" :label-width="formLabelWidth">
        <el-input v-model="form.newPassword2" auto-complete="off"
          style="width:340px;height:35px;"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" style="margin-right:0" @click="visibleChange">保存</el-button>
      <el-button  @click="visibleChange">取消</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script lang="">
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      formLabelWidth: '85px',
        //  dialogFormVisible:true,
      form: {
        oldPassword: '',
        newPassword: '',
        newPassword2: ''

      }
    }
  },

  mounted () {
    console.log(this.visible)
  },
  computed: {

  },
  watch: {

  },
  methods: {
    visibleChange () {
      this.$emit('visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
// .changeword{
//     .el-dialog{
//     border-radius: 5px;
//     width:500px;
//     height: 350px;
//     .el-dialog__header{
//       height: 30px;
//       border-bottom: 1px solid #e0e3e6;
//     }
//     .el-dialog__footer{
//         border-radius: 5px;
//         height: 60px;
//         padding: 0;
//         border-top: 1px solid #e0e3e6;
//         margin-top: -13px;
//         background: #f4f6f9;
//         .el-button{
//           margin-top: 10px;
//           margin-right: 20px;
//         }
//     }
//   }
// }
// .el-message-box{
//   width: 500px;
//   height: 270px;
//   .el-message-box__header{
//     height:30px;
//     border-bottom: 1px solid #e0e3e6;
//   }
//   .el-message-box__content{
//     height: 150px;
//   }
//   .el-message-box__btns{
//     border-top: 1px solid #e0e3e6;
//       background: #f4f6f9;
//       height: 54px;
//       margin-top: -5px;
//   }
//   .el-button{
//     margin-top: 9px;
//   }
// }

</style>
