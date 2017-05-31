<template>
  <label class="lg-radio">
    <span class="lg-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label,
        'is-focus': focus
      }"
    >
      <input
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled">
    </span>
    <span class="lg-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{model}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from '../../../utils/emitter';

  export default {
    name: 'LgRadio',

    mixins: [Emitter],

    componentName: 'LgRadio',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String
    },

    data() {
      return {
        focus: false
      };
    },

    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'LgRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },

      model: {
        get() {
        	let a = this.isGroup ? this._radioGroup.value : this.value;
          return this.isGroup ? this._radioGroup.value : this.value;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('LgRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },

      isDisabled() {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled;
      }
    }
  };
</script>
