'use client';

import { Image, Style, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import ImageText from './image-text';

runtime.registerComponent(ImageText, {
  type: 'image-text',
  label: 'ATF/ Image Text',
  props: {
    className: Style(),
    name: TextInput({ label: 'Heading', defaultValue: 'Heading goes here' }),
    text: TextInput({ label: 'Text', defaultValue: 'Enter text here' }),
    image: Image({
      label: 'Image',
      format: Image.Format.URL,
    }),
  },
});
