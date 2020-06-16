import GameWindow from './gameWindow';

export default class Widget {
  constructor() {
    this.parent = document.querySelector('[data-id=content]');
    this.interTheWordWIndow = document.querySelector('[data-id=interTheWord__window]');
    this.submit_btn = document.querySelector('[data-id=submit_btn]');
  }

  create() {
    this.addListener();  
  }

  addListener() {
    this.submit_btn.addEventListener('click', () => {
      const word = document.querySelector('[data-id=wordInput]').value;
      this.interTheWordWIndow.remove();
      new GameWindow(word.toLowerCase()).create();
    });
  }
}
