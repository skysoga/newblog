<template>
  <div class="lg-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../../../utils/emitter'

  export default {
    name: 'LgRadioGroup',

    componentName: 'LgRadioGroup',

    mixins: [Emitter],

    props: {
      value: {},
      size: String,
      fill: String,
      textColor: String,
      disabled: Boolean
    },
    watch: {
      value (value) {
        this.$emit('change', value)
        this.dispatch('LgFormItem', 'lg.form.change', [this.value])
      }
    }
  }
</script>

