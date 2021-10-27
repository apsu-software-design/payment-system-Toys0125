//User Interface for The Payment System
//@author Marcus Stange

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {PaymentSystemsTemplate} from './payment_systemsTemplate';
import { PaymentBuilder } from './paymentBuilder';
import { PaymentExector } from './paymentExector';

/**
 * Function to run the UI
 * Removed psc as using static classes does not need to be instanced.
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:
  1. Use a credit card.
  2. Use a bank draft.
  3. Use an online payment system.
  4. Use an offline payment system.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': showCreditCardPaymentMenu(); break;
      case '2': showBankDraftPaymentMenu(); break;
      case '3': showOnlinePaymentMenu(); break;
      case '4': showOfflinePaymentMenu(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function showCreditCardPaymentMenu() {
  let paymentBuilder:PaymentBuilder = new PaymentBuilder(PaymentSystemsTemplate.CreditCard.getInputs,PaymentSystemsTemplate.CreditCard.validate);
  paymentBuilder.build();
  let payment:PaymentExector = paymentBuilder.getPaymentExector();
  payment.run();
}

function showBankDraftPaymentMenu() {
  let paymentBuilder:PaymentBuilder = new PaymentBuilder(PaymentSystemsTemplate.BankDraft.getInputs,PaymentSystemsTemplate.BankDraft.validate);
  paymentBuilder.build();
  let payment:PaymentExector = paymentBuilder.getPaymentExector();
  payment.run();
}

function showOnlinePaymentMenu() {
  let paymentBuilder:PaymentBuilder = new PaymentBuilder(PaymentSystemsTemplate.Online.getInputs,PaymentSystemsTemplate.Online.validate);
  paymentBuilder.build();
  let payment:PaymentExector = paymentBuilder.getPaymentExector();
  payment.run();
}

function showOfflinePaymentMenu() {
  let paymentBuilder:PaymentBuilder = new PaymentBuilder(PaymentSystemsTemplate.Offline.getInputs,PaymentSystemsTemplate.Offline.validate);
  paymentBuilder.build();
  let payment:PaymentExector = paymentBuilder.getPaymentExector();
  payment.run();
}

