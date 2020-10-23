<template>
  <div class="w-11/12 h-128 bg-blue-400 mb-32 flex rounded-2xl shadow-xl" :class="imageLeftSide ? 'flex-row' : 'flex-row-reverse'">
    <!--img :src=imageUrl class="w-1/3 object-contain transform scale-150" :class="imageLeftSide ? 'origin-left' : 'origin-right'"-->
    <img :src=imageUrl class="w-full object-contain transform scale-150">
    <div class="w-full flex flex-col m-16">
      <span class="text-7xl tracking-wide font-bold w-full" :class=textAlignStyle>
        {{ title }}
      </span>
      <div class="w-full h-full flex items-center">
        <p class="text-3xl" :class=textAlignStyle>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // todo: maybe trim the padding on the images so they scale better, disable ghost dragging
  props: {
    title: String,
    description: String,
    imageUrl: String,
    imageLeftSide: Boolean,
  },
  setup(props) {
    console.log(props.title, props.imageLeftSide, props.imageUrl);
    const textAlignStyle = props.imageLeftSide ? "text-left" : "text-right"

    return { textAlignStyle }
  }
}
</script>