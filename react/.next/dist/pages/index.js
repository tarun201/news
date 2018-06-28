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
    className: 'jsx-1148205610' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-1148205610',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'News'), props.news.map(function (_ref) {
    var title = _ref.title,
        link = _ref.link,
        date = _ref.date,
        time = _ref.time,
        id = _ref.id,
        category = _ref.category,
        image = _ref.image;
    return _react2.default.createElement('div', { key: id, className: 'jsx-1148205610' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1148205610' + ' ' + 'image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('img', { src: image, className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1148205610' + ' ' + 'info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1148205610' + ' ' + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('h3', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, title))), _react2.default.createElement('p', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, 'Date:'), ' ', date), _react2.default.createElement('p', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, 'Time:'), ' ', time), _react2.default.createElement('span', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, 'Category: '), _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1148205610' + ' ' + 'category',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, category))), _react2.default.createElement('hr', {
      className: 'jsx-1148205610',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1148205610',
    css: 'h1.jsx-1148205610{color:rgb(199,50,50);}div.news.jsx-1148205610{vertical-align:middle;}div.content.jsx-1148205610{overflow:auto;margin-top:3%;width:50%;float:left;margin-left:5%;padding:2%;border:1px solid black;border-radius:10px;font-family:\'Times New Roman\';}div.info.jsx-1148205610{display:inline-block;width:70%;text-align:justify;}div.image.jsx-1148205610{display:inline-block;width:30%;}img.jsx-1148205610{border-radius:10px;width:90%;height:90%;}a.title.jsx-1148205610{text-decoration:none;color:rgba(5,132,163,0.829);}a.category.jsx-1148205610{text-decoration:none;color:rgba(0,0,0,0.829);}a.jsx-1148205610:hover{text-decoration:underline;}span.jsx-1148205610{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDWSxBQUlnQyxBQUlILEFBSU4sQUFXTyxBQUtBLEFBS0YsQUFLRSxBQUlBLEFBS0ssQUFHVCxjQXJDSixHQXNDZixFQWpCWSxFQTdCZCxBQW1CYyxBQUtBLEFBVXFCLEFBSUosQ0FsQy9CLElBdUNFLEVBbENZLENBcUJDLEVBVlEsQUFNckIsT0FoQmEsRUFxQmIsS0FRQSxJQTVCaUIsQUF3QmpCLENBZEEsY0FUYSxXQUNZLHVCQUNKLG1CQUNXLDhCQUNsQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdXN0ZGlhbC9uZXdzL3JlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9iYXNpY19sYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8QmxheW91dD5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICA8aDE+TmV3czwvaDE+XG4gICAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICAgIHtwcm9wcy5uZXdzLm1hcCgoeyB0aXRsZSwgbGluaywgZGF0ZSx0aW1lLCBpZCwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NcIiBrZXk9e2lkfT5cbiAgICAgICAgICB7LyogSW1hZ2UgZm9yIGEgbmV3cyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogT3RoZXIgZGV0YWlscyBvZiBuZXdzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2xpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj48aDM+e3RpdGxlfTwvaDM+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwPjxzcGFuPkRhdGU6PC9zcGFuPiB7ZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDxwPjxzcGFuPlRpbWU6PC9zcGFuPiB7dGltZX08L3A+XG5cbiAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvbmV3cy8ke2NhdGVnb3J5fWB9IGhyZWY9e2AvY2F0ZWdvcnk/aWQ9JHtjYXRlZ29yeX1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPntjYXRlZ29yeX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG48L2Rpdj5cbjxzdHlsZSBqc3g+e2BcblxuICAgIGgxe1xuICAgICAgICBjb2xvcjogcmdiKDE5OSwgNTAsIDUwKTtcbiAgICB9XG5cbiAgICBkaXYubmV3c3tcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgZGl2LmNvbnRlbnR7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOjMlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcbiAgICB9XG4gICAgZGl2LmluZm97XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH1cbiAgICAgIGRpdi5pbWFnZXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICB9XG4gICAgICBhLnRpdGxlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSg1LCAxMzIsIDE2MywgMC44MjkpO1xuICAgICAgfVxuICAgICAgYS5jYXRlZ29yeXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgyOSk7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICAgIHNwYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuYH08L3N0eWxlPlxuICA8L0JsYXlvdXQ+XG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld3M6IGRhdGFcbiAgICB9XG4gIH1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJJbmRleCIsInByb3BzIiwibmV3cyIsIm1hcCIsInRpdGxlIiwibGluayIsImRhdGUiLCJ0aW1lIiwiaWQiLCJjYXRlZ29yeSIsImltYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFEO3lCQUNaLEFBQUM7O2dCQUFEO2tCQUFBLEFBRUU7QUFGRjtBQUFBLEdBQUEsa0JBRUUsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNBO0FBREE7QUFBQSxxQkFDQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURBLEFBQ0EsQUFFSyxlQUFBLEFBQU0sS0FBTixBQUFXLElBQUksZ0JBQUE7UUFBQSxBQUFHLGFBQUgsQUFBRztRQUFILEFBQVUsWUFBVixBQUFVO1FBQVYsQUFBZ0IsWUFBaEIsQUFBZ0I7UUFBaEIsQUFBcUIsWUFBckIsQUFBcUI7UUFBckIsQUFBMkIsVUFBM0IsQUFBMkI7UUFBM0IsQUFBK0IsZ0JBQS9CLEFBQStCO1FBQS9CLEFBQXlDLGFBQXpDLEFBQXlDOzJCQUN2RCxjQUFBLFNBQXNCLEtBQXRCLEFBQTJCLHdDQUEzQixBQUFlOztrQkFBZjtvQkFBQSxBQUVFO0FBRkY7S0FBQSxrQkFFRSxjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNPLEtBQUwsQUFBVSxrQkFBVjs7a0JBQUE7b0JBSEosQUFFRSxBQUNFLEFBR0Y7QUFIRTt5QkFHRixjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMsZ0NBQUssV0FBTixBQUFlO2tCQUFmO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOzBDQUFBLEFBQWE7O2tCQUFiO29CQUFBLEFBQXFCO0FBQXJCO0FBQUEsdUJBQXFCLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBLEFBQUs7QUFBTDtBQUFBLE9BRnpCLEFBQ0UsQUFDRSxBQUFxQixBQUV2QiwwQkFBQSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FBSCxBQUFHLFVBQW9CLEtBSnpCLEFBSUUsQUFDQSx1QkFBQSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FBSCxBQUFHLFVBQW9CLEtBTHpCLEFBS0UsQUFFQSx1QkFBQSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FQRixBQU9FLEFBQ0EsK0JBQUEsQUFBQyxnQ0FBSyxlQUFOLEFBQW1CLFVBQVksd0JBQS9CLEFBQXFEO2tCQUFyRDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUF5QjtBQUF6QjtBQUFBLE9BZk4sQUFNRSxBQVFFLEFBQ0UsQUFJSjtpQkFBQTs7a0JBQUE7b0JBcEJZLEFBQ2QsQUFtQkU7QUFBQTtBQUFBO0FBekJWLEFBRUUsQUFHSzthQUxQO1NBRFksQUFDWjtBQUFBO0FBREY7O0FBcUZBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7V0FBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0YsaUNBREUsQUFDRixBQUFNOzthQUFsQjtBQURjLHlCQUFBOzBCQUFBO2lCQUVELElBRkMsQUFFRCxBQUFJOzthQUFqQjtBQUZjLDBCQUlwQjs7a0JBQUEsQUFBUSxtQ0FBaUMsS0FKckIsQUFJcEIsQUFBOEM7OztrQkFKMUIsQUFNYixBQUNDO0FBREQsQUFDTDs7YUFQa0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBYUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9