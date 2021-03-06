import {browser,by,element} from 'protractor';
import {Actions} from '../action/action';

export class AddCustomer extends Actions {
clickAdCustomer : string;
firstName : string;
lastName : string;
postCode : string;
generateCustomerID : string;

constructor()  {
    super();
    this.clickAdCustomer = "//button[@ng-click = 'addCust()']"
    this.firstName = "//input[@ng-model = 'fName']";
    this.lastName = "//input[@ng-model = 'lName']";
    this.postCode = "//input[@ng-model = 'postCd']"
    this.generateCustomerID = "//button[@type = 'submit']"
}
public clickAddCustomerButton()
{
    this.myClick(this.clickAdCustomer , "Click on add Customer");
    }
    enterFirstName(keys)
    {
        this.sendKey(this.firstName, "enter first name", keys);
    }
    enterLastName(keys)
    {
        this.sendKey(this.lastName, "enter last name", keys);
    }

}