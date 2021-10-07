google.load("visualization", "1.1", {packages:["table"]});

var ATTRIBUTES = 'https://docs.google.com/spreadsheets/d/1ntjx1taeV7Ijs888TqJMRwt-yfy75kLHZ6z6B2aOQ6M/edit#gid=0';

var sheet = SpreadsheetApp.getActiveSpreadsheet(ATTRIBUTES);

Console.log(sheet.getActiveSheet());