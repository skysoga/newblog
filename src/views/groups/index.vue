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
						<div class="header-bg" :class="{'banner-transition': transition}"></div>
						<h2>实习生小组
							<span>尚未加入</span>
						</h2>
						<div class="mod-tools">
							<span><i class="fa fa-list-ul"></i></span>
							<span><i class="fa fa-share-square-o"></i></span>
							<span><i class="fa fa-ellipsis-h"></i></span>
						</div>
						<a class="btn"><i class="fa fa-plus"></i> 加入小组</a>
					</header>
					<dl class="desc">
						<dd>研发中心实习生小组,实习生在该群组只能浏览到自己的文章。</dd>
					</dl>
					<div class="join_people">
						<span class="margin-l" href="" title="19245个成员">19245个成员</span>
						<label class="float-right">
							<a href="" title=""><img src="../../../static/img/1.jpg" alt=""></a>
							<a href="" title=""><img src="../../../static/img/2.jpg" alt=""></a>
							<a href="" title=""><img src="../../../static/img/3.png" alt=""></a>
							<a href="" title=""><img src="../../../static/img/4.jpg" alt=""></a>
							<a href="" title=""><img src="../../../static/img/1.jpg" alt=""></a>
							<a href="" title=""><i class="fa fa-ellipsis-h"></i></a>
						</label>
					</div>
				</section>
				</div>
			</div>
			<div class="row">
				<div class="large-17 medium-16 small-24 columns">
					<lg-feed></lg-feed>
				</div>
				<div class="large-7 medium-8 small-24 columns">
					<section class="mod-side-s1">
						<header>
							你可能感兴趣的人
						</header>
						<div class="modcon">
							<div class="userlist">
								<ul class="transverse clearfix">
						       	 	<li>
						       	 		<div class="img img36">
						       	 			<img src="http://placeimg.com/200/200/people" alt=""/>
						       	 		</div>
						       	 		<div class="content content36">
						       	 			<div class="username">用户姓名<i class="fa fa fa-venus"></i></div>
						       	 			<label>摄影达人</label>
						       	 			<a class="button tiny"><i class="fa fa-plus"></i></a>
						       	 		</div>
						       	 	</li>
						       	 	<li>
						       	 		<div class="img img36">
						       	 			<img src="http://placeimg.com/200/200/people" alt=""/>
						       	 		</div>
						       	 		<div class="content content36">
						       	 			<div class="username">用户姓名<i class="fa fa fa-mars"></i></div>
						       	 			<label>摄影达人</label>
						       	 			<a class="button tiny"><i class="fa fa-plus"></i></a>
						       	 		</div>
						       	 	</li>
						       	 	<li>
						       	 		<div class="img img36">
						       	 			<img src="http://placeimg.com/200/200/people" alt=""/>
						       	 		</div>
						       	 		<div class="content content36">
						       	 			<div class="username">用户姓名<i class="fa fa fa-venus"></i></div>
						       	 			<label>摄影达人</label>
						       	 			<a class="button tiny"><i class="fa fa-plus"></i></a>
						       	 		</div>
						       	 	</li>
						       	 	<li>
						       	 		<div class="img img36">
						       	 			<img src="http://placeimg.com/200/200/people" alt=""/>
						       	 		</div>
						       	 		<div class="content content36">
						       	 			<div class="username">用户姓名<i class="fa fa fa-mars"></i></div>
						       	 			<label>摄影达人</label>
						       	 			<a class="button tiny"><i class="fa fa-plus"></i></a>
						       	 		</div>
						       	 	</li>
						       	 </ul>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</template>
<script>
  import LgHeader from '@/components/header'
  import LgFeed from '@/components/feed'
  import Bg from '../login/bg.vue'
  export default {
    data () {
      return {
        transition: false
      }
    },
    components: {
      LgHeader,
      LgFeed,
      Bg
    },
    mounted () {
      this.bg()
    },
    methods: {
      bg () {
        setTimeout(() => {
          this.transition = true
        }, 100)
      }
    }
  }
</script>
<style scoped="" lang="less">
	@import url("../../../static/less/variable.less");
	.userlist .transverse li{position: relative;padding: 1rem 1.3rem;}
	.userlist .transverse li:hover{background: #f5f5f5;}
	.username .fa-venus{color: @alert-color;margin-left: 6px;}
	.username .fa-mars{color: @info-color;margin-left: 6px;}
	.userlist .transverse li label{font-size: 10px;color: @secondary-color;}
	.userlist .transverse li a.button{position: absolute;right:0;top: 0;}
	.img.img36{width: 40px;border-radius: 50%;}
	.content.content36{padding: 0 0 0 50px;}
	.mod-banner{height: 300px;position: relative;overflow: hidden;border-radius: 2px;}
	.mod-banner:before{content: '';position: absolute;top: 0;left: 0;right: 0;bottom: 0;
		display: block;margin: auto;background: rgba(0,0,0,.3);z-index: 1;
	}
	.mod-banner h2{position: absolute;width:100%;text-align: center;margin: 0 auto;top: 46%;color: #fff;z-index: 1;}
	.mod-banner a.btn{position: absolute;bottom: 10px;right: 1rem;color: #fff;font-size: 12px;z-index: 2;}
</style>

