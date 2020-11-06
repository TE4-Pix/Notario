var notes = [
    {
        "title": "James",
        "content": "bababoey",
    },
    {
        "title": "Hamzo",
        "content": "it really do be like that sometimes",
    },
    {
        "title": "Boms",
        "content": "hmm, true that",
    },
    {
        "title": "James",
        "content": "bababoey",
    },
    {
        "title": "Hamzo",
        "content": "it really do be like that sometimes",
    },
    {
        "title": "Boms",
        "content": "hmm, true that",
    }
];

document.getElementById('FormAdd').addEventListener('submit', e => {
    e.preventDefault();

    let params = (new URL(document.location)).searchParams;
    let query = params.get('e');
    console.log(query);
    
    
    var inputTitle = document.getElementById('title').value;
    var inputContent = document.getElementById('content').value;
    notes.unshift({
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
                    <h2>
                    </br>
                    <span class=noteTitle>${item.title}</span>
                    <div class=divContent>${item.content}</div>
                    </br>
                    <hr>
                    </h2>
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