import React from 'react';
import MainButton from './Component/MainButton'
import './PPOB.css'

class PPOB extends React.Component{

    render(){
        return(
            <div id="buttonContainer">
                <MainButton 
                    namaLayanan="Tokopedia" 
                    link="http://google.co.id"
                />
                <MainButton 
                    namaLayanan="LinkAja" 
                    link="http://google.co.id"
                />
                <MainButton 
                    namaLayanan="GoJek" 
                    link="http://google.co.id"
                />
                <MainButton 
                    namaLayanan="Klik Indomaret" 
                    link="http://google.co.id"
                />
                <MainButton 
                    namaLayanan="E-Samsat" 
                    link="http://google.co.id"
                />
            </div>
        )
    }
}
export default PPOB