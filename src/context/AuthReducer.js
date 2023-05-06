const AuthReducer = (state, action) =>{
    switch (action.type){
        case "LOGIN" :{
            return{
                currentUser : action.payload,
            }
        }
        case "LOGOUT" :{
            localStorage.clear();
            return{
                currentUser : null,
                
            }
        }
        default :
        return state;
    }
}
export default AuthReducer;