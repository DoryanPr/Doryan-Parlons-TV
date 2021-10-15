import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
    SuggestionBar,
    Carousel,
    Gif
} from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import ReactDOM, { render } from 'react-dom'
import React, { useContext, useState } from 'react'
// use @giphy/js-fetch-api to fetch gifs


// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi')

const SearchExperience = () => (
    <SearchContextManager apiKey={'WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi'}>
        <Components />
    </SearchContextManager>
)


const Components = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    return (
        <>
            <input type="text" placeholder="Rechercher" value={searchKey} />
            <SuggestionBar />
            <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} />
        </>
    )
}

function GridGif({ onGifClick }) {
    const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

    return <Grid
        fetchGifs={fetchGifs}
        columns={3}
        gutter={6}
        width={400}
        onGifClick={onGifClick} />;
}

const AppGIF = (): JSX.Element => {
    const [modalGif, setModalGif] = React.useState();
    return (
        <>
            
            <SearchExperience
                onGifClick={(gif, e) => {
                    console.log("gif", gif);
                    e.preventDefault();
                    setModalGif(gif);
                }} />

            {modalGif && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 100,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, .8)"
                    }}
                    onClick={e => {
                        e.preventDefault();
                        setModalGif(undefined);
                    }}
                >
                    <Gif gif={modalGif} width={200} />
                </div>
            )}
        </>
    );
}

export default AppGIF;


