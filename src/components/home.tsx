import { HomeContent } from '@/content/home'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Home = () => {
  return (
    <section
      id="home"
      className="mx-4 flex min-h-screen flex-col items-center justify-center">
      <Avatar className="border-primary h-60 w-60 border-4">
        <AvatarImage
          src={HomeContent.image}
          alt="Home"
          className="h-full object-cover"
        />
        <AvatarFallback>Bimoekas</AvatarFallback>
      </Avatar>
      <div className="font-jetbrains mt-16 text-center">
        <h1 className="text-3xl">
          {HomeContent.title}{' '}
          <span className="text-primary">{HomeContent.name}</span>
        </h1>
        <p className="mt-8 max-w-3xl">{HomeContent.description}</p>
      </div>
    </section>
  )
}

export default Home
