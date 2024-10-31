import { useState } from "react";
import ScreenSocialMedia from "../ScreenSocialMedia";
import SearchBar from "../SearchBar";
import ErroMensagem from "../socialMediaScreens/ErroMensage";

export default function SocialMedia() {
  const [contentScreen, setContentScreen] = useState(<ErroMensagem />)
  return (
    <>
        <SearchBar setContentScreen={setContentScreen}/>
        <ScreenSocialMedia contentScreen={contentScreen}/>
    </>
  )
}
