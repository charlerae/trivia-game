

// creating a version of trivia game using callbacks
export function getClue(cb) {
    // using XMLHttpRequest in leiu of fetch
        // creating new request
    const xmlReq = new XMLHttpRequest();

        // add listener to request
    xmlReq.addEventListener('readystatechange', () => {
            // check status
        if (xmlReq.readyState !== XMLHttpRequest.DONE) return;
        if (xmlReq.status < 200 || xmlReq.status > 299) {
            cb(xmlReq.status);
    } else {
            // parse clue and invoke callback
        const clue = JSON.parse(xmlReq.responseText);
        cb(null, clue);
        }
    });

        // specify method and url
    xmlReq.open('GET', 'https://jservice.xyz/api/random-clue');

        // send request
    xmlReq.send();

}
