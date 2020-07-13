class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

//https://github.com/omniti-labs/jsend

const Success = (statusCode, data, res) => {

    res.status(statusCode).send({
        status: "success",
        data
    });
}
// fail is returned when rejected
const Fail = (statusCode, data, res) => {
    res.status(statusCode).send({
        status: "fail",
        data
    });
}

//return new Success(200, null);
//return new Success(201, { msg: 'done' });

module.exports = {
    ErrorHandler,
    Success,
    Fail
}
