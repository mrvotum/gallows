import GameWindow from './gameWindow';
import Validator from './validator';

export default class Widget {
  constructor() {
    this.parent = document.querySelector('[data-id=content]');
  }

  create() {
    this.wordInputWindow();
    this.addListener();

    this.interTheWordWIndow = document.querySelector('[data-id=interTheWord__window]');
  }

  addListener() {
    this.submit_btn = document.querySelector('[data-id=submit_btn]');
    this.submit_btn.addEventListener('click', () => {
      const word = document.querySelector('[data-id=wordInput]');
      const hiddenWord = new Validator(word, this.parent);
      if (hiddenWord.validateTheWord()) {
        new GameWindow(word.value.toLowerCase()).create();
        this.interTheWordWIndow.remove();
      }
    });
  }

  wordInputWindow() {
    const formEl = document.createElement('form');
    formEl.className = 'interTheWord';
    formEl.setAttribute('data-id', 'interTheWord__window');
    formEl.innerHTML = `
    <div class="interTheWord_content__holder">
      <div class="interTheWord_title">
        <h3 class="tittle">Придумайте слово:</h3>
      </div>
      <div class="interTheWord_content">
        <input class="wordInput" data-id="wordInput" type="text" placeholder="Введите слово" pattern="[А-Яа-яЁё]+" required>
        <span class="submit_btn" data-id="submit_btn">Принять</span>
      </div>
        </div>
        <div class="interTheWord_content__holder">
      <div class="interTheWord_title">
        <h3 class="tittle">Уровень сложности:<h3>
      </div>
      <div class="interTheWord_content links_holder">
        <input class="radio_btn" type="radio" value="easy" name="level" id="easy">
        <input class="radio_btn" type="radio" value="normal" name="level" id="normal" checked>
        <input class="radio_btn" type="radio" value="hard" name="level" id="hard">
        <label class="radio_label" for="easy" id="easy_label">Лёгкий</label>
        <label class="radio_label" for="normal" id="normal_label">Средний</label>
        <label class="radio_label" for="hard" id="hard_label">Сложный</label>
      </div>
    </div>`;

    this.parent.appendChild(formEl);
  }
}
