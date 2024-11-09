import { useState } from "react";
import ScreenSocialMedia from "../ScreenSocialMedia";
import SearchBar from "../SearchBar";
import ErroMensagem from "../socialMediaScreens/ErroMensage";

interface Props {
  setDisplayFirstHash: React.Dispatch<React.SetStateAction<number>>
  setDisplaySecondHash: React.Dispatch<React.SetStateAction<number>>;
}

export default function SocialMedia({ setDisplayFirstHash,setDisplaySecondHash }: Props) {
  const [contentScreen, setContentScreen] = useState(<ErroMensagem />)
  return (
    <>
      <SearchBar setDisplayFirstHash={setDisplayFirstHash} setContentScreen={setContentScreen} setDisplaySecondHash={setDisplaySecondHash}/>
      <ScreenSocialMedia contentScreen={contentScreen} />
    </>
  )
}
