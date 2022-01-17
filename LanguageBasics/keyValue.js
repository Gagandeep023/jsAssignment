const _ = require("lodash"); 

const array = [
    {
        event_id: 111,
        Prop : 'aaa'
    },
    {
        event_id: 222,
        Prop : 'bbb',
    },
];
let hashMaps =  new Map(array.map(key => [key.event_id, key.Prop]));

console.log(hashMaps);

const keyByObject = _.keyBy(array, 'event_id');
console.log(keyByObject);
