import React, { Component } from 'react';
import FormComponent from '../formComponent/formComponent';
import { filds } from '../formComponent/fildsInfo';

class Autentification extends Component {
    state = {
        isMember: true
    }
    
    onButtonClick = () => {
        this.setState(()=>{
            return {
                isMember: !this.state.isMember
            }
        })
    }

    filterFilds = (arr, status) => {
        if(status){
          return arr.filter((el)=>status === el.isMember);
        }else{
          return arr
        }
    }
    
    render() {
        const {isMember} = this.state;
        const fildsToRender = this.filterFilds(filds, isMember);
        const formTitle = isMember?'Login':'Registration';
        const message = isMember?'Dont have an account?':'Already a member?';
        const buttonName = isMember?'Registration':'Login';
        return (
            <div>
                <div className='form-container'>
                    <h1>{formTitle}</h1>
                    <FormComponent
                        isMember={isMember}   
                        fildsToRender={fildsToRender}/>
                    <div>
                        {message}
                        <button onClick={this.onButtonClick}>
                            {buttonName}
                        </button>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Autentification;