export default function RobotsTxt() {
    const elements = [{ status: 'Disallow', path: '/admin/' }]
    return (
        <div className="font-mono bg-black flex-1 h-full">
            <div className="flex flex-col text-neutral-50 p-2 text-sm max-md:text-[0.4rem] max-md:leading-3">
                <p>user-agent: *</p>
                {elements.map(({ status, path }, index) => {
                    return <p key={index}>{status}: {path}</p>
                })}
            </div>
        </div>
    )
}
