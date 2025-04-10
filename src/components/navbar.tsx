import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from './ui/button'
import { Theme, useTheme } from './theme-provider'
import { Label } from './ui/label'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const { setTheme } = useTheme()
  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/70 shadow backdrop-blur">
      <nav className="mx-4 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="border-primary flex h-10 w-10 items-center justify-center rounded-[20%] border-2">
          <span className="text-primary font-[Rubik] text-3xl font-extrabold italic">
            B
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-4 md:flex">
          {navLinks.map(link => (
            <Button key={link.id} className="w-28" asChild>
              <a href={`#${link.id}`}>{link.label}</a>
            </Button>
          ))}
          <Button className="w-28" asChild>
            <a
              href="/CV - Bimo Eka Saputra - English.pdf"
              download
              target="_blank">
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-3 px-6 py-4 shadow md:hidden">
          {navLinks.map(link => (
            <Button asChild>
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </Button>
          ))}
          <Button className="w-full" asChild>
            <a
              href="/CV - Bimo Eka Saputra - English.pdf"
              download
              target="_blank">
              Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Label className="mt-4 text-xl font-semibold">Theme</Label>
          <div className="flex space-x-2">
            {[
              { theme: 'orange', color: 'bg-orange-500' },
              { theme: 'blue', color: 'bg-blue-500' },
              { theme: 'yellow', color: 'bg-yellow-500' },
              { theme: 'light', color: 'bg-white' },
              { theme: 'dark', color: 'bg-black' },
            ].map(({ theme, color }) => (
              <Button
                key={theme}
                onClick={() => setTheme(theme as Theme)}
                className={`h-9 w-9 rounded-full border ${color} hover:${color} ${
                  theme === 'light' ? 'border-black' : 'border-white'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
