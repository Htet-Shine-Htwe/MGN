import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface MultiSelectProps<T> {
  options: T[];
  selectedOptions: T[];
  onChange: (option: T) => void;
  labelExtractor: (option: T) => string;
  customClassNames?: Partial<{
    buttonClassName: string;
    dropdownClassName: string;
    itemClassName: string;
    selectedItemClassName: string;
  }>;
  placeholder?: string;
}

export function MultiSelectDropdown<T>({
  options,
  selectedOptions,
  onChange,
  labelExtractor,
  customClassNames = {},
  placeholder = "Select options",
}: MultiSelectProps<T>) {
  const defaultClasses = {
    buttonClassName: "min-w-[130px]  h-full",
    dropdownClassName: "custom-dropdown",
    itemClassName: "custom-item",
    selectedItemClassName: "custom-selected-item",
  };

  const mergedClasses = { ...defaultClasses, ...customClassNames };

  const selectedLabels = selectedOptions.map((option) => labelExtractor(option)).join(", ");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`flex items-center justify-between overflow-hidden ${mergedClasses.buttonClassName}`}>
          <span className="truncate">{selectedLabels || placeholder}</span>
          <ChevronDown className="h-4 w-4 opacity-50 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`w-[180px] ${mergedClasses.dropdownClassName}`}>
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <DropdownMenuCheckboxItem
              key={labelExtractor(option)}
              checked={isSelected}
              onCheckedChange={() => onChange(option)}
              className={`${mergedClasses.itemClassName} ${isSelected ? mergedClasses.selectedItemClassName : ""} cursor-pointer `}
            >
              {labelExtractor(option)}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
