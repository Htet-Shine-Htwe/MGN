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
import { Category } from "./type"
import AlertBox from "@/components/ui/AlertBox"

type CategoryTableProps = {
    setCategory: (category: Category) => void;
    setOpen: (open: boolean) => void;
};

const CategoryTable = ({
    setCategory,
    setOpen
}: CategoryTableProps) => {

    const comics = Array.from({ length: 10 }, (_, index) => (
        <TableRow key={index}>

            <TableCell className="font-medium">
                Laser Lemonade Machine
            </TableCell>
            <TableCell>
                <Badge variant="outline">33</Badge>
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
                            onClick={() => {
                                setCategory({
                                    id: 1,
                                    name: "Edit Name",
                                    created_at: "2023-07-12 10:42 AM",
                                    updated_at: "2023-07-12 10:42 AM"
                                })
                                setOpen(true)
                            }}
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
                <CardTitle>Category Table</CardTitle>
                <CardDescription>
                    List of all categories
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">
                                <span className="">Category Name</span>
                            </TableHead>
                            <TableHead>
                                Total
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

export default CategoryTable