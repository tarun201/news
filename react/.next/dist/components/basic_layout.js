'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _rightbar = require('./rightbar');

var _rightbar2 = _interopRequireDefault(_rightbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/justdial/news/react/components/basic_layout.js';
// import Header from './header'


var Blayout = function Blayout(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-2693392611' + ' ' + 'body',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), props.children, _react2.default.createElement(_rightbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '2693392611',
    css: '.body.jsx-2693392611{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlrQixBQUdtQixXQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBSaWdodGJhciBmcm9tICcuL3JpZ2h0YmFyJ1xuXG5cblxuY29uc3QgQmxheW91dCA9IChwcm9wcykgPT4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICB7LyogPEhlYWRlciAvPiAqL31cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxSaWdodGJhciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmJvZHl7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG5cbmV4cG9ydCBkZWZhdWx0IEJsYXlvdXRcbiJdfQ== */\n/*@ sourceURL=components/basic_layout.js */'
  }));
};

exports.default = Blayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsIlJpZ2h0YmFyIiwiQmxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBYzs7Ozs7OztBQURyQjs7O0FBS0EsSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsT0FBRDt5QkFDWixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBRUU7QUFGRjtBQUFBLEdBQUEsa0JBRUUsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNDO0FBREQ7QUFBQSxZQUZGLEFBR1MsQUFDUCwwQkFBQSxBQUFDOztnQkFBRDtrQkFKRixBQUlFO0FBQUE7QUFBQTthQUpGO1NBRFksQUFDWjtBQUFBO0FBREosQUFjQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJiYXNpY19sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9