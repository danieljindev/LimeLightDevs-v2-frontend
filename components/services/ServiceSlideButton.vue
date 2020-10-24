<template>
  <div 
    class="absolute inset-y-0 h-full flex justify-center items-center text-black text-4xl select-none" 
    :class="direction === '&lt;' ? 'left-0' : 'right-0'"
    draggable=false
  >
    <span
      @click="changeIndex"
      class="w-auto px-6 h-24 cursor-pointer flex items-center justify-center
             bg-transparent hover:bg-opacity-75 hover:bg-app-gray-1 transition duration-200 ease-in-out"
    >
      <!-- a really poor way to implement this. direction should probably be -1 or 1 (based on direction), and an icon should be used below (especially since a background is needed)--> 
      {{ direction }}
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
      console.log(props.direction)
      let value;
      if (props.direction === '<') {
        value = -1;
      } else if (props.direction === '>') {
        value = 1;
      }
      emit('changeIndex', value)
    };

    return { changeIndex }
  }
  // emit an event ig
}
</script>

