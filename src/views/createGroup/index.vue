<template>
	<div id="layout">
		<bg></bg>
		<keep-alive>
			<lg-header></lg-header>
		</keep-alive>
		<main>
			<div class="row margin-t">
				<div class="large-24 columns">
					<section class="mod-side-l1 margin-b">
						<header class="mod-banner">
							<div class="header-bg"></div>
							<h2>{{groupname}}</h2>
							<div class="mod-tools margin-t">
								<a class="button small"><i class="fa fa-upload"></i>上传封面图</a>
							</div>
						</header>
						<div class="form">
							<div class="row">
								<div class="large-4 small-24 column">
									<label class="h36 text-right">你的小组名称：</label>
								</div>
								<div class="large-20 small-24 column">
									<input type="text" placeholder="你的小组名称" v-model="groupname">
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-24 column">
									<label class="h36 text-right">描述：</label>
								</div>
								<div class="large-20 small-24 column">
									<textarea placeholder="请给出小组的内容规划、比如类型、方式、题材等" v-model="groupdesc"></textarea>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-24 column">
									<label class="h36 text-right">标签：</label>
								</div>
								<div class="large-20 small-24 column">
									<lg-tag v-model="grouptag" type="warning" :recTags="rectag"></lg-tag>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-24 column">
									<label class="h36 text-right">小组分类：</label>
								</div>
								<div class="large-20 small-24 column">
									<select v-model="selected">
										<option v-for="option in options" :value="option">
											{{option}}
										</option>
									</select>
								</div>
							</div>
							<div class="row">
								<div class="large-4 small-24 column">
									<label class="h36 text-right">小组成员：</label>
								</div>
								<div class="large-20 small-24 column">
									<label>
										<span class="margin-r h36 secondary-color" href="" title="19245个成员">已邀请19245个成员</span>
										<a class="button small no-margin" @click="visible = true"><i class="fa fa-plus"></i> 邀请人员</a>
									</label>
									<div class="people_list margin-t10">
									  <ul class="clearfix">
									  	<li><img src="../../../static/img/1.jpg" alt="">
									  	  <span>阿萨德</span>
									  	  <i class="fa fa-close"></i>
									  	</li>
									  	<li><img src="../../../static/img/2.jpg" alt="">
                        <span>阿二</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/3.png" alt="">
                        <span>东大寺</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/4.jpg" alt="">
                        <span>发发呆</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/1.jpg" alt="">
                        <span>阿萨德</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/2.jpg" alt="">
                        <span>阿二</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/3.png" alt="">
                        <span>东大寺</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/4.jpg" alt="">
                        <span>发发呆</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/1.jpg" alt="">
                        <span>阿萨富士达德</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/2.jpg" alt="">
                        <span>阿二阿萨德发送到分</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/3.png" alt="">
                        <span>东阿斯蒂芬大寺</span>
                        <i class="fa fa-close"></i>
                      </li>
                      <li><img src="../../../static/img/4.jpg" alt="">
                        <span>发发生大幅发啊啊啊啊啊啊啊呆</span>
                        <i class="fa fa-close"></i>
                      </li>
									  </ul>
									</div>
								</div>
							</div>
						  <div class="row margin-t">
                <div class="large-4 small-24 column">
                  <label class="text-right">成员资格审核：</label>
                </div>
                <div class="large-20 small-24 column">
                    <lg-radio-group v-model="membership" class="block">
                      <lg-radio :label="1" >聆花科技中的任何人都可以加入，而无需审核。</lg-radio>
                      <lg-radio :label="2">所有成员可以添加或审核成员</lg-radio>
                      <lg-radio :label="3">所有成员都能添加成员，但须经管理员或版主审核。</lg-radio>
                    </lg-radio-group>
                </div>
              </div>
              <div class="row margin-t">
                <div class="large-4 small-24 column">
                  <label class="text-right">帖子审核：</label>
                </div>
                <div class="large-20 small-24 column">
                    <lg-checkbox v-model="postAudit">所有小组发帖必须经过管理员或版主审核才能发布。</lg-checkbox>
                </div>
              </div>
						</div>
					</section>
					<lg-reveal title="fasdf" :open="visible" @revealClose="revealClose"></lg-reveal>
					<a class="button" @click="open">notice</a>
					<a class="button" @click="close">close</a>
				</div>
			</div>
		</main>
	</div>
</template>
<script>
  import LgHeader from '@/components/header'
  import Bg from '../login/bg.vue'
  import LgTag from '@/components/tag'
  import LgReveal from '@/components/reveal'
  import LgRadio from '@/components/radio'
  import LgRadioGroup from '@/components/radio-group'
  import LgCheckbox from '@/components/checkbox'
  import LgCheckboxGroup from '@/components/checkbox-group'
  var aaa = {}
  export default {
    data () {
      return {
        groupname: '',
        groupdesc: '',
        grouptag: ['你好0', 'd', '你好3', '你好', '2', '顶顶顶'],
        rectag: [],
        selected: 'A',
        options: ['A', 'B'],
        visible: false,
        membership: 1,
        postAudit: false
      }
    },
    components: {
      LgHeader,
      Bg,
      LgTag,
      LgReveal,
      LgRadio,
      LgRadioGroup,
      LgCheckbox,
      LgCheckboxGroup
    },
    mounted () {
    },
    methods: {
      open () {
        aaa = this.$notify.success({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'warning',
          duration: 0
        })
      },
      close () {
        aaa.close()
      },
      revealClose () {
        this.visible = false
      }
    }
  }
</script>
<style scoped="" lang="less">
	@import url("../../../static/less/variable.less");
	.mod-side-l1{border-radius: 2px;overflow: hidden;}
	.mod-banner{height: 300px;position: relative;overflow: hidden;}
	.mod-banner h2{position: absolute;width:100%;text-align: center;margin: 0 auto;top: 46%;color: #fff;z-index: 1;}
	.mod-banner h2 span{display: block;font-size: 0.625rem; margin-top: 10px;}
	.mod-banner a.btn{position: absolute;bottom: 10px;right: 1rem;color: #fff;font-size: 12px;z-index: 2;}
	
	.form{padding: 1.5rem;}
	.block.lg-radio-group>label{display: block;}
</style>

