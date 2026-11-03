import { Contact } from '../sections/Contact'
import { Credentials } from '../sections/Credentials'
import { Hero } from '../sections/Hero'
import { Platforms } from '../sections/Platforms'
import { Rankings } from '../sections/Rankings'
import { Whoami } from '../sections/Whoami'

export function Home() {
  return (
    <>
      <Hero />
      <Rankings />
      <Platforms />
      <Credentials />
      <Whoami />
      <Contact />
    </>
  )
}
