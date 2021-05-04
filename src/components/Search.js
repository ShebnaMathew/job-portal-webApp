import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { addPreference,removePreference,getPopularityListing } from "../redux/actions";
import Listing from "./Listing";

const Search = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
    },[props.listings])

    const updatePreference = (language) => {
        (language.target.checked) ?
            dispatch(addPreference(language.target.value)):
            dispatch(removePreference(language.target.value));
    }
    
    return(
            <>
                <div className="container-fluid customize-search">
                    <div className="row">
                        <h6 className="col text-center">
                            Customize search
                        </h6>
                    </div>
                    <div className="justify-content-center text-center">
                        <label class="form-check-label">Select language(s):  </label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Python" onChange={(e) => updatePreference(e)}/>
                            <label class="form-check-label" for="inlineCheckbox1">Python</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Java" onChange={(e) => updatePreference(e)}/>
                            <label class="form-check-label" for="inlineCheckbox2">Java</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="C" onChange={(e) => updatePreference(e)}/>
                            <label class="form-check-label" for="inlineCheckbox1">C</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="C#" onChange={(e) => updatePreference(e)}/>
                            <label class="form-check-label" for="inlineCheckbox2">C#</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Javascript" onChange={(e) => updatePreference(e)}/>
                            <label class="form-check-label" for="inlineCheckbox1">Javascript</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="MySQL" onChange={(e) => updatePreference(e)}/>
                            <label class="form-check-label" for="inlineCheckbox2">MySQL</label>
                        </div>
                    </div>
                    <div className="justify-content-center text-center">
                        <label class="form-check-label">Sort by popularity:  </label>
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="popularity" onChange={(e) => dispatch(getPopularityListing(e))}/>
                    </div>
                </div>
                <div id="listings">
                    <Listing listings={props.listings} type={props.type} />
                </div>
            </>
        )
}

export default Search;