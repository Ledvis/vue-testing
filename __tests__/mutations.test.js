import mutations from "@/store/mutations";

describe("mutations", () => {
  it("should set passed data into store.state", () => {
    const state = {
      notifications: []
    };
    const notifications = [
      { id: 1, title: "hello" },
      { id: 2, title: "world" }
    ];

    mutations.SET_NOTIFICATIONS(state, notifications);

    expect(state.notifications.length).toEqual(2);
  });

  it("should mutate notification in store.state", () => {
    const state = {
      notifications: [{ id: 1, title: "hello" }, { id: 2, title: "world" }]
    };
    const expectedTitleValue = 'lox';

    mutations.MARK_NOTIFICATION(state, 1);

    expect(state.notifications[0].title).toEqual(expectedTitleValue);
  });
});
