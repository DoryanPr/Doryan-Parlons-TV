import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
    Carousel,
    Gif
} from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import ReactDOM, { render } from 'react-dom'
import React, { useContext, useEffect, useState } from 'react'
import StyledGridGif from '../../elements/chats/StyledGridGif'
import { propTypes } from 'react-bootstrap/esm/Image'
// use @giphy/js-fetch-api to fetch gifs


// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi')


const SearchExperience = (props) => {
    return (
        <StyledGridGif gifVisible={props.gifVisible} >
            <SearchContextManager apiKey={'WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi'}>
                <Components />
            </SearchContextManager>
        </StyledGridGif>
    )
}



const Components = (props) => {
   useEffect(() => {
        document.getElementsByClassName("giphy-gif-img").forEach()
    })
    const [searchKey, setSearchKey] = React.useState("");
    console.log(searchKey);
    const fetchGifs = (offset: number) => {
        return gf.search(searchKey, { offset, limit: 10 });
    };
    return (
        <>
            <input type="text" placeholder="Rechercher" value={searchKey} onChange={e => setSearchKey(e.target.value)} />
            <Grid
                onGifClick={props.onUpload}
                key={searchKey}
                columns={2}
                width={400}
                fetchGifs={fetchGifs}
                gutter={6} />
        </>
    )
}

const AppGIF = (props: any): JSX.Element => {

    return (
        <>
            <SearchExperience
                gifVisible={props.gifVisible}
                onGifClick={(gif, e) => {
                    console.log("gif", gif);
                    e.preventDefault();
                }}
            />
        </>
    );
}

export default AppGIF;


