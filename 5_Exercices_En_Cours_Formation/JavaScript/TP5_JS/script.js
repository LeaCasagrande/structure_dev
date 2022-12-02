let ourRequest = new XMLHttpRequest();
let ourButton = document.getElementById('get-details');
let ourDiv = document.getElementById('results');
ourButton.addEventListener('click', function () {
    ourRequest.open('GET', 'https://makh.fr/files/presidents.json');
    ourRequest.onload = function () {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHtml(ourData);
    };
    ourRequest.send();
});

function renderHtml(data) {
    let htmlString = '';
    htmlString += '<table><tr><th>No</th> <th>Name</th> <th>Birth</th> <th>Death</th> <th>Took Office</th> <th>Left Office</th> <th>Party</th> </tr>';
    for (i = 0; i < data.length; i++) {
        htmlString += '<tr>';
        htmlString += '<td>' + data[i].number + '</td>';
        htmlString += '<td>' + data[i].president + '</td>';
        htmlString += '<td>' + data[i].birth_year + '</td>';
        htmlString += '<td>' + data[i].death_year + '</td>';
        htmlString += '<td>' + data[i].took_office + '</td>';
        htmlString += '<td>' + data[i].left_office + '</td>';
        htmlString += '<td>' + data[i].party + '</td>';
        htmlString += '</tr>';
    }
    htmlString += '</table>';
    ourDiv.insertAdjacentHTML('beforebegin', htmlString);
}