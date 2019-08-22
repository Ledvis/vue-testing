import { mount } from "@vue/test-utils";
import AppCoursePlaylist from "@/components/AppCoursePlaylist";
import AppCoursePart from "@/components/AppCoursePart";

describe("AppCoursePlaylist", () => {
  it("should render two instances of inner components", () => {
    const wrapper = mount(AppCoursePlaylist, {
      propsData: {
        course: {
          parts: [
            {
              id: 1,
              title: "One"
            },
            {
              id: 2,
              title: "Two"
            }
          ]
        }
      }
    });
    const expectedLength = 2;

    expect(wrapper.findAll(AppCoursePart).length).toEqual(expectedLength);
  });
});
