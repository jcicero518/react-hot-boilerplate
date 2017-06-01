import * as self from './requestActions'

export const REQUEST_BEGIN = 'REQUEST_BEGIN';
export const REQUEST_END = 'REQUEST_END';

export const beginRequest = (requestName) => ({
    type: REQUEST_BEGIN,
    data: {
        name: requestName
    }
});

export const endRequest = (requestName, err) => ({
    type: REQUEST_END,
    data: {
        name: requestName,
        error: err
    }
});

/**
 * Helper function to dispatch "start" and "end" request actions around a request function that returns a promise.
 * @param {*} dispatch 
 * @param {*} requestName 
 * @param {*} requestFn 
 */
export const wrapRequest = function (dispatch, requestName, requestFn) {
    console.log(`wrapRequest(): beginning request ${requestName}....`);

    // dispatch begin request action
    dispatch(beginRequest(requestName));

    return Promise.resolve()
        .then(() => requestFn())
        .then(result => {
            console.log(`wrapRequest(): finished request ${requestName} without error`);  

            // dispatch end request action 
            dispatch(endRequest(requestName));            
            
            return result;
        })
        .catch(err => {
            const requestError = (err && err.message) || err;
            console.log(`wrapRequest(): finished request ${requestName} with error: `, requestError);  

            // dispatch end request action
            dispatch(endRequest(requestName, requestError));
        });        
}

export default self