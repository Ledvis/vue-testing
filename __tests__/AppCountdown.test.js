import { mount } from "@vue/test-utils";
import AppCountdown from "@/components/AppCountdown.vue";

jest.useFakeTimers();

describe("AppCountdown.vue", () => {
  it("should render the initial start value", () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    });

    expect(wrapper.html()).toContain("5");
  });

  it("should initialize window.setInterval with proper payload on mounted hook", () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    });

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  it("should decrement vm.data.number when one second passed", () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    });

    jest.advanceTimersByTime(1000);

    expect(wrapper.html()).toContain("4");
  });

  it("should call window.clearInterval when time is zero", () => {
    const wrapper = mount(AppCountdown, {
      propsData: {
        start: 5
      }
    });

    jest.advanceTimersByTime(5000);

    expect(wrapper.html()).toContain("0");
    expect(clearInterval).toHaveBeenCalled();
  });
});
