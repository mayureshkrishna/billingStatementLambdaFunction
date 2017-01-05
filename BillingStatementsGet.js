exports.handler = (event, context, callback) => {
    // TODO implement
    
    var applicationdata = {
  "responseHeader" : {
    "success" : "true",
    "serviceName" : "billing",
    "operationName" : "billingStatementsGet",
    "transactionId" : "ID-dvtcewqv98-corp-cox-com-40483-1482863622704-61-1190",
    "duration" : "893",
    "exitTimestamp" : "20170105 16:13:16.650 EST"
  },
  "billingStatements" : [ {
    "siteId" : "214",
    "accountNumber9" : "004636224",
    "statementCode" : "001",
    "statementStatus" : "ACTIVE",
    "serviceCategories" : [ {
      "description" : "CABLE SERVICES",
      "status" : "ACTIVE"
    }, {
      "description" : "HIGH SPEED DATA SERVICES",
      "status" : "ACTIVE"
    }, {
      "description" : "TELEPHONE SERVICE",
      "status" : "ACTIVE"
    } ],
    "currentBalance" : "-3.75",
    "amountBilled" : "1326.43",
    "minimumDue" : "0.00",
    "billDay" : "25",
    "statementDueDate" : "20160814",
    "currentARBalance" : "0.00",
    "ar1To30" : "0.00",
    "ar31To60" : "0.00",
    "ar61To90" : "0.00",
    "ar91To120" : "0.00",
    "ar121To150" : "0.00",
    "arOver150Days" : "0.00",
    "totalARBalance" : "0.00",
    "writeOffAmount" : "0.00",
    "totalUnappliedPayment" : "0.00",
    "totalUnappliedAdjustment" : "0.00",
    "depositDue" : "0.00",
    "depositPaid" : "-75.00",
    "depositInterest" : "-0.12",
    "lastStatementDate" : "20160810",
    "easyPayEnrolledIndicator" : "Y",
    "billHandleEmailOptions" : "UNKNOWN",
    "languagePreference" : "ENGL",
    "billingAddress" : {
      "sequenceNumber" : "1",
      "addressType" : "B",
      "inventoryNumber" : "332677",
      "customerName" : "SHIRLEY STAPLES",
      "location" : "6816",
      "preDirectional" : "SW",
      "street" : "4th Pl",
      "building" : "APT",
      "apartment" : "B",
      "city" : "Gainesville",
      "state" : "FL",
      "zip5" : "32607",
      "zip4" : "5761",
      "foreignAddressFlag" : "N",
      "alternateAddressFlag" : "N",
      "dateCreated" : "20160612",
      "createdByUserID" : "COXBILLUSR",
      "lastChangeDate" : "20160915",
      "lastChangeUserID" : "COXBILLUSR",
      "addressLine1" : "APT B",
      "addressLine2" : "6816 SW 4th Pl",
      "addressLine3" : "Gainesville, FL 32607-5761"
    }
  } ]
}
    
    callback(null, applicationdata);
};
