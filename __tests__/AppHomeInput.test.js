import { shallowMount } from "@vue/test-utils";
import AppHomeInput from "@/components/AppHomeInput.vue";

describe("AppHomeInput.vue", () => {
  it("renders props.inputValue when passed", () => {
    const inputValue = "new message";
    const wrapper = shallowMount(AppHomeInput, {
      propsData: { inputValue }
    });

    expect(wrapper.vm.$el.value).toBe(inputValue);
  });

  it("emits an input event when typing", () => {
    const wrapper = shallowMount(AppHomeInput);
    const input = wrapper.find("input");

    input.trigger("input");

    expect(wrapper.emitted().inputUpdate).toBeTruthy();
  });

  it("emits an input event when typing with proper payload", () => {
    const wrapper = shallowMount(AppHomeInput);
    const input = wrapper.find("input");
    const expectedPayload = "test";

    input.element.value = expectedPayload;
    input.trigger("input");

    expect(wrapper.emitted().inputUpdate[0][0]).toBe(expectedPayload);
  });
});
