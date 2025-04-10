import { AboutContent, StacksContent } from '@/content/about'

import SectionTitle from './SectionTitle'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center">
      <SectionTitle title="About Me" />
      <div className="mx-4 mt-4 items-center gap-8 md:mx-40 md:grid md:grid-cols-3">
        <div className="col-span-2 space-y-2">
          <div
            dangerouslySetInnerHTML={{ __html: AboutContent.description }}
            className="space-y-1 text-justify"
          />
        </div>
        <div className="col-span-1 mt-4 flex items-center justify-center md:mt-0">
          <img
            src={AboutContent.image}
            className="border-primary aspect-square rounded-md border-4 object-cover"
          />
        </div>
      </div>
      <div className="mt-8">
        <SectionTitle title="Stacks" className="text-center" />
        <ScrollArea className="max-w-screen">
          <div className="flex w-max space-x-4 p-4">
            {StacksContent.map(item => (
              <figure key={item} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={item}
                    alt="Stacks"
                    className="aspect-square h-32 w-32 object-fill"
                    width={300}
                    height={300}
                  />
                </div>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}

export default About
