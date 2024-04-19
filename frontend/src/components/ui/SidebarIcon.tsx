import { Button } from "@/components/ui/button"
import { ElementType, useCallback } from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useNavigate } from "react-router-dom"

type SidebarIconProps = {
    Icon: ElementType,
    to: string,
    tooltip: string
}

const SidebarIcon = ({ Icon,to="home",tooltip =  "Default"}: SidebarIconProps) => {

    const navigate = useNavigate();

    const handleNavigation = useCallback(() => {
        navigate(to)
    },[navigate, to]);

    return (
        <div className="flex items-center justify-center ">
            <TooltipProvider delayDuration={300}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button size="icon" onClick={()=> handleNavigation()} >
                            <Icon className="h-5 w-5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-phover" >
                        <p>{tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default SidebarIcon