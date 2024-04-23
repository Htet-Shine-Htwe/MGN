import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"
import { Category } from "./type"



type CategoryModalProps = {
  initCategory ?: Category;
  setInitCategory : (category: Category | undefined) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function CategoryModal({initCategory,setInitCategory,open,setOpen}: CategoryModalProps) {

  const category = initCategory;

  const isCreate = !category;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1"  >
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onCloseAutoFocus={()=>{
          setInitCategory(undefined);
      }}>
        <DialogHeader>
          <DialogTitle>
            Create new Category
          </DialogTitle>
          <DialogDescription>
            Fill in the form below to create a new category.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Category Name
            </Label>
            <Input
              id="name"
              defaultValue={category?.name}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            {
              isCreate ? "Create" : "Update"
            }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
