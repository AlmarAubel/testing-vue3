import type { Meta, StoryObj } from "@storybook/vue3";
import { within, userEvent } from "@storybook/testing-library";
import MyPage from "./Page.vue";

const meta = {
  title: "Example/Page",
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: "<my-page />",
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole("button", {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

export const LoggedOut: Story = {};
