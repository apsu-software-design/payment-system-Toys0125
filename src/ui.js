"use strict";
//User Interface for The Payment System
//@author Marcus Stange
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var payment_systemsTemplate_1 = require("./payment_systemsTemplate");
var paymentBuilder_1 = require("./paymentBuilder");
/**
 * Function to run the UI
 * Removed psc as using static classes does not need to be instanced.
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    while (true) { //run until we exit
        console.log("Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:\n  1. Use a credit card.\n  2. Use a bank draft.\n  3. Use an online payment system.\n  4. Use an offline payment system.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                showCreditCardPaymentMenu();
                break;
            case '2':
                showBankDraftPaymentMenu();
                break;
            case '3':
                showOnlinePaymentMenu();
                break;
            case '4':
                showOfflinePaymentMenu();
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function showCreditCardPaymentMenu() {
    var paymentBuilder = new paymentBuilder_1.PaymentBuilder(payment_systemsTemplate_1.PaymentSystemsTemplate.CreditCard.getInputs, payment_systemsTemplate_1.PaymentSystemsTemplate.CreditCard.validate);
    paymentBuilder.build();
    var payment = paymentBuilder.getPaymentExector();
    payment.run();
}
function showBankDraftPaymentMenu() {
    var paymentBuilder = new paymentBuilder_1.PaymentBuilder(payment_systemsTemplate_1.PaymentSystemsTemplate.BankDraft.getInputs, payment_systemsTemplate_1.PaymentSystemsTemplate.BankDraft.validate);
    paymentBuilder.build();
    var payment = paymentBuilder.getPaymentExector();
    payment.run();
}
function showOnlinePaymentMenu() {
    var paymentBuilder = new paymentBuilder_1.PaymentBuilder(payment_systemsTemplate_1.PaymentSystemsTemplate.Online.getInputs, payment_systemsTemplate_1.PaymentSystemsTemplate.Online.validate);
    paymentBuilder.build();
    var payment = paymentBuilder.getPaymentExector();
    payment.run();
}
function showOfflinePaymentMenu() {
    var paymentBuilder = new paymentBuilder_1.PaymentBuilder(payment_systemsTemplate_1.PaymentSystemsTemplate.Offline.getInputs, payment_systemsTemplate_1.PaymentSystemsTemplate.Offline.validate);
    paymentBuilder.build();
    var payment = paymentBuilder.getPaymentExector();
    payment.run();
}
