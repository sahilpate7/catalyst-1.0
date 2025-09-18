import { Combobox, Group, List, TextInput } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { searchProducts } from '../../../utils/search-products';

import { MakeswiftFeatureProducts } from './index';

runtime.registerComponent(MakeswiftFeatureProducts, {
  type: 'catalog-my-feature-products',
  label: 'Catalog / Feature Products',
  props: {
    heading: TextInput({ label: 'Heading', defaultValue: 'Feature Products' }),
    products: List({
      label: 'Add product',
      type: Group({
        label: 'Product details',
        props: {
          entityId: Combobox({
            label: 'Select product',
            async getOptions(query) {
              const products = await searchProducts(query);

              return products.map((product) => ({
                id: product.entityId.toString(),
                label: product.name,
                value: product.entityId.toString(),
              }));
            },
          }),
        },
      }),
      getItemLabel(item) {
        return item?.entityId ? item.entityId.label : 'No product Selected';
      },
    }),
  },
});
