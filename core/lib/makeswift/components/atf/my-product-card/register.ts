import { Combobox } from '@makeswift/runtime/controls';

import { runtime } from '~/lib/makeswift/runtime';

import { searchProducts } from '../../../utils/search-products';

import { MakeswiftProductCard } from './index';

runtime.registerComponent(MakeswiftProductCard, {
  type: 'catalog-my-product-card',
  label: 'Catalog / My Product Card',
  props: {
    entityId: Combobox({
      label: 'Product',
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
});
