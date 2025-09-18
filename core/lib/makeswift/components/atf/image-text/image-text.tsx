'use client';

import { forwardRef, Ref } from 'react';

import { Image } from '~/components/image';

interface Props {
  className?: string;
  image?: string;
  name: string;
  text: string;
}

const ImageText = forwardRef(
  ({ className, image, name, text }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <div className={className} ref={ref}>
        <Image alt={name} height={200} src={image || 'defaultImage.jpg'} width={200} />
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
    );
  },
);

export default ImageText;
