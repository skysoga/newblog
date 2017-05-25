<template>
  <div class="lg-tag-box">
  	<div>
    <span
      class="lg-tag"
      :class="[type ? 'bg' + type : '', {'is-hit': hit}]"
      :style="{backgroundColor: color}"
      v-for='tag in tags'
      :key="tag"
      >
      {{tag}}
      <i
        @click="handleClose(tag)">×</i>
    </span>
  	<input
	  class="add-new-tag"
	  v-if="inputVisible"
	  type="text"
	  ref="saveTagInput"
	  v-model="inputValue"
	  @keyup.enter="handleInputConfirm"
	  @blur="handleInputConfirm"
	>
  	<button v-else class="button tiny hollow" @click="showInput">+ New Tag</button>
  </div>
  <div class="recTags" v-if="recTags">
  		<span
          	class="lg-tag"
      		:class="[type ? 'bg-' + type : '', {'is-hit': hit}]"
      		:style="{backgroundColor: color}"
      		v-for='(tag, index) in recTags'
      		:key="tag"
      		@click="handleAdd(tag)"
      		v-if="!currtag['curr' +index]"
      	>
      	<i class="fa fa-plus"></i> {{tag}}
    	</span>
    	<span
    		v-else
          	class="lg-tag"
      	>
      	<i class="fa fa-plus"></i> {{tag}}
      	</span>
  	</div>
  </div>
</template>
<script>
  export default {
    name: 'LgTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      closeTransition: Boolean,
      color: String,
      tags: {
        type: Array,
        default: function () {
          return []
        }
      },
      recTags: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        currtag: {},
        inputVisible: false,
        inputValue: '',
        resultTags: []
      }
    },
    computed: {
      rectag: {
        get () {
          return this.currtag
        },
        set (rectags) {
          var length = rectags.length
          for (let i = 0; i < length; i++) {
            this.currtag['curr' + i] = false
          }
        }
      }
    },
    mounted () {
      this.rectag = this.recTags
    },
    watch: {
      tags (val, old) {
        for (let i = 0; i < val.length; i++) {
          var j = this.recTags.indexOf(val[i])
          if (j >= 0) {
            this.currtag['curr' + j] = true
          }
        }
      }
    },
    methods: {
      handleClose (tag) {
        var i = this.recTags.indexOf(tag)
        this.currtag['curr' + i] = false
        this.$emit('close', tag)
      },
      showInput () {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.focus()
        })
      },
      handleInputConfirm () {
        this.inputVisible = false
        let val = this.inputValue ? this.inputValue : ''
        if (!val) return
        for (let i of this.tags) {
          if (i === val) {
            alert('已经存在了')
            this.inputValue = ''
            return
          }
        }
        this.tags.push(this.inputValue)
        this.inputValue = ''
      },
      handleAdd (tag) {
        this.tags.push(tag)
      }
    }
  }
</script>
<style>
	.lg-tag-box{margin-bottom: 1rem;}
   .lg-tag-box>div:first-child{min-height:34px;border: #d2e1f9 1px solid;line-height: 34px;}
   .lg-tag-box .recTags{margin-top: 6px;}
   .lg-tag{
	    background-color: #e4e8f1;
	    display: inline-block;
	    padding: 0 5px;
	    height: 24px;
	    line-height: 22px;
	    font-size: 12px;
	    border-radius: 4px;
	    box-sizing: border-box;
	    border: 1px solid transparent;
	    white-space: nowrap;
	    margin: 5px 0 0 6px;
   }
   .lg-tag i{font-size: 1rem;cursor: pointer;}
   .lg-tag-box .recTags .lg-tag{margin: 0 6px 0 0;font-size: 12px;cursor: pointer;}
   .lg-tag-box .recTags .lg-tag i{font-size: 12px;}
   .lg-tag-box .button, .lg-tag-box input{margin:0 0 0 6px}
   .lg-tag-box .add-new-tag{width: 78px;vertical-align: bottom;height: 24px;}
</style>
