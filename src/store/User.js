export const UserModule = {
  nameSpace: true,

  state: {
    user: null
  },

  // mutations are fucntions that affect the state.
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },

  // actions are functions called throughout that application that call mutations.
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    }
  }
}