import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate Text Filter action Object with texzt value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate Text Filter action Object with default value', () => {
    const text = 'Water'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate Sort By action object', () => {
    expect(sortByAmount(2)).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 2 
    });
});
test('should generate Sort By Date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    })
});