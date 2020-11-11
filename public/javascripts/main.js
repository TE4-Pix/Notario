listItems();

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

        var temp;

        if (!!item.fields.Content) {
            temp = item.fields.Content.replace(/(\r\n|\n|\r)/gm,' ');
            if(temp.length > 30) temp = temp.substring(0,30);
            if(temp.length > 26) temp = temp + '...';
        }

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

});

}

function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');


}

document.getElementById('FormAdd').addEventListener('submit', e => {
    e.preventDefault();

    
    
    var inputTitle = document.getElementById('title').value;
    var inputContent = document.getElementById('content').value;
    console.log(inputTitle, inputContent);

    if (!inputTitle) {
        inputTitle = '(No Title)';
    }

    if (!inputContent) {
        inputContent = ' ';
    }

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
        
    }, 700);
    
    
    
});
  

