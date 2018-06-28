'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _basic_layout = require('../components/basic_layout');

var _basic_layout2 = _interopRequireDefault(_basic_layout);

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
      lineNumber: 6
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-227021388' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-227021388',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'News'), props.news.map(function (_ref) {
    var title = _ref.title,
        link = _ref.link,
        date = _ref.date,
        id = _ref.id,
        category = _ref.category,
        image = _ref.image;
    return _react2.default.createElement('div', { key: id, className: 'jsx-227021388' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-227021388' + ' ' + 'image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('img', { src: image, className: 'jsx-227021388',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-227021388' + ' ' + 'info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-227021388' + ' ' + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('h3', {
      className: 'jsx-227021388',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, title))), _react2.default.createElement('p', {
      className: 'jsx-227021388',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-227021388',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, 'Date:'), ' ', date), _react2.default.createElement('span', {
      className: 'jsx-227021388',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Category: '), _react2.default.createElement(_link2.default, { href: '/category?category=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-227021388' + ' ' + 'category',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, category))), _react2.default.createElement('hr', {
      className: 'jsx-227021388',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: '227021388',
    css: 'h1.jsx-227021388{color:rgb(199,50,50);}div.content.jsx-227021388{overflow:auto;margin-top:3%;width:50%;display:inline-block;float:left;margin-left:5%;padding:2%;border:1px solid black;border-radius:10px;font-family:\'Times New Roman\';margin-bottom:1%;}div.info.jsx-227021388{display:inline-block;width:70%;}div.image.jsx-227021388{display:inline-block;width:30%;}img.jsx-227021388{border-radius:10px;width:90%;height:90%;}a.title.jsx-227021388{text-decoration:none;color:rgba(5,132,163,0.829);}a.category.jsx-227021388{text-decoration:none;color:rgba(0,0,0,0.829);}a.jsx-227021388:hover{text-decoration:underline;}span.jsx-227021388{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDWSxBQUlnQyxBQUlULEFBYU8sQUFJQSxBQUtGLEFBS0UsQUFJQSxBQUtLLEFBR1QsY0F0Q0osR0F1Q2YsRUFqQlksRUExQmQsQUFpQmMsQUFJQSxBQVVxQixBQUlKLEtBSzdCLEVBbkNZLENBc0JDLEVBVGIsQUFLQSxPQWpCdUIsRUFzQnZCLEtBUUEsSUFKQSxVQXpCYSxXQUNJLGVBQ0osV0FDWSx1QkFDSixtQkFDVyw4QkFDYixpQkFDckIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzaWNfbGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPEJsYXlvdXQ+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgPGgxPk5ld3M8L2gxPlxuICAgICAgICB7LyogbG9vcCBmb3IgZWFjaCBuZXdzICovfVxuICAgICAgICB7cHJvcHMubmV3cy5tYXAoKHsgdGl0bGUsIGxpbmssIGRhdGUsIGlkLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiIGtleT17aWR9PlxuICAgICAgICAgIHsvKiBJbWFnZSBmb3IgYSBuZXdzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBPdGhlciBkZXRhaWxzIG9mIG5ld3MgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMz57dGl0bGV9PC9oMz48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHA+PHNwYW4+RGF0ZTo8L3NwYW4+IHtkYXRlfTwvcD5cblxuICAgICAgICAgICAgICA8c3Bhbj5DYXRlZ29yeTogPC9zcGFuPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5P2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57Y2F0ZWdvcnl9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuPC9kaXY+XG48c3R5bGUganN4PntgXG5cbiAgICBoMXtcbiAgICAgICAgY29sb3I6IHJnYigxOTksIDUwLCA1MCk7XG4gICAgfVxuXG4gICAgZGl2LmNvbnRlbnR7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOjMlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICB9XG4gICAgZGl2LmluZm97XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgIGRpdi5pbWFnZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICB9XG4gICAgICBhLnRpdGxlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSg1LCAxMzIsIDE2MywgMC44MjkpO1xuICAgICAgfVxuICAgICAgYS5jYXRlZ29yeXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgyOSk7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuYH08L3N0eWxlPlxuICA8L0JsYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld3M6IGRhdGFcbiAgICB9XG4gIH1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
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

          console.log('Show data fetched. Count: ' + data.length);

          return _context.abrupt('return', {
            news: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJJbmRleCIsInByb3BzIiwibmV3cyIsIm1hcCIsInRpdGxlIiwibGluayIsImRhdGUiLCJpZCIsImNhdGVnb3J5IiwiaW1hZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7eUJBQ1osQUFBQzs7Z0JBQUQ7a0JBQUEsQUFFRTtBQUZGO0FBQUEsR0FBQSxrQkFFRSxjQUFBO3VDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0E7QUFEQTtBQUFBLHFCQUNBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREEsQUFDQSxBQUVLLGVBQUEsQUFBTSxLQUFOLEFBQVcsSUFBSSxnQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBVSxZQUFWLEFBQVU7UUFBVixBQUFnQixZQUFoQixBQUFnQjtRQUFoQixBQUFzQixVQUF0QixBQUFzQjtRQUF0QixBQUEwQixnQkFBMUIsQUFBMEI7UUFBMUIsQUFBb0MsYUFBcEMsQUFBb0M7MkJBQ2xELGNBQUEsU0FBc0IsS0FBdEIsQUFBMkIsdUNBQTNCLEFBQWU7O2tCQUFmO29CQUFBLEFBRUU7QUFGRjtLQUFBLGtCQUVFLGNBQUE7eUNBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsOENBQ08sS0FBTCxBQUFVLGtCQUFWOztrQkFBQTtvQkFISixBQUVFLEFBQ0UsQUFHRjtBQUhFO3lCQUdGLGNBQUE7eUNBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQyxnQ0FBSyxXQUFOLEFBQWU7a0JBQWY7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7eUNBQUEsQUFBYTs7a0JBQWI7b0JBQUEsQUFBcUI7QUFBckI7QUFBQSx1QkFBcUIsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUEsQUFBSztBQUFMO0FBQUEsT0FGekIsQUFDRSxBQUNFLEFBQXFCLEFBRXZCLDBCQUFBLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBLEFBQUc7QUFBSDtBQUFBLHVCQUFHLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQUFILEFBQUcsVUFBb0IsS0FKekIsQUFJRSxBQUVBLHVCQUFBLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQU5GLEFBTUUsQUFDQSwrQkFBQSxBQUFDLGdDQUFLLDhCQUFOLEFBQWtDO2tCQUFsQztvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTt5Q0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUF5QjtBQUF6QjtBQUFBLE9BZE4sQUFNRSxBQU9FLEFBQ0UsQUFJSjtpQkFBQTs7a0JBQUE7b0JBbkJZLEFBQ2QsQUFrQkU7QUFBQTtBQUFBO0FBeEJWLEFBRUUsQUFHSzthQUxQO1NBRFksQUFDWjtBQUFBO0FBREY7O0FBaUZBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7V0FBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0YsaUNBREUsQUFDRixBQUFNOzthQUFsQjtBQURjLHlCQUFBOzBCQUFBO2lCQUVELElBRkMsQUFFRCxBQUFJOzthQUFqQjtBQUZjLDBCQUlwQjs7a0JBQUEsQUFBUSxtQ0FBaUMsS0FKckIsQUFJcEIsQUFBOEM7OztrQkFKMUIsQUFNYixBQUNDO0FBREQsQUFDTDs7YUFQa0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBYUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9