import React from 'react';
import s from './../ProfileStatus/ProfileStatus.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: 'I am ok',


    }
    activateEditMode(){
       this.setState({
           editMode: true
       })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
     }
    render(){
    return(
        <>
        {!this.state.editMode &&
        <div>
            <span  onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
        </div>
        }
           
        </>
    )
  }
}

export default ProfileStatus;