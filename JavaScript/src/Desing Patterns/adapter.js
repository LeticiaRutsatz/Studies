//Adapter is a structural pattern that allows incompatible interfaces to work together.
//It wraps an existing object with a new interface so that it becomes compatible with other code

//oldest code that we want to replace
const moment = require('moment');

class Moment {
    constructor (inputData) {
        this.inputData =  inputData;
    }

    formatToDayMonthYear() {
       return moment(this.inputData).format('DD-MM-YYYY');
    }
};

//new class that we want to put in place of the Moment
const dataFn = require('date-fns/format');
const parseIso = require('date-fns/parseISO');

class DataFns {
    constructor(inputData) {
        this.inputData = inputData;
    }

    parseISO() {
      return parseIso(this.inputData)
    }

    formatToDayMonthYear() {
        return dataFn(this.parseISO(), 'dd-MM-yyyy')
    }
};

//Adapter to be more easy to make this change
class DataAdapter {
    constructor (inputData) {
        this.inputData = inputData
        this.dataApi =  new DataFns(inputData)
    }

    formatToDayMonthYear() {
        console.log(this.dataApi.formatToDayMonthYear())
    }
};


//old usage
const showData1 = new Moment('2020-09-19');
showData1.formatToDayMonthYear();

//new usage with adpater
const showData2 = new DataAdapter('2020-09-19');
showData2.formatToDayMonthYear();