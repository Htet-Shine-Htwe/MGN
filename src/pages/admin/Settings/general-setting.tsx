import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Upload } from "lucide-react"
import MaintenanceAction from "./General/maintenance-action"
import useQuery from "@/hooks/useQuery"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"
import ApplicationEdit from "./General/application-edit"

const GeneralSetting = () => {
    const { data, isLoading } = useQuery(`/application-configs`);
    const coverImageInput = useRef<HTMLInputElement>(null);
    const [currentCover, setCurrentCover] = useState<any>(null);


    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">

                <div className="grid auto-rows-max items-start gap-4 grid-cols-3 lg:col-span-3 lg:gap-8">

                    <ApplicationEdit applicationConfig={data} />
                    <MaintenanceAction isActive={data?.user_side_is_maintenance_mode} />
                </div>

                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">



                </div>
            </div>

            <div className="flex items-center justify-center gap-2 md:hidden mt-4">
                <Button variant="outline" size="sm">
                    Discard
                </Button>
                <Button size="sm">Apply</Button>
            </div>
        </div>
    )
}

export default GeneralSetting