const validator = require('../Utils/validation');

const dnsValidation = (req, res, next) => {
    const validationRule = {
        "A": "required|string|IPv4Strict",
        "AAAA": "required|string|IPv6Strict",
        "CNAME": "required|string|IPv4Strict",
        "MX": "required|string|IPv4Strict",
        "NS": "required|string|IPv4Strict",
        "PTR": "required|string|IPv4Strict",
        "SOA": "required|string|IPv4Strict",
        "SRV": "required|string|IPv4Strict",
        "TXT": "required|string|IPv4Strict",
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