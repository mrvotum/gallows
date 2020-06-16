import lettersArr from './lettersArr';
import CreatGallow from './creatGallow';

export default class GameWindow {
  constructor(word) {
    this.parent = document.querySelector('[data-id=content]');
    this.word = word;
    this.errorsCounter = 0;
  }

  create() {
    this.createGameWindow();
    this.createLetters();
    this.addListener();
    this.createHiddenWord();
    new CreatGallow().create();
  }

  addListener() {
    this.lettersHolder.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.className === 'letter' && event.target.className !== 'checked') {
        const clickedLetter = document.querySelector(`[letterid=${event.target.textContent}]`);
        clickedLetter.classList.add('checked');
        this.checking(event.target.textContent);
      }
    });
  }

  createLetters() {
    this.lettersHolder = document.querySelector('[data-id=letters__holder]');
    for (let i = 0; i < lettersArr.length; i += 1) {
      const spanEl = document.createElement('span');
      spanEl.className = 'letter';
      spanEl.setAttribute('letterId', lettersArr[i]);
      spanEl.textContent = lettersArr[i];
      this.lettersHolder.appendChild(spanEl);
    }
  }

  createGameWindow() {
    const divElHeader = document.createElement('div');
    divElHeader.className = 'widget__header';
    divElHeader.innerHTML = `
          <div class="gallow__holder" data-id="gallow__holder"></div>
          <div class="letters__holder" data-id="letters__holder"></div>`;

    this.parent.appendChild(divElHeader);

    const divElFooter = document.createElement('div');
    divElFooter.className = 'widget__footer';
    divElFooter.innerHTML = '<span class="hiddenWord__holder" data-id="hiddenWord__holder"></span>';

    this.parent.appendChild(divElFooter);
  }

  checking(checkingLetter) {
    let isIt = false;
    for (let i = 0; i < this.word.length; i += 1) {
      if (checkingLetter === this.word[i]) {
        this.showHiddenWord(checkingLetter, i);
        isIt = true;
      }
    }
    if (!isIt) {
      this.errorsCounter += 1;
      new CreatGallow().draw(this.errorsCounter);
    }
  }

  createHiddenWord() {
    this.hiddenWordHolder = document.querySelector('[data-id=hiddenWord__holder]');
    for (let i = 0; i < this.word.length; i += 1) {
      const spanEl = document.createElement('span');
      spanEl.className = 'letter_known';
      spanEl.textContent = '*';
      this.hiddenWordHolder.appendChild(spanEl);
    }
  }

  showHiddenWord(showLetter, showLetterNumber) {
    this.hiddenWordHolder.children[showLetterNumber].textContent = showLetter;
  }
}
