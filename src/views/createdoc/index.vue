<template>
	<div class="row">
		<div class="large-24 columns">
			<div class="mod-side-l1">
				<header>
					文件
					<a class="button small margin-t10 float-right"><i class="fa fa-plus"></i> 创建</a>
				</header>
				<ul class="file-list">
					<li class="docbg">
						<div class="media-object">
							<div class="media-object-section">
						    	<img src="../../../static/img/u143.png">
						    	<span class="spin"></span>
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
						<lg-progress type="circle" :width="40" :percentage="progress.doc" status="success"></lg-progress>
						<lg-dropdown size="small" type="1" :props="props"><i class="fa fa-ellipsis-h"></i>
							<ul slot="dropdown">
								<li>li</li>
								<li>li</li>
								<li>li</li>
								<li>li</li>
							</ul>
						</lg-dropdown>
					</li>
					<li class="docbg">
						<div class="music-box">
							<div class="media-object">
								<div class="media-object-section">
							    	<img src="../../../static/img/3.png">
							    	<img class="music-run fa-spin" alt="music" src="../../../static/img/music.png">
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
						</div>
						<lg-progress type="circle" :width="40" :percentage="progress.doc2"></lg-progress>
						<lg-dropdown size="small" type="1" :props="props"><i class="fa fa-ellipsis-h"></i>
							<ul slot="dropdown">
								<li>2</li>
								<li>2</li>
								<li>2</li>
								<li>2</li>
							</ul>
						</lg-dropdown>
					</li>
				</ul>
				<div class="row">
				  <div class="large-24 columns">
				    <form novalidate>
				      <lg-input :pattern="patterns"></lg-input>
				    </form>
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import LgProgress from '@/components/progress'
  import LgDropdown from '@/components/dropdown'
  import LgInput from '@/components/input'
  export default {
    data () {
      return {
        progress: {
          doc: 100,
          doc2: 60
        },
        patterns: 'alpha_numeric',
        props: {
          hollow: 'hollow',
          cusclass: 'list-btn'
        }
      }
    },
    methods: {
      aler () {
        alert('dianle')
      }
    },
    components: {
      LgProgress,
      LgDropdown,
      LgInput
    }
  }
</script>
<style>
	.file-list{padding: 1rem;}	
	.file-list li,.dropdown-pane li{list-style: none;}
	.file-list li:last-child{margin-bottom: 0;}
	.file-list li .lg-progress{position: absolute;right: 3rem;top: 1rem;}
	.file-list li .dropdown{
		position: absolute;
	    right: 10px;
	    top: 50%;
	    margin-top: -10px;
	    display: inline-block;
	    width: 20px;
	    height: 20px;
	    text-align: center;
	}
	.list-btn{display: block;}
</style>
