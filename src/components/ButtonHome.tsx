interface Props {
    name: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonHome({ name, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="bg-[#FB2C2C] text-black py-5 max-md:py-3 max-lg:text-xl w-96 max-lg:w-32 rounded-[3rem] ease-in-out duration-500 hover:text-[#FB2C2C] hover:bg-black active:scale-90"
        >
            {name}
        </button>
    )
}
