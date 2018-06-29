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

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/justdial/news/react/components/basic_layout.js';
// import Header from './header'
// import Rightbar from './rightbar'


var Blayout = function Blayout(props) {
  return _react2.default.createElement('div', {
    className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { type: 'text/css', rel: 'stylesheet', href: 'css/materialize.min.css', media: 'screen,projection', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('script', { src: '../static/javascript.js', className: 'jsx-1981592299',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), props.children, _react2.default.createElement(_footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '1981592299',
    css: 'body{width:100%;font-family:\'Times New Roman\',Times,serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCeUIsQUFHbUIsV0FDa0MsMENBQzlDIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbi8vIGltcG9ydCBSaWdodGJhciBmcm9tICcuL3JpZ2h0YmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcblxuY29uc3QgQmxheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWF0ZXJpYWxpemUubWluLmNzc1wiIG1lZGlhPVwic2NyZWVuLHByb2plY3Rpb25cIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8xLjAuMC1yYy4yL2Nzcy9tYXRlcmlhbGl6ZS5taW4uY3NzXCIvPlxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tYXRlcmlhbGl6ZS8xLjAuMC1yYy4yL2pzL21hdGVyaWFsaXplLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCIuLi9zdGF0aWMvamF2YXNjcmlwdC5qc1wiIC8+XG5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiA8SGVhZGVyIC8+ICovfVxuICAgICAgPE5hdmJhciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgey8qIDxSaWdodGJhciAvPiAqL31cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5e1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQmxheW91dFxuIl19 */\n/*@ sourceURL=components/basic_layout.js */'
  }));
};

exports.default = Blayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzaWNfbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJCbGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBR25CLEFBQU8sQUFBWTs7Ozs7OztBQUZuQjtBQUNBOzs7QUFHQSxJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFEO3lCQUNkLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixrREFBOUI7O2dCQUFBO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFNBQU4sQUFBYyxvQkFBZDs7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLDJEQUEwRCxLQUFyRSxBQUF5RSx5QkFBekU7O2dCQUFBO2tCQUhGLEFBR0UsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLEtBQXRCLEFBQTBCLGNBQWEsTUFBdkMsQUFBNEMsMkJBQTBCLE9BQXRFLEFBQTRFLGdDQUE1RTs7Z0JBQUE7a0JBSkYsQUFJRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsb0dBQTVCOztnQkFBQTtrQkFMRixBQUtFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVksa0dBQVo7O2dCQUFBO2tCQU5GLEFBTUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSxzQ0FBWjs7Z0JBQUE7a0JBUkosQUFDRSxBQU9FLEFBSUE7QUFKQTt1QkFJQSxBQUFDOztnQkFBRDtrQkFaSixBQVlJLEFBQ0M7QUFERDtBQUFBLFlBWkosQUFhVyxBQUVQLDBCQUFBLEFBQUM7O2dCQUFEO2tCQWZKLEFBZUk7QUFBQTtBQUFBO2FBZko7U0FEYyxBQUNkO0FBQUE7QUFERixBQTBCRTs7a0JBQUEsQUFBZSIsImZpbGUiOiJiYXNpY19sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9