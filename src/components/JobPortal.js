import Login from "../components/Login";
import {LOGIN_STATE} from "../redux/storeConstants";
import Home from "../components/Home"
import {useSelector} from "react-redux";

const JobPortal = () => {
    const loginState = useSelector(state => state.loginState);

    return(
        <>
            {
                loginState !== LOGIN_STATE.LOGGED_IN ?
                    <Login />
                    :
                    <Home />
            }
        </>
    )
}

export default JobPortal;