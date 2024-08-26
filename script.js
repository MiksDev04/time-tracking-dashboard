// define elements
const options = document.querySelectorAll('.option-list input');

// get data from json file
function getData() {
    fetch('data.json')
        .then(value => value.json())
        .then(updateOption)
        .catch(error => console.error(error));
}
getData();

// update the option chosen by the user
function updateOption(obj) {
    options.forEach(option => {
        if (option.checked) {
            locateData(option.value, obj);
        }
    })
}
changeOption();

// change the option
function changeOption() {
    options.forEach((option, index, array) => {
        option.addEventListener('input', function() {
            getData();
        })
    })
}

// put the data according to the option chosen
function locateData(value, obj) {
    const dashboards = document.querySelectorAll('.dashboards');
    const dashboardTitle = document.querySelectorAll('.dashboard-title .labels span');
    const currentTime = document.querySelectorAll('.dashboard-title .current');
    const previousTime = document.querySelectorAll('.dashboard-title .previous');

    console.log(value, obj)
    obj.forEach( function(dataObj, index, array) {
        if (value === 'daily') {
            dashboardTitle[index].textContent = dataObj.title;
            currentTime[index].textContent = `${dataObj.timeframes.daily.current}hrs`;
            previousTime[index].textContent = `Yesterday -${dataObj.timeframes.daily.previous}hrs`;
        } else if (value === 'weekly') {
            dashboardTitle[index].textContent = dataObj.title;
            currentTime[index].textContent = `${dataObj.timeframes.weekly.current}hrs`;
            previousTime[index].textContent = `Last week -${dataObj.timeframes.weekly.previous}hrs`;
        } else if (value === 'monthly') {
            dashboardTitle[index].textContent = dataObj.title;
            currentTime[index].textContent = `${dataObj.timeframes.monthly.current}hrs`;
            previousTime[index].textContent = `Last month -${dataObj.timeframes.monthly.previous}hrs`;

        }
    })




}

