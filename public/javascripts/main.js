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

var count = 5;

document.getElementById('FormAdd').addEventListener('submit', e => {
    e.preventDefault();

    let params = (new URL(document.location)).searchParams;
    let query = params.get('e');
    console.log(query);
    
    
    var inputTitle = document.getElementById('title').value;
    var inputContent = document.getElementById('content').value;
    notes.unshift({
        "id": count + 1,
        "title": inputTitle,
        "content": inputContent
    });
    
    console.log(notes);

    document.getElementById('title').value;
    document.getElementById('content').value;

    document.getElementById('entries').remove();
    listItems();
});

function listItems() {
    
    ul = document.createElement('ul');
    ul.setAttribute('id', 'entries');
    notes.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('entry');

        item.content = item.content.replace(/(\r\n|\n|\r)/gm,'');
        if(item.content.length > 30) item.content = item.content.substring(0,30);
        if(item.content.length > 26) item.content = item.content + '...';

        const markup = ` 
                    <a href="/note?n=${item.id}"><div class=notePreview>
                    <h2>
                    </br>
                    <span class=noteTitle>${item.title}</span>
                    <div class=divContent>${item.content}</div>
                    </br>
                    <hr>
                    </h2>
                    </div></a>
        `;

        li.innerHTML = markup;
        ul.appendChild(li);
    });
    document.getElementById('mainContent').appendChild(ul);

}

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}
  

listItems();