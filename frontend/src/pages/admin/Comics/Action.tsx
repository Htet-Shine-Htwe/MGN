import {
  Upload,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

import Goback from "@/components/goback-btn"
import CategorySelect from "./CategorySelect"
import { useState } from "react"
import FormInput from "@/components/ui/custom/FormInput"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { comicValidationSchema } from "./ComicActionValidation"
import FormTextBox from "@/components/ui/custom/FormTextBox"
import { ComicProgress, ComicType } from "@/constants/constants"
import { Label } from "@/components/ui/label"
import InputError from "@/components/ui/input-error"

const Action = () => {

  const [selectedCategories, setSelectedCategories] = useState<any>([]);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(comicValidationSchema)
  });



  const onSubmit = (data: any) => {
    console.log(data);
    console.log(errors)
  }


  return (

    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto  flex-1 auto-rows-max gap-4 ">
        <div className="flex items-center gap-4 mb-10">
          <Goback to={-1} />
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
            <Goback to={-1} label="Discard" />

            <Button type="submit" size="sm">Save</Button>
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
                  <div className="grid gap-3 md:grid-cols-2">

                    <FormInput label="Title" placeholder="Title" register={register('title')} fieldError={errors?.title} />
                    <FormInput label="Author" placeholder="Author Name" register={register('author')} fieldError={errors?.author} />
                  </div>
                  <div className="grid gap-3">
                    <FormTextBox label="Description" placeholder="Description" register={register('description')} fieldError={errors?.description} />
                  </div>
                </div>


              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">


              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                  <Select  onValueChange={(value)=>setValue('mogou_type',value)}>
                      <SelectTrigger id="tier" aria-label="Select tier">
                        <SelectValue placeholder="Select tier" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          ComicType.map((item) => (
                            <SelectItem key={item.id} value={item.id as unknown as string}>
                              {item.title}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <InputError field={errors?.mogou_type} />
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-07-chunk-3">
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Select>
                      <SelectTrigger id="tier" aria-label="Select Progress">
                        <SelectValue placeholder="Select Progress" />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          ComicProgress.map((item) => (
                            <SelectItem key={item.id} value={item.title}>
                              {item.title}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

           

          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">

          <Card >
           
              <CardContent className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5 grid">
                  <Label className="text-base">
                    Mature Content
                  </Label>
                  <Label className="text-sm text-muted-foreground">
                    This comic contains mature content
                  </Label>
                </div>
                <Switch />
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Cover</CardTitle>
                <CardDescription>
                  Background Cover
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Upload</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>


            <div className="grid gap-6 sm:grid-cols-1 ">
              <div className="grid gap-4">
                <CategorySelect holderCategories={selectedCategories} setHolderCategories={setSelectedCategories} />
              </div>
            </div>



            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Published</CardTitle>
                <CardDescription>
                  If you publish this comic, it will be available to the public.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div></div>
                <Button variant="success" className="w-full">
                  Publish
                </Button>
              </CardContent>
            </Card>


          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden mt-4">
          <Goback to="/comics" label="Discard" />

          <Button type="submit" size="sm">Save</Button>
        </div>
      </form>
    </main>

  )
}

export default Action