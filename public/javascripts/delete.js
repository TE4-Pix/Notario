function deleteFunction() {

        const url = `https://api.airtable.com/v0/appsCMsb32iQNMO3y/Table%201/${query}`;

        fetch(url, { method: 'DELETE', headers: { 'Authorization': 'Bearer keylpPfWBTCbx5mnW', 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));

        setTimeout(function () {
            location.reload();

        }, 500);
}