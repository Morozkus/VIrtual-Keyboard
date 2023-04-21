'use strict'

export class KeyBoard {
    constructor() {
        this.structure = `
        <div class="develover-info">
        <ul class="developer-info__list">
            <li class="developer-info__item">Language: </li>
            <li class="developer-info__item">CapsLock: </li>
        </ul>
    </div>
        <div class="clav">
            <ul class="row num-rows">
                <li class="item dev esc">Esc</li>
                <li class="item">ё</li>
                <li class="item">1</li>
                <li class="item">2</li>
                <li class="item">3</li>
                <li class="item">4</li>
                <li class="item">5</li>
                <li class="item">6</li>
                <li class="item">7</li>
                <li class="item">8</li>
                <li class="item">9</li>
                <li class="item">0</li>
                <li class="item">-</li>
                <li class="item">=</li>
                <li class="item dev delete">del</li>
            </ul>
            <ul class="row first-word-rows">
                <li class="item dev tab">Tab</li>
                <li class="item">q</li>
                <li class="item item_game">w</li>
                <li class="item">e</li>
                <li class="item">r</li>
                <li class="item">t</li>
                <li class="item">y</li>
                <li class="item">u</li>
                <li class="item">i</li>
                <li class="item">o</li>
                <li class="item">p</li>
                <li class="item">[</li>
                <li class="item">]</li>
                <li class="item">\\</li>
            </ul>
            <ul class="row second-word-rows">
                <li class="item dev caps">CapsLock</li>
                <li class="item item_game">a</li>
                <li class="item item_game">s</li>
                <li class="item item_game">d</li>
                <li class="item">f</li>
                <li class="item">g</li>
                <li class="item">h</li>
                <li class="item">j</li>
                <li class="item">k</li>
                <li class="item">l</li>
                <li class="item">;</li>
                <li class="item">''</li>
                <li class="item dev enter">Enter</li>
            </ul>
            <ul class="row third-word-rows">
                <li class="item dev shift">Shift</li>
                <li class="item">z</li>
                <li class="item">x</li>
                <li class="item">c</li>
                <li class="item">v</li>
                <li class="item">b</li>
                <li class="item">n</li>
                <li class="item">m</li>
                <li class="item">,</li>
                <li class="item">.</li>
                <li class="item arrow arrowUp">up</li>
                <li class="item">/</li>
            </ul>
            <ul class="row bottom-rows">
                <li class="item dev ctrl">Ctrl</li>
                <li class="item dev win">Win</li>
                <li class="item dev alt">Alt</li>
                <li class="item dev space"></li>
                <li class="item dev alt">Alt</li>
                <li class="item dev ctrl">Ctrl</li>
                <li class="item arrow arrowLeft">left</li>
                <li class="item arrow arrowDown">down</li>
                <li class="item arrow arrowRight">right</li>
            </ul>
        </div>
        <textarea type="text" id="result" placeholder="System == windows | Shift + Alt = change language"></textarea>
        `
    }

    init() {
        document.body.innerHTML += this.structure
    }
}