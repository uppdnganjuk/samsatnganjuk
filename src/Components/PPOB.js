import React from 'react';
import MainButton from './Component/MainButton'
import './PPOB.css'

class PPOB extends React.Component{

    render(){
        return(
            <div id="buttonContainer">
                <MainButton 
                    namaLayanan="Tokopedia" 
                    link="https://www.tokopedia.com/pajak/samsat"
                />
                <MainButton 
                    namaLayanan="LinkAja" 
                    link="https://www.linkaja.id/"
                />
                <MainButton 
                    namaLayanan="GoJek" 
                    link="gojek://"
                />
                <MainButton 
                    namaLayanan="Klik Indomaret" 
                    link="https://virtual.klikindomaret.com/category/ESamsat"
                />
                <MainButton 
                    namaLayanan="E-Samsat" 
                    link="https://info.dipendajatim.go.id/esamsat/"
                />
            </div>
        )
    }
}
export default PPOB
