// eslint-disable-next-line import/no-cycle
import Widget from './widget';

export default class AdditionalFunctions {
  constructor(wordHolder, parent) {
    this.letters__holder = document.querySelector('[data-id=letters__holder]');
    this.wordHolder = wordHolder;
    this.parent = parent;
  }

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

  // eslint-disable-next-line class-methods-use-this
  createFinishWindow(condition, word, attemptsCount, level, showedCounter) {
    this.attemptsCount = attemptsCount;
    this.word = word;
    this.level = level;
    this.showedCounter = showedCounter;

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
      <span class="statisticInfo">Потребовалось попыток: ${this.attemptsCount}</span>
      <span class="statisticInfo">Уровень сложности: ${this.level}</span>
      <span class="submit_btn" data-id="tryAgain">Ещё раз</span>`;
    } else {
      divElStatistic.classList = 'statisticWindow lose';
      divElStatistic.innerHTML = `
      <h3 class="tittle">Проигрыш</h3>
      <span class="statisticInfo">Слово "${this.word}"</span>
      <span class="statisticInfo">Угаданно букв: "${this.showedCounter}"</span>
      <span class="statisticInfo">Осталось: "${this.word.length - this.showedCounter}"</span>
      <span class="statisticInfo">Всего попыток: ${this.attemptsCount}</span>
      <span class="statisticInfo">Уровень сложности: ${this.level}</span>
      <span class="submit_btn" data-id="tryAgain">Ещё раз</span>`;
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

      const widget = new Widget();
      widget.create();
    });
  }
}
