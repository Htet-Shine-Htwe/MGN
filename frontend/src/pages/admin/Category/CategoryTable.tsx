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
import { useEffect, useState } from "react"
import { useGetDataQuery } from "@/redux/api/queryApi"

type CategoryTableProps = {
    setCategory: (category: Category) => void;
    setOpen: (open: boolean) => void;
  
};

const CategoryTable = ({
    setCategory,
    setOpen,
   
}: CategoryTableProps) => {
    const [currentPage,setCurrentPage] = useState<number>(1);

    const { data : categories, isLoading,refetch } = useGetDataQuery(`categories?page=${currentPage}&order_by_mogous_count=asc`);

    useEffect(() => { 
        refetch()
    }, [currentPage])

    if (isLoading) {
        return <p>Loading</p>
    }

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
                        {
                            categories.categories.data.map((cata: Category) => {
                                return <CategoryTableRow  key={cata.id} category={cata} index={cata.id} setCategory={setCategory} setOpen={setOpen} />
                            })
                        }

                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>


                <TablePagination url={categories.categories.path} lastPage={categories.categories.last_page} currentPage={currentPage} setCurrentPage={setCurrentPage}    />
            </CardFooter>
        </Card>
    )
}


const CategoryTableRow = ({ category, index, setCategory, setOpen }: {
    category: Category,
    index: number | undefined,
    setCategory: any,
    setOpen: any
}) => {

    return <TableRow key={index}>

        <TableCell className="font-medium">
            {category?.title}
        </TableCell>
        <TableCell>
            <Badge variant="outline">
                {category?.mogous_count}
            </Badge>
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
                                id: category?.id,
                                title: category?.title,
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
}

export default CategoryTable