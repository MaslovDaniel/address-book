'use strict'

//  const API = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true' 

const API = 'http://filltext.com/?rows=6&fullname={firstName}~{lastName}&phone={phone}&city={city}&state={usState|abbr}&zip={zip}&address={streetAddress}'
function getRobots(cb) {
    const xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            console.log(res)
            cb(res)
        }
    }

    xhr.open('GET', API)
    xhr.send()


}



