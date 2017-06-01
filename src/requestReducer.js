import * as requestActions from './requestActions'

const initialState = {
    inflight: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case requestActions.REQUEST_BEGIN: {                    
            const request = action.data;
            return Object.assign({}, state, {
                inflight: state.inflight + 1,   // increment overall inflight
                [request.name]: {
                    inflight: true              // request is now inflight                    
                }
            });            
        }

        case requestActions.REQUEST_END: {    
            const request = action.data;
            return Object.assign({}, state, {
                inflight: state.inflight - 1,    // decrement overall inflight
                [request.name]: {
                    inflight: false,             // request is no longer inflight
                    error: request.error         // any error that may have occurred
                }
            });
        }
    }

    return state;
}

export default reducer;