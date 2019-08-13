import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import AppSignIn from "@/components/AppSignIn.vue";

describe("Name of the group", () => {
  const $route = {
    fullPath: "/"
  };

  it("should render link with correct prop.to when passed", () => {
    const wrapper = shallowMount(AppSignIn, {
      stubs: {
        "router-link": RouterLinkStub
      },
      mocks: {
        $route
      }
    });
    const expectedToName = "about";

    expect(wrapper.find("a").props().to.name).toBe(expectedToName);
  });

  it("should pass correct prop.to.query.redirect when passed", () => {
    const wrapper = shallowMount(AppSignIn, {
      stubs: {
        "router-link": RouterLinkStub
      },
      mocks: {
        $route
      }
    });
    const expectedToQuery = "/";

    expect(wrapper.find("a").props().to.query.redirect).toBe(expectedToQuery);
  });
});
