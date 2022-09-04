import { describe, it, beforeAll, afterEach, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "../Input.vue";

let wrapper;

beforeAll(() => {
  wrapper = mount(Input, { props: { locationData: {} } });
});

afterEach(() => {
  const inputSelector = "[data-testid=user-input]";
  wrapper.find(inputSelector).setValue("");

  wrapper.vm.state.text = "";
});

describe("Input", () => {
  it("should render properly", () => {
    const input = document.querySelector("input-group");
    expect(input);
  });

  it("should emit input text on submit button click", async () => {
    const inputSelector = "[data-testid=user-input]";
    const btnSelector = "[data-testid=submit-btn]";

    const input = "something";

    const textInput = wrapper.find(inputSelector);
    const submitBtn = wrapper.find(btnSelector);

    await textInput.setValue(input);
    expect(textInput.element.value).toBe(input);

    await submitBtn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("submit");
    expect(wrapper.emitted("submit")[0]).toEqual([input]);
  });

  it("should emit an empty string if user input is empty", async () => {
    const btnSelector = "[data-testid=submit-btn]";
    const submitBtn = wrapper.find(btnSelector);

    await submitBtn.trigger("click");
    expect(wrapper.emitted("submit").length).toBe(2);
    expect(wrapper.emitted("submit")[1]).toEqual([""]);
  });
});
