import Vue from 'vue'
import vGenericForm from 'v-generic-form-vue2'
import Input from '~/components/common/Input'
import TextArea from '~/components/common/TextArea'
Vue.use(vGenericForm, {
  DefaultVariant: 'Input',
  components: {
    Input,
    CustomTextArea: TextArea,
  },
})
