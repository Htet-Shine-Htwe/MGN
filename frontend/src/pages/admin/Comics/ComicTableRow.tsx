import {

TableCell,
TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MogousType } from "./type"

const ComicTableRow = ({mogous } : {mogous : MogousType}) => {
  return (
    <TableRow key={mogous.id}>
            <TableCell className=" ">
                    {/* moogous cover */}
                <img src={mogous.cover} alt="cover" className="w-32 h-40 md:h-32 md:w-32 !rounded-sm" />
              
            </TableCell>
            <TableCell className="font-medium">
                {mogous.title}
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
  )
}

export default ComicTableRow