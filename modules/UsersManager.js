const remoteURL = "http://localhost:8088"
export default {
    getUsersData () {
    return fetch(`${remoteURL}/users`)
        .then(response => response.json())
},
get () {
    return fetch(`${remoteURL}/users`)
        .then(response => response.json())
},

    getUser (id) {
    return fetch(`${remoteURL}/users/${id}`)
        .then(response => response.json())
},
checkUser (email, password) {
    return fetch(`${remoteURL}/users?email=${email}&password=${password}`)
        .then(response => response.json())
},
}
