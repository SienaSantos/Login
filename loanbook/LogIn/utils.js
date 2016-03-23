var moment = require('moment');

// create a sep file for utility functions such as computations

module.exports = {

	convertSeconds: function(newElapsed){
    var seconds = newElapsed / 1000.0;
    var converted = (new Date).clearTime()
          .addSeconds(seconds)
          .toString('HH:mm:ss');
    console.log('converted: '+converted);
    return converted;
  },

  computeRange: function(date, timeFrom , timeTo){

    var from  = date + " " + timeFrom;
    var to = date + " " + timeTo;

    var diff = moment.utc(moment(to,"YYYY/MM/DD HH:mm:ss").diff(moment(from,"YYYY/MM/DD HH:mm:ss"))).format("HH:mm:ss")

    return diff;
  },
}