import { useState } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ResumeModal } from './components/ResumeModal'
import { WorkHistory } from './components/WorkHistory'
import { Divider } from './components/ui'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream font-body">
      <Nav onOpenResume={() => setResumeOpen(true)} />

      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <WorkHistory />
        <Divider />
        <About />
      </main>

      <Footer />

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </div>
  )
}
