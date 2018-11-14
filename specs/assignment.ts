

import {element,by,browser, ExpectedConditions} from "protractor" ;
//import {DataProvider } from '..//dataProvider/dataProvider';
import {async} from "q";
//let using = require('jasmine-data-provider');
import {AddCustomer} from '../../xyz_bank/pages/BankManagerTest/BankManagerTest';
import {OpenAccount} from '../pages/OpenAcount/OpenAccount';
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
let jsd= require('../../xyz_bank/data/testData'); 

var customerdetails = new AddCustomer();
var openaccountdetails = new OpenAccount
(jsd.CustomerData1.firstname+" "+jsd.CustomerData1.lastname,jsd.CustomerData1.currency);

//using(DataProvider.Common, async function (data)
//{
describe('bankmanager',function(){
    it('launch and enter value in Bankmanager',async()=>{
        
        await browser.get(jsd.CustomerData1.url);    
        console.log("I done did it")
    });
    
    it('click on Bank manager Login button', async()=>{
        await customerdetails.clickonBankmanagerLoginButton();    
    });
    
    it('Click on Add customer button', async()=>{
        await customerdetails.clickonAddCustomerButton();
    });

    it('enter the first name value', async()=>{
        await customerdetails.enterfirstName(jsd.CustomerData1.firstname);
    });    
    
    it('enter the last name value', async()=>{
        await customerdetails.enterlastName(jsd.CustomerData1.lastname);      
    });

    it('enter the Pstal code value', async()=>{
        await customerdetails.enterPostcode(jsd.CustomerData1.Code);
    });
    it('Click on add customer button', async()=>{
        await customerdetails.addCustomerButtonClick();
    });

    //*it(Click on Open Customer button) 
    it('Click on Open customer button', async()=>{ 
        await openaccountdetails.
    });

     //*it(Click and select Customer dropdown*//
          it('Click and select customer dropdown', async()=>{ 
        await openaccountdetails.clickOpenAccount();
    });
        it("select currency ",() =>{
            openaccountdetails.selectCurrency();
        
});
//}
        it("click on Process button to generate account no", () => { 
            openaccountdetails.clickOnProcessButton();
            var alertValidate = browser.switchTo().alert();
            expect(alertValidate.accept).toBeDefined();
            alertValidate.getText().then((text) => { 
            console.log(text);
            alertValidate.accept();
    })
    
});
});
