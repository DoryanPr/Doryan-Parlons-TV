import {
    Grid, // our UI Component to display the results
    SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import React from 'react'
import StyledGridGif from '../../elements/chats/StyledGridGif'
import { MessageType } from '../../../api/models'
// use @giphy/js-fetch-api to fetch gifs


// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi')


const SearchExperience = (props) => {
    return (
        <StyledGridGif gifVisible={props.gifVisible} >
            <SearchContextManager apiKey={'WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi'}>
                <Components onUpload={props.onUpload} />
            </SearchContextManager>
        </StyledGridGif>
    )
}

const Components = (props) => {

    const [searchKey, setSearchKey] = React.useState("");

    const fetchGifs = (offset: number) => {
        return gf
            .search(searchKey, { offset, limit: 10 });
    };

    const gifClicked = (gif, event) => {
        event.preventDefault() // Cette action permet de ne pas redirigé l'utilisateur sur le lien

        /* C'est une propriété qui nous est renvoyé dans la fonction afin de récupérer le lien du GIF */
        if (gif.images && gif.images.preview_gif) {
            props.onUpload(gif.images.preview_gif.url,
                 MessageType.IMAGE)
        }
    }

    return (
        <>
            <input type="text" placeholder="Rechercher" value={searchKey} onChange={e => setSearchKey(e.target.value)} />
            <Grid
                hideAttribution={true}
                onGifClick={gifClicked}
                key={searchKey}
                columns={2}
                width={400}
                fetchGifs={fetchGifs}
                gutter={6} />
        </>
    )
}

const GridGif = (props: any): JSX.Element => {
    return (
        <>
            <SearchExperience
                gifVisible={props.gifVisible}
                onUpload={props.onUpload}
            />
        </>
    );
}

export default GridGif;


