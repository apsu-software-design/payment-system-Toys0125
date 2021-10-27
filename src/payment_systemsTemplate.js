"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSystemsTemplate = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
/**
 * Used Static classes to allow easy changing of payment methods.
 */
var PaymentSystemsTemplate = /** @class */ (function () {
    function PaymentSystemsTemplate() {
    }
    PaymentSystemsTemplate.CreditCard = /** @class */ (function () {
        function class_1() {
        }
        class_1.getInputs = function () {
            console.log('Enter Credit Card Payment Details.');
            var test = [];
            test.push((readlineSync.question('  Name: ')));
            test.push(readlineSync.question('  Credit Card Number: '));
            test.push(readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
            return test;
        };
        class_1.validate = function (tests) {
            //0:name 1:creditCardNumber 2:creditCardExpiration
            return /^[\w.' ]+$/.test(tests[0]) && /\d{15,16}/.test(tests[1]) && /\d\d\/\d\d/.test(tests[2]);
        };
        return class_1;
    }());
    PaymentSystemsTemplate.BankDraft = /** @class */ (function () {
        function class_2() {
        }
        class_2.getInputs = function () {
            console.log('Enter Bank Account Details.');
            var test = [];
            test.push(readlineSync.question('  Name: '));
            test.push(readlineSync.question('  Bank Routing Number: '));
            test.push(readlineSync.question('  Bank Account Number: '));
            return test;
        };
        class_2.validate = function (tests) {
            // 0:name 1:bankRoutingNumber 2:bankAccountNumber
            return /^[\w.' ]+$/.test(tests[0]) && /\d{9}/.test(tests[1]) && /\d{6,12}/.test(tests[2]);
        };
        return class_2;
    }());
    PaymentSystemsTemplate.Online = /** @class */ (function () {
        function class_3() {
        }
        class_3.getInputs = function () {
            console.log('Enter Online Payment Details.');
            var test = [];
            test.push(readlineSync.question('  Enter Your Email Address: '));
            test.push(readlineSync.question('  Enter Your Payment Password: '));
            return test;
        };
        class_3.validate = function (tests) {
            // 0:email 1:paymentPassword
            return /^[\w@.]+$/.test(tests[0]) && /\w+/.test(tests[1]);
        };
        return class_3;
    }());
    PaymentSystemsTemplate.Offline = /** @class */ (function () {
        function class_4() {
        }
        class_4.getInputs = function () {
            console.log('Enter Offline Payment Details.');
            var test = [];
            test.push(readlineSync.question('  Name: '));
            test.push(readlineSync.question('  Enter Your Billing Address: '));
            return test;
        };
        class_4.validate = function (tests) {
            // 0:name 1:billingAddress
            return /^[\w@.]+$/.test(tests[0]) && /\w+/.test(tests[1]);
        };
        return class_4;
    }());
    return PaymentSystemsTemplate;
}());
exports.PaymentSystemsTemplate = PaymentSystemsTemplate;
