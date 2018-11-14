import {element,by,browser, ExpectedConditions} from "protractor" ;
//import {DataProvider } from '..//dataProvider/dataProvider';
import {async} from "q";
//let using = require('jasmine-data-provider');
import {AddCustomer} from '../../xyz_bank/pages/BankManagerTest/BankManagerTest';
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
let jsd= require('../../xyz_bank/data/testData'); 

var customerdetails = new AddCustomer();