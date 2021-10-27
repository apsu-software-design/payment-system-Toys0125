"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentBuilder = void 0;
var paymentExector_1 = require("./paymentExector");
var PaymentBuilder = /** @class */ (function () {
    function PaymentBuilder(getInputs, validate) {
        this.getInputs = getInputs;
        this.validate = validate;
    }
    PaymentBuilder.prototype.build = function () {
        this.paymentExector = new paymentExector_1.PaymentExector(this.getInputs, this.validate);
    };
    PaymentBuilder.prototype.getPaymentExector = function () {
        return this.paymentExector;
    };
    return PaymentBuilder;
}());
exports.PaymentBuilder = PaymentBuilder;
