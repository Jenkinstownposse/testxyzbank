import {browser,by,element} from 'protractor';
import {Actions} from '../../Action/Action';

export class OpenAccount extends Actions {
   openAccountbtn: string;
   CustomerSelectionXpath: string;
   clickOpenAccount: string;
   customerName: string;
   currency: string;
   processClick: string;

    constructor(name,value1) {
        super();
        this.clickOpenAccount = "//button[@ng-click='openAccount()']"
        this.customerName = "//*[contains(text(),'"+name+"')]"
        this.currency = "//*[contains(text(),'"+value1+"')]"
        this.processClick = "//button[@type='submit']"


   }

}

public clickonOpenAccountbutton()
   
{
    this.myclick(this.clickOpenAccount,"click on on open account");
//const btnlogin = element(by.xpath(this.openAccountbtn));
//if (btnlogin.isDisplayed()) 
}
   //btnlogin.click();  
  //  this.myClick(btnlogin, "able to click");   

    //else
      //      console.log("element not displayed");
    
public clickCustomerdropdown()
{

this.dropDown(this.CustomerSelectionXpath, 'Selecting Drop Down');


}
public clickOpenAccountButton(){
    this.myClick(this.clickOpenAccountButton,"click on open account");

}
selectCurrency() {
    this.dropDown(this.currency," select currency name");
}
clickOnPorcessbutton(){
    this.myclick(this.procesClick," click on proces button");
}

