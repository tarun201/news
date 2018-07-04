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

var _jsxFileName = '/home/justdial/news/react/pages/category.js?entry';


var Category = function Category(props) {
  return _react2.default.createElement(_basic_layout2.default, { head: props.head, __source: {
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
  }, 'Category: ', _react2.default.createElement('span', {
    className: 'jsx-1135783463' + ' ' + 'lead text-capitalize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.head)), props.news.map(function (_ref) {
    var _React$createElement;

    var title = _ref.title,
        language = _ref.language,
        link = _ref.link,
        day = _ref.day,
        id = _ref.id,
        category = _ref.category,
        image = _ref.image;
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
    }, day)), _react2.default.createElement('div', {
      className: 'jsx-1135783463' + ' ' + 'col-sm',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1135783463',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, 'Language Code: '), _react2.default.createElement(_link2.default, { as: '/lang/' + language, href: '/language?id=' + language, __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1135783463' + ' ' + 'card-text info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, language))))));
  }))), _react2.default.createElement(_rightbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, props.list.map(function (_ref2) {
    var category = _ref2.category;
    return _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }, _react2.default.createElement('a', { key: category, className: 'jsx-1135783463' + ' ' + 'rightbar nav-link',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, category, ' '));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1135783463',
    css: 'a.rightbar.jsx-1135783463{color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EZ0IsQUFHcUIsWUFDZCIsImZpbGUiOiJwYWdlcy9jYXRlZ29yeS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdXN0ZGlhbC9uZXdzL3JlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNpY19sYXlvdXQnXG5pbXBvcnQgUmlnaHRiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9yaWdodGJhcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzKSA9PiAoXG4gIDxCbGF5b3V0IGhlYWQ9e3Byb3BzLmhlYWR9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWQgdGV4dC1pbmZvXCI+Q2F0ZWdvcnk6IDxzcGFuIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1jYXBpdGFsaXplXCI+e3Byb3BzLmhlYWR9PC9zcGFuPjwvaDQ+XG4gICAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICAgIHtwcm9wcy5uZXdzLm1hcCgoeyB0aXRsZSwgbGFuZ3VhZ2UsIGxpbmssIGRheSwgaWQsIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCIgY2xhc3NOYW1lPVwicm93IGNhcmQgbWItMlwiIGtleT17aWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3Agdy0xMDAgbWgtMTAwXCIgc3JjPXtpbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZVwiIC8+PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgICAgICAgICA8YT48aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBpbmZvXCI+e3RpdGxlfTwvaDQ+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNhdGVnb3J5OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9uZXdzLyR7Y2F0ZWdvcnl9YH0gaHJlZj17YC9jYXRlZ29yeT9pZD0ke2NhdGVnb3J5fWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLXRleHQgaW5mb1wiPntjYXRlZ29yeX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkYXl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5MYW5ndWFnZSBDb2RlOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9sYW5nLyR7bGFuZ3VhZ2V9YH0gaHJlZj17YC9sYW5ndWFnZT9pZD0ke2xhbmd1YWdlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLXRleHQgaW5mb1wiPntsYW5ndWFnZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPFJpZ2h0YmFyPlxuICAgICAgICB7cHJvcHMubGlzdC5tYXAoKHsgY2F0ZWdvcnkgfSkgPT4gKFxuICAgICAgICAgIDxMaW5rIGFzPXtgL25ld3MvJHtjYXRlZ29yeX1gfSBocmVmPXtgL2NhdGVnb3J5P2lkPSR7Y2F0ZWdvcnl9YH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyaWdodGJhciBuYXYtbGlua1wiIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX0gPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L1JpZ2h0YmFyPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEucmlnaHRiYXJ7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgPC9CbGF5b3V0PlxuKVxuXG5DYXRlZ29yeS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCBpZCA9IGNvbnRleHQucXVlcnkuaWQ7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvbmV3cy9jYXRlZ29yeS8ke2lkfWApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuXG4gIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7aWR9L2NhdGVnb3J5YClcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIGxpc3Q6IGRhdGEyLFxuICAgIG5ld3M6IGRhdGEsXG4gICAgaGVhZDppZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il19 */\n/*@ sourceURL=pages/category.js?entry */'
  }));
};

Category.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, data, res2, data2;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/news/category/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            _context.next = 9;
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/' + id + '/category');

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

exports.default = Category;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJSaWdodGJhciIsIkxpbmsiLCJmZXRjaCIsIkNhdGVnb3J5IiwicHJvcHMiLCJoZWFkIiwibmV3cyIsIm1hcCIsInRpdGxlIiwibGFuZ3VhZ2UiLCJsaW5rIiwiZGF5IiwiaWQiLCJjYXRlZ29yeSIsImltYWdlIiwibGlzdCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzMiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEO3lCQUNmLEFBQUMsd0NBQVEsTUFBTSxNQUFmLEFBQXFCO2dCQUFyQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDQTtBQURBO0FBQUEscUJBQ0EsY0FBQTt3Q0FBQSxBQUFjOztnQkFBZDtrQkFBQTtBQUFBO0FBQUEsS0FBeUMsOEJBQUEsY0FBQTt3Q0FBQSxBQUFnQjs7Z0JBQWhCO2tCQUFBLEFBQXdDO0FBQXhDO0FBQUEsV0FEekMsQUFDQSxBQUF5QyxBQUE4QyxBQUVwRixjQUFBLEFBQU0sS0FBTixBQUFXLElBQUksZ0JBQUE7UUFBQTs7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsZ0JBQVYsQUFBVTtRQUFWLEFBQW9CLFlBQXBCLEFBQW9CO1FBQXBCLEFBQTBCLFdBQTFCLEFBQTBCO1FBQTFCLEFBQStCLFVBQS9CLEFBQStCO1FBQS9CLEFBQW1DLGdCQUFuQyxBQUFtQztRQUFuQyxBQUE2QyxhQUE3QyxBQUE2QzsyQkFDM0QsY0FBQSxpQ0FBSyxXQUFMLEFBQWUsUUFBaUMsS0FBaEQsQUFBcUQsZ0dBQXJELEFBQWdDO2dCQUFoQztrQkFBQTtBQUFBLFFBQ0UsdUNBQUEsQUFBQyxnQ0FBSyxXQUFOLEFBQWU7a0JBQWY7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBLEFBQUc7QUFBSDtBQUFBLDhDQUE4QyxLQUEzQyxBQUFnRCxPQUFPLEtBQXZELEFBQTJELGtEQUEzRCxBQUFlOztrQkFBZjtvQkFGUCxBQUNFLEFBQ0UsQUFBRyxBQUVMO0FBRks7UUFGUCxrQkFJRSxjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMsZ0NBQUssV0FBTixBQUFlO2tCQUFmO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBOzBDQUFBLEFBQWM7O2tCQUFkO29CQUFBLEFBQWlDO0FBQWpDO0FBQUEsT0FGUCxBQUNFLEFBQ0UsQUFBRyxBQUVMLDBCQUFBLGNBQUE7MENBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FERixBQUNFLEFBQ0EsK0JBQUEsQUFBQyxnQ0FBSyxlQUFOLEFBQW1CLFVBQVksd0JBQS9CLEFBQXFEO2tCQUFyRDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUErQjtBQUEvQjtBQUFBLE9BSk4sQUFDRSxBQUVFLEFBQ0UsQUFHSjtpQkFBQTs7a0JBQUE7b0JBWEosQUFJRSxBQU9FLEFBRUY7QUFGRTtBQUFBLHlCQUVGLGNBQUE7MENBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxjQUFBOzBDQUFBLEFBQWE7O2tCQUFiO29CQUFBLEFBQTBCO0FBQTFCO0FBQUEsT0FGSixBQUNFLEFBQ0UsQUFFRix1QkFBQSxjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQURGLEFBQ0UsQUFDQSxvQ0FBQSxBQUFDLGdDQUFLLGVBQU4sQUFBbUIsVUFBWSx3QkFBL0IsQUFBcUQ7a0JBQXJEO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOzBDQUFBLEFBQWE7O2tCQUFiO29CQUFBLEFBQStCO0FBQS9CO0FBQUEsT0F6QkksQUFDZCxBQUlFLEFBYUUsQUFJRSxBQUVFLEFBQ0U7QUE5QmxCLEFBQ0UsQUFDRSxBQUdHLEFBa0NMLHdCQUFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0s7QUFETDtBQUFBLFdBQ0ssQUFBTSxLQUFOLEFBQVcsSUFBSSxpQkFBQTtRQUFBLEFBQUcsaUJBQUgsQUFBRzsyQkFDakIsQUFBQyxnQ0FBSyxlQUFOLEFBQW1CLFVBQVksd0JBQS9CLEFBQXFEO2tCQUFyRDtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxjQUFBLE9BQWlDLEtBQWpDLEFBQXNDLDhDQUF0QyxBQUFhOztrQkFBYjtvQkFBQSxBQUFpRDtBQUFqRDtPQUFBLFVBRlksQUFDZCxBQUNFO0FBMUNWLEFBdUNFLEFBQ0s7YUF4Q1A7U0FEZSxBQUNmO0FBQUE7QUFERjs7QUF3REEsU0FBQSxBQUFTLDhCQUFUO3VGQUEyQixpQkFBQSxBQUFnQixTQUFoQjs2QkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNuQjtBQURtQixpQkFDZCxRQUFBLEFBQVEsTUFETSxBQUNBOzRCQURBO21CQUVQLDBFQUZPLEFBRVAsQUFBNkM7O2VBQXpEO0FBRm1CLDJCQUFBOzRCQUFBO21CQUdOLElBSE0sQUFHTixBQUFJOztlQUFqQjtBQUhtQiw0QkFBQTs0QkFBQTttQkFNTiw0REFBQSxBQUErQixLQU56Qjs7ZUFNbkI7QUFObUIsNEJBQUE7NEJBQUE7bUJBT0wsS0FQSyxBQU9MLEFBQUs7O2VBQW5CO0FBUG1CLDZCQVN6Qjs7b0JBQUEsQUFBUSxtQ0FBaUMsS0FUaEIsQUFTekIsQUFBOEM7OztvQkFFdkMsQUFDQyxBQUNOO29CQUZLLEFBRUMsQUFDTjtvQkFkdUIsQUFXbEIsQUFHQTtBQUhBLEFBQ0w7O2VBWnVCO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBM0I7O3VCQUFBOzZCQUFBO0FBQUE7QUFrQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY2F0ZWdvcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9