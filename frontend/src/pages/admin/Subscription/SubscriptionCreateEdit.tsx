import Goback from "@/components/goback-btn"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SubscriptionCreateEdit = () => {
  return (
    <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto  flex-1 auto-rows-max gap-4 ">
        <div className="flex items-center gap-4 mb-10">
          <Goback to="/subscriptions" />
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Subscription
          </h1>

          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            {/* <Button variant="outline" size="sm">
                  Discard
                </Button> */}
            <Goback to="/subscriptions" label="Discard" />

            <Button size="sm">Save</Button>
          </div>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Create Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-4">
                  <div className="grid gap-4">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name" />
                  </div>

                  <div className="grid gap-4">
                    <Label htmlFor="price">Max Subscription <span className="text-xs" >
                      ( If max subscription has no limit leave 0 )
                      </span>
                    </Label>
                    <Input type="number"  id="price" placeholder="" value={0}/>
                  </div>
                  <div className="grid gap-4">
                    <Label htmlFor="duration">Duration <span className="text-xs" >
                      ( If lifetime leave 0 )
                      </span> </Label>
                    <Input type="number" id="duration" placeholder="Duration" value={0} />
                  </div>
                </div>
              </div>
            </CardContent>

          </Card>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden mt-4">
          <Goback to="/comics" label="Discard" />

          <Button size="sm">Save</Button>
        </div>

      </div>


    </main>
  )
}

export default SubscriptionCreateEdit