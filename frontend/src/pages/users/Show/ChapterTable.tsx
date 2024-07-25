import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";


interface ChapterTableProps {
    chapterCollection: any[];
}

export const ChapterTable = ({
    chapterCollection = [],
}: ChapterTableProps) => {


    const [chapters, setChapter] = useState<any>([]);

    useEffect(() => {
        setChapter(chapterCollection)
    }, [chapterCollection])

    return (
        <>
            <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                    <CardTitle>Chapters</CardTitle>
                    <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>

                        <TableBody className="gap-10">
                            {
                                chapters.map((mogou, index) => (
                                    <TableRow className="text-lg">
                                        <TableCell key={index}>
                                            Chapter {mogou.chapter_number} : {mogou.title}
                                        </TableCell>
                                        <TableCell 
                                        className="text-right"
                                        >
                                            {
                                                mogou.created_at
                                            }
                                        </TableCell>
                                    </TableRow>

                                ))
                            }

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        Show All Chapters
                    </Button>
                </CardFooter>
            </Card></>
    )
}
