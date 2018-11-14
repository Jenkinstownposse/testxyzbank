var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "launch and enter value in Bankmanager|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006800a0-0014-00fe-0047-0067006c00c0.png",
        "timestamp": 1541798190814,
        "duration": 1447
    },
    {
        "description": "click on Bank manager Login button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003800d8-00ff-002f-00f8-004d00ab00cb.png",
        "timestamp": 1541798192623,
        "duration": 145
    },
    {
        "description": "Click on Add customer button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003f0026-009f-0049-00be-00b6003e0048.png",
        "timestamp": 1541798193252,
        "duration": 231
    },
    {
        "description": "enter the first name value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ea0052-00cd-0064-007a-00ad002400f6.png",
        "timestamp": 1541798193985,
        "duration": 184
    },
    {
        "description": "enter the last name value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00de0081-00cb-0010-0022-003000c3003a.png",
        "timestamp": 1541798194638,
        "duration": 151
    },
    {
        "description": "enter the Pstal code value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00480054-0043-00a1-002f-007f002100c2.png",
        "timestamp": 1541798195121,
        "duration": 5
    },
    {
        "description": "Click on add customer button|bankmanager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 1436,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: no such alert\n  (Session info: chrome=70.0.3538.77)\n  (Driver info: chromedriver=2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform=Windows NT 10.0.16299 x86_64)",
        "trace": "NoSuchAlertError: no such alert\n  (Session info: chrome=70.0.3538.77)\n  (Driver info: chromedriver=2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform=Windows NT 10.0.16299 x86_64)\n    at Object.checkLegacyResponse (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:546:15)\n    at parseHttpResponse (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:441:30)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: WebDriver.switchTo().alert()\n    at Driver.schedule (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:807:17)\n    at TargetLocator.alert (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1862:29)\n    at AddCustomer.addCustomerButtonClick (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\BankManagerTest.ts:99:48)\n    at Suite.<anonymous> (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.ts:43:31)\n    at step (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.js:32:23)\n    at Object.next (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.js:13:53)\n    at C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.js:3:12)\n    at UserContext.<anonymous> (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.ts:42:40)\nFrom: Task: Run it(\"Click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.ts:42:5)\n    at addSpecsToSuite (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jdcs4020\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jdcs4020\\Desktop\\xyz_bank\\xyz_bank\\xyz_bank\\specs\\assignment.ts:15:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "002f00ba-0035-00ef-0095-00ef005000ba.png",
        "timestamp": 1541798195438,
        "duration": 339
    },
    {
        "description": "launch and enter value in Bankmanager|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002900a4-00e1-0000-0011-00eb00dd007e.png",
        "timestamp": 1541798398841,
        "duration": 1417
    },
    {
        "description": "click on Bank manager Login button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0021004c-004d-00cc-00e5-0083002300e2.png",
        "timestamp": 1541798400631,
        "duration": 485
    },
    {
        "description": "Click on Add customer button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d30057-0063-00c3-00b2-008d004f00db.png",
        "timestamp": 1541798401560,
        "duration": 166
    },
    {
        "description": "enter the first name value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000100ec-0083-00b1-0059-000200440025.png",
        "timestamp": 1541798402152,
        "duration": 146
    },
    {
        "description": "enter the last name value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00950070-0051-00e2-00ee-0022004d009d.png",
        "timestamp": 1541798402769,
        "duration": 196
    },
    {
        "description": "enter the Pstal code value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0077005d-00e4-005d-00b9-004f0077004f.png",
        "timestamp": 1541798403327,
        "duration": 149
    },
    {
        "description": "Click on add customer button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 4396,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00210004-00aa-0011-00d0-008600e100f6.png",
        "timestamp": 1541798403859,
        "duration": 306
    },
    {
        "description": "launch and enter value in Bankmanager|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006400ac-0071-00cb-002a-0061003e002e.png",
        "timestamp": 1542222711820,
        "duration": 1478
    },
    {
        "description": "click on Bank manager Login button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e80068-00a6-00fa-0076-003600de00e4.png",
        "timestamp": 1542222713718,
        "duration": 113
    },
    {
        "description": "Click on Add customer button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000000d5-003d-00fc-0026-00b800d90016.png",
        "timestamp": 1542222714159,
        "duration": 100
    },
    {
        "description": "enter the first name value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00440083-00c6-0005-0026-0008008e00e2.png",
        "timestamp": 1542222714859,
        "duration": 133
    },
    {
        "description": "enter the last name value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c90063-00f4-0050-00e1-0091008400d1.png",
        "timestamp": 1542222715430,
        "duration": 118
    },
    {
        "description": "enter the Pstal code value|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d80071-00ed-0033-006a-00c2000300dc.png",
        "timestamp": 1542222715830,
        "duration": 113
    },
    {
        "description": "Click on add customer button|bankmanager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7492,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003800c5-004f-0037-0003-00530079001c.png",
        "timestamp": 1542222716222,
        "duration": 135
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};