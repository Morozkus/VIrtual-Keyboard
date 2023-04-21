'use strict'

import { KeyBoard } from "./classes/KeyBoard.js";
import { EngBoard } from "./classes/EngBoard.js";
import { RusBoard } from "./classes/RusBoard.js";

const keyBoard = new KeyBoard()
const rusLanguage = new RusBoard()
const engLanguage = new EngBoard()

keyBoard.init()
keyBoard.fullWord(helps())

function helps() {
    if (localStorage.getItem('language')) {
        document.querySelector('.developer-info__item_lang').textContent = `Language: ${goJson(localStorage.getItem('language')).name}`
        document.querySelector('.developer-info__item_caps').textContent = `CapsLock: ${localStorage.getItem('caps')}`
        return goJson(localStorage.getItem('language'))
    }

    document.querySelector('.developer-info__item_lang').textContent = 'Language: engLanguage'
    document.querySelector('.developer-info__item_caps').textContent = 'CapsLock: OFF'


    localStorage.setItem('language', goJson(engLanguage))
    localStorage.setItem('caps', 'OFF')
    return engLanguage
}

function goJson(la) {
    if (typeof la == 'string') {
        return JSON.parse(la)
    } else {
        return JSON.stringify(la)
    }
}