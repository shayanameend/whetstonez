import type { PropsWithChildren } from 'react';

import { default as Link } from 'next/link';
import { MoreHorizontalIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

import './globals.css';
import { Button } from '~/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [];

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <header
          className={cn('py-8 px-2 flex flex-row justify-between items-center')}
        >
          <h1
            className={cn('text-3xl font-semibold uppercase tracking-tighter')}
          >
            Whetstonez
          </h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'outline'} size={'icon'}>
                <MoreHorizontalIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side={'right'}>
              <SheetHeader>
                <SheetTitle />
                <SheetDescription />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
