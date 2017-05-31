<template>
	<div class="lg-input">
			<input
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autoComplete"
        :autofocus="autofocus"
        :min="min"
        :max="max"
        :list="list"
        :step="step"
        :form="form"
        :value="currentValue"
        :pattern="pattern"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <span class="form-error">
          Yo, you had better fill this out, it's 
      </span>
	</div>
</template>
<script>
  import validator from '../../../utils/validator.js'
  export default {
    name: 'LgInput',
    data () {
      return {
        currentValue: this.value
      }
    },
    mixins: [validator],
    props: {
      value: [String, Number],
      placeholder: String,
      pattern: String,
      readonly: Boolean,
      autofocus: Boolean,
      icon: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      autoComplete: {
        type: String,
        default: 'off'
      },
      form: String,
      list: String,
      max: {},
      min: {},
      step: {},
      validateEvent: {
        type: Boolean,
        default: true
      },
      onIconClick: Function
    }
  }
</script>
