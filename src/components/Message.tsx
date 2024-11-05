interface Props {
    author?: string,
    message: string,
    align?: 'start' | 'end'
}

export default function Message({ align = 'end', author = 'Você', message }: Props) {
    return (
        <div style={{ alignSelf: align }} className="flex items-center gap-2 max-md:gap-1">
            <p className="font-black text-lg text-gray-700 max-md:text-[.7rem] max-md:leading-3">{author}:</p>
            <p className="text-white max-md:text-[.5rem]">{message}</p>
        </div>
    )
}
