"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustomer = /** @class */ (function () {
    function AddCustomer() {
        this.bankmanagerloginbtn = "//button[contains(text(),'Bank Manager Login')]";
        this.addcustomerbtn = "//button[@ng-class ='btnClass1']";
        this.firstName = "//input[@ng-model ='fName']";
        this.lastName = "//input[@ng-model ='lName']";
        this.postcode = "//input[@ng-model ='postCd']";
        this.generateCustomerID = "//button[@type ='submit']";
    }
    AddCustomer.prototype.clickonBankmanagerLoginButton = function () {
        var btnlogin = protractor_1.element(protractor_1.by.xpath(this.bankmanagerloginbtn));
        if (btnlogin.isDisplayed()) {
            btnlogin.click();
            console.log("Click button ok");
        }
        else {
            console.log("element not displayed");
        }
    };
    AddCustomer.prototype.clickonAddCustomerButton = function () {
        var custbtn = protractor_1.element(protractor_1.by.xpath(this.addcustomerbtn));
        if (custbtn.isDisplayed()) {
            custbtn.click();
            console.log("Add customer button click ok");
        }
        else {
            console.log("customer button not displayed");
        }
    };
    AddCustomer.prototype.enterfirstName = function (keys) {
        var frstname = protractor_1.element(protractor_1.by.xpath(this.firstName));
        if (frstname.isDisplayed()) {
            frstname.sendKeys(keys);
        }
        else {
            console.log("first name field is not displaying");
        }
    };
    AddCustomer.prototype.enterlastName = function (keys) {
        var lastName = protractor_1.element(protractor_1.by.xpath(this.lastName));
        if (lastName.isDisplayed()) {
            lastName.sendKeys(keys);
        }
        else {
            console.log("first name field is not displaying");
        }
    };
    AddCustomer.prototype.enterPostcode = function (keys) {
        var pstlcode = protractor_1.element(protractor_1.by.xpath(this.postcode));
        if (pstlcode.isDisplayed()) {
            pstlcode.sendKeys(keys);
        }
        else {
            console.log("postal code field is not displaying");
        }
    };
    ;
    AddCustomer.prototype.addCustomerButtonClick = function () {
        var custbtn = protractor_1.element(protractor_1.by.xpath(this.generateCustomerID));
        console.log("button found yes");
        if (custbtn.isDisplayed()) {
            custbtn.click();
        }
        else {
            console.log("Submit button is not displaying");
        }
        var alertDialog = protractor_1.browser.switchTo().alert();
        alertDialog.accept();
        var test = alertDialog.getText();
        console.log(test);
    };
    return AddCustomer;
}());
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=BankManagerTest.js.map