// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter( driver => {
        return driver.toLowerCase() === string.toLowerCase()}
    )
}

  function fuzzyMatch (drivers, string) {
    let lengthOfName = string.length;
    return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === string;
    });
  }
  
  function matchName(drivers, string){
    return drivers.filter(driver => {
      return driver.name.toLowerCase() === string.toLowerCase();
    })
  }
