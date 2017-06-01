<template>
	<header>
		<div class="row">
			<div class="large-4 column">
			    <h1 class="logo float-left" href="">
			    	<a href="">企业内网</a>
			   </h1>
			</div>
			<div class="large-8 column">
			    <nav class="menu float-left">
					<li v-for="item in navData"><a :href="item.href">{{item.name}}</a></li>
				</nav>
			</div>
			<div class="large-12 column">
			    
			</div>
		</div>
	</header>
</template>
<script>
  export default {
    data () {
      return {
        navData: [
          {
            name: '首页',
            href: './index'
          },
          {
            name: '个人中心',
            href: './infocenter'
          }
        ]
      }
    }
  }
</script>
<style scoped="" lang="less">
	@import url("../../static/less/variable.less");
	header{height: 60px;line-height: 60px;background: #fff;padding-top: 10px;border-bottom: 1px solid #ddd;}
	.logo{margin: 0;}
	.logo a{font-family: "freight-sans-pro",sans-serif;color: @primary-color;}
</style>
