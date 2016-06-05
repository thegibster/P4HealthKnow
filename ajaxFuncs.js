var rp = require('request-promise')

rp({
        method: "GET",
        uri: "http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php",
        qs: {
            key: "F2IWKICTOM",
            imprint: "p24hr"
        }
    })
    // .then(response => console.log(response))
    .then(function(response) {
        console.log(response + " 1");
    })
    .catch(err => console.log(err));
