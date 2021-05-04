import {useState} from "react";
import {useDispatch} from "react-redux";
import Slide from "./Slide";
import SlideIndicator from "./SlideIndicator";
import {completeOnboarding} from "../redux/actions";

const TOTAL_SLIDES = 3;

const OnboardingSlides = () => {

    const [activeSlide, setActiveSlide] = useState(1);
    const dispatch = useDispatch();

    const setSlideState = id => {
        if (id === activeSlide)
            return "active";
        return "inactive";
    }

    const nextSlide = () => {
        let id = activeSlide;
        id < TOTAL_SLIDES ? setActiveSlide(id + 1) : dispatch(completeOnboarding());
    }

    const generateSlideIndicators = () => {
        let indicators = [];
        for (let i = 1; i <= TOTAL_SLIDES; i++) {
            indicators.push(
                <SlideIndicator slideStatus={setSlideState(i)} key={i} 
                                slideID={i} 
                                clickHandler={() => setActiveSlide(i)} />
            )
        }
        return indicators;
    }

    return (
        <div className="log-in">
            <div className="container main-slides my-4">
                <div className="slides-bg">
                    <Slide slideStatus={setSlideState(1)} slideId={1}>
                        <h1>Search for jobs</h1>
                        <p>Customize your search as per your preferences !</p>
                        <div className="fit my-4">
                            <img src={process.env.PUBLIC_URL + "/hw4_search_onboarding.gif"}
                                className="img-fluid my-4 float-right fit" alt="The search option in the Jobs site allows customization." />
                        </div>
                    </Slide>
                    <Slide slideStatus={setSlideState(2)} slideId={2}>
                        <h1>Save jobs you like</h1>
                        <p>Save a job for later and view them from the 'Saved' tab !</p>
                        <div className="fit my-4">
                            <img src={process.env.PUBLIC_URL + "/hw4_save_onboarding.gif"}
                                className="img-fluid"
                                alt="The Save button gives you the option to save a job listing." />
                        </div>
                    </Slide>
                    <Slide slideStatus={setSlideState(3)} slideId={3}>
                        <h1>Need help again ?</h1>
                        <p>Go to the homepage by clicking on the "Code for $$" and navigate to the 'Need help?' section and click the button!</p>
                        <div className="fit my-4">
                            <img src={process.env.PUBLIC_URL + "/hw4_help.png"}
                                className="img-fluid"
                                alt="The help button to access the onboarding slides is on the homepage." />
                        </div>
                    </Slide>
                    <div className="slides-controls">
                        <button className="align-left control-btn" onClick={() => dispatch(completeOnboarding())}>Skip</button>
                        <div className="align-center">
                            {generateSlideIndicators()}
                        </div>
                        <button className="align-right control-btn" onClick={nextSlide}>
                            {
                                activeSlide < TOTAL_SLIDES ? "Next" : "Done"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnboardingSlides;