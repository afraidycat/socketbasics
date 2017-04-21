var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf()); //javascript timestamp, not epoch timestamp

var timestamp = 1492763741506;

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));

now.subtract(1, 'year');

console.log(now.format());
console.log(now.format('MMM Do YYYY, h:mma'));