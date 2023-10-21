// Write your solution in this file!

//define a `employee` variable and assign it to an `Object` containing `name` and `streetAddress`

const employee ={
  name: "Sam",
  streetAddress: "kalimoni"
}

function updateEmployeeWithKeyAndValue( obj, key, value){
  const newobj = {...obj};

  newobj[key] = value;

  return newobj;
 }

 const newEmployee1 = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')

 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
 }

 const anotherEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

 //deleteFromEmployeeByKey(employee, key)  => 1) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)  2) does not modify the original employee (it is non-destructive)

function deleteFromEmployeeByKey(obj, key){
  let newobj = {...obj};
  delete newobj[key];

  return newobj
}
 let newEmployee = deleteFromEmployeeByKey(employee, 'name')

 // destructivelyDeleteFromEmployeeByKey(employee, key)  returns employee without the deleted key/value pair:

 function destructivelyDeleteFromEmployeeByKey(obj, key){

  delete obj[key];

  return obj;
 }


 let newEmployee2 = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress')