import {
  lettersArr, wordsArr,
} from './lettersArr';
import CreatGallow from './creatGallow';

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
      this.level = document.querySelector('input[name=level]:checked').value;

      const word = document.querySelector('[data-id=wordInput]');
      this.letters__holder = document.querySelector('[data-id=letters__holder]');

      if (this.validateTheWord(word)) {
        this.createGameWindowFunc(word.value.toLowerCase());
        this.interTheWordWIndow.remove();
      }
    });

    this.randomBtn = document.querySelector('[data-id=random_btn]');

    this.randomBtn.addEventListener('mouseover', () => {
      const spanEl = document.createElement('span');
      spanEl.classList = 'prompt';
      spanEl.setAttribute('data-id', 'prompt');
      spanEl.textContent = 'Выбор случайного слова';
      this.randomBtn.appendChild(spanEl);
      this.prompt = document.querySelector('[data-id=prompt]');

      this.prompt.classList.add('prompt-animate');
    });

    this.randomBtn.addEventListener('mouseout', () => {
      this.prompt.remove();
    });

    this.randomBtn.addEventListener('click', () => {
      this.level = document.querySelector('input[name=level]:checked').value;

      this.letters__holder = document.querySelector('[data-id=letters__holder]');

      this.createGameWindowFunc(wordsArr[this.randomWord()]);
      this.interTheWordWIndow.remove();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  randomWord() {
    return Math.floor(Math.random() * Math.floor(wordsArr.length - 1));
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
        <input class="wordInput" data-id="wordInput" type="text" placeholder="Введите слово" pattern="[А-Яа-яЁё]+" autofocus required>
        <button class="submit_btn" data-id="submit_btn" type="submit">Принять</button>
        <span class="random_btn" data-id="random_btn">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 477.88 477.88" style="enable-background:new 0 0 477.88 477.88;" xml:space="preserve">
            <path d="M472.897,124.269c-0.01-0.01-0.02-0.02-0.03-0.031l-0.017,0.017l-68.267-68.267c-6.78-6.548-17.584-6.36-24.132,0.42
              c-6.388,6.614-6.388,17.099,0,23.713l39.151,39.151h-95.334c-65.948,0.075-119.391,53.518-119.467,119.467
              c-0.056,47.105-38.228,85.277-85.333,85.333h-102.4C7.641,324.072,0,331.713,0,341.139s7.641,17.067,17.067,17.067h102.4
              c65.948-0.075,119.391-53.518,119.467-119.467c0.056-47.105,38.228-85.277,85.333-85.333h95.334l-39.134,39.134
              c-6.78,6.548-6.968,17.353-0.419,24.132c6.548,6.78,17.353,6.968,24.132,0.419c0.142-0.137,0.282-0.277,0.419-0.419l68.267-68.267
              C479.54,141.748,479.553,130.942,472.897,124.269z
              M472.897,329.069c-0.01-0.01-0.02-0.02-0.03-0.03l-0.017,0.017l-68.267-68.267c-6.78-6.548-17.584-6.36-24.132,0.42
              c-6.388,6.614-6.388,17.099,0,23.712l39.151,39.151h-95.334c-20.996,0.015-41.258-7.721-56.9-21.726
              c-7.081-6.222-17.864-5.525-24.086,1.555c-6.14,6.988-5.553,17.605,1.319,23.874c21.898,19.614,50.269,30.451,79.667,30.43h95.334
              l-39.134,39.134c-6.78,6.548-6.968,17.352-0.42,24.132c6.548,6.78,17.352,6.968,24.132,0.42c0.142-0.138,0.282-0.277,0.42-0.42
              l68.267-68.267C479.54,346.548,479.553,335.742,472.897,329.069z
              M199.134,149.702c-21.898-19.614-50.269-30.451-79.667-30.43h-102.4C7.641,119.272,0,126.913,0,136.339
              c0,9.426,7.641,17.067,17.067,17.067h102.4c20.996-0.015,41.258,7.721,56.9,21.726c7.081,6.222,17.864,5.525,24.086-1.555
              C206.593,166.588,206.006,155.971,199.134,149.702z"/>
          </svg>     
        </span>
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
    this.wordHolder = document.querySelector('[data-id=wordInput]');
  }

  // Additional function
  validateTheWord() {
    if (!this.wordHolder.checkValidity()) {
      this.rulesWindow();
      throw TypeError('Проблемы с символами');
    } else {
      return true;
    }
  }

  rulesWindow() {
    const divElHeader = document.createElement('div');
    divElHeader.classList = 'rulesWindow infoWindow-animate';
    divElHeader.innerHTML = `<span>
      <ul>
        <li>Слово должно быть одно;</li>
        <li>без спец символов;</li>
        <li>только русские буквы;</li>
        <li>никаких цифр;</li>
        <li>только имя существительное</li>
      </ul>
    </span>`;

    this.parent.appendChild(divElHeader);

    setTimeout(() => {
      divElHeader.remove();
    }, 2500);
  }

  createFinishWindow(condition, attemptsCount, showedCounter) {
    const lockBlock = document.createElement('div');
    lockBlock.className = 'lockBlock';
    this.letters__holder.appendChild(lockBlock);

    const divElStatistic = document.createElement('div');
    divElStatistic.setAttribute('data-id', 'statisticWindow');

    if (condition) {
      divElStatistic.classList = 'statisticWindow win';
      divElStatistic.innerHTML = `
      <h3 class="tittle">Победа</h3>
      <span class="statisticInfo">Слово "${this.word}"</span>
      <span class="statisticInfo">Потребовалось попыток: ${attemptsCount}</span>
      <span class="statisticInfo">Уровень сложности: ${this.level}</span>
      <span class="submit_btn try_btn" data-id="tryAgain">Ещё раз</span>`;
    } else {
      divElStatistic.classList = 'statisticWindow lose';
      divElStatistic.innerHTML = `
      <h3 class="tittle">Проигрыш</h3>
      <span class="statisticInfo">Слово "${this.word}"</span>
      <span class="statisticInfo">Угаданно букв: "${showedCounter}"</span>
      <span class="statisticInfo">Осталось: "${this.word.length - showedCounter}"</span>
      <span class="statisticInfo">Всего попыток: ${attemptsCount}</span>
      <span class="statisticInfo">Уровень сложности: ${this.level}</span>
      <span class="submit_btn try_btn" data-id="tryAgain">Ещё раз</span>`;
    }

    this.parent.appendChild(divElStatistic);
    this.createListener();
  }

  createListener() {
    const widgetHeader = document.querySelector('[data-id=widget__header]');
    const widgetFooter = document.querySelector('[data-id=widget__footer]');
    const statisticWindow = document.querySelector('[data-id=statisticWindow]');
    this.tryAgainBtn = document.querySelector('[data-id=tryAgain]');

    this.tryAgainBtn.addEventListener('click', (event) => {
      event.preventDefault();
      widgetHeader.remove();
      widgetFooter.remove();
      statisticWindow.remove();

      this.create();
    });
  }
  // Additional function

  // GameWindow
  createGameWindowFunc(word) {
    this.word = word;
    this.errorsCounter = 0;
    this.showedCounter = 0;
    this.clickedLetters = 0;

    this.createGameWindow();
    this.createLetters();
    this.addListenerGameWindow();
    this.createHiddenWord();
    this.createCanvas();
  }

  addListenerGameWindow() {
    this.lettersHolder.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.className === 'letter' && event.target.className !== 'checked') {
        this.clickedLetters += 1;
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
    divElHeader.setAttribute('data-id', 'widget__header');
    divElHeader.innerHTML = `
          <div class="gallow__holder" data-id="gallow__holder"></div>
          <div class="letters__holder" data-id="letters__holder"></div>`;

    this.parent.appendChild(divElHeader);

    const divElFooter = document.createElement('div');
    divElFooter.className = 'widget__footer';
    divElFooter.setAttribute('data-id', 'widget__footer');
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
      const gallowGreater = new CreatGallow(this.level);
      gallowGreater.levelInstructor(this.errorsCounter);

      if (gallowGreater.returnGameStatus()) {
        setTimeout(() => {
          console.log('lose');
          this.createFinishWindow(false, this.clickedLetters, this.showedCounter);
        }, 1500);
      }
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
    this.showedCounter += 1;
    if (this.showedCounter === this.word.length) {
      console.log('win');
      this.createFinishWindow(true, this.clickedLetters, this.showedCounter);
    }
  }
  // GameWindow

  // CreatGallow
  createCanvas() {
    this.gallowHolder = document.querySelector('[data-id=gallow__holder]');

    const canvasEl = document.createElement('canvas');
    canvasEl.id = 'gallow';
    canvasEl.setAttribute('width', this.gallowHolder.offsetWidth);
    canvasEl.setAttribute('height', this.gallowHolder.offsetWidth);
    canvasEl.innerHTML = '<span>Canvas не поддерживается</span>';

    this.gallowHolder.appendChild(canvasEl);
    this.letters__holder = document.querySelector('[data-id=letters__holder]');
  }
  // CreatGallow
}
