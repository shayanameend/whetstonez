import type { PropsWithChildren } from 'react';

import { MoreHorizontalIcon } from 'lucide-react';
import { default as Image } from 'next/image';
import { default as Link } from 'next/link';

import { cn } from '~/lib/utils';

import { Button } from '~/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

import './globals.css';
import { images } from '~/assets';

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
          <h1 className={cn('')}>
            <Image
              className={cn('w-full h-full object-cover')}
              src={images.logo.src}
              alt={images.logo.alt}
            />
          </h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'secondary'} size={'icon'}>
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
