const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    
    describe('should calculate points for normal hillsize', () => { //powinien obliczyć punkty dla normalnego wzniesienia
        it('should return correct points when k points is met', () => { //powinien zwrócić poprawne punkty po osiągnięciu k punktów
            const actual = calculateDistancePoints(111, 109, 98); // deklaracja stałej actual z funkcją i parametrami distance, hillSize, kPoint
            const expected = 86; // deklaracja stałej expected (spodziewanej)
            assert.equal(actual, expected);
        });
    
        it('should return correct points when k points is not met', () => {
            const actual = calculateDistancePoints(85.5, 109, 98);
            const expected = 35;
            assert.equal(actual, expected);
        });
    
    describe('should calculate points for big hillsize', () => {
        it('should return correct points when k points is met')    
            const actual = calculateDistancePoints(134, 134, 120);
            const expected = 85.2;
            assert.equal(actual, expected);
        });
    
        it('should return correct points when k points is not met')
            const actual = calculateDistancePoints(107.5, 134, 120);
            const expected = 37.5;
            assert.equal(actual, expected);
        });
    
    describe('should calculate points for mammoth hillsize', () => {
        it('should return correct points when k point is met', () => {
            const actual = calculateDistancePoints(227.5, 225, 200);
            const expected = 153;
            assert.equal(actual, expected);
        });
    
        it('should return correct points when k point is not met', () => {
            const actual = calculateDistancePoints(144, 225, 200);
            const expected =  52.8;
            assert.equal(actual, expected);
        });
        });
})
