export class PaymentExector {
    private getInputs:()=> string[];
    private validate:(tests:string[])=>boolean;
    constructor(getInputs:()=> string[],validate:(tests:string[])=>boolean){
        this.getInputs=getInputs;
        this.validate=validate;
    }
    run():void{
        let tests:string[] =this.getInputs()
        if(this.validate(tests)){
            console.log("Your payment information is being encrypted.");

            console.log("The payment is being processed.")
        } else {
            console.log('The payment is invalid.');
        }
    }
}