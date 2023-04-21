'use strict'

export class KeyBoard {
    constructor() {
        this.structure = `
        <div class="develover-info">
        <ul class="developer-info__list">
            <li class="developer-info__item developer-info__item_lang">Language: </li>
            <li class="developer-info__item developer-info__item_caps">CapsLock: </li>
        </ul>
    </div>
        <div class="clav">
            <ul class="row num-rows">
                <li data-code="Escape" class="item dev esc">Esc</li>
                <li data-code="Backquote" class="item word"></li>
                <li data-code="Digit1" class="item">1</li>
                <li data-code="Digit2" class="item">2</li>
                <li data-code="Digit3" class="item">3</li>
                <li data-code="Digit4" class="item">4</li>
                <li data-code="Digit5" class="item">5</li>
                <li data-code="Digit6" class="item">6</li>
                <li data-code="Digit7" class="item">7</li>
                <li data-code="Digit8" class="item">8</li>
                <li data-code="Digit9" class="item">9</li>
                <li data-code="Digit0" class="item">0</li>
                <li data-code="Minus" class="item">-</li>
                <li data-code="Equal" class="item">=</li>
                <li data-code="Backspace" class="item dev delete">del</li>
            </ul>
            <ul class="row first-word-rows">
                <li data-code="Tab" class="item dev tab">Tab</li>
                <li data-code="KeyQ" class="item word"></li>
                <li data-code="KeyW" class="item item_game word"></li>
                <li data-code="KeyE" class="item word"></li>
                <li data-code="KeyR" class="item word"></li>
                <li data-code="KeyT" class="item word"></li>
                <li data-code="KeyY" class="item word"></li>
                <li data-code="KeyU" class="item word"></li>
                <li data-code="KeyI" class="item word"></li>
                <li data-code="KeyO" class="item word"></li>
                <li data-code="KeyP" class="item word"></li>
                <li data-code="BracketLeft" class="item word"></li>
                <li data-code="BracketRight" class="item word"></li>
                <li data-code="Backslash" class="item">\\</li>
            </ul>
            <ul class="row second-word-rows">
                <li data-code="CapsLock" class="item dev caps">CapsLock</li>
                <li data-code="KeyA" class="item item_game word"></li>
                <li data-code="KeyS" class="item item_game word"></li>
                <li data-code="KeyD" class="item item_game word"></li>
                <li data-code="KeyF" class="item word"></li>
                <li data-code="KeyG" class="item word"></li>
                <li data-code="KeyH" class="item word"></li>
                <li data-code="KeyJ" class="item word"></li>
                <li data-code="KeyK" class="item word"></li>
                <li data-code="KeyL" class="item word"></li>
                <li data-code="Semicolon" class="item word"></li>
                <li data-code="Quote" class="item word"></li>
                <li data-code="Enter" class="item dev enter">Enter</li>
            </ul>
            <ul class="row third-word-rows">
                <li data-code="Shift" class="item dev shift">Shift</li>
                <li data-code="KeyZ" class="item word"></li>
                <li data-code="KeyX" class="item word"></li>
                <li data-code="KeyC" class="item word"></li>
                <li data-code="KeyV" class="item word"></li>
                <li data-code="KeyB" class="item word"></li>
                <li data-code="KeyN" class="item word"></li>
                <li data-code="KeyM" class="item word"></li>
                <li data-code="Comma" class="item word"></li>
                <li data-code="Period" class="item word"></li>
                <li data-code="ArrowUp" class="item arrow arrowUp">up</li>
                <li data-code="Slash" class="item">/</li>
            </ul>
            <ul class="row bottom-rows">
                <li data-code="ControlLeft" class="item dev ctrl">Ctrl</li>
                <li data-code="MetaLeft" class="item dev win">Win</li>
                <li data-code="AltLeft" class="item dev alt">Alt</li>
                <li data-code="Space" class="item dev space"></li>
                <li data-code="AltRight" class="item dev alt">Alt</li>
                <li data-code="ControlRight" class="item dev ctrl">Ctrl</li>
                <li data-code="ArrowLeft" class="item arrow arrowLeft">left</li>
                <li data-code="ArrowDown" class="item arrow arrowDown">down</li>
                <li data-code="ArrowRight" class="item arrow arrowRight">right</li>
            </ul>
        </div>
        <textarea type="text" id="result" placeholder="System == windows | Shift + Alt = change language"></textarea>
        `
        this.rows = []
    }

    init() {
        document.body.innerHTML += this.structure
        this.rows.push(document.querySelectorAll('.num-rows .word'), document.querySelectorAll('.first-word-rows .word'), document.querySelectorAll('.second-word-rows .word'), document.querySelectorAll('.third-word-rows .word'))
    }

    fullWord(language) {
        this.rows[0].forEach((el, i) => {
            el.textContent = language.numRow[i]
        })

        this.rows[1].forEach((el, i) => {
            el.textContent = language.firstWordRow[i]
        })

        this.rows[2].forEach((el, i) => {
            el.textContent = language.SecondWordRow[i]
        })

        this.rows[3].forEach((el, i) => {
            el.textContent = language.ThirdWordRow[i]
        })
    }
}