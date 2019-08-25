import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { clone } from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: []
  },
  mutations: {
    SET_NOTIFICATIONS(state, data) {
      state.notifications = data;
    },
    MARK_NOTIFICATION(state, id) {
      const notification = clone(state.notifications);

      state.notifications = notification.map(notification => {
        if (id === notification.id) {
          notification.title = "lox";
          return notification
        }
        return notification;
      });
    }
  },
  actions: {
    async getNotifications({ commit }) {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const list = [];

      for (let index = 0; index < 5; index++) {
        const element = data[index];
        list.push(element);
      }

      commit("SET_NOTIFICATIONS", list);
    },
    markNotification({ commit }, id) {
      commit("MARK_NOTIFICATION", id);
    }
  },
  getters: {
    notifications(state) {
      return state.notifications;
    }
  }
});
