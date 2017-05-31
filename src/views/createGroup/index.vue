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
								  {{grouptag}}
								  <div @click="add">add</div>
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
										<a class="button small no-margin"><i class="fa fa-plus"></i> 邀请人员</a>
									</label>
									<div class="join_people margin-t">
										<div class="row small-up-5 medium-up-5 large-up-10">
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/1.jpg" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/2.jpg" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/3.png" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/4.jpg" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/1.jpg" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/2.jpg" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/3.png" alt=""></a>
										  </div>
										  <div class="column column-block">
										    <a href="" title=""><img src="../../../static/img/4.jpg" alt=""></a>
										  </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
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
  var aaa = {}
  export default {
    data () {
      return {
        groupname: '',
        groupdesc: '',
        grouptag: ['你好0', 'd', '你好3', '你好', '2', '顶顶顶'],
        rectag: ['0', '1', '2', '你好3', '4', '顶顶顶'],
        selected: 'A',
        options: ['A', 'B']
      }
    },
    components: {
      LgHeader,
      Bg,
      LgTag
    },
    mounted () {
    },
    methods: {
      add () {
        this.grouptag.push('11')
      },
      open () {
        aaa = this.$notify.success({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'info',
          duration: 0
        })
      },
      close () {
        aaa.close()
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
</style>

