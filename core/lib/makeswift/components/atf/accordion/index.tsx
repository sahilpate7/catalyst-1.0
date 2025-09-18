import * as BaseAccordion from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

interface AccordionItem {
  title: string;
  children?: ReactNode;
}

interface Props {
  accordions: AccordionItem[];
  className: string;
}

export function Accordion({ className, accordions }: Props) {
  if (accordions.length === 0) return 'There are no accordions to display.';

  return (
    <BaseAccordion.Root className={className} type="single">
      {accordions.map((accordion, index) => (
        <BaseAccordion.Item className="border-b-2 py-2" key={index} value={`item-${index}`}>
          <BaseAccordion.Trigger className="py-4">
            <div className="font-extrabold uppercase">{accordion.title}</div>
          </BaseAccordion.Trigger>
          <BaseAccordion.Content className="pb-6">{accordion.children}</BaseAccordion.Content>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  );
}
