'use strict'

const API = 'http://filltext.com/?rows=6&fullname={firstName}~{lastName}&phone={phone}&city={city}&state={usState|abbr}&zip={zip}&address={streetAddress}'

function getRobots(cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            cb(res)
        }
    }
    xhr.open('GET', API)
    xhr.send()
}
