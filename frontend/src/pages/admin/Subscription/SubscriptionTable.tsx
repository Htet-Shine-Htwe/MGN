import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TablePagination } from "@/components/TablePagination"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import useQuery from "@/hooks/useQuery"
import ContentTableRow from "@/components/ui/custom/ContentTableRow"
import SubscriptionTableRow from "./SubscriptionTableRow"
import { SubscriptionType } from "./type"
const SubscriptionTable = ({countBy} : {countBy:string} ) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [queryParameters] = useSearchParams();
    const [search, setSearch] = useState<string>(queryParameters.get('search') ?? "");
    
    const { data, isLoading, isFetching, error, refetch } = useQuery(`admin/subscriptions?page=${currentPage}&search=${search}&count_by=${countBy}`);

    return (
        <Card>
            <CardHeader className="hidden md:flex">
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
                                Subscription Duration
                            </TableHead>

                            <TableHead>
                                Max Subscriptions Limit
                            </TableHead>

                            <TableHead>
                                Subscription Price
                            </TableHead>

                            <TableHead>
                                Total Subscriptions
                            </TableHead>

                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {
                            isLoading ? (<ContentTableRow />)
                                :
                                (
                                    data.subscriptions.data.length === 0 ?<ContentTableRow content="No data Found" /> :
                                    data.subscriptions.data.map((sub: SubscriptionType) => {
                                        return <SubscriptionTableRow  key={sub.id} index={sub.id as number}  subscription={sub}  />
                                    })
                                )
                        }

                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>

            {
                    (data && data.subscriptions.data.length > 0 ) && <TablePagination url={data.subscriptions.path} lastPage={data.subscriptions.last_page} currentPage={currentPage} setCurrentPage={setCurrentPage} isFetching={isFetching} />
            }
            </CardFooter>
        </Card>
    )
}

export default SubscriptionTable