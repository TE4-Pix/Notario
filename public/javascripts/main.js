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
                    <div class='notePreview'>
                    <a href="/note?n=${item.id}">
                    <br>
                    <h2 class=noteTitle>${item.fields.Title}</h2>
                    <div class=divContent>${temp}</div>
                    </a>
                    <button onclick='deleteSelectFunction()' class='btnHide'><img src='/images/deleteIcon-red.png'></button>
                    </div>
                    <hr>
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

    if (!inputTitle) {
        inputTitle = '(Untitled note)';
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

var inputs = document.querySelectorAll("input,select");
for (var i = 0 ; i < inputs.length; i++) {
   inputs[i].addEventListener("keypress", function(e){
      if (e.which == 13) {
         e.preventDefault();
         var nextInput = document.querySelectorAll('[tabIndex="' + (this.tabIndex + 1) + '"]');
         if (nextInput.length === 0) {
            nextInput = document.querySelectorAll('[tabIndex="1"]');
         }
         nextInput[0].focus();
      }
   })
}
  

