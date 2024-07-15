import HeroCarousel from "./HeroCarousel"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Terminal } from "lucide-react"

const HomePage = () => {
  return (
    <main className="w-full flex flex-col gap-12 px-4 md:px-20">
      <div className="w-full flex justify-center ">
        <HeroCarousel />
      </div>

      <div className="w-full ">
        <Alert className="bg-primary md:h-32">
          <Terminal className="h-4 w-4" />
          <AlertTitle>If you enjoy this website</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </main>
  )
}

export default HomePage