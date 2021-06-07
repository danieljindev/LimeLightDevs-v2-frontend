export const state = () => ({
  services: null,
  // loading: false,
})
// Getters
export const getters = {
  services(state) {
    console.log(`state.services`, state.services)
    return state.services
  },
}
// Actions
export const actions = {
  async getServices(context) {
    try {
      // context.commit('mutation')
      // context.commit('setLoading', true)
      const { data } = await this.$axios.get('/services')
      // context.commit('setLoading', false)
      context.commit('addServices', data)
      console.log('TEST', data)
      return data
    } catch (error) {
      this.error = error
    }
  },
}
// Mutations
export const mutations = {
  addServices(state, payload) {
    // state.services = payload.map((item) => item.title)
    // console.log(`state.services`, state.services)
    // state.services.push({ ...payload })
    state.services = payload
  },
  // setLoading(state, payload) {
  //   state.loading = payload
  // },
}
