import React from 'react';
import type { Preview } from "@storybook/react";
import '../lib/tailwind.css'
import './preview.css';

const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Light/dark mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Mode',
        dynamicTitle: true,
        items: [
          {
            icon: 'sun',
            value: 'light',
            title: 'Light Mode',
          },
          {
            icon: 'moon',
            value: 'dark',
            title: 'Dark Mode',
          },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      // change mode
      document
        .querySelectorAll('.docs-story')
        ?.forEach((item) => item.classList.add('bg-background'));

      const htmlClass = document.querySelector('html')?.className ?? '';
      const mode = context.globals.mode;

      if (mode === 'light') {
        if (!htmlClass.includes('light')) {
          document.querySelector('html')?.classList.remove('dark');
          document.querySelector('html')?.classList.toggle('light');
        }
      } else if (mode === 'dark') {
        if (!htmlClass.includes('dark')) {
          document.querySelector('html')?.classList.remove('light');
          document.querySelector('html')?.classList.toggle('dark');
        }
      }

      const html = document.querySelector('html');

      if (html) {
        html.dir = context.globals.textDirection;
      }

      return <Story />;
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    grids: { disabled: true },
    layout: 'fullscreen',
    controls: {
      matchers: {},
    },
    options: {
      storySort: {
        order: ['Overview', '*'],
      },
    },
  },
};

export default preview;
