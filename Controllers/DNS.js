// dnsForm Controller
const dnsForm = async (req, res) => {
    try {
        const data = req.body;
        res.status(200).json({
            statusCode: 200,
            status: 'Success Message',
            message: 'Data has been sent successfully to the server',
            result: data
        })
    } catch (err) {
        console.log(`Error Message : ${err.message}`);
        res.status(500).json({
            statusCode: 500,
            message: 'Something wrong happened',
            result: null
        })
    }
}

// Export all the methods
module.exports = { dnsForm }
