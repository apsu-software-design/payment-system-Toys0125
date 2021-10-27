"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentExector = void 0;
var PaymentExector = /** @class */ (function () {
    function PaymentExector(getInputs, validate) {
        this.getInputs = getInputs;
        this.validate = validate;
    }
    PaymentExector.prototype.run = function () {
        var tests = this.getInputs();
        if (this.validate(tests)) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else {
            console.log('The payment is invalid.');
        }
    };
    return PaymentExector;
}());
exports.PaymentExector = PaymentExector;
