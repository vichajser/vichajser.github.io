'use strict'

//游戏资源
var _lang = {
        zh: {
            title: "你算老几",
            help_txt: "规则: 初始15秒,答对一题相应添加一秒作答时间,看你能做多少,鉴别你小学数学老师的真实身份的时候到了",
            score: "得分:",
            btn_pause: "暂停",
            btn_reTry: "重来",
            game_pause: "游戏暂停中",
            btn_resume: "继续",
            loading: "加载中...",
            share_txt1: "我怒砍",
            share_txt2: "分，击败了",
            share_txt3: "%的人",
            share_text4: ",不服来战！",
            desc: "看你能算多少。分享朋友圈,选择你身边那些被体育老师教过的数学的汉子"
        }
    },
    //游戏配置
    _config = {
        lang: 'zh',
        initTime: 15,
        addTime: 1,
        addScore: 5,
        sumMax: [1, 10, 20, 30, 50, 100, 500, 1000],
        multiMax: [1, 5 ,10, 15, 20, 25, 100],
        level: [5, 10, 20, 30, 50, 60, 70, 80, 90, 99]
    },

    //游戏数据
    shareData = {
        imgUrl: "",
        timeLineLink: "http://vichajser.github.io",
        tTitle: _lang[_config.lang].title,
        tContent: _lang[_config.lang].desc
    },

    mathFactory = function(){
        //
    };

    mathFactory.prototype.init = function(timer){
        var _this = this,
            timer = timer,
            num = parseInt(Math.random()*2) || 0;

        return _this.factory(num, timer);
    };

    mathFactory.prototype.randomNum = function(minNum,maxNum){
        return parseInt(minNum + Math.random() * (maxNum - minNum));
    };

    mathFactory.prototype.operator = function(num, a, b){
        var result = {},
            operatorFactory = [
                function add(a,b){
                    result.a = a;
                    result.b = b;
                    result.rightAnswer = parseInt(a) + parseInt(b);
                    result.operator = "+";
                },
                function sub(a, b){
                    result.a = a;
                    result.b = b;
                    result.rightAnswer = parseInt(a) - parseInt(b);
                    result.operator = "-";
                },
                function mul(a, b){
                    result.a = a;
                    result.b = b;
                    result.rightAnswer = parseInt(a) * parseInt(b);
                    result.operator = "×";
                },
                function sub(a, b){
                    result.b = a;
                    result.rightAnswer = b;

                    result.a = parseInt(a) * parseInt(b);
                    result.operator = "÷";
                }
            ];

        
        if(num == 0){
            operatorFactory[2 + parseInt(Math.random()*2)](a, b);
        }else{
            operatorFactory[parseInt(Math.random()*2)](a, b);
        }

        return result;
    };

    mathFactory.prototype.factory = function(num, timer){
        var _this = this,
            result = {},
            a,b;

        switch(num){
            case 0 :
                    if(timer == 0){
                        //1--5
                        a = _this.randomNum(_config.multiMax[0], _config.multiMax[1]);
                        b = _this.randomNum(_config.multiMax[0], _config.multiMax[1]);
                    }else if(timer > 0 && timer < 5){
                        //5--10
                        a = _this.randomNum(_config.multiMax[1], _config.multiMax[2]);
                        b = _this.randomNum(_config.multiMax[1], _config.multiMax[2]);
                    }else if(timer >= 5  && timer < 15){
                        //5--15
                        a = _this.randomNum(_config.multiMax[1], _config.multiMax[3]);
                        b = _this.randomNum(_config.multiMax[1], _config.multiMax[3]);
                    }else if(timer >= 16 && timer < 20){
                        //5--20
                        a = _this.randomNum(_config.multiMax[1], _config.multiMax[4]);
                        b = _this.randomNum(_config.multiMax[1], _config.multiMax[4]);
                    }else if(timer >= 20 && timer < 25){
                        //10--20
                        a = _this.randomNum(_config.multiMax[2], _config.multiMax[4]);
                        b = _this.randomNum(_config.multiMax[2], _config.multiMax[4]);
                    }else if(timer >= 25 && timer < 30){
                        //10--25
                        a = _this.randomNum(_config.multiMax[2], _config.multiMax[5]);
                        b = _this.randomNum(_config.multiMax[2], _config.multiMax[5]);
                    }else if(timer >= 30 && timer < 35){
                        //15--25
                        a = _this.randomNum(_config.multiMax[3], _config.multiMax[5]);
                        b = _this.randomNum(_config.multiMax[3], _config.multiMax[5]);
                    }else if(timer >= 35 && timer < 40){
                        //15--25
                        a = _this.randomNum(_config.multiMax[4], _config.multiMax[5]);
                        b = _this.randomNum(_config.multiMax[4], _config.multiMax[5]);
                    }else{
                        a = _this.randomNum(_config.multiMax[5], _config.multiMax[6]);
                        b = _this.randomNum(_config.multiMax[5], _config.multiMax[6]);
                    }

                    result = _this.operator(num, a, b);
                    break;
            case 1 :
                    if(timer == 0){
                        //1--10
                        a = _this.randomNum(_config.sumMax[0], _config.sumMax[1]);
                        b = _this.randomNum(_config.sumMax[0], _config.sumMax[1]);
                    }else if(timer > 0 && timer < 5){
                        //10--20
                        a = _this.randomNum(_config.sumMax[1], _config.sumMax[2]);
                        b = _this.randomNum(_config.sumMax[1], _config.sumMax[2]);
                    }else if(timer >= 5  && timer < 10){
                        //20-30
                        a = _this.randomNum(_config.sumMax[2], _config.sumMax[3]);
                        b = _this.randomNum(_config.sumMax[2], _config.sumMax[3]);
                    }else if(timer >= 10 && timer < 15){
                        //30-50
                        a = _this.randomNum(_config.sumMax[3], _config.sumMax[4]);
                        b = _this.randomNum(_config.sumMax[3], _config.sumMax[4]);
                    }else if(timer >= 15 && timer < 20){
                        //50-100
                        a = _this.randomNum(_config.sumMax[4], _config.sumMax[5]);
                        b = _this.randomNum(_config.sumMax[4], _config.sumMax[5]);
                    }else if(timer >= 20 && timer < 25){
                        //100-500
                        a = _this.randomNum(_config.sumMax[5], _config.sumMax[6]);
                        b = _this.randomNum(_config.sumMax[5], _config.sumMax[6]);
                    }else {
                        a = _this.randomNum(_config.sumMax[6], _config.sumMax[7]);
                        b = _this.randomNum(_config.sumMax[6], _config.sumMax[7]);
                    }
                    
                    result = _this.operator(num, a, b);
                    break;
            default: break;
        }

        return {
            a: result.a,
            b: result.b,
            operator: result.operator,
            rightAnswer: result.rightAnswer
        };
    };

/**
 * [description]
 * @return {[type]} [description]
 */
(function(){
    //绑定界面元素
    var dom = {
        input_val: $("#answer"),
        keyboard: $("#keyboard"),
        re_start: $("#re_start"),
        time: $("#time"),
        math_container: $("#math-container"),
        result: $("#result"),
        score: $("#score"),
        level: $("#level"),
        input: $(".input"),
        reminder : $('.reminder')
    },
        mathfactory = new mathFactory(),
        game = {
            lastScore: 0,
            timer: 0,
            _tick: null,
            right_answer: 0, //正确答案
            init: function(el, parent){
                this.api = API;
                this.config = _config;
                this.lang = _lang[_config.lang];
                this.el = el;
                this.parent = parent;
                this.reset();
                this.randerUI();
                this.inited || this.initEvent();
                this.inited = true;

                this.start();

            },

            //渲染游戏主UI
            randerUI: function(){
                var isLandScape = 90 == window.orientation || -90 == window.orientation;//判断用是否横屏
                var width = isLandScape ? window.innerHeight : window.innerWidth;

                width -= 20;
                width = Math.min(width,600);

                this.el.show();
            },

            //事件初始化
            initEvent: function(){
                var eventName = "ontouchstart" in document.documentElement ? "touch" : "click",
                    _this = this;

                $(window).resize(function(){
                    _this.randerUI();
                });

                dom.keyboard.on('touch click','div', function(){
                    var value = parseInt(dom.input_val.text()),
                        that = this;

                    // $(that).css('background', 'rgba(255,255,255,0.1)');

                    // setTimeout(function(){
                    //     $(that).css('background', 'transparent');
                    // },100);

                    if(game.right_answer == value){
                        dom.input_val.css('border','1px solid #fff');
                        
                        _this.timer ++ ;
                        game.nextLv();
                    }else{
                        dom.input_val.css('border','1px solid red');
                    }

                    
                });

                dom.re_start.on('touch click',function(){
                    _this.right_answer = 0;
                    _this.lastScore = 0;
                    _this.timer = 0;
                    
                    dom.result.hide();
                    _this.reset();
                    _this.randerUI();
                    _this.start();
                });

            },

            randerNum: function(obj){
                dom.math_container.text(obj.a + obj.operator + obj.b);
            },

            start: function(){
                var _this = this,
                    result = {};
                // dom.dialog.hide();
                result = mathfactory.init(_this.timer);

                _this.randerNum(result);
                game.right_answer = result.rightAnswer;
                
                if(_this.timer == 1){
                    _this._tick = setInterval(this.tick, 1000);
                }
            },

            tick: function(){
                var _this = game;
                _this.time --;
            
                if(_this.time < 10 && _this.time > 0){
                    dom.time.text("0" + parseInt(_this.time));
                }else if(_this.time == 0){
                    _this.gameOver();
                }else{
                    dom.time.text(parseInt(_this.time));
                }

                if(_this.time < 5 && _this.time > 0){
                    dom.time.css('color','red');
                }
            },

            reset: function(){
                var _this = this;
                
                _this.time = _config["initTime"];
                dom.time.css('color','#fff').text(parseInt(_this.time));
                dom.input_val.css('border','1px solid #fff');

                $('title').text('math game');
                dom.input_val.text("");

            },
            nextLv: function(){
                this.time += this.config.addTime;
                this.lastScore += this.config.addScore; 

                if(this.time < 10 && this.time >= 0){
                    dom.time.text("0" + parseInt(this.time));
                }else{
                    dom.time.text(parseInt(this.time));
                }

                dom.input_val.text("");
                this.start();
            },
            gameOver: function(){
                var _this = this,
                    num = _this.lastScore/5,
                    level = dom.level,
                    content = _lang[_config.lang];

                _this.el.hide();
                dom.result.show();
                clearInterval(_this._tick);

                dom.score.text(_this.lastScore);

                if(num > 40){
                    level.text(_config.level[9]);
                }else if(num <= 40 && num > 35){
                    level.text(_config.level[8]);
                }else if(num <= 35 && num > 30){
                    level.text(_config.level[7]);
                }else if(num <= 30 && num > 25){
                    level.text(_config.level[6]);
                }else if(num <= 25 && num > 20){
                    level.text(_config.level[5]);
                }else if(num <= 20 && num > 15){
                    level.text(_config.level[4]);
                }else if(num <= 15 && num > 10){
                    level.text(_config.level[3]);
                }else if(num <= 10 && num > 5){
                    level.text(_config.level[2]);
                }else if(num <= 5 && num >= 0){
                    level.text(_config.level[1]);
                }else{
                    level.text(_config.level[0]);
                }

                _this.lastGamePercent = level.text();

                $('title').text(content.title + " , " + content.share_txt1 + _this.lastScore + content.share_txt2 + _this.lastGamePercent + content.share_txt3 + content.share_text4);

            }
        };
    window.Game = game;
})()