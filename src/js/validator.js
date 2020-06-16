export default class GameWindow {
  constructor(wordHolder, parent) {
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
    divElHeader.className = 'rulesWindow';
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
}
