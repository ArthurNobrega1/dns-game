interface Props {
    name: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ name, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="border font-semibold py-1 max-md:py-0 px-4 max-md:px-2 rounded-2xl ease-in-out duration-500 text-sm text-white hover:text-[#131016] hover:bg-white active:scale-90 max-md:text-[.45rem]"
        >
            {name}
        </button>
    )
}
