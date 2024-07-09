/* 
    singleton = only have exactly one instance based on a class 
*/


abstract class Department1 {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
      // console.log(Department1.fiscalYear);
    }
  
    static createEmployee(name: string) {
      return { name: name };
    }
  
    abstract describe(this: Department1): void;
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment1 extends Department1 {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  
    describe() {
      console.log('IT Department1 - ID: ' + this.id);
    }
  }
  
  class AccountingDepartment1 extends Department1 {
    private lastReport: string;
    private static instance: AccountingDepartment1; 
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
  
    //private constructor > not accessible from outside of the class 
    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }
  
    static getInstance() { 
        // can only create the new instant one time -- will get the same instance if calling it multiple times. 

        if(AccountingDepartment1.instance) {
            return this.instance; // 'this' is referred to the class itself in the case of a static method 
            // for the regular method > 'this' is referred to the instantiated class 
        }

        this.instance = new AccountingDepartment1('d2', []); // can access the constructor from within the class 
        return this.instance; 
    }


    describe() {
      console.log('Accounting Department1 - ID: ' + this.id);
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const employee11 = Department1.createEmployee('Max');
  console.log(employee1, Department1.fiscalYear);
  
  const it1 = new ITDepartment1('d1', ['Max']);
  
  it1.addEmployee('Max');
  it1.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it1.describe();
  it1.name = 'NEW NAME';
  it1.printEmployeeInformation();
  
  console.log(it);
  
   //const accounting1 = new AccountingDepartment1('d2', []); // can't instantiate anymore 
   const accounting1 = AccountingDepartment1.getInstance();
   const accounting2 = AccountingDepartment1.getInstance();
   console.log( accounting1, accounting2);
  
  accounting1.mostRecentReport = 'Year End Report';
  accounting1.addReport('Something went wrong...');
  console.log(accounting.mostRecentReport);
  
  accounting1.addEmployee('Max');
  accounting1.addEmployee('Manu');
  
  // accounting.printReports();
  // accounting.printEmployeeInformation();
  accounting1.describe();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  