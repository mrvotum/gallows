draw_all() {
        const canvas = document.getElementById('gallow');
        if (canvas.getContext){
          this.createCoordinates(this.gallowHolder.offsetWidth);
    
          const ctx = canvas.getContext('2d');
          
          // Земля
          ctx.beginPath();
          ctx.moveTo(0,this.coordinatessArr[100]);
          ctx.lineTo(this.coordinatessArr[100],this.coordinatessArr[100]);
          ctx.stroke();
          
          // Основа
          ctx.beginPath();
          ctx.moveTo(this.coordinatessArr[10],this.coordinatessArr[100]);
          ctx.lineTo(this.coordinatessArr[10],0);
          ctx.lineTo(this.coordinatessArr[60],0);
          ctx.lineTo(this.coordinatessArr[60],this.coordinatessArr[25]);
          ctx.stroke();
          
          // Перекладина
          ctx.beginPath();
          ctx.moveTo(this.coordinatessArr[10],this.coordinatessArr[20]);
          ctx.lineTo(this.coordinatessArr[30],0);
          ctx.stroke();
          
          // Петля
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60],this.coordinatessArr[30],this.coordinatessArr[5],0,Math.PI*2,true);
          ctx.stroke();
          
          // Человек
          // Голова
          ctx.beginPath();
          ctx.arc(this.coordinatessArr[60],this.coordinatessArr[31],this.coordinatessArr[4],0,Math.PI*2,true); // Внешняя окружность
          // Туловище
          ctx.moveTo(this.coordinatessArr[60],this.coordinatessArr[35]);
          ctx.lineTo(this.coordinatessArr[60],this.coordinatessArr[60]);
          // Руки
          ctx.moveTo(this.coordinatessArr[60],this.coordinatessArr[35]);
          ctx.lineTo(this.coordinatessArr[70],this.coordinatessArr[55]);
          ctx.moveTo(this.coordinatessArr[60],this.coordinatessArr[35]);
          ctx.lineTo(this.coordinatessArr[50],this.coordinatessArr[55]);
          // Ноги
          ctx.moveTo(this.coordinatessArr[60],this.coordinatessArr[60]);
          ctx.lineTo(this.coordinatessArr[55],this.coordinatessArr[85]);
          ctx.moveTo(this.coordinatessArr[60],this.coordinatessArr[60]);
          ctx.lineTo(this.coordinatessArr[65],this.coordinatessArr[85]);
          
          ctx.stroke();
          // Человек
          
          // Тумба
          ctx.beginPath();
          ctx.moveTo(this.coordinatessArr[45],this.coordinatessArr[100]);
          ctx.lineTo(this.coordinatessArr[50],this.coordinatessArr[90]);
          ctx.lineTo(this.coordinatessArr[70],this.coordinatessArr[90]);
          ctx.lineTo(this.coordinatessArr[75],this.coordinatessArr[100]);
          ctx.stroke();
        }