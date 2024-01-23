const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  const firstTwoDrivers = returnFirstTwoDrivers(scuberDrivers);

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
  };
  
  const scuberDriver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  const lastTwoDrivers = returnLastTwoDrivers(scuberDriver);

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function(integer){
        return function(fare){
            return integer * fare
}
  }

  const fareDoubler = createFareMultiplier(2)

  const fareTripler = createFareMultiplier(3)

  function selectDifferentDrivers(drivers, driversSelector){
    return driversSelector(drivers)
  }

  selectDifferentDrivers(drivers, returnLastTwoDrivers)