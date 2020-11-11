let params = (new URL(document.location)).searchParams;
let query = params.get('n');
console.log(query);

const url = `https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201/${query}`;

fetch(url, { method: 'GET', headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW'}})
.then(response => response.json())
.then(data => {
    var temp = data.fields.Content.replace(/(\r\n|\n|\r)/gm,'<br>');
    var tempTitle = data.fields.Title;

    document.getElementById('noteViewTitle').innerHTML = data.fields.Title;
    document.getElementById('noteViewContent').innerHTML = temp;
    
    document.getElementById('title').value = tempTitle;
    document.getElementById('content').innerHTML = data.fields.Content;
});

document.getElementById('formEdit').addEventListener('submit', e => {
    e.preventDefault();

    let params = (new URL(document.location)).searchParams;
    let query = params.get('n');
    console.log(query);
    
    
    let inputTitle = document.getElementById('title').value;
    var inputContent = document.getElementById('content').value;
    console.log(inputTitle, inputContent);

    const url = `https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201/${query}`;

    const note = {
        "fields": {
            "Title": inputTitle,
            "Content": inputContent
        }
    }

    fetch(url, { method: 'PATCH', body: JSON.stringify(note), headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

    setTimeout(function(){ 
        location.reload();
        
    }, 500);

    

});

function hideView() {
    document.getElementById('noteView').classList.toggle('hide');
    document.getElementById('formEdit').classList.toggle('show');
}
