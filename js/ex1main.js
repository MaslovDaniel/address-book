'use strict'

function onInit() {
    getRobots(renderRobots)
}

function renderRobot(ans) {

    document.querySelector('.card-main').innerText = ans.answer


}