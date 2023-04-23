'use strict'

import { KeyBoard } from "./classes/KeyBoard.js";
import { EngBoard } from "./classes/EngBoard.js";
import { RusBoard } from "./classes/RusBoard.js";

const keyBoard = new KeyBoard()
const rusLanguage = new RusBoard()
const engLanguage = new EngBoard()

keyBoard.init()
keyBoard.fullWord(helps())

// output
const result = document.querySelector('#result')
result.focus()

// change language
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

// help function for normally localStorage and normal status
function goJson(la) {
    if (typeof la == 'string') {
        return JSON.parse(la)
    } else {
        return JSON.stringify(la)
    }
}

// Logic keydown
document.body.addEventListener('keydown', function (e) {
    // cancel this button
    if (['F1', 'F12', 'F5'].includes(e.code)) return

    // re-pressing cancel
    if (e.repeat) return

    // Basic logic cancel
    if (e.code === 'Backspace' || e.code === 'Delete' || e.code === 'Enter') {
        return document.querySelector(`.item[data-code="${e.code}"]`).classList.add('keyClickAnimated')
    }

    if (e.code === 'Tab') {
        e.preventDefault()
        document.querySelector('#result').value += '  '
    }

    // cancel prevent.default
    e.preventDefault()
    document.querySelector(`.item[data-code="${e.code}"]`).classList.add('keyClickAnimated')

    // logic capsLock
    if (e.code == 'CapsLock') {
        const capslock = document.querySelector('.developer-info__item_caps')

        capslock.textContent == 'CapsLock: OFF' ? capslock.textContent = 'CapsLock: ON' : capslock.textContent = 'CapsLock: OFF'
        return document.querySelector('.caps').classList.toggle('caps_active')
    }

    // logic key change language
    if (document.querySelector('.shift_active') && e.code == 'AltLeft') {

        const lang = document.querySelector('.developer-info__item_lang')
        lang.textContent == 'Language: ENG' ? localStorage.setItem('language', goJson(rusLanguage)) : localStorage.setItem('language', goJson(engLanguage))
        lang.textContent == 'Language: ENG' ? lang.textContent = 'Language: ENG' : lang.textContent = 'Language: RUS'

        return keyBoard.fullWord(helps())
    }

    if (!['ControlLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ShiftLeft', 'CapsLock', 'Escape', 'MetaLeft'].includes(e.code)) {

        if (document.querySelector('.shift_active') || document.querySelector('.caps_active')) {
            return result.value += document.querySelector(`.item[data-code="${e.code}"]`).textContent.toUpperCase()
        }
        return result.value += document.querySelector(`.item[data-code="${e.code}"]`).textContent

    }

})

// Logic keyup
document.body.addEventListener('keyup', function (e) {
    if (['F1', 'F12', 'F5'].includes(e.code)) return
    if (e.repeat) return

    if (e.code == 'ShiftLeft') {
        document.querySelector('.shift').classList.toggle('shift_active')
    }

    document.querySelector(`.item[data-code="${e.code}"]`).classList.remove('keyClickAnimated')
})


// Animation key
document.body.addEventListener('mousedown', function (e) {
    if (!e.target.closest('.item') || ['Del'].includes(e.target.textContent)) return
    e.target.classList.add('keyClickAnimated')

    // Basic logic cancel
    if (e.target.dataset.code === 'Backspace') {
        return result.value = result.value.slice(0, -1);


    } else if (e.target.dataset.code === 'Enter') {
        return result.value += '\n'

    } else if (e.target.dataset.code === 'Tab') {

        return result.value += '    '
    } else if (e.target.dataset.code == 'ShiftLeft') {
        document.querySelector('.shift').classList.toggle('shift_active')
    }

    // logic capsLock
    if (e.target.dataset.code == 'CapsLock') {
        const capslock = document.querySelector('.developer-info__item_caps')

        capslock.textContent == 'CapsLock: OFF' ? capslock.textContent = 'CapsLock: ON' : capslock.textContent = 'CapsLock: OFF'
        return document.querySelector('.caps').classList.toggle('caps_active')
    }

    // logic key change language
    if (document.querySelector('.shift_active') && e.target.dataset.code == 'AltLeft') {

        const lang = document.querySelector('.developer-info__item_lang')
        lang.textContent == 'Language: ENG' ? localStorage.setItem('language', goJson(rusLanguage)) : localStorage.setItem('language', goJson(engLanguage))
        lang.textContent == 'Language: ENG' ? lang.textContent = 'Language: ENG' : lang.textContent = 'Language: RUS'

        return keyBoard.fullWord(helps())
    }

    if (!['ControlLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ShiftLeft', 'CapsLock', 'Escape', 'MetaLeft'].includes(e.target.dataset.code)) {

        if (document.querySelector('.shift_active') || document.querySelector('.caps_active')) {
            return result.value += e.target.textContent.toUpperCase()
        }
        return result.value += e.target.textContent

    }

})

document.body.addEventListener('mouseup', function (e) {
    if (!e.target.closest('.item')) return
    e.target.classList.remove('keyClickAnimated')
})