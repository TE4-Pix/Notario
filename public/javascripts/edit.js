

document.getElementById('formEdit').addEventListener('submit', e => {
    e.preventDefault();

    let params = (new URL(document.location)).searchParams;
    let query = params.get('e');
    console.log(query);
    
    
    let inputTitle = document.getElementById('title').value;
    var inputPrice = document.getElementById('content').value;
    console.log(inputTitle, inputPrice);

    const url = `https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201${query}`;

    fetch(url, { method: 'PATCH', body: JSON.stringify(expense), headers: {'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    
    setTimeout(function(){ 
        location.reload();
        
    }, 500);

});