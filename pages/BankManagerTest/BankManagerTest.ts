import {browser,by,element} from 'protractor';

export class AddCustomer {
    bankmanagerloginbtn:string;
    addcustomerbtn: string;
    firstName: string;
    lastName: string;
    postcode: string;
    generateCustomerID:string;
constructor(){
        this.bankmanagerloginbtn= "//button[contains(text(),'Bank Manager Login')]";
        this.addcustomerbtn= "//button[@ng-class ='btnClass1']";
        this.firstName = "//input[@ng-model ='fName']";
        this.lastName = "//input[@ng-model ='lName']";
        this.postcode = "//input[@ng-model ='postCd']";
        this.generateCustomerID = "//button[@type ='submit']";
    }
    
public clickonBankmanagerLoginButton()
{
const btnlogin = element(by.xpath(this.bankmanagerloginbtn));
if (btnlogin.isDisplayed()) 
{
   btnlogin.click();   
console.log("Click button ok");
    
} else 
{
    console.log("element not displayed")
    }
}

public clickonAddCustomerButton()
{
    const custbtn = element(by.xpath(this.addcustomerbtn));
        if (custbtn.isDisplayed())
        {
            custbtn.click();
            console.log("Add customer button click ok");
        } else {
            console.log("customer button not displayed");
        }
    }

    enterfirstName(keys)
{
    const frstname = element(by.xpath(this.firstName));
    if (frstname.isDisplayed())
    {
        frstname.sendKeys(keys);
    } 
    else 
    {
        console.log("first name field is not displaying")    
    }        
    }

    enterlastName(keys)
    {
    const lastName = element(by.xpath(this.lastName));
    if (lastName.isDisplayed())
    {
        lastName.sendKeys(keys);
    } 
    else 
    {
        console.log("first name field is not displaying")    
    }      
    }

enterPostcode(keys)
{
           const pstlcode = element(by.xpath(this.postcode));
        if (pstlcode.isDisplayed())
        {
            pstlcode.sendKeys(keys);
        } 
        else 
        {
            console.log("postal code field is not displaying");
        }
    };
    

addCustomerButtonClick()

{
    const custbtn =element(by.xpath(this.generateCustomerID));
    console.log("button found yes")
    if (custbtn.isDisplayed())
    {
    custbtn.click();
    }else
    {
        console.log("Submit button is not displaying");
    } 

        const alertDialog = browser.switchTo().alert();
        alertDialog.accept();
        var test: any= alertDialog.getText();
        console.log(test);

    }
}
