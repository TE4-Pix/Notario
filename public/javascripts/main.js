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
        if(item.content.length > 26) item.content = item.content + ' ...';

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