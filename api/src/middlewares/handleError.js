
const handleError = (err, res) => {
    console.log(err);
    let { statusCode, message } = err;

    statusCode = statusCode || 500;

    res.status(statusCode).send({
        status: "error",
        statusCode,
        message
    });
};
module.exports=handleError;
