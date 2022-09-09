//sam008 call example
//sam008 send example without parameter
//sam008 await+await example

// const myweb3 = new Web3(window.ethereum); 
var walletaccountaddr = "0xb04d78421fF1f6250D446C4205019BB0797e3422";
// var preAccount = "";
var curAccount = "";
var frogstate = 0;
var wolfstate = 0;
var pkmcount = 1;
var galaget = 0;
var treeget = 0;
var rockget = 0;
var foxget = 0;
var owlget = 0;
var mxdget = 0;
var lplsget = 0;


// https://tw.portal-pokemon.com/play/pokedex

//--------------------------------------pixi--------------------------------------

///<reference path="./pixi.js.d.ts" />

const app = new PIXI.Application({width: 800, height: 580, backgroundColor: 0xFFFFFF});
document.body.appendChild(app.view);

const text_style_big = new PIXI.TextStyle({
    fontsize:48,
    lineJoin: "bevel",
    stroke: "white",
    strokeThickness: 2
});
const text_style_mid = new PIXI.TextStyle({
    fontsize:24,
    lineJoin: "bevel",
    stroke: "white",
    strokeThickness: 2
});
const text_style_small = new PIXI.TextStyle({
    fontsize:14,
    lineJoin: "bevel",
    stroke: "white",
    strokeThickness: 2
});

var ui_label_AccountInfo = new PIXI.Text("");
app.stage.addChild(ui_label_AccountInfo);
var ui_label_TicketsInfo = new PIXI.Text("");
app.stage.addChild(ui_label_TicketsInfo);
ui_label_AccountInfo.y = 60;
ui_label_TicketsInfo.y = 120;

var scene_Register = new PIXI.Container();
var scene_Vote = new PIXI.Container();
var scene_pkm = new PIXI.Container();


var ui_label_RegisterInfo = new PIXI.Text("Welcome to 阿羅拉", text_style_big);
ui_label_RegisterInfo.anchor.set(0.5);
ui_label_RegisterInfo.x = app.view.width/2;
ui_label_RegisterInfo.y = app.view.height/2-50;
var ui_label_RegisterInfo2 = new PIXI.Text("choose your pokemon", text_style_big);
ui_label_RegisterInfo2.anchor.set(0.5);
ui_label_RegisterInfo2.x = app.view.width/2;
ui_label_RegisterInfo2.y = app.view.height/2-20;

var ui_bt_Register = PIXI.Sprite.from("./assets/background.jpg");
ui_bt_Register.anchor.set(0.5);
ui_bt_Register.x = app.view.width/2;
ui_bt_Register.y = app.view.height/2+50;
ui_bt_Register.scale.set(1.5);
ui_bt_Register.interactive = false;
ui_bt_Register.buttonMode = false;
scene_Register.addChild(ui_bt_Register);
scene_Register.addChild(ui_label_RegisterInfo);
scene_Register.addChild(ui_label_RegisterInfo2);


var sprite_frog = new PIXI.Sprite.from("assets/frog.jpg");
var sprite_wolf = new PIXI.Sprite.from("assets/wolf.jpg");
sprite_frog.anchor.set(0.5);
sprite_frog.x = app.screen.width/3;
sprite_frog.y = app.screen.height*2/3;
sprite_frog.scale.set(0.5);
sprite_frog.interactive = true;
sprite_frog.buttonMode = true;
sprite_wolf.anchor.set(0.5);
sprite_wolf.x = app.screen.width*2/3;
sprite_wolf.y = app.screen.height*2/3;
sprite_wolf.scale.set(0.5);
sprite_wolf.interactive = true;
sprite_wolf.buttonMode = true;
scene_Register.addChild(sprite_frog);
scene_Register.addChild(sprite_wolf);

var sprite_gala = new PIXI.Sprite.from("assets/glgl.jpg");
var sprite_tree = new PIXI.Sprite.from("assets/tree.jpg");
var sprite_rock = new PIXI.Sprite.from("assets/rock.jpg");
var sprite_fox = new PIXI.Sprite.from("assets/fox.jpg");
var sprite_owl = new PIXI.Sprite.from("assets/owl.jpg");
var sprite_mxd = new PIXI.Sprite.from("assets/mxd.jpg");
var sprite_lpls = new PIXI.Sprite.from("assets/lpls.jpg");
var sprite_wolfn = new PIXI.Sprite.from("assets/wolfnight.jpg");
var sprite_wolfd = new PIXI.Sprite.from("assets/wolfday.jpg");
var sprite_fight = new PIXI.Sprite.from("assets/fight.jpg");
var sprite_water = new PIXI.Sprite.from("assets/water.jpg");
var sprite_fire = new PIXI.Sprite.from("assets/fire.jpg");
var sprite_pika = new PIXI.Sprite.from("assets/pika.jpg");
var sprite_yibu = new PIXI.Sprite.from("assets/yibu.jpg");
var sprite_lada = new PIXI.Sprite.from("assets/lada.jpg");
var sprite_mud = new PIXI.Sprite.from("assets/mud.jpg");
var sprite_pkc = new PIXI.Sprite.from("assets/pkc.jpg");
var sprite_cat = new PIXI.Sprite.from("assets/cat.jpg");
var sprite_big = new PIXI.Sprite.from("assets/big.jpg");




sprite_gala.anchor.set(0.5);
sprite_gala.x = app.screen.width/5;
sprite_gala.y = app.screen.height/3;
sprite_gala.scale.set(0.35);
sprite_gala.interactive = true;
sprite_gala.buttonMode = true;
sprite_tree.anchor.set(0.5);
sprite_tree.x = app.screen.width*2/5;
sprite_tree.y = app.screen.height/3;
sprite_tree.scale.set(0.35);
sprite_tree.interactive = true;
sprite_tree.buttonMode = true;
sprite_rock.anchor.set(0.5);
sprite_rock.x = app.screen.width*3/5;
sprite_rock.y = app.screen.height/3;
sprite_rock.scale.set(0.35);
sprite_rock.interactive = true;
sprite_rock.buttonMode = true;
sprite_fox.anchor.set(0.5);
sprite_fox.x = app.screen.width*4/5;
sprite_fox.y = app.screen.height/3;
sprite_fox.scale.set(0.35);
sprite_fox.interactive = true;
sprite_fox.buttonMode = true;

sprite_owl.anchor.set(0.5);
sprite_owl.x = app.screen.width*3/4;
sprite_owl.y = app.screen.height/3;
sprite_owl.scale.set(0.35);
sprite_owl.interactive = true;
sprite_owl.buttonMode = true;
sprite_mxd.anchor.set(0.5);
sprite_mxd.x = app.screen.width*1/4;
sprite_mxd.y = app.screen.height/3;
sprite_mxd.scale.set(0.35);
sprite_mxd.interactive = true;
sprite_mxd.buttonMode = true;
sprite_lpls.anchor.set(0.5);
sprite_lpls.x = app.screen.width*2/4;
sprite_lpls.y = app.screen.height/3;
sprite_lpls.scale.set(0.5);
sprite_lpls.interactive = true;
sprite_lpls.buttonMode = true;


var ui_bt_Vote = PIXI.Sprite.from("./assets/background.jpg");
var ui_bt_vote_frog = new PIXI.Sprite.from("assets/frog.jpg");
var ui_bt_vote_wolf = new PIXI.Sprite.from("assets/wolf.jpg");

ui_bt_Vote.anchor.set(0.5);
ui_bt_Vote.x = app.view.width/2;
ui_bt_Vote.y = app.view.height/2+50;
ui_bt_Vote.scale.set(1.5);
ui_bt_vote_frog.anchor.set(0.5);
ui_bt_vote_frog.x = app.screen.width/2;
ui_bt_vote_frog.y = app.screen.height*2/3;
ui_bt_vote_frog.scale.set(0.5);
ui_bt_vote_wolf.anchor.set(0.5);
ui_bt_vote_wolf.x = app.screen.width/2;
ui_bt_vote_wolf.y = app.screen.height*2/3;
ui_bt_vote_wolf.scale.set(0.5);

var ui_bt_vote_gala = new PIXI.Sprite.from("assets/glgl.jpg");
var ui_bt_vote_tree = new PIXI.Sprite.from("assets/tree.jpg");
var ui_bt_vote_rock = new PIXI.Sprite.from("assets/rock.jpg");
var ui_bt_vote_fox = new PIXI.Sprite.from("assets/fox.jpg");
var ui_bt_vote_owl = new PIXI.Sprite.from("assets/owl.jpg");
var ui_bt_vote_mxd = new PIXI.Sprite.from("assets/mxd.jpg");
var ui_bt_vote_lpls = new PIXI.Sprite.from("assets/lpls.jpg");

scene_Vote.addChild(ui_bt_Vote);
scene_Vote.addChild(sprite_gala);
scene_Vote.addChild(sprite_tree);
scene_Vote.addChild(sprite_rock);
scene_Vote.addChild(sprite_fox);


function InitGame(){
    // console.log(myweb3.eth.accounts.length); //!!!!!!!!ERROR here when metamask account is not login : Uncaught TypeError: Insufficient number of arguments.!!!!!!!!
    var checkAccountInterval = setInterval(async function(){    //sam008 async+await example
        if (myweb3.eth.accounts.length !== 0){
            const accounts = await myweb3.eth.getAccounts();    //sam008 await+await example   
            if (curAccount !== accounts[0]){
                curAccount = accounts[0];
                updateUI();
            }else{
                // console.log("preAcount == accounts[0]");
            }
        }else{
            console.log("no web3 account");
        }
        // console.log("clear interval");
        // clearInterval(checkAccountInterval);
    }, 100);  //1000ms = 1s
    InitButtonEvent();
}

function updateUI2(){
    console.log(pkmcount);
    var i = 1;   
    // msgContract.methods.GetIsFrog().call({from:curAccount},function(err,res){
    //     console.log(res);
    if(frogstate){
        ui_bt_vote_frog.anchor.set(0.5);
        ui_bt_vote_frog.x = app.screen.width*i/(pkmcount+1);
        ui_bt_vote_frog.y = app.screen.height*2/3;
        ui_bt_vote_frog.scale.set(0.25);    
    }
    
    if(wolfstate){
        ui_bt_vote_wolf.anchor.set(0.5);
        ui_bt_vote_wolf.x = app.screen.width*i/(pkmcount+1);
        ui_bt_vote_wolf.y = app.screen.height*2/3;
        ui_bt_vote_wolf.scale.set(0.25); 
    }
    // })
 
    if(galaget){
        i = i + 1;
        scene_Vote.removeChild(sprite_gala);
        ui_bt_vote_gala.anchor.set(0.5);
        ui_bt_vote_gala.x = app.screen.width*i/(pkmcount+1);
        ui_bt_vote_gala.y = app.screen.height*2/3;
        ui_bt_vote_gala.scale.set(0.25);
        scene_Vote.addChild(ui_bt_vote_gala);
    }
    if(foxget){
        i = i + 1;
        scene_Vote.removeChild(sprite_fox);
        ui_bt_vote_fox.anchor.set(0.5);
        ui_bt_vote_fox.x = app.screen.width*i/(pkmcount+1);
        ui_bt_vote_fox.y = app.screen.height*2/3;
        ui_bt_vote_fox.scale.set(0.25);
        scene_Vote.addChild(ui_bt_vote_fox);
    }
    if(treeget){
        i = i + 1;
        scene_Vote.removeChild(sprite_tree);
        ui_bt_vote_tree.anchor.set(0.5);
        ui_bt_vote_tree.x = app.screen.width*i/(pkmcount+1);
        ui_bt_vote_tree.y = app.screen.height*2/3;
        ui_bt_vote_tree.scale.set(0.25);
        scene_Vote.addChild(ui_bt_vote_tree);
    }
    if(rockget){
        i = i + 1;
        scene_Vote.removeChild(sprite_rock);
        ui_bt_vote_rock.anchor.set(0.5);
        ui_bt_vote_rock.x = app.screen.width*i/(pkmcount+1);
        ui_bt_vote_rock.y = app.screen.height*2/3;
        ui_bt_vote_rock.scale.set(0.25);
        scene_Vote.addChild(ui_bt_vote_rock);
    }
    if(i>4){
        updateUI3();
    }
}

function updateUI3(){
    console.log(pkmcount);
    // msgContract.methods.GetIsFrog().call({from:curAccount},function(err,res){
    //     console.log(res);
    var i = 1;
    var lplsscale = 0.5;

    scene_Vote.addChild(sprite_lpls);
    scene_Vote.addChild(sprite_owl);
    scene_Vote.addChild(sprite_mxd);

    if(frogstate){
        ui_bt_vote_frog.anchor.set(0.5);
        if(pkmcount<5){
            ui_bt_vote_frog.x = app.screen.width*i/(pkmcount+1);
        }else{
            ui_bt_vote_frog.x = app.screen.width*1/6;
        }
        ui_bt_vote_frog.y = app.screen.height*2/3;
        ui_bt_vote_frog.scale.set(0.25);    
    }
    
    if(wolfstate){
        ui_bt_vote_wolf.anchor.set(0.5);
        if(pkmcount<5){
            ui_bt_vote_wolf.x = app.screen.width*i/(pkmcount+1);
        }else{
            ui_bt_vote_wolf.x = app.screen.width*1/6;
        }
        ui_bt_vote_wolf.y = app.screen.height*2/3;
        ui_bt_vote_wolf.scale.set(0.25); 
    }
    // })
 
    if(mxdget){
        scene_Vote.removeChild(sprite_mxd);
        scene_Vote.removeChild(ui_bt_vote_gala);
        ui_bt_vote_mxd.anchor.set(0.5);
        ui_bt_vote_mxd.x = app.screen.width*2/6;
        ui_bt_vote_mxd.y = app.screen.height*2/3;
        ui_bt_vote_mxd.scale.set(0.25);
        scene_Vote.addChild(ui_bt_vote_mxd);
        lplsscale = lplsscale + 0.1;
        sprite_lpls.scale.set(lplsscale);

    }
    if(owlget){
        scene_Vote.removeChild(sprite_owl);
        scene_Vote.removeChild(ui_bt_vote_fox);
        ui_bt_vote_owl.anchor.set(0.5);
        ui_bt_vote_owl.x = app.screen.width*3/6;
        ui_bt_vote_owl.y = app.screen.height*2/3;
        ui_bt_vote_owl.scale.set(0.25);
        scene_Vote.addChild(ui_bt_vote_owl);
        lplsscale = lplsscale + 0.1;
        sprite_lpls.scale.set(lplsscale);

    }
    if(lplsget){
        var rnd = Math.floor(Math.random()*20);
        console.log(rnd);
        switch (rnd) {
            case 0:
                var sprite_rnd = new PIXI.Sprite.from("assets/wolfnight.jpg");
                break;
            case 1:
                var sprite_rnd = new PIXI.Sprite.from("assets/wolfday.jpg");
                break;
            case 2:
                var sprite_rnd = new PIXI.Sprite.from("assets/fight.jpg");
                break;
            case 3:
                var sprite_rnd = new PIXI.Sprite.from("assets/water.jpg");
                break;
            case 4:
                var sprite_rnd = new PIXI.Sprite.from("assets/fire.jpg");
                break;
            case 5:
                var sprite_rnd = new PIXI.Sprite.from("assets/pika.jpg");
                break;
            case 6:
                var sprite_rnd = new PIXI.Sprite.from("assets/yibu.jpg");
                break;
            case 7:
                var sprite_rnd = new PIXI.Sprite.from("assets/mud.jpg");
                break;
            case 8:
                var sprite_rnd = new PIXI.Sprite.from("assets/pkc.jpg");
                break;
            case 9:
                var sprite_rnd = new PIXI.Sprite.from("assets/cat.jpg");
                break;
            case 10:
                var sprite_rnd = new PIXI.Sprite.from("assets/big.jpg");
                break;
            // case 11:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 12:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 13:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 14:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 15:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 16:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 17:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 18:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 19:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            // case 20:
            //     var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
            //     break;
            default:
                var sprite_rnd = new PIXI.Sprite.from("assets/lada.jpg");
        }
        sprite_rnd.anchor.set(0.5);
        sprite_rnd.x = app.screen.width*2/4;
        sprite_rnd.y = app.screen.height/3;
        sprite_rnd.scale.set(0.7);
        sprite_rnd.interactive = false;
        sprite_rnd.buttonMode = false;
        scene_Vote.addChild(sprite_rnd);
    }
}

function updateUI(){
    // if(Web3Injection == false) return;       //break
    console.log("check account");
    ui_label_AccountInfo.text = curAccount;
    //clear screen
    app.stage.removeChild(scene_Register);
    app.stage.removeChild(scene_Vote);

    //new screen
    app.stage.addChild(scene_Register);
    // app.stage.addChild(scene_Vote);

    msgContract.methods.GetIsFrog().call({from:curAccount},function(err,res){
        //sam008 call example
        //web3js : methods.myMethod.call
        // console.log("test");
        if(!err){
            console.log(res.toString());
            //clear screen

            if(res){
                frogstate = 1;
                app.stage.removeChild(scene_Register);
                app.stage.removeChild(scene_Vote);

                //new screen
                // app.stage.addChild(scene_Register);
                scene_Vote.addChild(ui_bt_vote_frog);
                app.stage.addChild(scene_Vote);
    
            }else{
                msgContract.methods.GetIsWolf().call({from:curAccount},function(err,res){
                    //sam008 call example
                    //web3js : methods.myMethod.call
                    // console.log("test");
                    if(!err){
                        console.log(res.toString());
                        //clear screen
            
                        if(res){
                            wolfstate = 1;
                            app.stage.removeChild(scene_Register);
                            app.stage.removeChild(scene_Vote);
            
                            //new screen
                            // app.stage.addChild(scene_Register);
                            scene_Vote.addChild(ui_bt_vote_wolf);
                            app.stage.addChild(scene_Vote);
                
                        }else{
                            app.stage.removeChild(scene_Register);
                            app.stage.removeChild(scene_Vote);
            
                            //new screen
                            app.stage.addChild(scene_Register);
                            // app.stage.addChild(scene_Vote);
                        }
                    }else{
                        console.log(err.toString());
                    }
                });
            }
        }else{
            console.log(err.toString());
        }
    });
}

function InitButtonEvent(){
    ui_bt_Register.on("click",function(){
        console.log("0000000");
        msgContract.methods.Register().send({from:curAccount},function(err){
            //sam008 send example without parameter
            //web3js : methods.myMethod.send
            if(!err){
                console.log("1111111");
                var interval_checkRegister = setInterval(function(){
                    msgContract.methods.GetIsRegistered().call(function(err,res){
                        if(res == true){
                            updateUI();
                            clearInterval(interval_checkRegister);
                        }
                    })
                },100);                
            }else{
                console.log("register error");
            }
        });
    });

    sprite_frog.on("click",function(){
        console.log("choose frog");
        frogstate = 1;
        wolfstate = 0;
        msgContract.methods.CFrog().send({from:curAccount},function(err){
            if(!err){
                console.log("1111111");
                var interval_checkRegister = setInterval(function(){
                    msgContract.methods.GetIsFrog().call(function(err,res){
                        if(res == true){
                            updateUI();
                            clearInterval(interval_checkRegister);
                        }
                    })
                },100);                
            }else{
                console.log("click error");
            }
        });
    });
    sprite_wolf.on("click",function(){
        console.log("choose wolf");
        frogstate = 0;
        wolfstate = 1;
        msgContract.methods.CWolf().send({from:curAccount},function(err){
            if(!err){
                console.log("1111111");
                var interval_checkRegister = setInterval(function(){
                    msgContract.methods.GetIsWolf().call(function(err,res){
                        if(res == true){
                            updateUI();
                            clearInterval(interval_checkRegister);
                        }
                    })
                },100);                
            }else{
                console.log("click error");
            }
        });
    });

    sprite_gala.on("click",function(){
        console.log("choose gala");
        alert("綠意盎然的阿羅拉地區對嘎啦嘎啦來說是個嚴苛的環境。牠必須為了活下去而操縱火焰。");
        if(wolfstate || frogstate){
            alert("屬性:火,幽靈, 弱點:水,地面,岩石,幽靈,惡");
            pkmcount = pkmcount + 1;
            galaget = 1;
            updateUI2();
        }else{
            alert("逃跑了: 他的屬性:火,幽靈, 弱點:水,地面,岩石,幽靈,惡");
        }
        
    });

    sprite_tree.on("click",function(){
        console.log("choose tree");
        alert("椰蛋樹是阿羅拉人的驕傲。在許多歷史悠久的繪畫和建築物上都留下了牠的身影。");
        if(foxget){
            alert("屬性:草,龍, 弱點:冰,毒,飛行,蟲,龍,妖精");
            pkmcount = pkmcount + 1;
            treeget = 1;
            updateUI2();
        }else{
            alert("逃跑了: 他的屬性:草,龍, 弱點:冰,毒,飛行,蟲,龍,妖精");
        }
    });

    sprite_rock.on("click",function(){
        console.log("choose rock");
        alert("隆隆岩個性頑固且難相處。心情不好的時候會從全身放電，並發出像雷鳴般的吼叫聲。");
        if(frogstate || treeget){
            alert("屬性:岩石,電, 弱點:水,草,格鬥,地面");
            pkmcount = pkmcount + 1;
            rockget = 1;
            updateUI2();
        }else{
            alert("逃跑了: 他的屬性:岩石,電, 弱點:水,草,格鬥,地面");
        }
    });

    sprite_fox.on("click",function(){
        console.log("choose fox");
        alert("九尾由於生活在被冰雪封閉，有著神明居住的山上，在過去被人們敬仰為神的化身。");
        if(wolfstate || galaget || rockget){
            alert("屬性:冰,妖精, 弱點:火,毒,岩石,鋼");
            pkmcount = pkmcount + 1;
            foxget = 1;
            updateUI2();
        }else{
            alert("逃跑了: 他的屬性:冰,妖精, 弱點:火,毒,岩石,鋼");
        }
    });

    sprite_owl.on("click",function(){
        console.log("choose owl");
        alert("狙射樹梟會搭上箭羽朝對手射出。在絕對必須射中的時候，會拉緊頭上的藤蔓來集中精神。");
        if(galaget){
            alert("屬性:草,幽靈, 弱點:火,冰,飛行,幽靈,惡");
            pkmcount = pkmcount + 1;
            owlget = 1;
            updateUI3();
        }else{
            alert("逃跑了: 他的屬性:草,幽靈, 弱點:火,冰,飛行,幽靈,惡");
        }
    });

    sprite_mxd.on("click",function(){
        console.log("choose mxd");
        alert("瑪夏多能夠潛入對手的影子，模仿對手的動作和能力。在模仿的過程中會變得比本尊更強。。");
        if(foxget || galaget){
            alert("屬性:格鬥,幽靈, 弱點:飛行,超能力,妖精,幽靈");
            pkmcount = pkmcount + 1;
            mxdget = 1;
            updateUI3();
        }else{
            alert("逃跑了: 他的屬性:格鬥,幽靈, 弱點:飛行,超能力,妖精,幽靈");
        }
    });

    sprite_lpls.on("click",function(){
        console.log("choose lpls");
        if(treeget && mxdget && rockget && owlget){
            alert("GOTCHA !!! 拉普拉斯超極巨化可以讓超過５０００個人乘坐在自己背部的甲殼上。完全不會搖晃，坐起來非常舒適。");
            pkmcount = pkmcount + 1;
            lplsget = 1;
            updateUI3();
        }else{
            alert("逃跑了: 他的屬性:冰,水, 弱點:??,??,??,??");
        }
    });
}

console.log(IsWeb3Injection);
if (IsWeb3Injection){
    //IsWeb3Injection == true
    //執行合約
    //contract.js
    
    var checkWeb3Injection = setInterval(function(){
        if (window.ethereum.isConnected !== 0){ //!!!!!!!!ERROR here when metamask is not activate : Uncaught TypeError: Cannot read properties of undefined!!!!!!!!
            console.log("connect to web3 injection");
            Web3Injection = true;
            // console.log("clear interval");
            clearInterval(checkWeb3Injection);
            InitGame();
        }else{
            console.log("no web3 connection");
        }
    }, 100);

}else{
    //IsWeb3Injection == false
}

//--------------------------------------pixi--------------------------------------


