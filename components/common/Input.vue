<template>
  <div>
    <label class="text-lg mb-2">{{ label }}</label>
    <input
      :value="value"
      class="
        bg-app-gray-1
        p-3
        text-lg
        rounded-xl
        text-app-gray-3
        w-full
        placeholder-app-gray-3
        font-bold
        outline-none
        border-2 border-transparent
        focus:border-app-green-1
      "
      :placeholder="placeholder"
      @input="
        $emit('setValue', {
          name,
          payload: $event.target.value,
        })
      "
    />
  </div>
</template>

<script>
import InputMixin from '~/mixins/InputMixin'

export default {
  mixins: [InputMixin],
  mounted() {},
}
</script>

<style></style>
