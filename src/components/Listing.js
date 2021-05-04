import {  useState,useEffect } from "react";
import ListingDisplay from "./ListingDisplay";

const Listing = (props) => {
    
    const [current, setCurrent] = useState("");
    const [content, setContent] = useState("");

    const updateContent = (i) => {
        setCurrent(props.listings[parseInt(i)])
        setContent(props.listings[parseInt(i)].description)
    }

    useEffect(() => {
        setCurrent("")
        setContent("")
    },[props.listings])
    
    return(
        <div class="grid-container listing">
            <div class="grid-child list-group">
                {
                    props.listings.map((listing, i) =>
                    <button type="button" class="list-group-item list-group-item-action" 
                    aria-current={(i===0)?"true":"false"} id={i} onClick={(e) => updateContent(i)}>
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{listing.title}</h5>
                        <small>{listing.location}</small>
                        </div>
                        <p class="mb-1">{listing.company}</p>
                        <small>{(listing.languages).join(', ')}</small>
                    </button>
                    )
                }
            </div>
            <div class="grid-child">
                {(content)?<ListingDisplay listing={current} content={content} type={props.type}/>:""}
            </div>
        </div>
    )
}

export default Listing;