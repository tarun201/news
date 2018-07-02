'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _basic_layout = require('../components/basic_layout');

var _basic_layout2 = _interopRequireDefault(_basic_layout);

var _rightbar = require('../components/rightbar');

var _rightbar2 = _interopRequireDefault(_rightbar);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/justdial/news/react/pages/language.js?entry';


var Language = function Language(props) {
  return _react2.default.createElement(_basic_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1135783463' + ' ' + 'col-sm-9',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1135783463' + ' ' + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('h4', {
    className: 'jsx-1135783463' + ' ' + 'head text-info',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Language Code: ', _react2.default.createElement('span', {
    className: 'jsx-1135783463' + ' ' + 'lead text-uppercase',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.head)), props.news.map(function (_ref) {
    var _React$createElement;

    var title = _ref.title,
        link = _ref.link,
        day = _ref.day,
        time = _ref.time,
        id = _ref.id,
        image = _ref.image,
        category = _ref.category;
    return _react2.default.createElement('div', (_React$createElement = { className: 'news', key: id }, (0, _defineProperty3.default)(_React$createElement, 'className', 'jsx-1135783463' + ' ' + 'row card mb-2'), (0, _defineProperty3.default)(_React$createElement, '__source', {
      fileName: _jsxFileName,
      lineNumber: 13
    }), _React$createElement), _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement('img', { src: image, alt: 'Card image', className: 'jsx-1135783463' + ' ' + 'card-img-top w-100 mh-100',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }))), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'card-body',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement('h4', {
      className: 'jsx-1135783463' + ' ' + 'card-title info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, title))), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'col-sm',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, 'Category: '), _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463' + ' ' + 'card-text info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, category))), _react2.default.createElement('br', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'col-sm-2',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, _react2.default.createElement('p', {
      className: 'jsx-1135783463' + ' ' + 'card-text',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, day)))));
  }))), _react2.default.createElement(_rightbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, props.list.map(function (_ref2) {
    var category = _ref2.category;
    return _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, _react2.default.createElement('a', { key: category, className: 'jsx-1135783463' + ' ' + 'rightbar nav-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, category, ' '));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1135783463',
    css: 'a.rightbar.jsx-1135783463{color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xhbmd1YWdlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEZ0IsQUFHcUIsWUFDZCIsImZpbGUiOiJwYWdlcy9sYW5ndWFnZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdXN0ZGlhbC9uZXdzL3JlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNpY19sYXlvdXQnXG5pbXBvcnQgUmlnaHRiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9yaWdodGJhcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IExhbmd1YWdlID0gKHByb3BzKSA9PiAoXG4gIDxCbGF5b3V0ID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkIHRleHQtaW5mb1wiPkxhbmd1YWdlIENvZGU6IDxzcGFuIGNsYXNzTmFtZT1cImxlYWQgdGV4dC11cHBlcmNhc2VcIj57cHJvcHMuaGVhZH08L3NwYW4+PC9oND5cbiAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICB7cHJvcHMubmV3cy5tYXAoKHsgdGl0bGUsIGxpbmssIGRheSwgdGltZSwgaWQsIGltYWdlLGNhdGVnb3J5IH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCIgY2xhc3NOYW1lPVwicm93IGNhcmQgbWItMlwiIGtleT17aWR9PlxuICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rfWB9PlxuICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIHctMTAwIG1oLTEwMFwiIHNyYz17aW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2VcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2xpbmt9YH0+XG4gICAgICAgICAgICA8YT48aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBpbmZvXCI+e3RpdGxlfTwvaDQ+PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvbmV3cy8ke2NhdGVnb3J5fWB9IGhyZWY9e2AvY2F0ZWdvcnk/aWQ9JHtjYXRlZ29yeX1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLXRleHQgaW5mb1wiPntjYXRlZ29yeX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2RheX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8UmlnaHRiYXI+XG4gICAge3Byb3BzLmxpc3QubWFwKCh7IGNhdGVnb3J5IH0pID0+IChcbiAgICAgICAgICA8TGluayBhcz17YC9uZXdzLyR7Y2F0ZWdvcnl9YH0gaHJlZj17YC9jYXRlZ29yeT9pZD0ke2NhdGVnb3J5fWB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmlnaHRiYXIgbmF2LWxpbmtcIiBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9IDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgIDwvUmlnaHRiYXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhLnJpZ2h0YmFye1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB9XG4gICAgICBcbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9CbGF5b3V0PlxuKVxuXG5MYW5ndWFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvbmV3cy9sYW5nLyR7aWR9YClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jYXRlZ29yeS8ke2lkfWApXG4gIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzMi5qc29uKClcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBkYXRhMixcbiAgICBuZXdzOiBkYXRhLFxuICAgIGhlYWQ6aWRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZSJdfQ== */\n/*@ sourceURL=pages/language.js?entry */'
  }));
};

Language.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, data, res2, data2;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/news/lang/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            _context.next = 9;
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/category/' + id);

          case 9:
            res2 = _context.sent;
            _context.next = 12;
            return res2.json();

          case 12:
            data2 = _context.sent;

            console.log('Show data fetched. Count: ' + data.length);

            return _context.abrupt('return', {
              list: data2,
              news: data,
              head: id
            });

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = Language;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJSaWdodGJhciIsIkxpbmsiLCJmZXRjaCIsIkxhbmd1YWdlIiwicHJvcHMiLCJoZWFkIiwibmV3cyIsIm1hcCIsInRpdGxlIiwibGluayIsImRheSIsInRpbWUiLCJpZCIsImltYWdlIiwiY2F0ZWdvcnkiLCJsaXN0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwicmVzIiwianNvbiIsImRhdGEiLCJyZXMyIiwiZGF0YTIiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7eUJBQ2YsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDQTtBQURBO0FBQUEscUJBQ0EsY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQTtBQUFBO0FBQUEsS0FBOEMsbUNBQUEsY0FBQTt3Q0FBQSxBQUFnQjs7Z0JBQWhCO2tCQUFBLEFBQXVDO0FBQXZDO0FBQUEsV0FEOUMsQUFDQSxBQUE4QyxBQUE2QyxBQUUxRixjQUFBLEFBQU0sS0FBTixBQUFXLElBQUksZ0JBQUE7UUFBQTs7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsWUFBVixBQUFVO1FBQVYsQUFBZ0IsV0FBaEIsQUFBZ0I7UUFBaEIsQUFBcUIsWUFBckIsQUFBcUI7UUFBckIsQUFBMkIsVUFBM0IsQUFBMkI7UUFBM0IsQUFBK0IsYUFBL0IsQUFBK0I7UUFBL0IsQUFBcUMsZ0JBQXJD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