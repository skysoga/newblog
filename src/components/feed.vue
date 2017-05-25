<template>
	<div>
		<ul class="feed transverse">
			<li>
				<div class="img img50">
					<img src="../../static/img/1.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-venus alert-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># Web前端</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent">
					<h3><a href="" target="_blank">如果不工作，你想过怎样的生活？</a></h3>
					<p>“你品尝了夜的巴黎，你踏过下雪的北京，你熟记书本里的每一句你最爱的真理，却说不出我的原因。”我的记忆从桌子下面爬上来。死者的气息是一阵微风和思想：谁将会解答它？</p>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">查看原文</a>
					<div class="ar-control float-right">
						<span @click="deleteItem"><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">短文</label>
			</li>
			<li>
				<div class="img img50">
					<img src="../../static/img/2.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-mars primary-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># Web前端</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent long-ar">
					<a href="" target="_blank"><img src="../../static/img/u31.png" alt="">
					<h3>如果不工作，你想过怎样的生活？</h3></a>
					<p>“你品尝了夜的巴黎，你踏过下雪的北京，你熟记书本里的每一句你最爱的真理，却说不出我的原因。”我的记忆从桌子下面爬上来。死者的气息是一阵微风和思想：谁将会解答它？</p>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">查看原文</a>
					<div class="ar-control float-right">
						<span @click="deleteItem1"><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">长文</label>
			</li>
			<li>
				<div class="img img50">
					<img src="../../static/img/2.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-mars primary-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># Web前端</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent">
					<h3><a href="" target="_blank">可以没有标题</a></h3></a>
					<div class="row small-up-2 medium-up-3 large-up-3">
						<div class="column column-block">
						    <img src="../../static/img/u2.jpg" alt="">
						    <span class="label black">GIF</span>
						</div>
						<div class="column column-block">
						    <img src="../../static/img/u1.png" alt="">
						</div>
						<div class="column column-block">
						    <img src="../../static/img/u3.png" alt="">
						</div>
						<span class="imgCount warning-color"><i class="fa fa-image"></i> 16</span>
					</div>
					<p>“你品尝了夜的巴黎，你踏过下雪的北京，你熟记书本里的每一句你最爱的真理，却说不出我的原因。”我的记忆从桌子下面爬上来。死者的气息是一阵微风和思想：谁将会解答它？</p>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">查看原文</a>
					<div class="ar-control float-right">
						<span><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">图片</label>
			</li>
			<li>
				<div class="img img50">
					<img src="../../static/img/1.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-venus alert-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># Web前端</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent">
					<p>“你品尝了夜的巴黎，你踏过下雪的北京，你熟记书本里的每一句你最爱的真理，却说不出我的原因。”我的记忆从桌子下面爬上来。死者的气息是一阵微风和思想：谁将会解答它？</p>
					<a class="docbg" href="">
						<div class="media-object">
							<div class="media-object-section">
						    	<img src="../../static/img/u143.png">
						  	</div>
						  	<div class="media-object-section">
						    	<div class="title14">
						    		MongoDB部署配置简要手册.pdf
						    	</div>
						    	<div class="docInfo">
						    		<span>更新时间：2016-12-15</span>
						    		<span>作者：XXX</span>
						    		<span>12M</span>
						    	</div>
						  	</div>
						</div>
					</a>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">查看原文</a>
					<div class="ar-control float-right">
						<span><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">文档</label>
			</li>
			<li>
				<div class="img img50">
					<img src="../../static/img/2.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-mars primary-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># Web前端</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent long-ar">
					<h3>标题不要？</h3>
					<div class="vedio-box">
						<video id="myVideo" width="100%" poster="../../static/img/12.jpg">
						  <source src="http://filecenter.jiefeng.me:88/res_base/rjcms/video/2017/03/30/58dcc5d88e31c668b44d34f0.mp4" type="video/mp4">
						  Your browser does not support the video tag.
						</video>
						<a class="play"></a>
						<span class="modal"></span>
						<div class="vedio-info">
							<span>15万次播放</span>
							<span class="float-right">05：26</span>
						</div>
					</div>
					<p>“你品尝了夜的巴黎，你踏过下雪的北京，你熟记书本里的每一句你最爱的真理，却说不出我的原因。”我的记忆从桌子下面爬上来。死者的气息是一阵微风和思想：谁将会解答它？</p>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">查看视频</a>
					<div class="ar-control float-right">
						<span><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">影视</label>
			</li>
			<li>
				<div class="img img50">
					<img src="../../static/img/1.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-venus alert-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># 流行音乐</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent">
					<p>真好听</p>
					<div class="docbg music-box" href="">
						<div class="media-object">
							<div class="media-object-section">
						    	<img src="../../static/img/3.png">
						    	<img class="music-run fa-spin" alt="music" src="../../static/img/music.png">
						  	</div>
						  	<div class="media-object-section">
						    	<div class="title14">
						    		一声叹息
						    	</div>
						    	<div class="docInfo">
						    		<span>任灿</span>
						    	</div>
						  	</div>
						</div>
						<div class="music-btn">
				    		<span>-05:36</span>
				    		<a class="play">
				    			<i class="fa fa-pause"></i>
				    		</a>
				    	</div>
					</div>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">歌词面板</a>
					<div class="ar-control float-right">
						<span><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">音乐</label>
			</li>
			<li>
				<div class="img img50">
					<img src="../../static/img/1.jpg">
				</div>
				<div class="content content50">
					<div class="username">
						<a target="_blank" href="">用户姓名 </a>
						<i class="fa fa-venus alert-color"></i>
					</div>
					<div class="arInfo"><span class="tag"># 流行音乐</span><span class="margin-l10">2017-05-18</span></div>
				</div>
				<div class="arContent">
					<p>真好听</p>
					<div class="docbg music-box" href="">
						<div class="media-object">
						  	<div class="title14">
					    		新录音
					    	</div>
					    	<div class="margin-l docInfo">
					    		<span>林某某</span>
					    	</div>
						</div>
						<div class="music-info">
							<span class="margin-r">2017-05-19</span>
							<span>00:46</span>
						</div>
						<div class="audio margin-t10">
							<audio controls="" src="http://www.w3school.com.cn/i/horse.ogg">
								您的浏览器不支持 audio 标签。
							</audio>
						</div>
					</div>
				</div>
				<div class="arTools clearfix">
					<a href="" target="_blank">歌词面板</a>
					<div class="ar-control float-right">
						<span><i class="fa fa-trash-o"></i> 删除</span>
						<span><i class="fa fa-eye"></i> 26</span>
						<span><i class="fa fa-heart-o"></i> 32</span>
						<span><i class="fa fa-comment-o"></i> 32</span>
						<span><i class="fa fa-share-square-o"></i></span>
						<span><i class="fa fa-ellipsis-h"></i></span>
					</div>
				</div>
				<label class="type">音频</label>
			</li>
		</ul>
		<lg-reveal :open="alert" title="确定删除？" @revealClose="alert=false">
			<div class="row" slot="body">
		  		<div class="large-24 columns">
		  			
		  		</div>
		  	</div>
		  	<div class="reveal-footer" slot="footer">
				<div class="row">
					<div class="small-24 columns text-right padding-t">
						<a class="button hollow radius secondary small" @click="alert=false"> 取 消 </a>
						<a class="small button radius"> 提 交 </a>
					</div>
				</div>
			</div>
		</lg-reveal>
		<lg-reveal :open="show" title="烦烦烦？" @revealClose="show=false">
			<div class="row" slot="body">
		  		<div class="large-24 columns">
		  			烦烦烦
		  		</div>
		  	</div>
		  	<div class="reveal-footer" slot="footer">
				<div class="row">
					<div class="small-24 columns text-right padding-t">
						<a class="button hollow radius secondary small" @click="show=false"> 取 消 </a>
						<a class="small button radius"> 提 交 </a>
					</div>
				</div>
			</div>
		</lg-reveal>
	</div>
</template>
<script>
  import LgReveal from '@/components/reveal'
  export default {
    data () {
      return {
        alert: false,
        show: false
      }
    },
    methods: {
      deleteItem () {
        this.alert = true
      },
      deleteItem1 () {
        this.show = true
      }
    },
    components: {
      LgReveal
    }
  }
</script>
<style lang="less">
	@import url("../../static/less/variable.less");
	.img50.img{width: 50px;border-radius: 50%;}
	.content50.content{padding-left: 66px;min-height: 50px;margin-bottom: 1rem;}
	.feed li{position: relative;background: #fff;min-height: 100px;padding: 1.5rem;margin-bottom: 1rem;border-radius: 2px;}
	.feed li .type {color: @secondary-color;font-size: 12px;position: absolute;right: 1rem;top: 1rem;}
	.feed li .username{margin-top: 4px;}
	.feed .arInfo span{font-size: 10px;color: @secondary-color;}
	.arContent p,.ar-control span{font-size: 13px;color: @secondary-color;}
	.arContent .row{position: relative;}
	.arContent .imgCount{position: absolute;left: 1rem;bottom: 1rem;padding:0 4px;background: rgba(141,103,2,.2);}
	.arContent .row .column-block {position: relative;}
	.arContent .black.label{position: absolute;bottom: 1px;right: 10px;}
	.arTools a{font-size: 13px;}
	.ar-control span{margin-left: 1rem; cursor: pointer;}
	.ar-control span:hover{color: @primary-color;}
	/*长文*/
	.long-ar a{display:block;position: relative;margin-bottom: 1rem;}
	.long-ar img{width: 100%;}
	.long-ar h3{
		position: absolute;
	    border-bottom: 0;
	    text-align: center;
	    left: 0;
	    right: 0;
	    width: 300px;
	    margin:0 auto;
	    line-height: 1.8;
	    top: 50%;
	    margin-top: -20px;
	    color: #fff;
	}
	.docbg{padding: 10px;margin-bottom:1rem;position:relative;display: block;background: lighten(@secondary-color,36%);}
	.docbg .media-object{margin: 0;}
	.docbg .docInfo span{font-size: 12px;margin-right: 10px;color: @secondary-color;}
	.docbg .media-object-section img{max-width: 50px;}
	
	.vedio-box{position: relative;}
	.vedio-box .play{
	    position: absolute;
	    top: 50%;
	    right: 0;
	    left: 0;
	    line-height: 4rem;
	    width: 4rem;
	    text-align: center;
	    height: 4rem;
	    display: block;
	    margin:0 auto;
	    margin-top: -2rem;
	    background: url(../../static/img/u183.png) no-repeat center center;
	    z-index: 2;
	    cursor: pointer;
	}
	.vedio-box .vedio-info{
    height: 36px;
    line-height: 36px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    font-size: 12px;
    padding: 0 10px;
	}
	.vedio-box .play + .modal{opacity:0;transition:all .3s;position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0,0,0,.3);z-index: 1;}
	.vedio-box .play:hover + .modal{opacity: 1;}
	/*音乐*/
	.music-box .media-object-section{position: relative;}
	.music-box .media-object-section img{position: relative;z-index: 2;border-radius: 4px;}
	.music-box .media-object-section .music-run{
		position: absolute;
	    left: 14px;
	    top: 1px;
	    z-index: 1;
	    display: inline-block;
	    width: 48px;
	    height: 48px;
	    border-radius: 50%;
	    transition: left .3s;
	}
	.music-btn{position: absolute;right: 10px;top: 50%;margin-top: -14px;}
	.music-btn .play{
		display: inline-block;
	    height: 2.4em;
	    width: 2.4em;
	    background: #fff;
	    line-height: 2.4em;
	    text-align: center;
	    border-radius: 50%;
	    margin-left: 10px;
	}
	.music-info span{font-size: 12px;margin-right: 10px;}
	.audio audio{width: 100%;}
	@media only screen and (max-width: 640px) {
		.feed li{padding: 1rem;}
	}
</style>
