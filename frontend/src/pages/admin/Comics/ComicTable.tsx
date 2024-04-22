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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TablePagination } from "@/components/TablePagination"

const ComicTable = () => {


   const comics = Array.from({ length: 10 }, (_, index) => (
        <TableRow key={index}>
            <TableCell className="hidden sm:table-cell">
                <Avatar className="w-16 h-16  md:h-24 md:w-24 ">
                    <AvatarFallback  >CN</AvatarFallback>
                </Avatar>
            </TableCell>
            <TableCell className="font-medium">
                Laser Lemonade Machine
            </TableCell>
            <TableCell>
                <Badge variant="outline">Published</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">331</TableCell>
            <TableCell className="hidden md:table-cell">25.k</TableCell>
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
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    ));

  return (
    <Card>
            <CardHeader>
                <CardTitle>Manga & Manhwas</CardTitle>
                <CardDescription>
                    Manage your manga and manhwas here.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Cover</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">Today Views</TableHead>
                            <TableHead className="hidden md:table-cell">
                                Total Views
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

export default ComicTable