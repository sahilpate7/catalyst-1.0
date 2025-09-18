import { NextRequest, NextResponse } from 'next/server';

import { client } from '~/client';
import { graphql } from '~/client/graphql';

const GetProduct = graphql(`
  query GetProduct($entityId: Int!) {
    site {
      product(entityId: $entityId) {
        entityId
        name
        defaultImage {
          altText
          url: urlTemplate(lossy: true)
        }
        path
      }
    }
  }
`);

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ entityId: string }> },
) => {
  const { entityId } = await params;

  const { data } = await client.fetch({
    document: GetProduct,
    variables: { entityId: parseInt(entityId, 10) },
  });

  return NextResponse.json(data.site.product);
};
