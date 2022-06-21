let createEmployeeRecord = function(info){
    return {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

let createEmployeeRecords = function(employeeInfo) {
    return employeeInfo.map(function(info){
        return createEmployeeRecord(info)
    })
}

let createTimeInEvent = function (employee, clockin){
    let [date, hour] = clockin.split(' ')
    employee.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return employee
}