import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type AlertBoxProps={
    btnText :string | JSX.Element | React.ReactNode,
    alertTitle?:string,
    alertDescription?:string,
    alertActionConfirmText?:string,
    alertConfirmAction : ()=>void,
    className?:string
}


const AlertBox = ({
    btnText="Show",
    alertTitle="Alert",
    alertDescription="Are you sure you want to delete this item?",
    alertActionConfirmText="Sure",
    alertConfirmAction,
    className
} : AlertBoxProps) => {
    return (
        <AlertDialog > 
            <AlertDialogTrigger
            className={className}
            >{btnText}</AlertDialogTrigger>
            <AlertDialogContent >
                <AlertDialogHeader>
                    <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
                    <AlertDialogDescription>
                       {alertDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                    onClick={alertConfirmAction}
                    >{alertActionConfirmText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AlertBox