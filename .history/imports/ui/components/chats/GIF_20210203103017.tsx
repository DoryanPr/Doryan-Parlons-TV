import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('WjspdYwXXQnbRw6hJ71T9GxAScpVMOzi')
// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
// React Component
ReactDOM.render(<Grid width={800} columns={3} gutter={6} fetchGifs={fetchGifs} />, target)