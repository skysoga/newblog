<template>
  <span class="dropdown">
    <a class="button" 
    	v-if="type == ''"
	    :class="[
	        size ? size : '',
	    	props.hollow ? props.hollow : '',
	    	props.radius ? props.radius : ''
	     ]"
     ><slot></slot></a>
    <a 
    	v-else-if="type == 'split'"
    	class="button split"
    	:class="[
	        size ? size : '',
	    	props.hollow ? props.hollow : '',
	     ]"
    	@click.self="handleFn">
    	<slot></slot><span></span>
    </a>
    <a v-else
    	:class="[
	    	props.cusclass ? props.cusclass : '',
	     ]"
    ><slot></slot></a>
    <transition name="slide-fade">
        <div class="dropdown-pane" ref="popper" v-show="isShow">
		  <slot name="dropdown"></slot>
		</div>
    </transition>
  </span>
</template>
<script>
import popperEmitter from '../../../utils/popperEmitter'
export default {
  name: 'LgDropdown',
  mixins: [popperEmitter],
  props: {
    type: {
      type: String,
      default: ''
    },
    size: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    props: {
      radius: {
        type: String,
        default: ''
      },
      hollow: {
        type: String,
        default: ''
      },
      cusclass: String
    }
  },
  mounted () {
    console.log(this.props)
  },
  methods: {
    hidePopper () {
      if (this.trigger !== 'hover') this.isShow = false
      console.log('hidePopper')
      this.timer = setTimeout(() => {
        this.isShow = false
        this.popperTimer = setTimeout(() => {
          this.popper.destroy()
          this.popper = null
        }, 300)
      }, 300)
      console.log('this.timer', this.timer, this.popperTimer)
    },
    handleFn () {
      this.$emit('click')
    }
  }
}
</script>
<style>
.slide-fade-enter-active {
  transition: margin .3s ease;
}
.slide-fade-leave-active {
  transition: margin .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  margin-top: 10px;
  opacity: 0;
}
</style>
