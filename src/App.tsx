import { Toaster } from '@/components/ui/sonner'

import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import Navbar from './components/navbar'
import Projects from './components/projects'
import { ThemeProvider } from './components/theme-provider'
import ThemeToggle from './components/theme-toggle'

function App() {
  return (
    <ThemeProvider defaultTheme="orange" storageKey="vite-ui-theme">
      <div className="scroll-smooth">
        <Navbar />
        <ThemeToggle />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Toaster richColors={true} />
      </div>
    </ThemeProvider>
  )
}

export default App
