import ReactHtmlParser from 'react-html-parser';
import {useSelector,useDispatch} from "react-redux";
import { saveListing } from "../redux/actions";

const ListingDisplay = (props) => {

    const saved = useSelector(state => state.saved);
    const dispatch = useDispatch();

    const save = (listing) => {
        if (!saved.includes(listing)) {
            dispatch(saveListing(listing));
        }
    }

    return(
        <>
            {(props.type === "search")?
                <button type="button" className={(!saved.includes(props.listing))?"btn btn-primary":"btn btn-primary disabled"} onClick={(e) => save(props.listing)}>Save</button>
            :""}
            <p>{(props.listing)?ReactHtmlParser(props.content):""}</p>
        </>
    )
}

export default ListingDisplay;