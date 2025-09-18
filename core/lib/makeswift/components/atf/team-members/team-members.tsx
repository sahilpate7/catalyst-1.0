'use client';

import { forwardRef, ReactNode, Ref } from 'react';

import { Image } from '~/components/image';

interface Member {
  name?: string;
  description?: string;
  image?: string;
  content: ReactNode;
}

interface Props {
  className?: string;
  members: Member[];
}

const TeamMembers = forwardRef(({ className, members }: Props, ref: Ref<HTMLUListElement>) => {
  return (
    <ul className="mx-auto flex max-w-7xl justify-between gap-5 px-4 py-10 align-top" ref={ref}>
      {members.map((item) => (
        <li className="border-amber-900 bg-gray-100 p-5" key={item.name}>
          <div className="mb-5">
            <Image
              alt={item.name || 'Image'}
              className="mx-auto rounded-full"
              height={200}
              src={item.image || '/defaultImage.jpg'}
              width={200}
            />
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default TeamMembers;
