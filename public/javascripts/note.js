console.log('nice');

var notes = [
    {
        "id": 0,
        "title": "Shoppinglista",
        "content": "-Pannkakor\n-Mjölk\n-Kaffe\n-Bärs",
    },
    {
        "id": 1,
        "title": "Lorem Ipsum",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        "id": 2,
        "title": "Favoritlåtar",
        "content": "-Gangnam style\n-I'm Blue\n-Guld och Gröna Skogar\n-All Star",
    },
    {
        "id": 3,
        "title": "James",
        "content": "Frihnajs",
    },
    {
        "id": 4,
        "title": "epic gamer moment",
        "content": "Number 15: Burger king foot lettuce. The last thing you'd want in your Burger King burger is someone's foot fungus. But as it turns out, that might be what you get. A 4channer uploaded a photo anonymously to the site showcasing his feet in a plastic bin of lettuce. With the statement: This is the lettuce you eat at Burger King. Admittedly, he had shoes on. But thats even worse.",
    },
    {
        "id": 5,
        "title": "Gentlemen",
        "content": "A short view back to the past",
    }
];



let params = (new URL(document.location)).searchParams;
let query = params.get('n');
console.log(query);

const url = `https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201/${query}`;

fetch(url, { method: 'GET', headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW'}})
.then(response => response.json())
.then(data => {

    /**
    data.fields.content = data.fields.content.replace(/(\r\n|\n|\r)/gm,'<br>');
    */
    

    document.getElementById('noteViewTitle').innerHTML = data.fields.Title;
    document.getElementById('noteViewContent').innerHTML = data.fields.Content;

    
});
