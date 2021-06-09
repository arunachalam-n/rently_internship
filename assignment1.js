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