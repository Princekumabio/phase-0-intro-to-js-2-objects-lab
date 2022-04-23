// Write your solution in this file!
const employee = {
    name : "Prince",
    streetAddress : "Rosehip 122"
  };
  
  
  
  function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key]=value;
    return newObject;
  }
  
  console.log(updateEmployeeWithKeyAndValue(employee, "name", "Pedaiah"));
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = employee;
    newObject[key]=value;
    return newObject;
  }
  
  function deleteFromEmployeeByKey(employee,key){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
  }
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"));
  
  function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newObject = employee;
    delete newObject[key];
    return newObject;
  }