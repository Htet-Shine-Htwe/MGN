import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { memo } from 'react';

type GobackProps = {
    to: string | number;
    label?: string;
    variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link" | null | undefined;
};

const GobackRaw = ({ to, label = "back", variant = "outline" }: GobackProps) => {
    const navigate = useNavigate();

    const renderBtn = () => {
        if (label === 'back') {
            return (
                <Button type="button" variant={variant} onClick={() => navigate(to as string)}>
                    <ChevronLeft className="h-5 w-5" />
                    <span className='sr-only'>{label}</span>
                </Button>
            );
        } else {
            return (
                <Button type="button" variant="outline" size="sm" onClick={() => navigate(to as string)} >
                    {label}
                </Button>
            );
        }
    };

    return renderBtn(); // Call the renderBtn function here to render the button
};

const Goback = memo(GobackRaw);

export default Goback;
