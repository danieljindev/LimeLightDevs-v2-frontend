<template>
  <div class="flex flex-col">
    <label class="text-lg mb-2">Write your message:</label>
    <textarea
      class="
        bg-app-gray-1
        p-3
        text-lg
        rounded-xl
        text-white
        placeholder-app-gray-3
        resize-none
        outline-none
        border-2
        common-input
      "
      :class="
        errors && errors.length
          ? 'border-red-600 focus:border-red-600'
          : 'border-transparent focus:border-app-green-1'
      "
      rows="6"
      :placeholder="placeholder"
      :value="value"
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
}
</script>

<style></style>
