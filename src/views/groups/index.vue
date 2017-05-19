<template>
	<div id="layout">
		<keep-alive>
			<lg-header></lg-header>
		</keep-alive>
		<main>
			<div class="row margin-t">
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
  export default {
    data () {
      return {}
    },
    components: {
      LgHeader,
      LgFeed
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
</style>

