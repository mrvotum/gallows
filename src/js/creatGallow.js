export default class CreatGallow {
  constructor(level) {
    this.gallowHolder = document.querySelector('[data-id=gallow__holder]');
    this.level = level;
    this.letters__holder = document.querySelector('[data-id=letters__holder]');
    this.stopGame = false;
  }

  levelInstructor(partCounter) {
    this.partCounter = partCounter;
    switch (this.level) {
      case 'easy':
        this.drawEasy();
        break;
      case 'normal':
        this.drawNormal();
        break;
      case 'hard':
        this.drawHard();
        break;
      default:
    }
  }

  drawEasy() {
    const canvas = document.getElementById('gallow');
    if (canvas.getContext) {
      this.createCoordinates(this.gallowHolder.offsetWidth);

      const ctx = canvas.getContext('2d');
      let points = [];
      switch (this.partCounter) {
        case 1:
          // Земля
          points = [
            { x: 0, y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[100], y: this.coordinatessArr[100] },
          ];
          this.animation(points, ctx);
          break;
        case 2:
          // Основа
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[10], y: this.coordinatessArr[0] },
          ];
          this.animation(points, ctx);
          break;
        case 3:
          // Основа 2
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[0 + 1] },
            { x: this.coordinatessArr[60 + 1], y: this.coordinatessArr[0 + 1] },
          ];
          this.animation(points, ctx);
          break;
        case 4:
          // Поперечная перекладина
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[20] },
            { x: this.coordinatessArr[30], y: 0 + 2 },
          ];
          this.animation(points, ctx);
          break;
        case 5:
          // Верёвка
          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[0 + 1] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[25] },
          ];
          this.animation(points, ctx);
          break;
        case 6:
          // Петля
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60], this.coordinatessArr[30 - 1], this.coordinatessArr[5],
            0, Math.PI * 2, true);
          ctx.stroke();
          break;
        case 7:
          // Тумба
          points = [
            { x: this.coordinatessArr[45], y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[50], y: this.coordinatessArr[90] },
            { x: this.coordinatessArr[70], y: this.coordinatessArr[90] },
            { x: this.coordinatessArr[75], y: this.coordinatessArr[100] + 2 },
          ];
          this.animation(points, ctx);
          break;
        // Человек
        case 8:
          // Голова
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60], this.coordinatessArr[30], this.coordinatessArr[4],
            0, Math.PI * 2, true); // Внешняя окружность
          ctx.stroke();
          break;
        case 9:
          // Туловище
          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[60] },
          ];
          this.animation(points, ctx);
          break;
        case 10:
          // Руки
          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
            { x: this.coordinatessArr[70], y: this.coordinatessArr[55] },
          ];
          this.animation(points, ctx);

          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
              { x: this.coordinatessArr[50], y: this.coordinatessArr[55] },
            ];
            this.animation(points, ctx);
          }, 400);
          break;
        case 11:
          // Ноги
          // eslint-disable-next-line no-case-declarations
          const lockBlock = document.createElement('div');
          lockBlock.className = 'lockBlock';
          this.letters__holder.appendChild(lockBlock);

          this.stopGame = true;

          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[60 - 1] },
            { x: this.coordinatessArr[65], y: this.coordinatessArr[85] },
          ];
          this.animation(points, ctx);

          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[60 - 1] },
              { x: this.coordinatessArr[55], y: this.coordinatessArr[85] },
            ];
            this.animation(points, ctx);
          }, 400);
          break;
        default:
          this.returnGameStatus();
      }
    }
  }

  drawNormal() {
    const canvas = document.getElementById('gallow');
    if (canvas.getContext) {
      this.createCoordinates(this.gallowHolder.offsetWidth);

      const ctx = canvas.getContext('2d');
      let points = [];
      switch (this.partCounter) {
        case 1:
          // Земля
          points = [
            { x: 0, y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[100], y: this.coordinatessArr[100] },
          ];
          this.animation(points, ctx);
          break;
        case 2:
          // Основа
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[10], y: this.coordinatessArr[0] },
          ];
          this.animation(points, ctx);
          break;
        case 3:
          // Основа 2
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[0 + 1] },
            { x: this.coordinatessArr[60 + 1], y: this.coordinatessArr[0 + 1] },
          ];
          this.animation(points, ctx);
          break;
        case 4:
          // Поперечная перекладина
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[20] },
            { x: this.coordinatessArr[30], y: 0 + 2 },
          ];
          this.animation(points, ctx);
          break;
        case 5:
          // Верёвка
          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[0 + 1] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[25] },
          ];
          this.animation(points, ctx);
          break;
        case 6:
          // Петля
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60], this.coordinatessArr[30 - 1], this.coordinatessArr[5],
            0, Math.PI * 2, true);
          ctx.stroke();
          break;
        case 7:
          // Тумба
          points = [
            { x: this.coordinatessArr[45], y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[50], y: this.coordinatessArr[90] },
            { x: this.coordinatessArr[70], y: this.coordinatessArr[90] },
            { x: this.coordinatessArr[75], y: this.coordinatessArr[100] + 2 },
          ];
          this.animation(points, ctx);
          break;
        case 8:
          // Человек
          // Голова
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60], this.coordinatessArr[30], this.coordinatessArr[4],
            0, Math.PI * 2, true); // Внешняя окружность
          ctx.stroke();
          // Туловище
          // eslint-disable-next-line no-case-declarations
          const lockBlock = document.createElement('div');
          lockBlock.className = 'lockBlock';
          this.letters__holder.appendChild(lockBlock);

          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[60] },
          ];
          this.animation(points, ctx);
          // Руки
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
              { x: this.coordinatessArr[70], y: this.coordinatessArr[55] },
            ];
            this.animation(points, ctx);
          }, 400);
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
              { x: this.coordinatessArr[50], y: this.coordinatessArr[55] },
            ];
            this.animation(points, ctx);
          }, 800);
          // Ноги
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[60 - 1] },
              { x: this.coordinatessArr[55], y: this.coordinatessArr[85] },
            ];
            this.animation(points, ctx);
          }, 1200);
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[60 - 1] },
              { x: this.coordinatessArr[65], y: this.coordinatessArr[85] },
            ];
            this.animation(points, ctx);
          }, 1600);
          // Человек
          this.stopGame = true;
          break;
        default:
          this.returnGameStatus();
      }
    }
  }

  drawHard() {
    const canvas = document.getElementById('gallow');
    if (canvas.getContext) {
      this.createCoordinates(this.gallowHolder.offsetWidth);

      const ctx = canvas.getContext('2d');
      let points = [];
      switch (this.partCounter) {
        case 1:
          // Земля
          points = [
            { x: 0, y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[100], y: this.coordinatessArr[100] },
          ];
          this.animation(points, ctx);
          break;
        case 2:
          // Основа
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[10], y: this.coordinatessArr[0] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[0] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[25] },
          ];
          this.animation(points, ctx);
          break;
        case 3:
          // Поперечная перекладина
          points = [
            { x: this.coordinatessArr[10], y: this.coordinatessArr[20] },
            { x: this.coordinatessArr[30], y: 0 - 3 },
          ];
          this.animation(points, ctx);
          break;
        case 4:
          // Петля
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60], this.coordinatessArr[30 - 1], this.coordinatessArr[5],
            0, Math.PI * 2, true);
          ctx.stroke();
          break;
        case 5:
          // Тумба
          points = [
            { x: this.coordinatessArr[45], y: this.coordinatessArr[100] },
            { x: this.coordinatessArr[50], y: this.coordinatessArr[90] },
            { x: this.coordinatessArr[70], y: this.coordinatessArr[90] },
            { x: this.coordinatessArr[75], y: this.coordinatessArr[100] + 2 },
          ];
          this.animation(points, ctx);
          break;
        case 6:
          // Человек
          // Голова
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60], this.coordinatessArr[30], this.coordinatessArr[4],
            0, Math.PI * 2, true); // Внешняя окружность
          ctx.stroke();
          // Туловище
          // eslint-disable-next-line no-case-declarations
          const lockBlock = document.createElement('div');
          lockBlock.className = 'lockBlock';
          this.letters__holder.appendChild(lockBlock);

          points = [
            { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
            { x: this.coordinatessArr[60], y: this.coordinatessArr[60] },
          ];
          this.animation(points, ctx);
          // Руки
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
              { x: this.coordinatessArr[70], y: this.coordinatessArr[55] },
            ];
            this.animation(points, ctx);
          }, 400);
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[35 - 1] },
              { x: this.coordinatessArr[50], y: this.coordinatessArr[55] },
            ];
            this.animation(points, ctx);
          }, 800);
          // Ноги
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[60 - 1] },
              { x: this.coordinatessArr[55], y: this.coordinatessArr[85] },
            ];
            this.animation(points, ctx);
          }, 1200);
          setTimeout(() => {
            points = [
              { x: this.coordinatessArr[60], y: this.coordinatessArr[60 - 1] },
              { x: this.coordinatessArr[65], y: this.coordinatessArr[85] },
            ];
            this.animation(points, ctx);
            return false;
          }, 1600);
          // Человек
          this.stopGame = true;
          break;
        default:
          this.returnGameStatus();
      }
    }
  }

  createCoordinates(usersWidth1) {
    const usersWidth = usersWidth1;
    this.coordinatessArr = [];

    for (let i = 0; i <= 100; i += 1) {
      this.coordinatessArr.push(i / 100 * usersWidth);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  animation(points, ctx) {
    function createCoords() {
      const coords = [];

      for (let i = 1; i < points.length; i += 1) {
        const
          p0 = points[i - 1];
        const p1 = points[i];
        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const steps = Math.max(Math.abs(dx), Math.abs(dy)) / 5;

        for (let j = 0; j < steps; j += 1) {
          coords.push({
            x: p0.x + dx * j / steps,
            y: p0.y + dy * j / steps,
          });
        }
      }

      return coords;
    }

    (function animate(coords, index) {
      if (index === coords.length) {
        return;
      }

      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(coords[index - 1].x, coords[index - 1].y);
      ctx.lineTo(coords[index].x, coords[index].y);
      ctx.stroke();

      requestAnimationFrame(animate.bind(null, coords, index + 1));
    }(createCoords(points), 1));
  }

  returnGameStatus() {
    return this.stopGame;
  }
}
