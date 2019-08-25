import actions from "@/store/actions";
import flushPromises from "flush-promises";

const mockedGetPayload = [{ id: 1, title: "hello" }];

jest.mock("axios", () => {
  return {
    get() {
      return Promise.resolve({
        data: mockedGetPayload
      });
    }
  };
});

describe("actions", () => {
  it("should get notifications data", async () => {
    const commit = jest.fn();

    actions.getNotifications({ commit });
    await flushPromises();

    expect(commit).toHaveBeenCalledWith("SET_NOTIFICATIONS", mockedGetPayload);
  });

  it("should call mutations.MARK_NOTIFICATION with proper payload", async () => {
    const commit = jest.fn();
    const notificationId = 1;

    actions.markNotification({ commit }, notificationId);

    expect(commit).toHaveBeenCalledWith("MARK_NOTIFICATION", notificationId);
  });
});
