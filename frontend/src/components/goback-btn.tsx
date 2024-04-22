import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { memo } from 'react'


type GobackProps = {
    to: string
}

const GobackRaw = ({ to }: GobackProps) => {
    const navigate = useNavigate();
    
    return (
        <Button
        onClick={() => navigate(to)}
        variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
        </Button>
    )
}

const Goback = memo(GobackRaw)

export default Goback