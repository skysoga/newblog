const validator = {
  data () {
    return {
      currentValue: this.value,
      patterns: {
        alpha: '/^[a-zA-Z]+$/',
        alpha_numeric: '/^[a-zA-Z0-9]+$/',
        integer: '/^[-+]?\\d+$/',
        number: '/^[-+]?\\d*(?:[\\.\\,]\\d+)?$/',
        card: '/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$/',
        cvv: '/^([0-9]){3,4}$/',
        email: '/^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/',
        url: '/^(https?|ftp|file|ssh):\\/\\/(((([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-zA-Z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.?)(:\\d*)?)(\\/((([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)|[\uE000-\uF8FF]|\\/|\\?)*)?(\\#((([a-zA-Z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\\da-f]{2})|[!\\$&\'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$/',
        domain: '/^([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,8}$/',
        datetime: '/^([0-2][0-9]{3})\\-([0-1][0-9])\\-([0-3][0-9])T([0-5][0-9])\\:([0-5][0-9])\\:([0-5][0-9])(Z|([\\-\\+]([0-1][0-9])\\:00))$/',
        date: '/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/',
        time: '/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/',
        dateISO: '/^\\d{4}[\\/\\-]\\d{1,2}[\\/\\-]\\d{1,2}$/',
        month_day_year: '/^(0[1-9]|1[012])[- \\/.](0[1-9]|[12][0-9]|3[01])[- \\/.]\\d{4}$/',
        day_month_year: '/^(0[1-9]|[12][0-9]|3[01])[- \\/.](0[1-9]|1[012])[- \\/.]\\d{4}$/',
        color: '/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/'
      }
    }
  },
  props: {
    value: [String, Number],
    placeholder: String,
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
    rows: {
      type: Number,
      default: 2
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    onIconClick: Function
  },
  mounted () {
    this.handleBlur()
  },
  methods: {
    handleBlur (event) {
      var obj = event
      console.log('blur', obj)
      this.$emit('blur', event)
    },
    handleFocus (event) {
      this.$emit('focus', event)
    },
    handleInput (event) {
      const value = event.target.value
      console.log(event.target)
      this.$emit('input', value)
      this.setCurrentValue(value)
      this.$emit('change', value)
    },
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.currentValue = value
    }
  }
}

export default validator
