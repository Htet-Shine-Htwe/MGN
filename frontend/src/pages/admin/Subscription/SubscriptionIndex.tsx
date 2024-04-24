
import {
    Tabs,

} from "@/components/ui/tabs"
import SubscriptionTable from "./SubscriptionTable"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"


const SubscriptionIndex = () => {

    const navigate = useNavigate();

    return (
        <main className=" flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto flex-1 auto-rows-max gap-4 grid-cols-1">

                <Tabs defaultValue="all" className="w-full justify-between">
                    <div className="flex items-center w-full justify-between">
                       
                        <div className="ml-auto flex items-center gap-2">

                            <Button size="sm" className="h-8 gap-1" onClick={() => navigate('/subscriptions/add')} >
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Add
                                </span>
                            </Button>
                        </div>
                    </div>

                </Tabs>
                <div className="mt-8">
                    <SubscriptionTable />
                </div>
            </div>
        </main>
    )
}

export default SubscriptionIndex