<template>
	<div id="layout">
		<keep-alive>
			<lg-header></lg-header>
		</keep-alive>
		<main>
		  <div class="row">
		    <div class="large-4 columns">
		      <section class="groups margin-t">
		        <header>常用小组</header>
		      	<ul>
              <li><a><i class="fa fa-home"></i>前端UI组</a></li>
              <li><a><i class="fa fa-group"></i>闲聊八卦组</a></li>
              <li><a><i class="fa fa-calendar"></i>活动</a></li>
              <li><a><i class="fa fa-user-plus"></i>邀请同事</a></li>
            </ul>
		      </section>
		    </div>
		    <div class="large-20 columns">
		    	<div class="row margin-t">
            <div class="large-24 columns">
              <section class="mod-side-l1 margin-b">
                <header class="mod-banner">
                  <div class="header-bg" :class="{'banner-transition': transition}"></div>
                  <h2>实习生小组
                    <span>尚未加入</span>
                  </h2>
                  <dl class="desc">
                    <dd>研发中心实习生小组,实习生在该群组只能浏览到自己的文章。</dd>
                  </dl>
                  <div class="mod-tools">
                    <span><i class="fa fa-list-ul"></i></span>
                    <span><i class="fa fa-share-square-o"></i></span>
                    <span><i class="fa fa-ellipsis-h"></i></span>
                  </div>
                  <a class="btn"><i class="fa fa-plus"></i> 加入小组</a>
                </header>
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
                                    小组成员
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
      return {
        transition: false
      }
    },
    components: {
      LgHeader,
      LgFeed
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
	.mod-banner{height: 260px;position: relative;overflow: hidden;border-radius: 2px;}
	.mod-banner:before{content: '';position: absolute;top: 0;left: 0;right: 0;bottom: 0;
		display: block;margin: auto;background: rgba(0,0,0,.3);z-index: 1;
	}
	.mod-banner h2{position: absolute;top: 30%;color: #fff;z-index: 1;left: 10%;
	  display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 600px;
	}
	.mod-banner a.btn{position: absolute;bottom: 10px;right: 1rem;color: #fff;font-size: 12px;z-index: 2;height: 36px;}
	.groups header{font-size: 12px;color: @secondary-color;}
	.groups li{list-style: none;height: 47px;line-height: 46px;}
	.groups li a{color: #999;}
	.groups li a i{margin-right: 6px;}
</style>

