<template>
  <div
    class="lg-progress"
    :class="[
      'lg-progress--' + type,
      status ? 'is-' + status : '',
      {
        'lg-progress--without-text': !showText,
        'lg-progress--text-inside': textInside,
      }
    ]"
  >
    <div class="lg-progress-bar" v-if="type === 'line'">
      <div class="lg-progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="lg-progress-bar__inner" :style="barStyle">
          <div class="lg-progress-bar__innerText" v-if="showText && textInside">{{percentage}}%</div>
        </div>
      </div>
    </div>
    <div class="lg-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <path class="lg-progress-circle__track" :d="trackPath" stroke="#e5e9f2" :stroke-width="relativeStrokeWidth" fill="none"></path>
        <path class="lg-progress-circle__path" :d="trackPath" stroke-linecap="round" :stroke="stroke" :stroke-width="relativeStrokeWidth" fill="none" :style="circlePathStyle"></path>
      </svg>
    </div>
    <div
      class="lg-progress__text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">{{percentage}}%</template>
      <i v-else :class="iconClass"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'LgProgress',
    props: {
      type: {
        type: String,
        default: 'line',
        validator: val => ['line', 'circle'].indexOf(val) > -1
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      status: {
        type: String
      },
      strokeWidth: {
        type: Number,
        default: 6
      },
      textInside: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 60
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      barStyle () {
        var style = {}
        style.width = this.percentage + '%'
        return style
      },
      relativeStrokeWidth () {
        return (this.strokeWidth / this.width * 50).toFixed(1)
      },
      trackPath () {
        var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10)

        return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
      },
      perimeter () {
        var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2
        return 2 * Math.PI * radius
      },
      circlePathStyle () {
        var perimeter = this.perimeter
        return {
          strokeDasharray: `${perimeter}px,${perimeter}px`,
          strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
          transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      },
      stroke () {
        var ret
        switch (this.status) {
          case 'success':
            ret = '#13ce66'
            break
          case 'exception':
            ret = '#ff4949'
            break
          default:
            ret = '#6d6db5'
        }
        return ret
      },
      iconClass () {
        if (this.type === 'line') {
          return this.status === 'success' ? 'fa fa-circle-check' : 'fa fa-times-circle'
        } else {
          return this.status === 'success' ? 'fa fa-check' : 'fa fa-close'
        }
      },
      progressTextSize () {
        return this.type === 'line'
          ? 12 + this.strokeWidth * 0.4
          : this.width * 0.2 + 2
      }
    }
  }
</script>
<style lang="less">
	@import url("../../../../static/less/variable.less");
	.lg-progress-bar__inner:after{display:inline-block;content:"";height:100%;vertical-align:middle}.lg-progress{position:relative;line-height:1}.lg-progress.is-exception .lg-progress-bar__inner{background-color:#ff4949}.lg-progress.is-exception .lg-progress__text{color:#ff4949}.lg-progress.is-success .lg-progress-bar__inner{background-color:#13ce66}.lg-progress.is-success .lg-progress__text{color:#13ce66}.lg-progress__text{font-size:14px;color:#48576a;display:inline-block;vertical-align:middle;margin-left:10px;line-height:1}.lg-progress__text i{vertical-align:middle;display:block}.lg-progress--circle{display:inline-block}.lg-progress--circle .lg-progress__text{position:absolute;top:50%;left:0;width:100%;text-align:center;margin:0;-ms-transform:translate(0,-50%);transform:translate(0,-50%)}.lg-progress--circle .lg-progress__text i{vertical-align:middle;display:inline-block}.lg-progress--without-text .lg-progress__text{display:none}.lg-progress--without-text .lg-progress-bar{padding-right:0;margin-right:0;display:block}.lg-progress--text-inside .lg-progress-bar{padding-right:0;margin-right:0}.lg-progress-bar{padding-right:50px;display:inline-block;vertical-align:middle;width:100%;margin-right:-55px;box-sizing:border-box}.lg-progress-bar__outer{height:6px;border-radius:100px;background-color:#e4e8f1;overflow:hidden;position:relative;vertical-align:middle}.lg-progress-bar__inner{position:absolute;left:0;top:0;height:100%;background-color:@primary-color;text-align:right;border-radius:100px;line-height:1}.lg-progress-bar__innerText{display:inline-block;vertical-align:middle;color:#fff;font-size:12px;margin:0 5px}@keyframes progress{0%{background-position:0 0}100%{background-position:32px 0}}

</style>
