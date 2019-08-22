import { shallowMount } from "@vue/test-utils";
import AppCoursePart from "@/components/AppCoursePart.vue";

describe("AppCoursePart", () => {
  it("should call expected function on click", () => {
    const wrapper = shallowMount(AppCoursePart, {
      propsData: {
        part: {
          id: 1,
          title: "hello"
        }
      }
    });
    const play = jest.fn();

    wrapper.setMethods({
      play
    });

    wrapper.find("a").trigger("click");

    expect(play).toHaveBeenCalled();
  });
});
