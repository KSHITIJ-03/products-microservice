const axios = require('axios')
module.exports = async (req,res,next) => {

    const { payload } = req.body;

    //handle subscribe events

    console.log("============= Products ================");
    console.log(payload);
    res.json(payload);

    async function publishCustomerEvent(payload) {

        axios.post('https:/127.0.0.1:8000/customer/app-events', {
            payload
        })
    }

    async function publishShoppingEvent(payload) {

        axios.post('https:/127.0.0.1:8000/shopping/app-events', {
            payload
        })
    }
 
};
