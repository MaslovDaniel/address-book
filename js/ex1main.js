'use strict'

function onInit() {
    getRobots(renderRobots)
}

function renderRobots(robots) {
    const strHtml = robots.map(bot =>`    
        <div class="card">
            <h1>${bot.fullname}</h1>
            <div class="info">
                <img src="https://robohash.org/${bot.fullname}" />
                <p>
                    <span> Phone: </span> ${bot.phone}, <br>
                    <span> City: </span> ${bot.city}, <br>
                    <span> State: </span> ${bot.state}, <br>
                    <span> Zip: </span> ${bot.zip}, <br>
                    <span> Address: </span> ${bot.address}. <br>
                </p>
            </div>
        </div>`
    ).join('')
    document.querySelector('.cards-main').innerHTML = strHtml
}