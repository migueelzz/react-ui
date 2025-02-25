import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default'],
    },
  }
} 

export default meta

type Story = StoryObj<typeof meta>

// Default
export const Default: Story = {
  args: {
    children: 'This is example text.',
    variant: 'default',
  },
}