import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'outline', 'link', 'destructive'],
    },
  },
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

// Primary
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary Disabled',
    variant: 'primary',
    disabled: true,
  },
}

// Secondary
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Disabled',
    variant: 'secondary',
    disabled: true,
  },
}

// Ghost
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

export const GhostDisabled: Story = {
  args: {
    children: 'Ghost Disabled',
    variant: 'ghost',
    disabled: true,
  },
}

// Outline
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

export const OutlineDisabled: Story = {
  args: {
    children: 'Outline Disabled',
    variant: 'outline',
    disabled: true,
  },
}

// Link
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

export const LinkDisabled: Story = {
  args: {
    children: 'Link Disabled',
    variant: 'link',
    disabled: true,
  },
}

// Destructive
export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}

export const DestructiveDisabled: Story = {
  args: {
    children: 'Destructive Disabled',
    variant: 'destructive',
    disabled: true,
  },
}
