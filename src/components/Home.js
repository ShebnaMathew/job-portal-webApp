import {useSelector, useDispatch} from "react-redux";
import { clearSearch, logout,getSavedListings,incompleteOnboarding} from "../redux/actions";
import OnboardingSlides from "../components/OnboardingSlides";
import Search from "../components/Search"
import Saved from "../components/Saved"
import { useEffect, useState } from "react";

const Home = () => {
    const onboardingComplete = useSelector(state => state.user.onboardingComplete);
    const username = useSelector(state => state.user.firstname);
    const listings = useSelector(state => state.listings);
    const savedListings = useSelector(state => state.saved);
    const [content, setContent] = useState("Home");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSavedListings())
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout());
    }

    const displayContent = (e) => {
        const current = e.target.value;
        
        if (current === "Search") {
            setContent("Search")
        } else if (current === "Saved") {
            setContent("Saved")
        } else {
            setContent("Home")
            dispatch(clearSearch())
        }
    }
    
    const seeOnboarding = () => {
        dispatch(incompleteOnboarding())
    }
    
    if (onboardingComplete) {
        return (
            <>
                <nav className="navbar navbar-dark">
                    <div className="container-fluid">
                        <label class="d-flex name">{username}</label>
                        <a className="navbar-brand mx-auto font title" href="#home" onClick={(e)=>{displayContent(e)}}>
                            Code for $$
                        </a>
                        <form class="d-flex">
                            <button class="btn btn-outline-light" onClick={handleLogout}>Logout</button>
                        </form>
                    </div>
                </nav>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <button type="button" className="nav-link active option" aria-current="page" value="Search" onClick={(e) => displayContent(e)}>Search</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" className="nav-link option" value="Saved" onClick={(e) => displayContent(e)}>Saved</button>
                    </li>
                </ul>
                <div>
                    {
                        (content === "Search") ? <Search listings={listings} type="search"/>:
                        (content === "Saved")? <Saved listings={savedListings} type="saved"/>:
                        <div className="intro">
                            <h1 className="intro-text">Welcome {username} !</h1>
                            <h3 className="intro-text">Happy job-hunting.</h3>
                            <h5 className="intro-text">We've got just what you need.</h5>
                            <h6 className="intro-text">Need help navigating ?</h6>
                            <div className="intro-text">
                                <button type="button" className="btn btn-slides" value="slides" onClick={(e) => seeOnboarding()}>Click here</button>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    } else {
        return (
            <OnboardingSlides/>
        )
    }
}

export default Home;