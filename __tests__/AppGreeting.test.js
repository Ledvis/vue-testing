import { mount } from "@vue/test-utils";
import AppGreeting from "@/components/AppGreeting.vue";
import authMixin from "@/mixins/authMixin";

describe("AppGreeting", () => {
  it("should render user name on load", () => {
    const wrapper = mount(AppGreeting, {
      mixins: [authMixin]
    });
    const expectedText = 'Hi, Zhenya'

    expect(wrapper.html()).toContain(expectedText)
  });
});
