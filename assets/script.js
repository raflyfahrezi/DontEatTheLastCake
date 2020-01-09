/// <reference path="./typings/globals/jquery/index.d.ts"/>        

function setUserValue(num) {                                        //1
    document.getElementById('userNumber').innerText = num           
}

function setComputerValue(num) {
    document.getElementById('computerNumber').innerText = num       //2
}

function getLastCake() {                                            //3
    return document.getElementById('lastCake').innerText
}

function setLastCake(num) {                                         //4
    document.getElementById('lastCake').innerText = num
}

function buttonValidation(btnId) {                                  //5
    let tempButton
    let tempLastCake

    switch (btnId) {
        case 'firstButton':
                $('.firstContainer').fadeOut('fast')
                setTimeout(() => {
                    $('.secondContainer').fadeIn('fast')
                }, 1000);
            break;
        case 'buttonOne':
                tempButton  = 1
                setUserValue(tempButton)
                tempLastCake = getLastCake()
                tempLastCake -= tempButton
                setLastCake(tempLastCake)
                userMove()
            break;
        case 'buttonTwo':
                tempButton  = 2
                setUserValue(tempButton)
                tempLastCake = getLastCake()
                tempLastCake -= tempButton
                setLastCake(tempLastCake)
                userMove()
            break;
        case 'buttonThree':
                tempButton  = 3
                setUserValue(tempButton)
                tempLastCake = getLastCake()
                tempLastCake -= tempButton
                setLastCake(tempLastCake)
                userMove()
            break;
    }
}

function userMove(params) {                                         //6
    let tempLastCake

    $('.userNumber').css('font-size', '100px');
    setTimeout(() => {
        $('.userNumber').css('font-size', '80px');
        setTimeout(() => {
            $('.boxUser').css('box-shadow', 'none');
            computerMove()
        }, 500);
    }, 1000);
}

function computerMove(params) {                                     //7
    let computerRandomValue         
    let tempLastCake
    
    if (getLastCake() != 0) {
        setTimeout(() => {
            $('.boxComputer').css('box-shadow', '0px 0px 80px lightgray');
            $('#buttonOne').css('background-color', '#262626')
            $('#buttonOne').css('color', '#262626')
            $('#buttonOne').css('cursor', 'none')
            $('#buttonTwo').css('background-color', '#262626')
            $('#buttonTwo').css('color', '#262626')
            $('#buttonTwo').css('cursor', 'none')
            $('#buttonThree').css('background-color', '#262626')
            $('#buttonThree').css('color', '#262626')
            $('#buttonThree').css('cursor', 'none')
            setTimeout(() => {
                if (getLastCake() >= 3) {
                    computerRandomValue = Math.floor(Math.random()*3)+1
                } else if (getLastCake() == 2) {
                    computerRandomValue = Math.floor(Math.random()*2)+1
                } else if (getLastCake() == 1) {
                    computerRandomValue = Math.floor(Math.random()*1)+1
                }

                tempLastCake = getLastCake()
                setComputerValue(computerRandomValue)
                tempLastCake -= computerRandomValue
                setLastCake(tempLastCake)
                                
                $('.computerNumber').css('font-size', '100px');
                setTimeout(() => {
                    $('.computerNumber').css('font-size', '80px');
                    setTimeout(() => {
                        $('.boxComputer').css('box-shadow', 'none');

                        if (getLastCake() != 0) {
                            setTimeout(() => {
                                $('.boxUser').css('box-shadow', '0px 0px 80px lightgray');
                                if (getLastCake() >= 3) {
                                    $('#buttonOne').css('background-color', 'lightsalmon')
                                    $('#buttonTwo').css('background-color', 'lightyellow')
                                    $('#buttonThree').css('background-color', 'lightgreen')
                                    $('#buttonOne').css('cursor', 'pointer')
                                    $('#buttonTwo').css('cursor', 'pointer')
                                    $('#buttonThree').css('cursor', 'pointer')
                                } else if (getLastCake() == 2) {
                                    $('#buttonThree').css('display', 'none')
                                    $('#buttonOne').css('background-color', 'lightsalmon')
                                    $('#buttonTwo').css('background-color', 'lightyellow')
                                    $('#buttonOne').css('cursor', 'pointer')
                                    $('#buttonTwo').css('cursor', 'pointer')
                                } else if (getLastCake() == 1) {
                                    $('#buttonTwo').css('display', 'none')
                                    $('#buttonOne').css('background-color', 'lightsalmon')
                                    $('#buttonOne').css('cursor', 'pointer')
                                }
                            }, 1000);
                        } else {
                            $('.secondContainer').fadeOut('fast')
                            setTimeout(() => {
                                $('.fourthContainer').fadeIn('fast')
                            }, 1000);
                        }
                    }, 500);
                }, 1000);
            }, 1000);
        }, 1000);
    } else {
        $('.secondContainer').fadeOut('fast')
        setTimeout(() => {
            $('.thirdContainer').fadeIn('fast')
        }, 1000);
    }
}

let getButton = document.getElementsByClassName('button')           //8

for (let index = 0; index < getButton.length; index++) {            //n
    getButton[index].addEventListener('click', function() {
        buttonValidation(this.id)
    })
}