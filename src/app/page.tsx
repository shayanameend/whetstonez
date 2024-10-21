import { default as Image } from 'next/image';

import { images } from '~/assets';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export default function HomePage() {
  return (
    <>
      <section
        className={cn(
          'py-12 px-4 h-[calc(100vh_-_5.5rem)] flex flex-col lg:flex-row gap-8',
        )}
      >
        <article className={cn('h-1/2 flex flex-col gap-14')}>
          <div className={cn('flex flex-col gap-8')}>
            <h3 className={cn('text-4xl font-bold italic')}>
              Software Company -Award winning Company Jeddah
            </h3>
            <p className={cn('text-foreground/75 text-xl font-light')}>
              Looking for a Software company Jeddah?
              <br />
              Whetstonez consistently proves amazing results for their clients.
              <br />
              Will grow your brand and business
            </p>
          </div>
          <Button
            className={cn('self-start font-semibold uppercase tracking-tight')}
            variant={'outline'}
            size={'lg'}
          >
            Ask for Quote
          </Button>
        </article>
        <article className={cn('h-1/2 flex flex-col gap-14')}>
          <Image
            className={cn('w-full h-full object-cover')}
            src={images.hero.src}
            alt={images.hero.alt}
          />
        </article>
      </section>
    </>
  );
}
