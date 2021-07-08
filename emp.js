//Q3.What will be the output of the following code?
//var Employee =
//{
//company: 'Rohit'
//}
//var Emp1 = Object.create(employee);
//delete Emp1.company Console.log(emp1.company);

var Employee = {
    company: 'Rohit'
  }
  var Emp1 = Object.create(Employee);
  delete Emp1.company
  console.log(Emp1.company);


  //The output will be Rohit