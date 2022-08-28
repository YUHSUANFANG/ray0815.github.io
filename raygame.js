//sam008 call example
//sam008 send example without parameter
//sam008 await+await example

// const myweb3 = new Web3(window.ethereum); 
var walletaccountaddr = "0xA3Ef4a93f32FA983714a00F58E214643344F62CE";
// var preAccount = "";
var curAccount = "";

//--------------------------------------pixi--------------------------------------

///<reference path="./pixi.js.d.ts" />

const app = new PIXI.Application({width: 1280, height: 720, backgroundColor: 0x1099bb});
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

var ui_label_RegisterInfo = new PIXI.Text("點擊註冊", text_style_big);
ui_label_RegisterInfo.anchor.set(0.5);
ui_label_RegisterInfo.x = app.view.width/2;
ui_label_RegisterInfo.y = app.view.height/2-50;

var ui_bt_Register = PIXI.Sprite.from("./assets/register.png");
ui_bt_Register.anchor.set(0.5);
ui_bt_Register.x = app.view.width/2;
ui_bt_Register.y = app.view.height/2+50;
ui_bt_Register.interactive = true;
ui_bt_Register.buttonMode = true;
// scene_Register.addChild(ui_label_RegisterInfso);
scene_Register.addChild(ui_bt_Register);

var scene_Vote = new PIXI.Container();
var sprite_cat = new PIXI.Sprite.from("assets/cat.png");
var sprite_dog = new PIXI.Sprite.from("assets/dog.png");
sprite_cat.anchor.set(0.5);
sprite_cat.x = app.screen.width/3;
sprite_cat.y = app.screen.height/3;
sprite_cat.scale.set(0.5);
sprite_dog.anchor.set(0.5);
sprite_dog.x = app.screen.width*2/3;
sprite_dog.y = app.screen.height/3;
sprite_dog.scale.set(0.5);

var ui_label_voteCount_cat = new PIXI.Text("0", text_style_big);
var ui_label_voteCount_dog = new PIXI.Text("0", text_style_big);
ui_label_voteCount_cat.x = sprite_cat.x;
ui_label_voteCount_cat.y = sprite_cat.y + 150;
ui_label_voteCount_cat.anchor.set(0.5);
ui_label_voteCount_dog.x = sprite_dog.x;
ui_label_voteCount_dog.y = sprite_dog.y + 150;
ui_label_voteCount_dog.anchor.set(0.5);

var ui_bt_vote_cat = new PIXI.Sprite.from("assets/vote.png");
var ui_bt_vote_dog = new PIXI.Sprite.from("assets/vote.png");
ui_bt_vote_cat.x = sprite_cat.x;
ui_bt_vote_cat.y = ui_label_voteCount_cat.y + 75;
ui_bt_vote_cat.anchor.set(0.5);
ui_bt_vote_cat.interactive = true;
ui_bt_vote_cat.buttonMode = true;
ui_bt_vote_dog.x = sprite_dog.x;
ui_bt_vote_dog.y = ui_label_voteCount_dog.y + 75;
ui_bt_vote_dog.anchor.set(0.5);
ui_bt_vote_dog.interactive = true;
ui_bt_vote_dog.buttonMode = true;

var ui_label_percent_cat = new PIXI.Text("0%", text_style_mid);
var ui_label_percent_dog = new PIXI.Text("0%", text_style_mid);
ui_label_percent_cat.anchor.set(0, 0.5);
ui_label_percent_cat.x = 25;
ui_label_percent_cat.y = 575;
ui_label_percent_dog.anchor.set(1, 0.5);
ui_label_percent_dog.x = app.screen.width-25;
ui_label_percent_dog.y = 575;

scene_Vote.addChild(sprite_cat);
scene_Vote.addChild(sprite_dog);
scene_Vote.addChild(ui_label_voteCount_cat);
scene_Vote.addChild(ui_label_voteCount_dog);
scene_Vote.addChild(ui_bt_vote_cat);
scene_Vote.addChild(ui_bt_vote_dog);
scene_Vote.addChild(ui_label_percent_cat);
scene_Vote.addChild(ui_label_percent_dog);


//--------------------------------------web3.js--------------------------------------

    // myweb3.eth.getBalance(walletaccountaddr, function(err,result){
    //     if(!err){
    //         console.log(result.toString());
    //     }else{
    //         //error            
    //     }
    // });

function InitGame(){
    // console.log(myweb3.eth.accounts.length); //!!!!!!!!ERROR here when metamask account is not login : Uncaught TypeError: Insufficient number of arguments.!!!!!!!!
    var checkAccountInterval = setInterval(async function(){    //sam008 async+await example
        if (myweb3.eth.accounts.length !== 0){
            const accounts = await myweb3.eth.getAccounts();    //sam008 await+await example
            // console.log("pre:");
            // console.log(preAccount);
            // console.log("cur:");
            // console.log(curAccount);   
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

function updateUI(){
    // if(Web3Injection == false) return;       //break
    console.log("switch account");
    ui_label_AccountInfo.text = curAccount;
    //clear screen
    app.stage.removeChild(scene_Register);
    app.stage.removeChild(scene_Vote);

    //new screen
    app.stage.addChild(scene_Register);
    // app.stage.addChild(scene_Vote);

    msgContract.methods.GetIsRegistered().call({from:curAccount},function(err,res){
        //sam008 call example
        //web3js : methods.myMethod.call
        // console.log("test");
        if(!err){
            console.log(res.toString());
            //clear screen
   
            app.stage.removeChild(scene_Register);
            app.stage.removeChild(scene_Vote);

            //new screen
            // app.stage.addChild(scene_Register);
            app.stage.addChild(scene_Vote);
        }else{
            console.log(err.toString());
        }
    });

    // msgContractAtLocal.GetTestAddress(function(err,res){
    //     if(!err){
    //         console.log(res);
    //         if(res){
    //             msgContractAtLocal.GetMyTickets(function(err,res){
    //                 if(!err){
    //                     ui_label_TicketsInfo.text = res.toString();
    //                 }
    //             });
    //         }else{
    //             console.log("user is not registered");
    //             ui_label_TicketsInfo.text = "user is not registered";
    //         }
    //     }
    // });

}


function Callvote(_candidateNumber){
    var num = prompt("how many votes", 0);
    if(Number.isInteger(parseInt(num))){
        msgContract.methods.GetMyTickets().call({from:curAccount},function(err,res){
            if(!err){
                if(parseInt(res) >= num){
                    msgContract.methods.Vote(_candidateNumber, num).send({from:curAccount},function(err){
                        updateUI();
                    });
                }
            }
        });
    }else{
        //
    }
}

function InitButtonEvent(){
    ui_bt_Register.on("click",function(){
        console.log("0000000");
        msgContract.methods.Register().send({from:walletaccountaddr},function(err){
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

    ui_bt_vote_cat.on("click",function(){
        Callvote(1);
    });
    ui_bt_vote_dog.on("click",function(){
        Callvote(2);
    });


}

// console.log(typeof window.ethereum);
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


