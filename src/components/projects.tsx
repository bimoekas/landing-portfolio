import { ProjectContent } from '@/content/project'

import SectionTitle from './SectionTitle'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center justify-center">
      <SectionTitle title="Projects" />
      <Carousel className="mt-8 w-screen">
        <CarouselContent>
          {ProjectContent.map(item => (
            <CarouselItem key={item.title}>
              <Card className="mx-4 p-0">
                <CardContent className="p-0">
                  <img
                    src={item.image}
                    className="h-[30em] w-full rounded-t-md object-cover"
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
