import { Image, Link, Style, TextArea, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { ProductCard } from './';

runtime.registerComponent(ProductCard, {
  type: 'product-card',
  label: 'ATF/ Product Card',
  icon: 'image',
  props: {
    className: Style(),
    image: Image(),
    alt: TextInput({
      label: 'Image alt text',
      defaultValue: 'Description of the image',
    }),
    heading: TextInput({ label: 'Heading', defaultValue: 'My Heading' }),
    linkText: TextInput({ label: 'Link text', defaultValue: 'Read more' }),
    description: TextArea({
      label: 'Description',
      defaultValue: 'My Description',
    }),
    link: Link({
      label: 'Link',
    }),
  },
});
