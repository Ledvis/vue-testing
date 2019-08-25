import axios from "axios";

export default {
  async getNotifications({ commit }) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("SET_NOTIFICATIONS", data);
  },
  markNotification({ commit }, id) {
    commit("MARK_NOTIFICATION", id);
  }
};
