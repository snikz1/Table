
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var validateEmail = function(email) {
//    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    return re.test(email)
//};

var schema = new Schema({
    price: {
        type: String
    }, name: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    },
    description :{
        type: String
    }
});


exports.Statistics = mongoose.model('Statistic', schema);
exports.StatisticsPurchase = mongoose.model('StatisticsPurchase ', schema);
exports.StatisticsConsumption = mongoose.model('StatisticsConsumption ', schema);
/**
 * Created by well on 5/17/16.
 */
