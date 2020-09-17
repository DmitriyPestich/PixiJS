

window.onload = function () {

    let app;
    let width = 800, height = 500; // получаем высоту экрана
    let colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba]; //массив цветов
    let gravity = 4;
    let persec = 500;
    let AreaContainer, interval, interval2, positionX, positionY;
    let Figures = [], lengthCircle = [], lengthRectangles = [], lengthEllipses = [],
        lengthTriangles = [], lengthFiveSides = [], lengthSixSides = [], lengthStar = [];


    let DataCircle = {
        radius: 40,
        AreaCircle: function () {
            let AreaCircle = Math.floor(Math.PI*(this.radius * this.radius));
            return AreaCircle;
        },
        drawCircle: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let circle = new PIXI.Graphics(); //создаем новый графический элемент
            circle.lineStyle(0); //начинаем рисовать
            circle.beginFill(colors[rand()], 1); //задаем рандомный цвет
            circle.drawCircle(0, 0, this.radius); //рисуем кружок, ведь он наш дружок
            circle.endFill(); //закончили отрисовку
            circle.x = positionX;
            circle.y = positionY;
            circle.interactive = true; //делаем круг интерактивным
            circle.buttonMode = true; //меняем курсор при наведении
            circle.live = true; //указываем что наш шарик жив и не пал жертвой выстрела
            circle.num = 1;
            Figures.push(circle);
            app.stage.addChild(circle); //выводим круг на холсте
            circle.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                circle.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }
    let DataRectangle = {
        sidelength: 64,
        AreaRectangle: function () {
            let AreaRectangle = this.sidelength * this.sidelength;
            return AreaRectangle;
        },
        drawRectangle: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let rectangle = new PIXI.Graphics(); //создаем новый графический элемент
            rectangle.lineStyle(0);
            rectangle.beginFill(colors[rand()], 1); //задаем рандомный цвет
            rectangle.drawRect(0, 0, this.sidelength, this.sidelength); //рисуем кружок, ведь он наш дружок
            rectangle.endFill(); //закончили отрисовку
            rectangle.x = positionX;
            rectangle.y = positionY;
            rectangle.interactive = true; //делаем круг интерактивным
            rectangle.buttonMode = true; //меняем курсор при наведении
            rectangle.live = true;
            rectangle.num = 2; //даем нашему кругу порядковый номер
            Figures.push(rectangle);
            app.stage.addChild(rectangle); //выводим круг на холсте
            rectangle.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                rectangle.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }
    let DataEllipse = {
        lengthX: 30,
        lengthY: 50,
        AreaEllipse: function () {
            let AreaEllipse = Math.floor(Math.PI * ((this.lengthX) * (this.lengthY)));
            return AreaEllipse;
        },
        drawEllipse: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -30;
            let ellipse = new PIXI.Graphics(); //создаем новый графический элемент
            ellipse.lineStyle(0); //начинаем рисовать
            ellipse.beginFill(colors[rand()], 1); //задаем рандомный цвет
            ellipse.drawEllipse(0, 0, this.lengthY, this.lengthX);
            ellipse.endFill(); //закончили отрисовку
            ellipse.x = positionX;
            ellipse.y = positionY;
            ellipse.interactive = true; //делаем круг интерактивным
            ellipse.buttonMode = true; //меняем курсор при наведении
            ellipse.live = true; //указываем что наш шарик жив и не пал жертвой выстрела
            ellipse.num = 3; //даем нашему кругу порядковый номер
            Figures.push(ellipse);
            app.stage.addChild(ellipse); //выводим круг на холсте
            ellipse.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                ellipse.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }
    let DataTriangle = {
        x1: -40,y1: 60,
        x2: -40,y2: -10,
        x3: 50, y3: -10,
        AreaTriangle: function () {
            let x = [this.x1,this.x2,this.x3];
            let y = [this.y1,this.y2,this.y3];
            let AreaTriangle = Area(x,y);
            return AreaTriangle;
        },
        drawTriangle: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let triangle = new PIXI.Graphics(); //создаем новый графический элемент
            triangle.lineStyle(0);
            triangle.beginFill(colors[rand()], 1);
            triangle.drawPolygon(
                this.x1,this.y1,
                this.x2,this.y2,
                this.x3,this.y3
            );
            triangle.closePath();
            triangle.endFill();
            triangle.x = positionX;
            triangle.y = positionY;
            triangle.interactive = true; //делаем круг интерактивным
            triangle.buttonMode = true; //меняем курсор при наведении
            triangle.live = true; //указываем что наш шарик жив и не пал жертвой выстрела
            triangle.num = 4; //даем нашему кругу порядковый номер
            Figures.push(triangle);
            app.stage.addChild(triangle); //выводим круг на холсте
            triangle.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                triangle.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }
    let DataFiveSides = {
        x1: 0, y1: 40,
        x2: -30, y2: 20,
        x3: -30, y3: -20,
        x4: 30, y4: -20,
        x5: 30, y5: 20,
        AreaFiveSide: function () {
            let x = [this.x1,this.x2,this.x3,this.x4,this.x5];
            let y = [this.y1,this.y2,this.y3,this.y4,this.y5];
            let AreaFiveSide = Area(x,y);
            return AreaFiveSide;
        },
        drawFiveSides: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let fivesides = new PIXI.Graphics(); //создаем новый графический элемент
            fivesides.lineStyle(0);
            fivesides.beginFill(colors[rand()], 1);
            fivesides.drawPolygon(
                this.x1,this.y1,
                this.x2,this.y2,
                this.x3,this.y3,
                this.x4,this.y4,
                this.x5,this.y5
            );
            fivesides.closePath();
            fivesides.endFill();
            fivesides.x = positionX;
            fivesides.y = positionY;
            fivesides.interactive = true; //делаем круг интерактивным
            fivesides.buttonMode = true; //меняем курсор при наведении
            fivesides.live = true; //указываем что наш шарик жив и не пал жертвой выстрела
            fivesides.num = 5; //даем нашему кругу порядковый номер
            Figures.push(fivesides);
            app.stage.addChild(fivesides); //выводим круг на холсте
            fivesides.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                fivesides.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }
    let DataSixSides = {
        x1: 0,   y1: 40,
        x2: -30, y2: 20,
        x3: -30, y3: -20,
        x4: 0,   y4: -40,
        x5: 30,  y5: -20,
        x6: 30,  y6: 20,
        AreaSixSide: function () {
            let x = [this.x1,this.x2,this.x3,this.x4,this.x5,this.x6];
            let y = [this.y1,this.y2,this.y3,this.y4,this.y5,this.y6];
            let AreaSixSide = Area(x,y);
            return AreaSixSide;
        },
        drawSixSides: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let sixsides = new PIXI.Graphics(); //создаем новый графический элемент
            sixsides.lineStyle(0);
            sixsides.beginFill(colors[rand()], 1);
            sixsides.drawPolygon(
                this.x1,this.y1,
                this.x2,this.y2,
                this.x3,this.y3,
                this.x4,this.y4,
                this.x5,this.y5,
                this.x6,this.y6
            );
            sixsides.closePath();
            sixsides.endFill();
            sixsides.x = positionX;
            sixsides.y = positionY;
            sixsides.interactive = true; //делаем круг интерактивным
            sixsides.buttonMode = true; //меняем курсор при наведении
            sixsides.live = true; //указываем что наш шарик жив и не пал жертвой выстрела
            sixsides.num = 6; //даем нашему кругу порядковый номер
            Figures.push(sixsides);
            app.stage.addChild(sixsides); //выводим круг на холсте
            sixsides.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                sixsides.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }
    let DataStar = {
        x1: -50, y1: 0,
        x2: -15, y2: 15,
        x3: 0, y3: 50,
        x4: 15, y4: 15,
        x5: 50, y5: 0,
        x6: 15, y6: -15,
        x7: 0, y7: -50,
        x8: -15, y8: -15,
        AreaStar: function () {
            let x = [this.x1,this.x2,this.x3,this.x4,this.x5,this.x6,this.x7,this.x8];
            let y = [this.y1,this.y2,this.y3,this.y4,this.y5,this.y6,this.y7,this.y8];
            let AreaStar = Area(x,y);
            return AreaStar;
        },
        drawStar: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let star = new PIXI.Graphics(); //создаем новый графический элемент
            star.lineStyle(0);
            star.beginFill(colors[rand()], 1);
            star.drawPolygon(
                this.x1,this.y1,
                this.x2,this.y2,
                this.x3,this.y3,
                this.x4,this.y4,
                this.x5,this.y5,
                this.x6,this.y6,
                this.x7,this.y7,
                this.x8,this.y8
            );
            star.closePath();
            star.endFill();
            star.x = positionX;
            star.y = positionY;
            star.interactive = true; //делаем круг интерактивным
            star.buttonMode = true; //меняем курсор при наведении
            star.live = true; //указываем что наш шарик жив и не пал жертвой выстрела
            star.num = 7; //даем нашему кругу порядковый номер
            Figures.push(star);
            app.stage.addChild(star); //выводим круг на холсте
            star.on('pointerdown', controller.clearFigureclick); //добавляем возможность при клике на фигуру удалить её
            app.ticker.add(function () { //постоянное обновление холста
                star.position.y += gravity; //заставляем гравитацию работать
            });
        }
    }


    let model = {
        createCanvas: function () {
            const canvas = document.getElementById('canvas');
            app = new PIXI.Application({width, height}); //создае холст
            canvas.appendChild(app.view);
        },
        container: function (){
            let container = new PIXI.Graphics();
            AreaContainer = width * height;
            container.lineStyle(0); //начинаем рисовать
            container.beginFill(); //задаем рандомный цвет
            container.drawRect(0, 0, width, height);//рисуем кружок, ведь он наш дружок
            container.endFill(); //закончили отрисовку
            container.interactive = true; //делаем круг интерактивным
            container.buttonMode = true;
            app.stage.addChild(container);
            container.on('pointerdown', controller.spawnfigure);
        },
        setinterval: function () {
            clearInterval(interval);
            interval = setInterval(view.createFigure, persec);
            interval2 = setInterval(model.clearFigure, persec / 3);
        },
        clearFigure: function () {
            Figures = Figures.filter(function (item) {
                return item.position.y < height;
            });
            model.sumLength();
            model.sumArea();
        },
        secplus: function () {
            persec += 500;
            model.setinterval();
            view.infopersec(persec);
        },
        secminus: function () {
            if(persec == 500){
                persec = 500;
            }else{
                persec -= 500;
            }
            model.setinterval();
            view.infopersec(persec);
        },
        garavplus: function () {
            gravity += 1;
            view.infograv(gravity);
        },
        gravminus: function () {
            if(gravity == 1){
                gravity = 1;
            }else{
                gravity -= 1;
            }
            view.infograv(gravity);
        },
        sumLength: function () {
            let LengthFigures = Figures.length;
            view.currentNumb(LengthFigures);

        },
        sumArea: function () {
            lengthCircle = Figures.filter(function (item) {
                return item.num == 1;
            });
            lengthRectangles = Figures.filter(function (item) {
                return item.num == 2;
            });
            lengthEllipses = Figures.filter(function (item) {
                return item.num == 3;
            });
            lengthTriangles = Figures.filter(function (item) {
                return item.num == 4;
            });
            lengthFiveSides = Figures.filter(function (item) {
                return item.num == 5;
            });
            lengthSixSides = Figures.filter(function (item) {
                return item.num == 6;
            });
            lengthStar = Figures.filter(function (item) {
                return item.num == 7;
            });

            let AreaCircles = DataCircle.AreaCircle() * lengthCircle.length;
            let AreaRectangles = DataRectangle.AreaRectangle() * lengthRectangles.length;
            let AreaEllipses = DataEllipse.AreaEllipse() * lengthEllipses.length;
            let AreaTriangles = DataTriangle.AreaTriangle() * lengthTriangles.length;
            let AreaFiveSides = DataFiveSides.AreaFiveSide() * lengthFiveSides.length;
            let AreaSixSides = DataSixSides.AreaSixSide() * lengthSixSides.length;
            let AreaStar = DataStar.AreaStar() * lengthStar.length;

            let AreaFigures = AreaCircles + AreaRectangles + AreaEllipses + AreaTriangles + AreaFiveSides + AreaSixSides + AreaStar;

            let Area = ((AreaFigures / AreaContainer)*100).toFixed(2);

            view.infoArea(Area);
        }
    };

    let view = {

        createFigure: function (x, y) {
            let rand = intrand();

            if (rand == 0){
                DataCircle.drawCircle(x, y);
            }else if (rand == 1){
                DataRectangle.drawRectangle(x, y);
            }else if (rand == 2){
                DataEllipse.drawEllipse(x, y);
            }else if (rand == 3){
                DataTriangle.drawTriangle(x, y);
            }else if (rand == 4){
                DataFiveSides.drawFiveSides(x, y);
            }else if (rand == 5){
                DataSixSides.drawSixSides(x, y);
            }else if (rand == 6){
                DataStar.drawStar(x, y);
            }
        },
        infopersec: function (data) {
            document.querySelector('.info_per_sec').innerHTML = data / 1000;
        },
        infograv: function (data) {
            document.querySelector('.info_grav').innerHTML = data;
        },
        currentNumb: function (data){
            document.querySelector('.current_number').innerHTML = data;
        },
        infoArea: function (data) {
            document.querySelector('.area').innerHTML = data;
        },
        startGame: function () {
            model.createCanvas();
            model.container();
            controller.clp();
            controller.clm();
            controller.clpg();
            controller.clmg();
            model.setinterval();
        }
    };


    let controller = {
        spawnfigure: function (event) {
            const {x, y} = event.data.global;
            view.createFigure(x, y);
        },
        clp: function (){
            let plussec = document.querySelector('.plus_per_sec');
            plussec.addEventListener("click", model.secplus);
        },
        clm: function (){
            let minussec = document.querySelector('.minus_per_sec');
            minussec.addEventListener("click", model.secminus);
        },
        clpg: function () {
            let plusgrav = document.querySelector('.plus_grav');
            plusgrav.addEventListener("click", model.garavplus);
        },
        clmg: function () {
            let minusgrav = document.querySelector('.minus_grav');
            minusgrav.addEventListener("click", model.gravminus);
        },
        clearFigureclick: function () {
            let changcolor;
            let id = this.num;
            this.clear();
            this.live = false;
            Figures = Figures.filter(function (item) {
                return item.live == true;
            });
            changcolor = Figures.filter(function (item) {
                return item.num == id;
            });
            changcolor.map(function (item) {
                return item.tint = (colors[rand()]);
            });
        }
    };


    function intrand() {
        return Math.floor(Math.random() * 7);
    }
    function inAreaX() {
        return Math.random() * (750 - 50) + 50;
    }
    function rand() {
        return Math.floor(Math.random() * colors.length);

    }

    function Area(a,b) {
        a[a.length] = a[0];
        b[b.length] = b[0];
        let A = new Array();
        let B = new Array();
        let C = new Array();
        let t = new Array();
        let S = new Array();
        let Stotal = 0.0;
        for (let i=0; i < a.length-1; i++){
            A[i] = Math.sqrt(a[i]*a[i]+b[i]*b[i]);
            B[i] = Math.sqrt(a[i+1]*a[i+1]+b[i+1]*b[i+1]);
            C[i] = Math.sqrt(Math.pow(a[i+1]-a[i],2) + Math.pow(b[i+1]-b[i],2));
            t[i] = (A[i] + B[i] + C[i]) / 2;
            S[i] = Math.sqrt(t[i] * (t[i] - A[i]) * (t[i] - B[i]) * (t[i] - C[i]));
            Stotal += S[i];
        }
        return Stotal; //площадь фигуры
    }


    view.startGame();

}

