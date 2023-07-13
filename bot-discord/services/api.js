//Internal url for docker

//External url for local
const base = 'http://web:3000/api'

const api = (url, options) => {
    return fetch(base + url, options)
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => {
                        throw err;
                    })
            }

            return res.json();
        })
}

module.exports = api;
