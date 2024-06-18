type InputErrorProps = {
    field?: { message?: string }
}

const InputError = ({ field }: InputErrorProps) => {
    return (
        <p className="text-red-500 text-xs">{field?.message}</p>
    )
}

export default InputError