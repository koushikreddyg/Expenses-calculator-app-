import moment from 'moment';
const filters={
    text:'',
    amount:'',
    startDate: undefined,
    endDate: undefined,
}
const altFilters={
    text:'bills',
    amount: 'amount',
    startDate:moment(0),
    endDate:moment(0).add(3,'days') 
}
export {filters, altFilters};