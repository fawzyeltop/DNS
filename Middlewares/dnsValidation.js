const validator = require('../Utils/validation');

const dnsValidation = (req, res, next) => {
    const validationRule = {
        "A": "required|string|IPv4Strict",
        "AAAA": "required|string|IPv6Strict",
        "CNAME": "required|string|CNAMEStrict",
        "MX": "required|string",
        "NS": "required|string",
        "PTR": "required|string",
        "SOA": "required|string",
        "SRV": "required|string|SRVStrict",
        "TXT": "required|string",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).json({
                 statusCode: 412,
                 status: 'Validation Error',
                 message: err
            });
        } else {
            next();
        }
    });
}

module.exports = {  dnsValidation }