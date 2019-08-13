import { shallowMount } from "@vue/test-utils";
import AppNotification from "@/components/AppNotification";

jest.mock("axios", () => {
  return {
    get() {
      return Promise.resolve({
        data: [
          {
            body: "quia et",
            title: "sunt aut",
            id: 1,
            userId: 1
          }
        ]
      });
    }
  };
});

describe("Name of the group", () => {
  it("should render li items with proper text in it", async () => {
    const wrapper = shallowMount(AppNotification);

    await wrapper.vm.$nextTick();

    const items = wrapper.findAll('li')

    expect(items.at(0).text()).toContain('sunt aut')
  });
});
