import { asideReload, headerReload } from "./modules/module.js";

let aside = document.querySelector('.aside')
let header = document.querySelector('.header')

asideReload(aside)
headerReload(header)




const labels = [
    'Ethereum',
    'Bitcoin',
    'Dash',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        borderColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        weight: 0.1,
        data: [18, 64, 18],
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {}
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);





const SecondLabels = [
    '2',
    '4',
    '6',
    '8',
    '10',
    '12',
    '14',
];

const SecondData = {
    labels: SecondLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        borderColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        weight: 0.1,
        data: [14, 10, 16, 13, 15, 14, 15, 20],
    }]
};

const SecondConfig = {
    type: 'line',
    data: SecondData,
    options: {}
};


const mySecondChart = new Chart(
    document.getElementById('mySecondChart'),
    SecondConfig
);





const ThirdLabels = [
    '2',
    '4',
    '6',
    '8',
    '10',
    '12',
    '14',
];

const ThirdData = {
    labels: SecondLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        borderColor: ['#FFFFFF', '#018FFF', '#FAD679'],
        weight: 0.1,
        data: [14, 10, 16, 13, 15, 14, 15, 20],
    }]
};
        
const ThirdConfig = {
    type: 'line',
    data: ThirdData,
    options: {}
};


const myThirdChart = new Chart(
    document.getElementById('myThirdChart'),
    SecondConfig
);

