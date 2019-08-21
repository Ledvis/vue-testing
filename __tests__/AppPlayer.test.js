import { shallowMount } from "@vue/test-utils";
import AppPlayer from "@/components/AppPlayer.vue";

describe("AppPlayer", () => {
  it('should clear vm.data on component destroy', () => {
    const wrapper = shallowMount(AppPlayer)
    
    wrapper.destroy();

    expect(wrapper.vm.info).toBe(null);
  });
});
