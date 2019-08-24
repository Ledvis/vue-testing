import { mount, createLocalVue } from "@vue/test-utils";
import AppList from "@/components/AppList.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  getters: {
    notifications: () => [{ id: 1, title: "hello" }, { id: 2, title: "world" }]
  },
  actions: {
    getNotifications: () => ({})
  }
});

describe("AppList", () => {
  it("should render proper text", () => {
    const wrapper = mount(AppList, {
      localVue,
      store
    });

    const listEls = wrapper.findAll("li");

    expect(listEls.at(0).text()).toContain('hello');
    expect(listEls.at(1).text()).toContain('world');
  });
});
