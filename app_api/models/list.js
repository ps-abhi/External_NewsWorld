// Requiring mongoose
var mongoose = require('mongoose');

/* Defining Schemas */

// Review Schema

var detailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: String,
    avgtemp: Number,
    curtemp: Number,
    humidity: String,
    wind: String,
    uv: String,
    pressure : String
});

mongoose.model('lists', detailsSchema);

// db.lists.insertOne({
//     name:'Hyderabad',
//     state: 'Telangana',
//     avgtemp: 31,
//     curtemp: ,
//     humidity: '50%',
//     wind: '10kmph',
//     uv: '5',
//     pressure : '1000hPa'})

// db.lists.insertOne({
//     name:'Bangalore',
//     state: 'Karnataka',
//     avgtemp: 30,
//     curtemp: 31,
//     humidity: '60%',
//     wind: '15kmph',
//     uv: '6',
//     pressure : '1005hPa'})

// db.lists.insertOne({
//     name:'Chennai',
//     state: 'Tamil Nadu',
//     avgtemp: 32,
//     curtemp: 33,
//     humidity: '70%',
//     wind: '20kmph',
//     uv: '7',
//     pressure : '1010hPa'})

// db.lists.insertOne({
//     name:'Mumbai',
//     state: 'Maharashtra',
//     avgtemp: 33,
//     curtemp: 34,
//     humidity: '80%',
//     wind: '25kmph',
//     uv: '8',
//     pressure : '1015hPa'})

// db.lists.insertOne({
//     name:'Delhi',
//     state: 'Delhi',
//     avgtemp: 34,
//     curtemp: 35,
//     humidity: '90%',
//     wind: '30kmph',
//     uv: '9',
//     pressure : '1020hPa'})

// db.lists.insertOne({
//     name:'Kolkata',
//     state: 'West Bengal',
//     avgtemp: 35,
//     curtemp: 36,
//     humidity: '100%',
//     wind: '35kmph',
//     uv: '10',
//     pressure : '1025hPa'})

// db.lists.insertOne({
//     name:'Pune',
//     state: 'Maharashtra',
//     avgtemp: 36,
//     curtemp: 37,
//     humidity: '110%',
//     wind: '40kmph',
//     uv: '11',
//     pressure : '1030hPa'})