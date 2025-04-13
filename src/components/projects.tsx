import { ProjectContent } from '@/content/project'

import SectionTitle from './SectionTitle'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { cn } from '@/lib/utils'

const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-16 flex min-h-screen flex-col items-center justify-center">
      <SectionTitle title="Projects" />
      <Carousel className="mt-8 max-w-screen">
        <CarouselContent>
          {ProjectContent.map(item => (
            <CarouselItem key={item.title}>
              <Card className="mx-4 p-0 md:mx-16">
                <CardContent className="p-0">
                  <img
                    src={item.image}
                    className={cn(
                      item.web ? 'object-cover' : 'object-contain',
                      'h-[15em] w-full rounded-t-md sm:h-[30em]',
                    )}
                  />
                  <div className="p-4">
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <div className="mt-8 flex flex-wrap gap-2">
                      {item.stacks.map(stack => (
                        <Badge>{stack}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Projects
