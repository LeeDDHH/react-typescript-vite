import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/utils/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Default/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: 'fit-content',
  height: 'fit-content',
  color: '#000000',
  bgColor: '#FFFFFF',
  children: 'デフォルト',
}

export const SpecifiedSize = Template.bind({})
SpecifiedSize.args = {
  width: '120px',
  height: '35px',
  children: 'サイズのみ指定',
}

export const SpecifiedColor = Template.bind({})
SpecifiedColor.args = {
  color: '#FFFFFF',
  bgColor: '#000000',
  children: 'カラーのみ指定',
}
