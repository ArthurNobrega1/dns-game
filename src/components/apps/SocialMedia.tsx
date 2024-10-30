
import React from "react";
import ErroMensagem from "../ErroMensage";
import SearchBar from "../SearchBar";



interface ScreenSocialMediaProps {

  contentScreen: JSX.Element;

}



const ScreenSocialMedia: React.FC<ScreenSocialMediaProps> = ({ contentScreen }) => {

  return (

    <div>
      <SearchBar/>
      <ErroMensagem />

    </div>

  );

};



export default ScreenSocialMedia;
