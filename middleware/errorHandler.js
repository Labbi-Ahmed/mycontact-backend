const constant= require("../constants");
const errorHnader = (err,req,res,next)=>{
    const statusCode = res.statusCode? res.statusCode : 500;
    switch (statusCode) {
        case constant.constants.VALIDATION_ERROR:
            res.json({title: "Validation error",
            message: err.message,
            stacktrack: err.stack,
            });
            break;
        case 404:
            res.json({title: "server not found",
            message: err.message,
            stacktrack: err.stack,
        })
        default:
            break;
    }
}

module.exports = errorHnader;