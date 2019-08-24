import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: []
  },
  mutations: {
    SET_NOTIFICATIONS(state, data) {
      state.notifications = data;
    }
  },
  actions: {
    async getNotifications({ commit }) {
      const {data} = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const list = []

      for (let index = 0; index < 5; index++) {
        const element = data[index];
        list.push(element)
      }

      commit("SET_NOTIFICATIONS", list);
    }
  },
  getters: {
    notifications(state) {
      return state.notifications;
    }
  }
});
