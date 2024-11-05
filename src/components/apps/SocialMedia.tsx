import { useState } from "react";
import ScreenSocialMedia from "../ScreenSocialMedia";
import SearchBar from "../SearchBar";
import ErroMensagem from "../socialMediaScreens/ErroMensage";

interface Props {
  setDisplayFirstHash: React.Dispatch<React.SetStateAction<number>>
}

export default function SocialMedia({ setDisplayFirstHash }: Props) {
  const [contentScreen, setContentScreen] = useState(<ErroMensagem />)
  return (
    < >
        <SearchBar setContentScreen={setContentScreen}/>
        <ScreenSocialMedia contentScreen={contentScreen}/>
    </>
  )
}
