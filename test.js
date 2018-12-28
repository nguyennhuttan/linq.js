(function (global) {
    'use strict';

    require('babel-polyfill');

    let helper = require('../helpers/helper');

    let __SYSTEM__ = helper.__importAll(require.context('../System', true, /.+/));

    let ArgumentNullException = __SYSTEM__.ArgumentNullException,
        ArgumentOutOfRangeException = __SYSTEM__.ArgumentOutOfRangeException,
        bool = __SYSTEM__.bool,
        char = __SYSTEM__.char,
        double = __SYSTEM__.double,
        float = __SYSTEM__.float,
        int = __SYSTEM__.int,
        Int32 = __SYSTEM__.Int32,
        string = __SYSTEM__.string;
    
    let IEnumerable = (function () {
        let _T, _TSource;

        let __data = {};

        __data.Aggregate = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.All = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('All', args.length);
            }

            let predicate = args[0];

            if (typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, y);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            return source.length ? source.filter(predicate).length === source.length : false;
        };
        __data.Any = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Any', args.length);
            }

            let predicate = args[0];

            if (typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);
                 helper.__cannotConvert(1, x, y);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            return source.length ? source.filter(predicate).length > 0 : false;
        };
        __data.Average = function (...args) {
            if (!/^[01]$/.args.length || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Average', args.length);
            }

            let selector = args[0], t = typeof selector;

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.Concat = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.Contains = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Contains', args.length);
            }

            let value = args[0], x = helper.__typeFormat(value), y = helper.__typeFormat(_T);

            if (x !== y) {
                 helper.__cannotConvert(1, x, y);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            let k = -1;

            if (source.length) {
                k = source.findIndex(x => Object.Equals(x, value));
            }
            return k;
        };
        __data.Count = function (...args) {
            if (!/^[01]$/.test(args.length) || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Count', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);
                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            return !predicate ? source.length : source.filter(predicate).length;
        };
        __data.Distinct = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.ElementAt = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('ElementAt', args.length);
            }

            let index = args[0];

            if (!Object.is(index, System.int)) {
                 helper.__cannotConvert(1, helper.__typeFormat(index), 'int');
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            let item = source[index];

            if (typeof item === 'undefined') throw new ArgumentOutOfRangeException('Specified argument was out of the range of valid values.', 'index');

            return item;
        };
        __data.ElementAtOrDefault = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('ElementAtOrDefault', args.length);
            }

            let index = args[0];

            if (!Object.is(index, System.int)) {
                 helper.__cannotConvert(1, helper.__typeFormat(index), 'int');
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            let r = null;

            return source.length
                ? (r = source[index]) ? r : null
                : _T === System.int || _T === System.double || _T === System.float ? 0 : null;
        };
        __data.Except = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Except', args.length);
            }

            let second = args[0], x = helper.__typeFormat(second), y = helper.__typeFormat(_T);

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.First = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('First', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            if (!predicate) {
                if (source.length) return source[0];

                throw new ArgumentNullException('Sequence contains no elements');
            }

            let arr = source.filter(predicate);

            if (!arr.length) throw new ArgumentNullException('Sequence contains no elements');

            return arr[0];
        };
        __data.FirstOrDefault = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('FirstOrDefault', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            let r = null;

            return !predicate ? source.length ? source[0] : null : (r = source.find(predicate)) ? r : null;
        };
        __data.GroupBy = function (...args) {
            if (args !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('GroupBy', args.length);
            }

            let keySelector = args[0];

            if (typeof keySelector !== 'function') {
                throw `The type arguments for method 'Enumerable.GroupBy<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            if (typeof this.ThenBy === 'undefined') {
                let thenBy = function () {

                };

                this.ThenBy = thenBy;
            }
            return this;
        };
        __data.Last = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Last', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate === 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            if (!predicate) {
                if (source.length) return source[source.length - 1];

                throw new ArgumentNullException('Sequence contains no elements');
            }

            let arr = source.filter(predicate);

            if (!arr.length) throw new ArgumentNullException('Sequence contains no elements');

            return arr[arr.length - 1];
        };
        __data.LastOrDefault = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('LastOrDefault', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            let r = null;

            return !predicate
                ? source.length ? source[source.length - 1] : null
                : source.length && (r = source.filter(predicate)).length
                    ? r[r.length - 1]
                    : _T === System.int || _T === System.double || _T === System.float ? 0 : null;
        };
        __data.Max = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.Min = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.OrderBy = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('OrderBy', args.length);
            }

            let keySelector = args[0];

            if (typeof keySelector !== 'function') {
                throw `The type arguments for method 'Enumerable.OrderBy<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = source.sort((a, b) => {
                let key_a = keySelector(a), key_b = keySelector(b);

                return key_a > key_b ? 1 : key_a < key_b ? -1 : 0;
            });

            if (typeof this.ThenBy === 'undefined') {
                let thenBy = function (...args) {

                };

                this.ThenBy = thenBy;
            }
            return this;
        };
        __data.OrderByDescending = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('OrderByDescending', args.length);
            }

            let keySelector = args[0];

            if (typeof keySelector !== 'function') {
                throw `The type arguments for method 'Enumerable.OrderByDescending<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = source.sort((a, b) => {
                let key_a = keySelector(a), key_b = keySelector(b);

                return key_a < key_b ? 1 : key_a > key_b ? -1 : 0;
            });

            if (typeof this.ThenBy === 'undefined') {
                let thenBy = function (...args) {

                };

                this.ThenBy = thenBy;
            }
            return this;
        };
        __data.Remove = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.Reverse = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.Select = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Select', args.length);
            }

            let selector = args[0];

            if (typeof selector !== 'function') {
                throw `The type arguments for method 'Enumerable.Select<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource].map(selector);

            return this;
        };
        __data.SelectMany = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('SelectMany', args.length);
            }

            let selector = args[0];

            if (typeof selector !== 'function') {
                throw `The type arguments for method 'Enumerable.SelectMany<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource].map(selector).reduce((x, y) => x.concat(y));

            return this;
        };
        __data.Single = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Single', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            if (!predicate) {
                if (source.length) return source[0];

                throw new ArgumentNullException('Sequence contains no elements');
            }

            let r = source.filter(predicate);

            if (r.length !== 1) {
                throw new ArgumentNullException(!r.length ? 'Sequence contains no elements' : 'Sequence contains more than one matching element');
            }
            return r[0];
        };
        __data.SingleOrDefault = function (...args) {
            if (args.length > 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('SingleOrDefault', args.length);
            }

            let predicate = args[0];

            if (args.length && typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            let r = null;

            return !predicate
                ? source.length ? source[0] : null
                : source.length && (r = source.find(predicate))
                    ? r
                    : _T === System.int || _T === System.double || _T === System.float ? 0 : null;
        };
        __data.Skip = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Skip', args.length);
            }

            let count = args[0];

            if (!Object.is(count, System.int)) {
                throw `Argument 1: cannot convert from '${__typeFormat(count)}' to 'int'`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = source.length && count < source.length ? source.slice(count, source.length) : null;

            return this;
        };
        __data.SkipWhile = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('SkipWhile', args.length);
            }

            let predicate = args[0];

            if (typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = source.filter(x => !predicate(x));

            return this;
        };
        __data.Sum = function (...args) {
            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');
        };
        __data.Take = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Take', args.length);
            }

            let count = args[0];

            if (!Object.is(count, System.int)) {
                throw `Argument 1: cannot convert from '${__typeFormat(count)}' to 'int'`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = count && source.length ? source.slice(0, count) : null;

            return this;
        };
        __data.TakeWhile = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                throw `No overload for method 'TakeWhile' takes ${args.length} arguments`;
            }

            let predicate = args[0];

            if (typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = source.filter(predicate);

            return this;
        };
        __data.ToArray = function (...args) {
            if (args.length) {
                 helper.__noOverload('ToArray', args.length);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            return source;
        };
        __data.ToDictionary = function (...args) {
            if (!/^[12]$/.test(args.length) || args.indexOf(undefined) > -1) {
                 helper.__noOverload('ToDictionary', args.length);
            }

            let keySelector = args[0], elementSelector = args[1];

            if (typeof keySelector !== 'function' || args.length === 2 && typeof elementSelector !== 'function') {
                throw `The type arguments for method 'Enumerable.ToDictionary<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            if (!source.length) {
                console.warn(`'source' does not contain any element.`);

                return new Dictionary(_T, _T);
            }

            let getConstructor = function (x) {
                return Object.Equals(x.constructor, Number)
                    ? Object.is(x, int) ? int : Object.is(x, double) ? double : float
                    : Object.Equals(x.constructor, String) ? string
                        : x.constructor;
            };

            let Dictionary = require('../System.Collections.Generic/Dictionary');

            if (args.length === 1) {
                // #region
                let dict;

                for (let i = 0; i < source.length; i++) {
                    let key = keySelector(source[i]);

                    let value = source[i];

                    if (!i) {
                        let k = helper.__typeFormat(key);

                        if (k === 'undefined' || k === 'null') {
                            throw `The type arguments for method 'Enumerable.ToDictionary<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
                        }

                        let TKey = getConstructor(key);

                        let TValue = _T;

                        dict = new Dictionary(TKey, TValue);
                    }

                    dict.Add(key, value);
                }

                return dict;
                // #endregion
            }

            // #region
            let dict;

            for (let i = 0; i < source.length; i++) {
                let key = keySelector(source[i]);

                let value = elementSelector(source[i]);

                if (!i) {
                    let k = helper.__typeFormat(key), v = helper.__typeFormat(value);

                    if (k === 'undefined' || k === 'null' || v === 'undefined' || v === 'null') {
                        throw `The type arguments for method 'Enumerable.ToDictionary<TSource, TKey>(IEnumerable<TSource>, Func<TSource, TKey>)' cannot be inferred from the usage. Try specifying the type arguments explicitly.`;
                    }

                    let TKey = getConstructor(key);

                    let TValue = getConstructor(value);

                    dict = Dictionary(TKey, TValue);
                }

                dict.Add(key, value);
            }

            return dict;
                // #endregion
        };
        __data.ToList = function (...args) {
            if (args.length) {
                     helper.__noOverload('ToList', args.length);
                }

                let source = this[_TSource];

                if (typeof source === 'undefined' || source === null) throw new System.ArgumentNullException('source');

                let List = require('../System.Collections.Generic/List');

                let list = new List(_T);

                if (source.length) {
                    source.forEach(x => list.Add(x));
                }

                return list;
        };
        __data.Where = function (...args) {
            if (args.length !== 1 || args.indexOf(undefined) > -1) {
                 helper.__noOverload('Where', args.length);
            }

            let predicate = args[0];

            if (typeof predicate !== 'function') {
                let x = helper.__typeFormat(predicate), y = helper.__typeFormat(_T);

                 helper.__cannotConvert(1, x, `System.Func<${y}, bool>`);
            }

            let source = this[_TSource];

            if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

            this[_TSource] = source;

            return this;
        };

        class IEnumerable {
            constructor(...args) {
                if (this.constructor === IEnumerable) {
                    if (args.length === 1) {
                        let a = args[0], t = helper.__typeFormat(a);

                        throw `Cannot create an instance of the abstract class or interface 'IEnumerable<${(typeof a === 'function' ? t : '?')}>'`;
                    }

                    throw `Using the generic type 'IEnumerable<T>' requires 1 type arguments`;
                }

                let T = args[0], TSource = args[1];

                _T = T;
                _TSource = TSource;
            }            
            static get name() {
                return 'System.Linq.IEnumerable';
            }
            set Aggregate(value) {
                return __data.Aggregate;
            }
            get Aggregate() {
                return (...args) => __data.Aggregate.call(this, ...args);
            }
            set All(value) {
                return __data.All;
            }
            get All() {
                return (...args) => __data.All.call(this, ...args);
            }
            set Any(value) {
                return __data.Any;
            }
            get Any() {
                return (...args) => __data.Any.call(this, ...args);
            }
            set Average(value) {
                return __data.Average;
            }
            get Average() {
                return (...args) => __data.Average.call(this, ...args);
            }
            set Concat(value) {
                return __data.Concat;
            }
            get Concat() {
                return (...args) => __data.Concat.call(this, ...args);
            }
            set Contains(value) {
                return __data.Contains;
            }
            get Contains() {
                return (...args) => __data.Contains.call(this, ...args);
            }
            set Count(value) {
                return __data.Count;
            }
            get Count() {
                return (...args) => __data.Count.call(this, ...args);
            }
            set Distinct(value) {
                return __data.Distinct;
            }
            get Distinct() {
                return (...args) => __data.Distinct.call(this, ...args);
            }
            set ElementAt(value) {
                return __data.ElementAt;
            }
            get ElementAt() {
                return (...args) => __data.ElementAt.call(this, ...args);
            }
            set ElementAtOrDefault(value) {
                return __data.ElementAtOrDefault;
            }
            get ElementAtOrDefault() {
                return (...args) => __data.ElementAtOrDefault.call(this, ...args);
            }
            set Except(value) {
                return __data.Except;
            }
            get Except() {
                return (...args) => __data.Except.call(this, ...args);
            }
            set First(value) {
                return __data.First;
            }
            get First() {
                return (...args) => __data.First.call(this, ...args);
            }
            set FirstOrDefault(value) {
                return __data.FirstOrDefault;
            }
            get FirstOrDefault() {
                return (...args) => __data.FirstOrDefault.call(this, ...args);
            }
            set GroupBy(value) {
                return __data.GroupBy;
            }
            get GroupBy() {
                return (...args) => __data.GroupBy.call(this, ...args);
            }
            set Last(value) {
                return __data.Last;
            }
            get Last() {
                return (...args) => __data.Last.call(this, ...args);
            }
            set LastOrDefault(value) {
                return __data.LastOrDefault;
            }
            get LastOrDefault() {
                return (...args) => __data.LastOrDefault.call(this, ...args);
            }
            set Max(value) {
                return __data.Max;
            }
            get Max() {
                return (...args) => __data.Max.call(this, ...args);
            }
            set Min(value) {
                return __data.Min;
            }
            get Min() {
                return (...args) => __data.Min.call(this, ...args);
            }
            set OrderBy(value) {
                return __data.OrderBy;
            }
            get OrderBy() {
                return (...args) => __data.OrderBy.call(this, ...args);
            }
            set OrderByDescending(value) {
                return __data.OrderByDescending;
            }
            get OrderByDescending() {
                return (...args) => __data.OrderByDescending.call(this, ...args);
            }
            set Remove(value) {
                return __data.Remove;
            }
            get Remove() {
                return (...args) => __data.Remove.call(this, ...args);
            }
            set Reverse(value) {
                return __data.Reverse;
            }
            get Reverse() {
                return (...args) => __data.Reverse.call(this, ...args);
            }
            set Select(value) {
                return __data.Select;
            }
            get Select() {
                return (...args) => __data.Select.call(this, ...args);
            }
            set SelectMany(value) {
                return __data.SelectMany;
            }
            get SelectMany() {
                return (...args) => __data.SelectMany.call(this, ...args);
            }
            set Single(value) {
                return __data.Single;
            }
            get Single() {
                return (...args) => __data.Single.call(this, ...args);
            }
            set SingleOrDefault(value) {
                return __data.SingleOrDefault;
            }
            get SingleOrDefault() {
                return (...args) => __data.SingleOrDefault.call(this, ...args);
            }
            set Skip(value) {
                return __data.Skip;
            }
            get Skip() {
                return (...args) => __data.Skip.call(this, ...args);
            }
            set SkipWhile(value) {
                return __data.SkipWhile;
            }
            get SkipWhile() {
                return (...args) => __data.SkipWhile.call(this, ...args);
            }
            set Sum(value) {
                return __data.Sum;
            }
            get Sum() {
                return (...args) => __data.Sum.call(this, ...args);
            }
            set Take(value) {
                return __data.Take;
            }
            get Take() {
                return (...args) => __data.Take.call(this, ...args);
            }
            set TakeWhile(value) {
                return __data.TakeWhile;
            }
            get TakeWhile() {
                return (...args) => __data.TakeWhile.call(this, ...args);
            }
            set ToArray(value) {
                return __data.ToArray;
            }
            get ToArray() {
                return (...args) => __data.ToArray.call(this, ...args);
            }
            set ToDictionary(value) {
                return __data.ToDictionary;
            }
            get ToDictionary() {
                return (...args) => __data.ToDictionary.call(this, ...args);
            }
            set ToList(value) {
                return __data.ToList;
            }
            get ToList() {
                return (...args) => __data.ToList.call(this, ...args);
            }
            set Where(value) {
                return __data.Where;
            }
            get Where() {
                return (...args) => __data.Where.call(this, ...args);
            }
            *[Symbol.iterator]() {
                let source = this[_TSource];

                if (typeof source === 'undefined' || source === null) throw new ArgumentNullException('source');

                for (let s of source) yield s;
            }
        }
        
        return IEnumerable;
   }());
    
    module.exports = IEnumerable;
}(typeof window !== 'undefined' ? window : this));
