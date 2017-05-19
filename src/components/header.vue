<template>
	<header>
		<h1 class="hide">企业内网</h1>
		<div class="row">
			<div class="large-3 column">
			    <a class="logo float-left" href=""><img src="" alt="logo"></a>
			</div>
			<div class="large-9 column">
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
            name: '群组',
            href: './group'
          }
        ]
      }
    }
  }
</script>
<style scoped="">
	header{height: 60px;line-height: 60px;background: #fff;}
</style>
