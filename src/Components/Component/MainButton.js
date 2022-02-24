import React from 'react';
import {AiFillMoneyCollect} from 'react-icons/ai'
import './MainButton.css'

class MainButton extends React.Component{
    goToLink(link){
        window.location = link
    }
    render(){
        return(
            <div id="buttonContainer">
                <div class="buttonPPOB" onClick={()=>this.goToLink(this.props.link)}>
                    <p>{this.props.namaLayanan} <AiFillMoneyCollect className="arrowicon"/></p>
                </div>
            </div>
        )
    }
}
export default MainButton