import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
    SuggestionBar,
} from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import ReactDOM from 'react-dom'
import React from 'react'
// use @giphy/js-fetch-api to fetch gifs


// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi')
// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
// React Component
ReactDOM.render(<Grid width={800} columns={3} gutter={6} fetchGifs={fetchGifs} />, target)


function CarouselDemo() {
    const fetchGifs = (offset: number) =>
        gf.trending({ offset, limit: 10 })
    return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />;
}