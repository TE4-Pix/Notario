

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

function listItems() {
    fetch(`https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201?sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc&api_key=keylpPfWBTCbx5mnW&`)
    .then (response => response.json())
    .then(data => {
    var list;

    list = data.records;
    
    console.log(list);
    
    ul = document.createElement('ul');
    ul.setAttribute('id', 'entries');
    list.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('entry');

        
        temp = item.fields.Content.replace(/(\r\n|\n|\r)/gm,'');
        if(temp.length > 30) temp = temp.substring(0,30);
        if(temp.length > 26) temp = temp + '...';
        

        const markup = ` 
                    <a href="/note?n=${item.id}"><div class=notePreview>
                    <h2>
                    </br>
                    <span class=noteTitle>${item.fields.Title}</span>
                    <div class=divContent>${temp}</div>
                    </br>
                    <hr>
                    </h2>
                    </div></a>
        `;

        li.innerHTML = markup;
        ul.appendChild(li);
    });
    document.getElementById('mainContent').appendChild(ul);

    
    
    
    

})
.catch(() => {
    console.log('ERROR');
});

}

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');


}





document.getElementById('FormAdd').addEventListener('submit', e => {
    e.preventDefault();

    
    
    let inputTitle = document.getElementById('title').value;
    var inputContent = document.getElementById('content').value;
    console.log(inputTitle, inputContent);

    const url = 'https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201';

    const expense = {
        
        "fields": {
            "Title": inputTitle,
            "Content": inputContent
        }
        
    }

    fetch(url, { method: 'POST', body: JSON.stringify(expense), headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

    setTimeout(function(){ 
        location.reload();
        document.getElementById('entries').remove();
        listItems();
        
    }, 500);
    
    
    
});
  

listItems();