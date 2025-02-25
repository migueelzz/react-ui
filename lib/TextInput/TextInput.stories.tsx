import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './TextInput'

const meta: Meta<typeof TextInput> = {
  title: 'Example/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary'],
    },
  }
} 

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'text',   
    placeholder: 'TextInput with prefix',
    sufix: '@',
    variant: 'primary',
  },
}