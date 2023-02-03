'use strict'

function onInit() {
    getRobots(renderRobots)
}

function renderRobots(robots) {

  const strHtml = robots.map(bot =>`
    <div class="card">
        <h1>${bot.fullname}</h1>
    </div>`
).join('')
document.querySelector('.cards-main').innerHTML = strHtml


}