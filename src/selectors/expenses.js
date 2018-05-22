import moment from 'moment';

//Get visible expense
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createAtMoment = moment(expense.createAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrBefore(createAtMoment, 'day') : true;
        const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());

        // figure out if expenses.description as the text variable string inside of it
        // includes
        // convert both strings to lower case

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        //sort By date desc
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        }
        //sort By amount desc
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
