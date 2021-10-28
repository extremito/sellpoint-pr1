import AppNav from "./AppNav";

export default {
    title: "Application bar",
    component: AppNav
}

const Template = (args) => <AppNav {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    isLogged: true
};