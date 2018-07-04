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

var _jsxFileName = '/home/justdial/news/react/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_basic_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1135783463' + ' ' + 'col-sm-9',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1135783463' + ' ' + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h4', {
    className: 'jsx-1135783463' + ' ' + 'head text-info',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'News'), props.news.map(function (_ref) {
    var _React$createElement;

    var title = _ref.title,
        language = _ref.language,
        link = _ref.link,
        day = _ref.day,
        time = _ref.time,
        id = _ref.id,
        category = _ref.category,
        image = _ref.image;
    return _react2.default.createElement('div', (_React$createElement = { className: 'news', key: id }, (0, _defineProperty3.default)(_React$createElement, 'className', 'jsx-1135783463' + ' ' + 'row card mb-2'), (0, _defineProperty3.default)(_React$createElement, '__source', {
      fileName: _jsxFileName,
      lineNumber: 16
    }), _React$createElement), _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement('img', { src: image, alt: 'Card image', className: 'jsx-1135783463' + ' ' + 'card-img-top w-100 mh-100',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }))), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'card-body',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('h4', {
      className: 'jsx-1135783463' + ' ' + 'card-title info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, title))), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'col-sm',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, 'Category: '), _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463' + ' ' + 'card-text info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, category))), _react2.default.createElement('br', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'row',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'col-sm-2',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, _react2.default.createElement('p', {
      className: 'jsx-1135783463' + ' ' + 'card-text',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, day)), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'col-sm',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, 'Language Code: '), _react2.default.createElement(_link2.default, { as: '/lang/' + language, href: '/language?id=' + language, __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463' + ' ' + 'card-text info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, language))))));
  }))), _react2.default.createElement(_rightbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, props.list.map(function (_ref2) {
    var category = _ref2.category;
    return _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, _react2.default.createElement('a', { key: category, className: 'jsx-1135783463' + ' ' + 'rightbar nav-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, category, ' '));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1135783463',
    css: 'a.rightbar.jsx-1135783463{color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEZ0IsQUFHcUIsWUFDZCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdXN0ZGlhbC9uZXdzL3JlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNpY19sYXlvdXQnXG5pbXBvcnQgUmlnaHRiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9yaWdodGJhcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8QmxheW91dCA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZCB0ZXh0LWluZm9cIj5OZXdzPC9oND5cbiAgICAgICAgey8qIDxoMT5OZXdzPC9oMT4gKi99XG4gICAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICAgIHtwcm9wcy5uZXdzLm1hcCgoeyB0aXRsZSwgbGFuZ3VhZ2UsIGxpbmssIGRheSwgdGltZSwgaWQsIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCIgY2xhc3NOYW1lPVwicm93IGNhcmQgbWItMlwiIGtleT17aWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3Agdy0xMDAgbWgtMTAwXCIgc3JjPXtpbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZVwiLz48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rfWB9PlxuICAgICAgICAgICAgICAgIDxhPjxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGluZm9cIj57dGl0bGV9PC9oND48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL25ld3MvJHtjYXRlZ29yeX1gfSBocmVmPXtgL2NhdGVnb3J5P2lkPSR7Y2F0ZWdvcnl9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBpbmZvXCI+e2NhdGVnb3J5fTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2RheX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkxhbmd1YWdlIENvZGU6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL2xhbmcvJHtsYW5ndWFnZX1gfSBocmVmPXtgL2xhbmd1YWdlP2lkPSR7bGFuZ3VhZ2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBpbmZvXCI+e2xhbmd1YWdlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIDxSaWdodGJhcj5cbiAgICAgICAge3Byb3BzLmxpc3QubWFwKCh7IGNhdGVnb3J5IH0pID0+IChcbiAgICAgICAgICA8TGluayBhcz17YC9uZXdzLyR7Y2F0ZWdvcnl9YH0gaHJlZj17YC9jYXRlZ29yeT9pZD0ke2NhdGVnb3J5fWB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmlnaHRiYXIgbmF2LWxpbmtcIiBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9IDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9SaWdodGJhcj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhLnJpZ2h0YmFye1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB9XG4gICAgICBcbiAgICBgfTwvc3R5bGU+XG4gIDwvQmxheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NhdGVnb3J5JylcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKVxuXG5cblxuICByZXR1cm4ge1xuICAgIG5ld3M6IGRhdGEsXG4gICAgbGlzdDogZGF0YTJcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data, res2, data2;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('http://localhost:8080/news');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          _context.next = 8;
          return (0, _isomorphicUnfetch2.default)('http://localhost:8080/category');

        case 8:
          res2 = _context.sent;
          _context.next = 11;
          return res2.json();

        case 11:
          data2 = _context.sent;
          return _context.abrupt('return', {
            news: data,
            list: data2
          });

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJSaWdodGJhciIsIkxpbmsiLCJmZXRjaCIsIkluZGV4IiwicHJvcHMiLCJuZXdzIiwibWFwIiwidGl0bGUiLCJsYW5ndWFnZSIsImxpbmsiLCJkYXkiLCJ0aW1lIiwiaWQiLCJjYXRlZ29yeSIsImltYWdlIiwibGlzdCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzMiIsImRhdGEyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUlQLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7eUJBQ1osQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDQTtBQURBO0FBQUEscUJBQ0EsY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQTtBQUFBO0FBQUEsS0FEQSxBQUNBLEFBR0csZUFBQSxBQUFNLEtBQU4sQUFBVyxJQUFJLGdCQUFBO1FBQUE7O1FBQUEsQUFBRyxhQUFILEFBQUc7UUFBSCxBQUFVLGdCQUFWLEFBQVU7UUFBVixBQUFvQixZQUFwQixBQUFvQjtRQUFwQixBQUEwQixXQUExQixBQUEwQjtRQUExQixBQUErQixZQUEvQixBQUErQjtRQUEvQixBQUFxQyxVQUFyQyxBQUFxQztRQUFyQyxBQUF5QyxnQkFBekMsQUFBeUM7UUFBekMsQUFBbUQsYUFBbkQsQUFBbUQ7MkJBQ2pFLGNBQUEsaUNBQUssV0FBTCxBQUFlLFFBQWlDLEtBQWhELEFBQXFELGdHQUFyRCxBQUFnQztnQkFBaEM7a0JBQUE7QUFBQSxRQUNFLHVDQUFB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