"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateRangeContainsAnother = dateRangeContainsAnother;
exports.dateRangeOverlapsAnother = dateRangeOverlapsAnother;
exports.date_add = date_add;
exports.getLastDayOfWeek = exports.getFirstDayOfWeek = exports.getDaysBetween = exports.formatters = void 0;
exports.getPercentInDateRange = getPercentInDateRange;
var MINUTE_LENGTH = 60 * 1000;
var DAY_LENGTH = 24 * 60 * 60 * 1000;
/**
 * 
 */
var getDaysBetween = exports.getDaysBetween = function getDaysBetween(_ref) {
  var start = _ref.start,
    end = _ref.end;
  var results = [];
  var current = new Date(start);
  while (current <= end) {
    results.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return results;
};
var getFirstDayOfWeek = exports.getFirstDayOfWeek = function getFirstDayOfWeek(date) {
  var d = new Date(date);
  d.setDate(d.getDate() - d.getDay() + (d.getDay() == 0 ? -6 : 1));
  return formatters['yyyy-mm-dd'](d);
};
var getLastDayOfWeek = exports.getLastDayOfWeek = function getLastDayOfWeek(date) {
  var d = new Date(date);
  d.setDate(d.getDate() - d.getDay() + (d.getDay() == 0 ? 0 : 7));
  return formatters['yyyy-mm-dd'](d);
};

// @todo rename to dateRangeOverlapAnother
function dateRangeOverlapsAnother(dateRange, another) {
  if (!(another.end.getTime() - 1 < dateRange.start.getTime() || dateRange.end.getTime() - 1 < another.start.getTime())) {
    return true;
  }
  return false;
}
function dateRangeContainsAnother(dateRange, another) {
  return dateRange.start <= another.start && another.end <= dateRange.end;
}
var formatters = exports.formatters = {
  'yyyy': function yyyy(d) {
    return String(d.getFullYear());
  },
  'mm': function mm(d) {
    return ('0' + (d.getMonth() + 1)).slice(-2);
  },
  'dd': function dd(d) {
    return ('0' + d.getDate()).slice(-2);
  },
  'yyyy-mm': function yyyyMm(d) {
    return formatters['yyyy'](d) + '-' + formatters['mm'](d);
  },
  'yyyy-mm-dd': function yyyyMmDd(d) {
    return formatters['yyyy-mm'](d) + '-' + formatters['dd'](d);
  },
  'hh': function hh(d) {
    return ('0' + d.getHours()).slice(-2);
  },
  'ii': function ii(d) {
    return ('0' + d.getMinutes()).slice(-2);
  },
  'hh:ii': function hhIi(d) {
    return formatters['hh'](d) + ':' + formatters['ii'](d);
  },
  'yyyy-mm-dd hh:ii': function yyyyMmDdHhIi(d) {
    return formatters['yyyy-mm-dd'](d) + ' ' + formatters['hh:ii'](d);
  }
};
function date_add(d, num, type) {
  var input = new Date(d);
  var output = new Date(input);
  if (type === 'day') {
    output.setDate(input.getDate() + num);
  }
  if (type === 'week') {
    output.setDate(input.getDate() + 7 * num);
  }
  if (type === 'month') {
    output.setDate(1);
    output.setMonth(input.getMonth() + num);
    var lastDayOfMonth = new Date(output);
    lastDayOfMonth.setMonth(output.getMonth() + 1);
    lastDayOfMonth.setDate(0);
    output.setDate(Math.min(lastDayOfMonth.getDate(), input.getDate()));
  }
  return output;
}
function getPercentInDateRange(value, dateRange) {
  var start = dateRange.start,
    end = dateRange.end;
  var length = end.getTime() - start.getTime();
  return (value.getTime() - start.getTime()) / length;
}