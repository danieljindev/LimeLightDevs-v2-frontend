<template>
  <!-- Basically searched for the icon component by name and inserts it here.. e.g. "caret" will translate to Caret.vue -->
  <component :is="iconComponent" />
</template>

<script>
import Caret from './icons/Caret'
import DottedLine from './icons/DottedLine'
import RightArrow from './icons/RightArrow'
import LeftArrow from './icons/LeftArrow'
export default {
  components: {
    Caret,
    DottedLine,
    RightArrow,
    LeftArrow,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const iconComponent = capitalizeFirstLetter(props.name)
    return {
      iconComponent,
    }
  },
}
</script>

<style></style>
