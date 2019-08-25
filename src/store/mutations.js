import { clone } from "lodash";

export default {
  SET_NOTIFICATIONS(state, data) {
    state.notifications = data;
  },
  MARK_NOTIFICATION(state, id) {
    const notification = clone(state.notifications);

    state.notifications = notification.map(notification => {
      if (id === notification.id) {
        notification.title = "lox";
        return notification;
      }
      return notification;
    });
  }
};
