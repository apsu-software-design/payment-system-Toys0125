import readlineSync = require('readline-sync'); //for easier repeated prompts
/**
 * Used Static classes to allow easy changing of payment methods.
 */
export class PaymentSystemsTemplate {
    static CreditCard = class {
        static getInputs(): string[] {
            console.log('Enter Credit Card Payment Details.');
            let test: string[] = [];
            test.push((readlineSync.question('  Name: ')));
            test.push(readlineSync.question('  Credit Card Number: '));
            test.push(readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
            return test;
        }
        static validate(tests: string[]): boolean {
            //0:name 1:creditCardNumber 2:creditCardExpiration
            return /^[\w.' ]+$/.test(tests[0]) && /\d{15,16}/.test(tests[1]) && /\d\d\/\d\d/.test(tests[2]);
        }
    }
    static BankDraft = class {
        static getInputs(): string[] {
            console.log('Enter Bank Account Details.');
            let test: string[] = [];
             test.push(readlineSync.question('  Name: '));
             test.push(readlineSync.question('  Bank Routing Number: '));
             test.push(readlineSync.question('  Bank Account Number: '));
  
            return test;
        }
        static validate(tests: string[]): boolean {
            // 0:name 1:bankRoutingNumber 2:bankAccountNumber
            return /^[\w.' ]+$/.test(tests[0]) && /\d{9}/.test(tests[1]) && /\d{6,12}/.test(tests[2]);
        }
    }
    static Online = class {
        static getInputs(): string[] {
            console.log('Enter Online Payment Details.');

            let test: string[] = [];
            test.push(readlineSync.question('  Enter Your Email Address: '));
            test.push(readlineSync.question('  Enter Your Payment Password: '));
  
            return test;
        }
        static validate(tests: string[]): boolean {
            // 0:email 1:paymentPassword
            return /^[\w@.]+$/.test(tests[0]) && /\w+/.test(tests[1]);
        }
    }
    static Offline = class {
        static getInputs(): string[] {
            console.log('Enter Offline Payment Details.');

            let test: string[] = [];
            test.push(readlineSync.question('  Name: '));
            test.push(readlineSync.question('  Enter Your Billing Address: '));
  
            return test;
        }
        static validate(tests: string[]): boolean {
            // 0:name 1:billingAddress
            return /^[\w@.]+$/.test(tests[0]) && /\w+/.test(tests[1]);
        }
    }
}
