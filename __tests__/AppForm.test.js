import { mount, createLocalVue } from "@vue/test-utils";
import AppForm from "@/components/AppForm.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "about",
      path: "/about"
    },
    {
      name: "signin",
      path: "/signin"
    }
  ]
});

localVue.use(VueRouter);

describe("AppForm", () => {
  it("should navigate to proper sign in page on form submit", () => {
    const wrapper = mount(AppForm, {
      localVue,
      router
    });
    const expectedRoute = "/signin";

    wrapper.find("form").trigger("submit");

    expect(wrapper.vm.$route.path).toBe(expectedRoute);
  });

  it("should redirect to home page if redirect query exists", () => {
    const wrapper = mount(AppForm, {
      localVue,
      router
    });
    const expectedRoute = "/";

    wrapper.vm.$router.push({ query: { redirect: "/" } });
    wrapper.find("form").trigger("submit");

    expect(wrapper.vm.$route.path).toBe(expectedRoute);
  });
});
