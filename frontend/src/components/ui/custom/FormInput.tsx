import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputError from "../input-error";

interface FormInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string | number;
  fieldError?: { message?: string };
  register: any;
}

const FormInput = ({
  type = "text",
  label = "",
  placeholder = "",
  defaultValue= "",
  fieldError,
  register
}: FormInputProps) => {

  const initValue = Number.isNaN(defaultValue) ? "" : defaultValue;

  return (
    <div className="grid gap-4">
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} placeholder={placeholder} defaultValue={initValue} {...register} />
      <InputError field={fieldError} />
    </div>
  );
};

export default FormInput;
