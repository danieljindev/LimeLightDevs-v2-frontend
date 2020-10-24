<template>
  <div 
    class="absolute inset-y-0 h-full flex justify-center items-center text-black text-4xl select-none" 
    :class="direction === 'left' ? 'left-0' : 'right-0'"
    draggable=false
  >
    <span
      @click.stop="changeIndex"
      class="w-auto px-6 h-24 cursor-pointer flex items-center justify-center
             bg-transparent hover:bg-opacity-75 hover:bg-app-gray-1 transition duration-200 ease-in-out"
    >
      <!-- an icon should be used below (especially since a background is needed since the text color might blend in with the image background color)--> 
      {{ symbol }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    direction: String
  },
  setup(props, { emit }) {
    function changeIndex() {
      let value;
      if (props.direction === 'left') {
        value = -1;
      } else if (props.direction === 'right') {
        value = 1;
      }
      emit('changeIndex', value)
    };

    const symbol = props.direction === 'left' ? '<' : '>';

    return { changeIndex, symbol }
  }
  // emit an event ig
}
</script>

