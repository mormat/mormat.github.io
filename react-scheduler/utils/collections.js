"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByCols = groupByCols;
exports.indexBy = indexBy;
function groupByCols(items, cols) {
  var results = [];
  var row;
  items.forEach(function (item, index) {
    if (index % cols === 0) {
      row = [];
      results.push(row);
    }
    row.push(item);
  });
  return results;
}
function indexBy(items, indexResolver) {
  var results = {};
  for (var k in items) {
    var index = indexResolver(items[k], k);
    if (index in results) {
      results[index].push(items[k]);
    } else {
      results[index] = [items[k]];
    }
  }
  return results;
}