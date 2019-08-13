import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import AppButton from "@/components/AppButton.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "about",
      path: "/about"
    }
  ]
});

describe("AppButton", () => {
  it("should render props.text when passed", () => {
    const expectedText = "hello";

    const wrapper = mount(AppButton, {
      localVue,
      router,
      propsData: {
        text: expectedText,
        to: { name: "about" }
      }
    });

    expect(wrapper.html()).toContain(expectedText);
  });

  it("should render link correctly with proper href attribute", () => {
    const expectedText = "hello";
    const expectedHrefAttribute = "/about";
    const wrapper = mount(AppButton, {
      localVue,
      router,
      propsData: {
        text: expectedText,
        to: { name: "about" }
      }
    });

    const { href } = wrapper.find("a").attributes();

    expect(href).toBe(expectedHrefAttribute);
  });
});
