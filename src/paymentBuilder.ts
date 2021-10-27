import { PaymentExector } from "./paymentExector"
export class PaymentBuilder {
    private getInputs:()=> string[];
    private validate:(tests:string[])=>boolean;
    private paymentExector!: PaymentExector;
    constructor(getInputs:()=> string[],validate:(tests:string[])=>boolean){
        this.getInputs=getInputs;
        this.validate=validate;
    }
    build():void {
        this.paymentExector = new PaymentExector(this.getInputs,this.validate);
    }
    getPaymentExector():PaymentExector{
        return this.paymentExector;
    }
}