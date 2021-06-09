// Finding the Rooms which they were not present.

var _ = require('lodash');

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    }
]

const finding = (memo,room) => {
    if(Object.values(room)[0] === false){memo.push(Object.keys(room)[0]);}
    return memo;
}

const notInRoom = (suspect) => {
    const emptyrooms = _.reduce(suspect.rooms,finding,[]);
    return emptyrooms;
};

notInRooms = _.map(newDevelopment, notInRoom);

console.log(notInRooms)


// Callbacks and Promise

var fs = require('fs');

// Callbacks

const saves = (err) =>{
    if (err) {throw err;}
    console.log('Saved')
};

const doexists = (err) => {
    if(err) {throw err;}
    fs.appendFile('dummy.txt',' Hi Callbacks',saves);
};

fs.access('dummy.txt', fs.constants.F_OK, doexists);


// Promise

const $promise = new Promise ((resolve,reject)=>{
    fs.access('dummy.txt', fs.constants.F_OK, (err) =>{
        if(err){reject(err);}
        
        else{resolve('File exists');}
    })  
});

$promise.then(()=>{
    fs.appendFile('dummy.txt',' Hi Promise', (err) => {
        if (err) throw err;
    });
}).then(() => {
    console.log('Saved')
});
