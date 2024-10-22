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

const links: LinkType[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <header
          className={cn(
            'mx-auto py-8 px-6 max-w-screen-2xl flex flex-row justify-between items-center',
          )}
        >
          <h1 className={cn('')}>
            <Image
              className={cn('w-full h-full object-cover')}
              src={images.logo.src}
              alt={images.logo.alt}
            />
          </h1>
          {links.length > 0 && (
            <nav className="px-12 pb-2 border-b">
              <ul className={cn('flex flex-row gap-16')}>
                {links.map(({ href, label }) => (
                  <li className={cn('text-xl text-foreground/85')} key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
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
