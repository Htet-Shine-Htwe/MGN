import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TablePagination } from "@/components/TablePagination"
import AlertBox from "@/components/ui/AlertBox"
const SubscriptionTable = ( ) => {

    const comics = Array.from({ length: 10 }, (_, index) => (
        <TableRow key={index}>

            <TableCell className="font-medium">
                Premium
            </TableCell>
            <TableCell>
                <Badge variant="outline">30days</Badge>
            </TableCell>

            <TableCell className="">
                <Badge variant="outline">{
                    Math.round(Math.random() * 2 ) == 1 ? 'Unlimited' : Math.round(Math.random() * 200 )
                } </Badge>
            </TableCell>

            <TableCell className="">
                <Badge variant="outline">{Math.round(Math.random() * 200 )} </Badge>
            </TableCell>

            <TableCell className="hidden md:table-cell">
                2023-07-12 10:42 AM
            </TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                           
                        >Edit</DropdownMenuItem>


                        {/* <DropdownMenuItem slot=""> */}
                        <AlertBox alertTitle="Delete" alertDescription="Are you sure you want to Delete" alertActionConfirmText="Delete" alertConfirmAction={() => alert('deleted')}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            btnText="Delete" />
                        {/* </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    ));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>
                    List of all subscriptions
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">
                                <span className="">Subscription Name</span>
                            </TableHead>
                            <TableHead>
                                Subscription Time Period
                            </TableHead>

                            <TableHead>
                                Max Subscriptions Limit
                            </TableHead>

                            <TableHead>
                                Total Subscriptions
                            </TableHead>

                            <TableHead className="hidden md:table-cell">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comics}

                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>


                <TablePagination />
            </CardFooter>
        </Card>
    )
}

export default SubscriptionTable