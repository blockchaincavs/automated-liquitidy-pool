/**
 * @author blockchaincavs
 * @class ApiError
 * @description Base class for http client errors
 * 
 */
class AlpError extends Error {

    /**
     * @description custom errors for ALP application
     * @param {string} message 
     * @param {Number} code 
     */
    constructor(message, code) {

        super(message);

        this.name = "AlpError";
        this.code = code || 0;
    }
}

/**
 * Custom Errors
 */
// class AuthenticationError extends AlpError {}

// common js export
module.exports = {
    AlpError
}