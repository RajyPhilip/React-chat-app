    import { combineReducers } from "redux";

    import {CONTACT_LISTS} from "../action/index";
    import conversations from "../data/conversations";

    function contacts(state = [...conversations], action) {

    switch (action.type) {

    case CONTACT_LISTS:
        return action.payload;
        
    default:
        return state;
    }
    }


    const rootReducer = combineReducers({
    contacts,
    });

    export default rootReducer;
