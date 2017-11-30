<template>
	<div style="position: relative;">
		<div class="hide" style="position: fixed;width: 120%;height: 200%;background: #000;opacity: .5;left: -20%;top: -37%;z-index: 2;"  v-if="border==1">
			
		</div>
		<div class="borber" v-if="border==1" style="position: absolute;left: 27%;top: 78%;background: #fff;z-index: 3;">
			<el-transfer
			    filterable
			    :filter-method="filterMethod"
			    filter-placeholder="请输入城市拼音"
			    v-model="value2"
			    :data="data2"
			    @change="handleChange">
			    <el-button class="transfer-footer" slot="right-footer" size="small" @click='saveBorder'>确定</el-button>
			</el-transfer>
		</div>
		<div class="page-tit">
            <span class="b-title">新增运费模板详情</span><span class="back" @click="back">返回运费模板</span>
        </div>
		<div class="main">
			<div class="telname">
				<p><i style="color:#ff776d;margin-left:-6px;">*</i>模板名称：<input type="text" placeholder="请输入模板名称"/><span>20个字符以内</span></p>
			</div>
            <div class="montype">
				<p>
                    <span style='margin:0 10px 0 0;color:#2a3542;'>是否包邮：</span>
                    <el-radio v-model="radio1" label="1" @change='yesshow'>自定义运费</el-radio>
  				    <el-radio v-model="radio1" label="2" @change='isshow'>卖家承担运费</el-radio>
                </p>
			</div>
            <div v-if="show==1">
			<div class="montype">
				<p>
                    <span style='margin:0 10px 0 0;color:#2a3542;'>计价方式：</span>
                    <el-radio v-model="radio" label="1" @change='jian'>按件数</el-radio>
  				    <el-radio v-model="radio" label="2" @change='liang'>按重量</el-radio>
                </p>
			</div>
			<div class="monset">
				<div class='freight' v-if="type==1">
					<span>运费设置：</span>默认运费：<input type="number" />以内，<input type="number" />元，每增加<input type="number" />件，运费增加<input type="number" />元
				</div>
				<div class='freight' v-else>
					<span>运费设置：</span>默认运费：<input type="number" />kg内，<input type="number" />元，每增加<input type="number" />kg，运费增加<input type="number" />元
				</div>
				<div class="local">
					<div class="localhead" v-if="type==1">
						<span>配送区域</span>
						<span class='midd'>首件</span>
						<span class='midd'>运费</span>
						<span class='midd'>续件</span>
						<span class='midd'>运费</span>
						<span>操作</span>
					</div>
					<div class="localhead" v-else="">
						<span class='midd'>配送区域</span>
						<span class='midd'>首重(kg)</span>
						<span class='midd'>运费</span>
						<span class='midd'>续重(kg)</span>
						<span class='midd'>运费</span>
						<span>操作</span>
					</div>
					<div class="localto" v-for="(item,index) in list">
						<span>{{item.name}}</span>
						<span class='midd'><input type="number" /></span>
						<span class='midd'><input type="number" /></span>
						<span class='midd'><input type="number" /></span>
						<span class='midd'><input type="number" /></span>
                        <span><i @click="addBorder(index)">编辑</i><i>删除</i></span>
					</div>
					<div class="addlocal" @click="addBorder1">
						+添加地区
					</div>
				</div>
			</div>
            </div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      list: [
        {
          name: '北京，天津'
        }
      ],
      radio: '1',
      radio1: '1',
      type: 1,
      show: 1,
      border: 0,
      data2: generateData2(),
      value2: [],
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1
      }
    }
  },
  methods: {
    saveBorder () {
      var dex = localStorage.getItem('dex')
      if (!dex) {
        this.border = 0
        var arr = []
        var n = $('.el-transfer-panel').eq(1).find('.el-checkbox__label').find('span').length
        for (let i = 0; i < n; i++) {
          arr.push($('.el-transfer-panel').eq(1).find('.el-checkbox__label').find('span').eq(i).html())
        }
        arr.shift()
        if (arr.length > 0) {
          var arrtr = arr.join(',')
          this.list.push({name: arrtr})
        }
      } else {
        this.border = 0
        var arr = []
        var n = $('.el-transfer-panel').eq(1).find('.el-checkbox__label').find('span').length
        for (let i = 0; i < n; i++) {
          arr.push($('.el-transfer-panel').eq(1).find('.el-checkbox__label').find('span').eq(i).html())
        }
        arr.shift()
        if (arr.length > 0) {
          var arrtr = arr.join(',')
          this.list[dex] = {name: arrtr}
        }
        localStorage.removeItem('dex')
      }
    },
    back () {
      window.history.back()
    },
    jian () {
      this.type = 1
    },
    liang () {
      this.type = 0
    },
    yesshow () {
      this.show = 1
    },
    isshow () {
      this.show = 0
    },
    addBorder (index) {
      console.log(index)
      this.border = 1
      localStorage.setItem('dex', index)
      this.$emit('addBorder')
    },
    addBorder1 () {
      this.border = 1
      this.$emit('addBorder')
    },
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    }
  }
}
</script>

<style lang='scss' scoped>
	input{
		border: 1px solid #E0E3E6;
	}
    .page-tit{
        font: 18px/36px "";
        color:#2a3542;
        padding: 10px 20px;
        border-bottom:1px solid #d6e2ed;
        background: #F4F6F9;
        .back{
            color: #12A1F3;
            font-size: 14px;
            margin-left: 10px;
            cursor:pointer;
        }
    }	
	.top{
		width: 100%;
		height: 50px;
		background: #eee;
	}
    .main{
        padding: 30px 60px;
        p{
            font:14px/24px '';
            margin-bottom:30px;
            color:#2a3542;
            span{
                color:#6e7381;
                margin-left:20px;
            }
        }
        .telname{
            p{

                input{
                    width:320px;
                    height:36px;
                    border-radius: 4px;
                    margin: 0 10px;
                    padding-left:20px;
                }
            }
        }
        .monset{
            input{
                width:80px;
                height:36px;
                border-radius: 4px;
                margin: 0 5px;
            }
            .freight{
                span{
                    margin-right:10px;
                }
            }
        }
        .local{
            width: 85%;
            margin-top:20px;
            span{
                border-left:1px solid #e7e7e7;
                display: inline-block;
                &:first-child{
                    width: 49%;
                    border-left:0;
                    text-indent: 30px;
                }
                &:last-child{
                    width:9%;
                    text-align: center;
                }
                }
            .midd{
                width: 9%;
                text-indent: 10px;
            }
            .localhead{
                border:1px solid #e7e7e7;
                height:40px;
                font:14px/40px '';
            }
            .addlocal{
                width: 100%;
                text-align: center;
                color: #12A1F3;
                cursor: pointer;
                border:1px solid #e7e7e7;
                height:40px;
                line-height:40px;
                border-top:none;
            }
            .localto{
                background:#FCFCFC;
                border:1px solid #e7e7e7;
                border-top:none;
                span{
                    padding: 5px 0;
                    &:first-child{
                        color:#6e7381;
                    }
                    &:last-child{
                        padding: 0;
                    }
                    i{
                        color:#12A1F3;
                        line-height: 40px;
                        padding: 0;
                        &:last-child{
                            margin-left:10px;
                        }
                    }
                    input{
                        height:30px;
                        background: #fff;
                    }
                }
            }
        }

    }
	
</style>