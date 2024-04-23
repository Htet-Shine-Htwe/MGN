import {
  PlusCircle,
  Upload,
} from "lucide-react"

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

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import Goback from "@/components/goback-btn"
import MultiSelect from "@/components/MultiSelect"


const Action = () => {

  const categories = [
    { key: "clothing", value: "Clothing" },
    { key: "electronics", value: "Electronics" },
    { key: "accessories", value: "Accessories" },
    { key: "stationery", value: "Stationery" },
    { key: "furniture", value: "Furniture" },
    { key: "food", value: "Food" },
    { key: "beauty", value: "Beauty" },
    { key: "health", value: "Health" },
    { key: "toys", value: "Toys" },
  ];

  return (

    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Goback to="/comics" />
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Manga Title
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            Published
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            {/* <Button variant="outline" size="sm">
                  Discard
                </Button> */}
            <Goback to="/comics" label="Discard" />

            <Button size="sm">Save</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Customization</CardTitle>
                <CardDescription>
                  Editing the Comic details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Title</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      defaultValue="Vinland Saga"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                      className="min-h-32"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>Images</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Order</TableHead>
                      <TableHead>name</TableHead>
                      <TableHead>image</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">
                        1
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="stock-1" className="sr-only">
                          Stock
                        </Label>
                        <Input
                          id="stock-1"
                          type="text"
                          defaultValue="image-1"
                          disabled
                        />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-1" className="sr-only">
                          Price
                        </Label>
                        <Input
                          id="price-1"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="justify-center border-t p-4">
                <Button size="sm" variant="ghost" className="gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  Add Variant
                </Button>
              </CardFooter>
            </Card>

          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Cover</CardTitle>
                <CardDescription>
                  Background Cover
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Upload</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-1">
                  <div className="grid gap-4">
                    {/* <Label htmlFor="tags">Category</Label> */}
                    <MultiSelect values={categories} />
                  </div>
                </div>
              </CardContent>
            </Card>


            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="tier">Tier</Label>
                    <Select>
                      <SelectTrigger id="tier" aria-label="Select tier">
                        <SelectValue placeholder="Select tier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Free</SelectItem>
                        <SelectItem value="published">Premier</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Published</CardTitle>
                <CardDescription>
                    If you publish this comic, it will be available to the public.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div></div>
                <Button  variant="secondary" className="w-full">
                  Publish
                </Button>
              </CardContent>
            </Card>

            
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Goback to="/comics" label="Discard" />

          <Button size="sm">Save</Button>
        </div>
      </div>
    </main>

  )
}

export default Action