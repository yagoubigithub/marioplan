
const initStat = {
    authError :null
};
const authReducer = (state = initStat, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR' :
                console.log("Login error");
            return {
                ...state,
                authError :  "Login Faild"
            }

        
        case 'LOGIN_SUCCESS' :
            console.log("Login success");
            return {
                ...state,
                authError :  null
            }
            case 'SIGNOUT_SUCCESS' :
            console.log("logout success");
            return state;
        default :
        return state;
    }

    
}

export default authReducer;