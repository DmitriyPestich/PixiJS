

window.onload = function () {

    let app;
    let width = 800, height = 500;
    let colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba];
    let gravity = 4;
    let sec = 500;
    let AreaContainer, interval, positionX, positionY;
    let Figures = [];

    /*====================================START FIGURES ==============================================*/
    let DataCircle = {
        radius: 40,
        AreaCircle: function () {
            return Math.floor(Math.PI*(this.radius * this.radius));
        },
        drawCircle: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let circle = new PIXI.Graphics();
            circle.lineStyle(0);
            circle.beginFill(colors[rand()], 1);
            circle.drawCircle(0, 0, this.radius);
            circle.endFill();
            circle.x = positionX;
            circle.y = positionY;
            circle.interactive = true;
            circle.buttonMode = true;
            circle.live = true;
            circle.num = 1;
            Figures.push(circle);
            app.stage.addChild(circle);
            circle.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                circle.position.y += gravity;
            });
        }
    }
    let DataRectangle = {
        sidelength: 64,
        AreaRectangle: function () {
            return this.sidelength * this.sidelength;
        },
        drawRectangle: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let rectangle = new PIXI.Graphics();
            rectangle.lineStyle(0);
            rectangle.beginFill(colors[rand()], 1);
            rectangle.drawRect(0, 0, this.sidelength, this.sidelength);
            rectangle.endFill();
            rectangle.x = positionX;
            rectangle.y = positionY;
            rectangle.interactive = true;
            rectangle.buttonMode = true;
            rectangle.live = true;
            rectangle.num = 2;
            Figures.push(rectangle);
            app.stage.addChild(rectangle);
            rectangle.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                rectangle.position.y += gravity;
            });
        }
    }
    let DataEllipse = {
        lengthX: 30,
        lengthY: 50,
        AreaEllipse: function () {
            return Math.floor(Math.PI * ((this.lengthX) * (this.lengthY)));
        },
        drawEllipse: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -30;
            let ellipse = new PIXI.Graphics();
            ellipse.lineStyle(0);
            ellipse.beginFill(colors[rand()], 1);
            ellipse.drawEllipse(0, 0, this.lengthY, this.lengthX);
            ellipse.endFill();
            ellipse.x = positionX;
            ellipse.y = positionY;
            ellipse.interactive = true;
            ellipse.buttonMode = true;
            ellipse.live = true;
            ellipse.num = 3;
            Figures.push(ellipse);
            app.stage.addChild(ellipse);
            ellipse.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                ellipse.position.y += gravity;
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
            return Area(x,y);

        },
        drawTriangle: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let triangle = new PIXI.Graphics();
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
            triangle.interactive = true;
            triangle.buttonMode = true;
            triangle.live = true;
            triangle.num = 4;
            Figures.push(triangle);
            app.stage.addChild(triangle);
            triangle.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                triangle.position.y += gravity;
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
            return Area(x,y);
        },
        drawFiveSides: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let fivesides = new PIXI.Graphics();
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
            fivesides.interactive = true;
            fivesides.buttonMode = true;
            fivesides.live = true;
            fivesides.num = 5;
            Figures.push(fivesides);
            app.stage.addChild(fivesides);
            fivesides.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                fivesides.position.y += gravity;
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
            return Area(x,y);
        },
        drawSixSides: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let sixsides = new PIXI.Graphics();
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
            sixsides.interactive = true;
            sixsides.buttonMode = true;
            sixsides.live = true;
            sixsides.num = 6;
            Figures.push(sixsides);
            app.stage.addChild(sixsides);
            sixsides.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                sixsides.position.y += gravity;
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
            return Area(x,y);
        },
        drawStar: function (x, y) {
            positionX = x || inAreaX();
            positionY = y || -50;
            let star = new PIXI.Graphics();
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
            star.interactive = true;
            star.buttonMode = true;
            star.live = true;
            star.num = 7;
            Figures.push(star);
            app.stage.addChild(star);
            star.on('pointerdown', controller.clearFigureclick);
            app.ticker.add(function () {
                star.position.y += gravity;
            });
        }
    }
    /*====================================FINISH FIGURES ==============================================*/

    /*====================================START MODEL==============================================*/
    let model = {
        createCanvas: function () {
            const canvas = document.getElementById('canvas');
            app = new PIXI.Application({width, height});
            canvas.appendChild(app.view);
        },
        container: function (){
            let container = new PIXI.Graphics();
            AreaContainer = width * height;
            container.lineStyle(0);
            container.beginFill(0x3C3C3C);
            container.drawRect(0, 0, width, height);
            container.endFill();
            container.interactive = true;
            container.buttonMode = true;
            app.stage.addChild(container);
            container.on('pointerdown', controller.spawnfigure);
        },
        setinterval: function () {
            clearInterval(interval);
            interval = setInterval(view.createFigure, sec);
            setInterval(model.clearFigure, sec / 3);
        },
        clearFigure: function () {
            Figures = Figures.filter(function (item) {
                return item.position.y < height;
            });
            model.sumLength();
            model.sumArea();
        },
        secplus: function () {
            sec += 500;
            model.setinterval();
            view.infopersec(sec);
        },
        secminus: function () {
            if(sec === 500){
                sec = 500;
            }else{
                sec -= 500;
            }
            model.setinterval();
            view.infopersec(sec);
        },
        garavplus: function () {
            gravity += 1;
            view.infograv(gravity);
        },
        gravminus: function () {
            if(gravity === 1){
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
            let lengthCircle = Figures.filter(function (item) {
                return item.num === 1;
            });
            let lengthRectangles = Figures.filter(function (item) {
                return item.num === 2;
            });
            let lengthEllipses = Figures.filter(function (item) {
                return item.num === 3;
            });
            let lengthTriangles = Figures.filter(function (item) {
                return item.num === 4;
            });
            let lengthFiveSides = Figures.filter(function (item) {
                return item.num === 5;
            });
            let lengthSixSides = Figures.filter(function (item) {
                return item.num === 6;
            });
            let lengthStar = Figures.filter(function (item) {
                return item.num === 7;
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
    /*====================================FINISH MODEL==============================================*/

    /*====================================START VIEW==============================================*/
    let view = {

        createFigure: function (x, y) {
            let rand = intrand();

            if (rand === 0){
                DataCircle.drawCircle(x, y);
            }else if (rand === 1){
                DataRectangle.drawRectangle(x, y);
            }else if (rand === 2){
                DataEllipse.drawEllipse(x, y);
            }else if (rand === 3){
                DataTriangle.drawTriangle(x, y);
            }else if (rand === 4){
                DataFiveSides.drawFiveSides(x, y);
            }else if (rand === 5){
                DataSixSides.drawSixSides(x, y);
            }else if (rand === 6){
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
    /*====================================FINISH VIEW==============================================*/

    /*====================================FINISH CONTROLLER==============================================*/
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
                return item.live === true;
            });
            changcolor = Figures.filter(function (item) {
                return item.num === id;
            });
            changcolor.map(function (item) {
                return item.tint = (colors[rand()]);
            });
        }
    };
    /*====================================FINISH CONTROLLER==============================================*/


    /*====================================ADDITIONAL FUNCTION==============================================*/
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
        let A = [];
        let B = [];
        let C = [];
        let t = [];
        let S = [];
        let Stotal = 0.0;
        for (let i=0; i < a.length-1; i++){
            A[i] = Math.sqrt(a[i]*a[i]+b[i]*b[i]);
            B[i] = Math.sqrt(a[i+1]*a[i+1]+b[i+1]*b[i+1]);
            C[i] = Math.sqrt(Math.pow(a[i+1]-a[i],2) + Math.pow(b[i+1]-b[i],2));
            t[i] = (A[i] + B[i] + C[i]) / 2;
            S[i] = Math.sqrt(t[i] * (t[i] - A[i]) * (t[i] - B[i]) * (t[i] - C[i]));
            Stotal += S[i];
        }
        return Stotal;
    }


    view.startGame();

}

