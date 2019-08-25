import { mount, createLocalVue } from "@vue/test-utils";
import AppList from "@/components/AppList.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("AppList", () => {
  it("should render proper text", () => {
    const store = new Vuex.Store({
      getters: {
        notifications: () => [
          { id: 1, title: "hello" },
          { id: 2, title: "world" }
        ]
      },
      actions: {
        getNotifications: () => ({})
      }
    });

    const wrapper = mount(AppList, {
      localVue,
      store
    });

    const listEls = wrapper.findAll("li");

    expect(listEls.at(0).text()).toContain("hello");
    expect(listEls.at(1).text()).toContain("world");
  });

  it("should render change the title of the marked notification", () => {
    const markNotification = jest.fn();
    const store = new Vuex.Store({
      getters: {
        notifications: () => [
          { id: 1, title: "hello" },
          { id: 2, title: "world" }
        ]
      },
      actions: {
        getNotifications: () => ({}),
        markNotification
      }
    });
    const wrapper = mount(AppList, {
      localVue,
      store
    });
    const listEls = wrapper.findAll("a");
    const expectedNotificationId = 1;

    listEls.at(0).trigger("click");

    expect(markNotification.mock.calls[0][1]).toEqual(expectedNotificationId);
  });
});
