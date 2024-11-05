interface Props {
    contentScreen: JSX.Element
}

export default function ScreenSocialMedia({ contentScreen }: Props) {
    return (
        <div className='flex-1 bg-[#495df8] overflow-y-auto'>
        <div className='h-[70%] bg-[#495df8]'>
            {contentScreen}
        </div>
    )
}
