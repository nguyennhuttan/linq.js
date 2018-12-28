
(function () {
    'use strict';

    Array.prototype.all = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'all' takes ${args.length} arguments`);

        let predicate = args[0];

        if (typeof predicate !== 'function') throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);

        return this.length ? this.filter(predicate).length === this.length : false;
    };
    Array.prototype.any = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'any' takes ${args.length} arguments`);

        let predicate = args[0];

        if (typeof predicate !== 'function') throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);

        return this.length ? typeof this.find(predicate) !== 'undefined' : false;
    };
    Array.prototype.contains = function (value) {
        if (args.length !== 1) throw new Error(`No overload for method 'contains' takes ${args.length} arguments`);

        return this.length ? typeof this.find(item => Object.is(item, value)) !== 'undefined' : false;
    };
    Array.prototype.count = function (...args) {
        if (args.length && args.length !== 1) throw new Error(`No overload for method 'count' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        switch (typeof predicate) {
            case 'undefined':
                return this.length;
            case 'function':
                return this.length ? this.filter(predicate).length : 0;
        }
    };
    Array.prototype.first = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'first' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        switch (typeof predicate) {
            case 'undefined':
                return this.length
                    ? this[0]
                    : (function () { throw new Error('Sequence contains no elements'); }());
            case 'function':
                return this.length
                    ? this.find(predicate)
                    : (function () { throw new Error('Sequence contains no elements'); }());
        }
    };
    Array.prototype.firstOrDefault = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'firstOrDefault' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        switch (typeof predicate) {
            case 'undefined':
                return this.length ? this[0] : undefined;
            case 'function':
                return this.length ? this.find(predicate) : undefined;
        }
    };
    Array.prototype.groupBy = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'groupBy' takes ${args.length} arguments`);

        let keySelector = args[0];

        if (typeof keySelector !== 'function') throw new Error(`'keySelector': Cannot convert type '${typeof keySelector}' to 'function'`);

        if (!this.length) return [];

        let temp = [];

        let results = [];

        this.forEach(function (item, index, arr) {
            let value = keySelector(item);

            if (typeof temp.find(x => Object.is(x, value)) === 'undefined') {
                temp.push(value);

                let items = arr.filter(x => keySelector(x) === value);

                items.forEach(x => results.push(x));
            }
        });

        return results;
    };
    Array.prototype.last = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'last' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        switch (typeof predicate) {
            case 'undefined':
                return this.length
                    ? this[this.length - 1]
                    : (function () { throw new Error('Sequence contains no elements'); }());
            case 'function':
                if (!this.length) throw new Error('Sequence contains no elements');

                let items = this.filter(predicate);

                return items.length
                    ? items[items.length - 1]
                    : (function () { throw new Error('Sequence contains no elements'); }());
        }
    };
    Array.prototype.lastOrDefault = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'lastOrDefault' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        switch (typeof predicate) {
            case 'undefined':
                return this.length ? this[this.length - 1] : undefined;
            case 'function':
                if (!this.length) return undefined;

                let items = this.filter(predicate);

                return items.length ? items[items.length - 1] : undefined;
        }
    };
    Array.prototype.orderBy = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'orderBy' takes ${args.length} arguments`);

        let keySelector = args[0];

        if (typeof keySelector !== 'function') throw new Error(`'keySelector': Cannot convert type '${typeof keySelector}' to 'function'`);

        return this.sort((x, y) => {
            let key_x = keySelector(x), key_y = keySelector(y);

            return key_x > key_y ? 1 : key_x < key_y ? -1 : 0;
        });
    };
    Array.prototype.orderByDescending = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'orderByDescending' takes ${args.length} arguments`);

        let keySelector = args[0];

        if (typeof keySelector !== 'function') throw new Error(`'keySelector': Cannot convert type '${typeof keySelector}' to 'function'`);

        return this.sort((x, y) => {
            let key_x = keySelector(x), key_y = keySelector(y);

            return key_x < key_y ? 1 : key_x > key_y ? -1 : 0;
        });
    };
    Array.prototype.select = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'select' takes ${args.length} arguments`);

        let selector = args[0];

        if (typeof selector !== 'function') throw new Error(`'selctor': Cannot convert type '${typeof selector}' to 'function'`);

        return this.length ? this.map(selector) : [];
    };
    Array.prototype.selectMany = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'selectMany' takes ${args.length} arguments`);

        let selector = args[0];

        if (typeof selector !== 'function') throw new Error(`'selctor': Cannot convert type '${typeof selector}' to 'function'`);

        return this.length ? this.map(selector).reduce((x, y) => x.concat(y)) : [];
    };
    Array.prototype.single = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'single' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }
        
        switch (typeof predicate) {
            case 'undefined':
                return this.length
                    ? this[0]
                    : (function () { throw new Error('Sequence contains no elements'); }());
            case 'function':
                if (!this.length) throw new Error('Sequence contains no elements');

                let items = this.filter(predicate);

                if (items.length > 1) throw new Error('Sequence contains more than one matching element');

                return items[0];
        }
    };
    Array.prototype.singleOrDefault = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'singleOrDefault' takes ${args.length} arguments`);

        let predicate = args[0];

        if (args.length && typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        switch (typeof predicate) {
            case 'undefined':
                return this.length ? this[0] : undefined;
            case 'function':
                if (!this.length) return undefined;

                let items = this.filter(predicate);

                return items.length ? items[0] : undefined;
        }
    };
    Array.prototype.skip = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'skip' takes ${args.length} arguments`);

        let count = args[0];

        if (typeof count !== 'number') {
            throw new Error(`'count': Cannot convert type '${typeof count}' to 'number'`);
        }

        return this.length && count < this.length ? this.slice(count, this.length) : [];
    };
    Array.prototype.skipWhile = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'skipWhile' takes ${args.length} arguments`);

        let predicate = args[0];

        if (typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        return this.length ? this.filter(item => !predicate(item)) : [];
    };
    Array.prototype.take = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'take' takes ${args.length} arguments`);

        let count = args[0];

        if (typeof count !== 'number') {
            throw new Error(`'count': Cannot convert type '${typeof count}' to 'number'`);
        }

        return count && this.length ? this.slice(0, count) : [];
    };
    Array.prototype.takeWhile = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'takeWhile' takes ${args.length} arguments`);

        let predicate = args[0];

        if (typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        return this.length ? this.filter(predicate) : [];
    };
    Array.prototype.where = function (...args) {
        if (args.length !== 1) throw new Error(`No overload for method 'where' takes ${args.length} arguments`);

        let predicate = args[0];

        if (typeof predicate !== 'function') {
            throw new Error(`'predicate': Cannot convert type '${typeof predicate}' to 'function'`);
        }

        return this.length ? this.filter(predicate) : [];
    };
}());
