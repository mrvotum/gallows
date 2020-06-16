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
    const divElHeader = document.createElement('div');
    divElHeader.className = 'interTheWord';
    divElHeader.setAttribute('data-id', 'interTheWord__window');
    divElHeader.innerHTML = `
      <input class="wordInput" data-id="wordInput" type="text" placeholder="Введите существительное" pattern="[А-Яа-яЁё]+" required>
      <span class="submit_btn" data-id="submit_btn">Принять</span>`;

    this.parent.appendChild(divElHeader);
  }
}
