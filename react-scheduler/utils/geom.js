"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = void 0;
exports.calcDistance = calcDistance;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Rectangle = exports.Rectangle = /*#__PURE__*/function () {
  function Rectangle(rect) {
    _classCallCheck(this, Rectangle);
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
  }
  _createClass(Rectangle, [{
    key: "top",
    get: function get() {
      return this.y;
    }
  }, {
    key: "right",
    get: function get() {
      return this.x + this.width;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.y + this.height;
    }
  }, {
    key: "contains",
    value: function contains(anotherRect) {
      return this.x <= anotherRect.x && this.y <= anotherRect.y && anotherRect.x + anotherRect.width <= this.x + this.width && anotherRect.y + anotherRect.height <= this.y + this.height;
    }

    // @todo missing test
  }, {
    key: "includes",
    value: function includes(point) {
      return this.x <= point.x && this.y <= point.y && point.x <= this.x + this.width && point.y <= this.y + this.height;
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return {
        x: this.x + this.width / 2,
        y: this.y + this.height / 2
      };
    }
  }, {
    key: "intersectsWith",
    value: function intersectsWith(rect) {
      return !(rect.x > this.x + this.width || rect.x + rect.width < this.x || rect.y > this.y + this.height || rect.y + rect.height < this.y);
    }
  }], [{
    key: "createBounding",
    value: function createBounding(rects) {
      var x = Math.min.apply(Math, _toConsumableArray(rects.map(function (r) {
        return r.x;
      })));
      var y = Math.min.apply(Math, _toConsumableArray(rects.map(function (r) {
        return r.y;
      })));
      var right = Math.max.apply(Math, _toConsumableArray(rects.map(function (r) {
        return r.x + r.width;
      })));
      var bottom = Math.max.apply(Math, _toConsumableArray(rects.map(function (r) {
        return r.y + r.height;
      })));
      return new Rectangle({
        x: x,
        y: y,
        width: right - x,
        height: bottom - y
      });
    }
  }]);
  return Rectangle;
}(); // @todo missing test
function calcDistance(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}