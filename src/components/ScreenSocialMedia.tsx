import { useState } from "react"
import ErroMensagem from "./ErroMensage"

export default function ScreenSocialMedia() {
    const [contentScreen, setContentScreen] = useState(<ErroMensagem/>)
    return (
        <div className='flex-1 bg-[#495df8]'>
            {contentScreen}
            {contentScreen}
        </div>
    )
}
