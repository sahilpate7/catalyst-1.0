'use client';

import { Image, List, Shape, Slot, Style, TextArea, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import TeamMembers from './team-members';

runtime.registerComponent(TeamMembers, {
  type: 'team-members',
  label: 'ATF / Team Members',
  props: {
    className: Style({ properties: Style.All }),
    members: List({
      label: 'Members',
      type: Shape({
        type: {
          name: TextInput({
            label: 'Name',
          }),
          description: TextArea({
            label: 'Description',
          }),
          image: Image({
            label: 'Image',
            format: Image.Format.URL,
          }),
          content: Slot(),
        },
      }),
    }),
  },
});
