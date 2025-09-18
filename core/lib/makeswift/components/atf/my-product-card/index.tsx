'use client';

import useSWR from 'swr';

import { Image } from '~/components/image';

interface Props {
  entityId?: string;
}

interface ProductData {
  name: string;
  defaultImage: {
    altText: string;
    url: string;
  } | null;
}

export function MakeswiftProductCard({ entityId }: Props) {
  const { data, isLoading } = useSWR<ProductData>(
    entityId ? `/api/product/${entityId}` : null,
    async (url: string | URL | Request) => {
      const response = await fetch(url);
      const data: ProductData = await response.json();

      return data;
    },
  );

  if (entityId == null || isLoading || data == null) {
    return <p>Product not found</p>;
  }

  return (
    <article>
      <div className="relative aspect-square h-[600px]">
        {data.defaultImage && (
          <Image alt={data.defaultImage.altText} fill src={data.defaultImage.url} />
        )}
      </div>

      <div className="mt-2 block px-1 text-3xl font-semibold">{data.name}</div>
    </article>
  );
}
