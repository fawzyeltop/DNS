const validator = require('../Utils/validation');

const dnsValidation = (req, res, next) => {
    const validationRule = {
        "A": "required|string",
        "AAAA": "required|string",
        "CNAME": "required|string",
        "MX": "required|string",
        "NS": "required|string",
        "PTR": "required|string",
        "SOA": "required|string",
        "SRV": "required|string",
        "TXT": "required|string",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).json({
                 status: 'Validation Error',
                 message: err
                
            });
        } else {
            next();
        }
    });
}

module.exports = {  dnsValidation }