import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {signUp} from '../../store/actions/authActions';
import Progress from '../layout/Progress';

class SignUp extends Component {
    state = {
user :{
    email : '',
    password : '',
    firstname :  '',
    lastname : '',
},
progress : null

    }

    handleChange = (e) =>{

        const user = this.state.user;
        user[e.target.id] = e.target.value;
        this.setState({user});
    }
    handleSubmit = (e) =>{

        e.preventDefault();
        this.props.signUp(this.state.user);
        const progress =  ( <Progress />);
  this.setState({progress});
    }
    render() {
        const {auth,authError}  = this.props;
        if(auth.uid) return <Redirect to='/' />
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />

                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />

                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />

                    </div>


                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"onChange={this.handleChange}  />

                    </div>

                    
                    <div className="input-field">
                      <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                      <div className="red-text center">{authError ? authError : this.state.progress}</div>
                    </div>


                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  
    return {
        authError: state.auth.authError,
      auth : state.firebase.auth
    };
  };

  const mapDispatchToProps = (dispatch)=>{
      return {
          signUp : (newUser)=>dispatch(signUp(newUser))
      }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
