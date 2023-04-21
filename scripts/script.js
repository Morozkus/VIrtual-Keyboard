'use strict'

import { KeyBoard } from "./classes/KeyBoard.js";
import { EngBoard } from "./classes/EngBoard.js";
import { RusBoard } from "./classes/RusBoard.js";

const keyBoard = new KeyBoard()
const rusLanguage = new RusBoard()
const engLanguage = new EngBoard()

keyBoard.init()
keyBoard.fullWord(helps())


const result = document.querySelector('#result')

function helps() {
    if (localStorage.getItem('language')) {
        document.querySelector('.developer-info__item_lang').textContent = `Language: ${goJson(localStorage.getItem('language')).name}`
        document.querySelector('.developer-info__item_caps').textContent = `CapsLock: OFF`
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

document.body.addEventListener('keydown', function (e) {
    if (['F1', 'F12', 'F5'].includes(e.code)) return

    if (e.repeat) return

    e.preventDefault()
    document.querySelector(`.item[data-code="${e.code}"]`).classList.add('keyClickAnimated')

    if (e.code == 'CapsLock') {
        const capslock = document.querySelector('.developer-info__item_caps')

        capslock.textContent == 'CapsLock: OFF' ? capslock.textContent = 'CapsLock: ON' : capslock.textContent = 'CapsLock: OFF'
        return document.querySelector('.caps').classList.toggle('caps_active')
    }

    if (document.querySelector('.shift_active') && e.code == 'AltLeft') {

        const lang = document.querySelector('.developer-info__item_lang')
        lang.textContent == 'Language: ENG' ? localStorage.setItem('language', goJson(rusLanguage)) : localStorage.setItem('language', goJson(engLanguage))
        lang.textContent == 'Language: ENG' ? lang.textContent = 'Language: ENG' : lang.textContent = 'Language: RUS'
        
        return keyBoard.fullWord(helps())
    }

    if (!['ControlLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ShiftLeft', 'Enter', 'CapsLock', 'Tab', 'Backspace', 'Escape'].includes(e.code)) {

        if (document.querySelector('.shift_active') || document.querySelector('.caps_active')) {
            return result.value += document.querySelector(`.item[data-code="${e.code}"]`).textContent.toUpperCase()
        }
        return result.value += document.querySelector(`.item[data-code="${e.code}"]`).textContent

    }

})

document.body.addEventListener('keyup', function (e) {
    if (['F1', 'F12'].includes(e.code)) return
    if (e.repeat) return

    if (e.code == 'ShiftLeft') {
        document.querySelector('.shift').classList.toggle('shift_active')
    }

    document.querySelector(`.item[data-code="${e.code}"]`).classList.remove('keyClickAnimated')
})

document.body.addEventListener('mousedown', function (e) {
    if (!e.target.closest('.item')) return
    e.target.classList.add('keyClickAnimated')
})

document.body.addEventListener('mouseup', function (e) {
    if (!e.target.closest('.item')) return
    e.target.classList.remove('keyClickAnimated')
})