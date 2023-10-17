var mongoose = require('mongoose');
var Location = mongoose.model('lists');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
// module.exports.booksCreate = function (req, res) {
//     sendJsonResponse(res, 200, {"status" : "success"});

//     };

module.exports.locationsCreate= function (req, res) {
    console.log(req.body);
    const { name, state, avgtemp, curtemp, humidity, wind, uv, pressure } = req.body;
    const newLocation = {
    name,
    state,
    avgtemp,
    curtemp,
    humidity,
    wind,
    uv,
    pressure
    //coords: [parseFloat(lng), parseFloat(lat)],
    };
    Location.create(newLocation)
    .then((location) => {
    console.log('Location created:', location);
    return res.status(201).json(location);
    })
    .catch((err) => {
    console.error(err);
    return res.status(400).json({ error: 'Could not create Location' });
    });
    };

module.exports.locationsReadOne = async function (req, res) {
        try {
            const location = await
            Location.findById(req.params.locationid).exec();
            sendJsonResponse(res, 200, location);
            console.log(location);
        } catch (err) {
            // Handle the error 
            sendJsonResponse(res, 500, { error: 'An error occurred'});
        }
    };
    
    // module.exports.booksReadOne = function(req,res){
    //     const book = await
    //     sendJsonResponse(res, 200, book);
    // };
module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };