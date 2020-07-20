const parseServerError = err => {
    let error;
    console.log(err.response.status);
    if (err.response.status===403){
        // clear local storage if authentication error occurs
        window.localStorage.clear();
    }
    error = { err: 'Server error!' }
    if (err.response){
        error = err.response.data;
    }
    // alert(error.err); // alert error
    console.log(error.err);
    return error.err;
}

export default parseServerError;

