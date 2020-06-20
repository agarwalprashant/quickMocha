var assert = require('assert');
import moment from '../src/moment';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('testing moment using mocha', function () {
    describe('format()', function () {
        it('datetime local format constant', function () {
            var m = moment('2016-01-02T23:40:40.678');
            assert.equal(
                m.format(moment.HTML5_FMT.DATETIME_LOCAL),
                '2016-01-02T23:40'
            );
        });
    });
});
