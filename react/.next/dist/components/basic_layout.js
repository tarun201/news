'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/justdial/news/react/components/basic_layout.js';

// import Header from './header'
// import Rightbar from './rightbar'
var margin = {
  marginTop: '5%'

};

var Blayout = function Blayout(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-3175111241' + ' ' + 'container-fluid',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js', className: 'jsx-3175111241',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), _react2.default.createElement('div', {
    className: 'jsx-3175111241' + ' ' + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), _react2.default.createElement('div', { style: margin, className: 'jsx-3175111241' + ' ' + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, props.children), _react2.default.createElement(_style2.default, {
    styleId: '3175111241',
    css: 'body.jsx-3175111241{font-family:\'Times New Roman\',Arial,Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFHb0UseURBQzdEIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbi8vIGltcG9ydCBSaWdodGJhciBmcm9tICcuL3JpZ2h0YmFyJ1xuY29uc3QgbWFyZ2luID0ge1xuICBtYXJnaW5Ub3A6JzUlJyxcbiAgXG59XG5cbmNvbnN0IEJsYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjMuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjAvdW1kL3BvcHBlci5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPE5hdmJhciAvPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e21hcmdpbn0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYm9keXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIFxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQmxheW91dFxuIl19 */\n/*@ sourceURL=components/basic_layout.js */'
  }));
};

exports.default = Blayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJCbGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7OztBQUNuQjtBQUNBO0FBQ0EsSUFBTTthQUFOLEFBQWUsQUFDSDs7QUFERyxBQUNiOztBQUlGLElBQU0sVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFDLE9BQUQ7eUJBQ2QsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLGtEQUE5Qjs7Z0JBQUE7a0JBREYsQUFDRSxBQUNBO0FBREE7OENBQ00sU0FBTixBQUFjLG9CQUFkOztnQkFBQTtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsMkRBQTBELEtBQXJFLEFBQXlFLHlCQUF6RTs7Z0JBQUE7a0JBSEYsQUFHRSxBQUVBO0FBRkE7OENBRU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsb0ZBQTVCOztnQkFBQTtrQkFMRixBQUtFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVksK0VBQVo7O2dCQUFBO2tCQU5GLEFBTUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSx3RkFBWjs7Z0JBQUE7a0JBUEYsQUFPRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZLGtGQUFaOztnQkFBQTtrQkFUSixBQUNFLEFBUUUsQUFFRjtBQUZFO3VCQUVGLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBWkosQUFXRSxBQUNFLEFBR0Y7QUFIRTtBQUFBLHVCQUdGLGNBQUEsU0FBcUIsT0FBckIsQUFBNEIsNENBQTVCLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0c7QUFESDtXQWZGLEFBZUUsQUFDUzthQWhCWDtTQURjLEFBQ2Q7QUFBQTtBQURGLEFBNEJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImJhc2ljX2xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdXN0ZGlhbC9uZXdzL3JlYWN0In0=