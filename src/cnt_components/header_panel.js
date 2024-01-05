import React, { Component } from "react";
import styled from "styled-components";
import ZstLogoImageComponent from "../images_components/logo_zst";

const HeaderCntPanel = styled.div`
    margin:0px;
    padding:20px;
    width: 100%;
    height:auto;
    background-color:firebrick;
    text-align:center;
`

class HeaderPanel extends Component{
    render(){
        return(
            <HeaderCntPanel>
                <ZstLogoImageComponent/>
            </HeaderCntPanel>
        )
    }
}
export default HeaderPanel;