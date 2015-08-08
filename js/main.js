var calculateState = false;
function run0() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "0";
}


function run1() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "1";
}

function run2() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "2";
}

function run3() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "3";
}

function run4() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "4";
}

function run5() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "5";
}

function run6() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "6";
}

function run7() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "7";
}

function run8() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "8";
}

function run9() {
    if (calculateState === true) {
        runclear();
        calculateState = false;
    }
    document.calculator.result.value += "9";
}

function runAddition() {

    document.calculator.result.value += "+";
}

function runSubtraction() {
    document.calculator.result.value += "-";
}

function runMultiplication() {
    document.calculator.result.value += "*";
}

function runDivision() {
    document.calculator.result.value += "/";
}

function equal() {
    var finalresult = eval(document.calculator.result.value);
    document.calculator.result.value = finalresult;
    calculateState = true;
}

function runclear() {
    document.calculator.result.value = "";
}
