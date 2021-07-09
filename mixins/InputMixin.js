export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errors: {
      type: [Array, String],
      default: null,
    },
    inputClasses: {
      type: String,
      default: '',
    },
    divClass: {
      type: String,
      default: '',
    },
  },
}
