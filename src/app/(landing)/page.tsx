import { LandingHero } from "./_components/LandingHero"
import { Social } from "./_components/Social"

const LandingPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10">
      <LandingHero />
      <Social />
    </div>
  )
}

export default LandingPage
