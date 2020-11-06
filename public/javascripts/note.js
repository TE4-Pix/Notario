console.log('nice');

var notes = [
    {
        "id": 0,
        "title": "James",
        "content": "bababoey",
    },
    {
        "id": 1,
        "title": "Hamzo",
        "content": "it really do be like that sometimes",
    },
    {
        "id": 2,
        "title": "Boms",
        "content": "hmm, true that",
    },
    {
        "id": 3,
        "title": "James",
        "content": "bababoey",
    },
    {
        "id": 4,
        "title": "Hamzo",
        "content": "it really do be like that sometimes",
    },
    {
        "id": 5,
        "title": "Boms",
        "content": "hmm, true that",
    }
];

let params = (new URL(document.location)).searchParams;
let query = params.get('n');
console.log(query);

var note = notes.find(e => e.id === parseInt(query));

document.getElementById('noteViewTitle').innerHTML = note.title;
document.getElementById('noteViewContent').innerHTML = note.content;