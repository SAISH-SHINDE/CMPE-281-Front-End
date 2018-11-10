import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';

const initialState = {
    "stores":{

    }
};

const stores= (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:
            console.log("im here in store");
            console.log("lid",action.data.login_id);
            console.log("email",action.data.email);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{
                    "email":action.data.email,
                    "login_id":action.data.login_id,
                    "login":action.data.status,
                    "first_name": action.data.first_name
                }
            }

        case SIGNUP:
            console.log("im here in Signup store");
            console.log("in signup:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "status":action.data.status,
                    "email": action.data.email
                }
            }


        default :
            return state;

    }
};

export default stores;