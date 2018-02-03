import { MARKET_DATA_LOADED } from '../constants';
import axios from 'axios';

export function getMarketData(market_type) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://api.liqui.io/api/3/ticker/eth_btc'
        }).then((response) => {
            console.log("response", response)
            dispatch(dataLoaded(response.data));
        })
    }
}

export function dataLoaded(data) {
    return {
        type: MARKET_DATA_LOADED,
        market_data: data,
    }
}

