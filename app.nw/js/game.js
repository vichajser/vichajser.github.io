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
                    }else if(timer >= 15 && timer < 20){
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
        reminder : $('.reminder'),
        share: $("#share")
    },
        mathfactory = new mathFactory(),
        game = {
            lastScore: 0,
            timer: 0,
            _tick: null,
            right_answer: 0, //正确答案
            touch: {},
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

            //preventDbClick
            preDbClick: function(e){
                var type = 'click', //要触发的事件类型
                    bubbles = true, //事件是否可以冒泡
                    cancelable = true, // 事件是否可以阻止浏览器默认事件
                    view = document.defaultView, //与事件关联的视图

                    detail = 0,
                    screenX = 0,
                    screenY = 0,
                    clientX = 0,
                    clientY = 0,
                    ctrlKey = false, //是否按下ctrl
                    altKey = false, //是否按下alt
                    shiftKey = false, 
                    metaKey = false,
                    button = 0, //表示按下哪一个鼠标键
                    relatedTarget = 0; //模拟mousemove或者out时候用到，与事件相关的对象

                $("document").on("click", function(e){
                    if(e.myclick = true){
                        return true;
                    }

                    if(e.stopImmediatePropagation){
                        e.stopImmediatePropagation();
                    }else{
                        e.propagationStopped = true;
                    }

                    e.stopPropagation();
                    e.preventDefault();

                    return true;
                });
                $("document").on('touchstart', function(e){
                    touch.el = e.target;
                });

                $("document").on('touchend', function(e){
                    var  event = document.createEvent('Events');
                    event.initEvent('click', true, true, window, 1, e.changedTouches[0].screenX,e.changedTouches[0].screenY,e.changedTouches[0].clientX,e.changedTouches[0].clientY,false, false, false, false, 0, null);
                    event.myclick = true;
                    touch.el && touch.el.dispathchEvent(event);

                    e.preventDefault();
                    return true;
                });

            },

            //事件初始化
            initEvent: function(){
                var eventName = "ontouchstart" in document.documentElement ? "touchstart" : "click",
                    _this = this;

                $(window).resize(function(){
                    _this.randerUI();
                });

                _this.preDbClick();

                dom.keyboard.on(eventName,'div', function(){
                    var value = parseInt(dom.input_val.text()),
                        that = this;

                    if(game.right_answer == value){
                        dom.input_val.css('border','1px solid #fff');
                        
                        _this.timer ++ ;
                        game.nextLv();
                    }else{
                        dom.input_val.css('border','1px solid red');
                    }

                    
                });

                dom.re_start.on(eventName ,function(){
                    _this.right_answer = 0;
                    _this.lastScore = 0;
                    _this.timer = 0;
                    
                    dom.result.hide();
                    _this.reset();
                    _this.randerUI();
                    _this.start();
                });

                //监听键盘事件
                $(document).on('keydown', function(e){
                    var e = e || event,
                        currKey = e.keyCode || e.which || e.charCode,
                        temp = dom.input_val.text(),
                        len = temp.length-1,
                        value = 0;

                    switch(currKey){
                        case 49 || 97 : 
                            temp += "1";
                            break;
                        case 50 || 98 : 
                            temp += "2";
                            break;
                        case 51 || 99 : 
                            temp += "3";
                            break;
                        case 52 || 100 : 
                            temp += "4";
                            break;
                        case 53 || 101 : 
                            temp += "5";
                            break;
                        case 54 || 102 : 
                            temp += "6";
                            break;
                        case 55 || 103 : 
                            temp += "7";
                            break;
                        case 56 || 104 : 
                            temp += "8";
                            break;
                        case 57 || 105 : 
                            temp += "9";
                            break;
                        case 189 || 109 : 
                            temp += "-";
                            break;
                        case 48 || 96 : 
                            temp += "0";
                            break;
                        case 8 || 46 : 
                            temp = temp.slice(0, len);
                            break;
                    }

                    dom.input_val.text(temp);
                    value = parseInt(temp);

                    if(dom.reminder.css('display') === 'block'){dom.reminder.css('display','none')};

                    if(game.right_answer == value){
                        dom.input_val.css('border','1px solid #fff');
                        
                        _this.timer ++ ;
                        game.nextLv();
                    }else{
                        dom.input_val.css('border','1px solid red');
                    }
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

            //检查是否是微信内置的浏览器
            isWechat: function(){
                var ua = navigator.userAgent.toLowerCase();

                if(ua.match(/MicroMessenger/i) == 'microMessenger'){
                    return true;
                }else{
                    return false;
                }
            },

            gameOver: function(){
                var _this = this,
                    num = _this.lastScore/5,
                    level = dom.level,
                    content = _lang[_config.lang];

                _this.el.hide();
                dom.result.show();
                if(_this.isWechat()){
                    dom.share.show();
                }else{
                    dom.share.hide();
                }
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