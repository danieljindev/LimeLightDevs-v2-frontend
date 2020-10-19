<template>
  <div class="fixed left-0 w-screen h-full flex items-center justify-center">
    <img class="absolute bottom-0 right-0" src="../static/contact/blackblob.png">
    <img class="absolute bottom-0 left-0 select-none" src="../static/contact/greenblob.png">
    <div class="mx-24 w-11/12 z-20">
      <div class="font-bold text-6xl mb-10">Get in touch</div>
      <div class="rounded-3xl bg-app-gray-2 flex py-8">
        <div class="relative rounded-3xl w-1/3">
          <img class="absolute left-0 bottom-0 object-cover transform origin-bottom-left scale-125" src="../static/contact/bunchofleafs.png">
          <img class="absolute bottom-0 object-cover" src="../static/contact/unboggled.png">
        </div>
        <form class="flex w-2/3 flex-col justify-center">
          <div class="w-full flex flex-row justify-evenly items-center">
            <div class="flex flex-col w-1/2 mx-8">
              <label class="text-xl mb-2">Name & Last Name</label>
              <input 
                class="bg-app-gray-1 p-4 text-xl rounded-xl text-gray-600 font-bold outline-none" 
                v-model="fullname" 
                placeholder="Write your first & last name here" 
              />
            </div>
            <div class="flex flex-col w-1/2 mx-8">
              <label class="text-xl font-bold mb-2">Reason:</label>
              <input 
                class="bg-app-gray-1 p-4 text-xl rounded-xl text-gray-600 font-bold outline-none" 
                v-model="reason" 
                placeholder="Write your reason" 
              />
            </div>
          </div>
          <div class="flex flex-col mx-8 mt-2">
            <label class="text-xl mb-2">Write your message:</label>
            <textarea
              class="bg-app-gray-1 p-4 text-xl rounded-xl text-gray-600 font-bold resize-none outline-none" 
              v-model="message" 
              rows=6
              placeholder="Write your message" 
            />
          </div>
          <div class="m-6 flex justify-center">
            <button 
              class="px-12 py-2 font-bold text-2xl text-app-green-1 border-4 border-app-green-1 rounded-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    let fullname = ""
    let reason = ""
    let message = ""
    
    return { fullname, reason, message }
  },
}
</script>