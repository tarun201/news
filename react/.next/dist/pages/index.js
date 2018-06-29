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
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1203251758' + ' ' + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-1203251758',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
    return _react2.default.createElement('div', (_React$createElement = { className: 'news', key: id }, (0, _defineProperty3.default)(_React$createElement, 'className', 'jsx-1203251758' + ' ' + 'row'), (0, _defineProperty3.default)(_React$createElement, '__source', {
      fileName: _jsxFileName,
      lineNumber: 12
    }), _React$createElement), _react2.default.createElement('div', {
      className: 'jsx-1203251758' + ' ' + 'image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('img', { src: image, className: 'jsx-1203251758',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1203251758' + ' ' + 'info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1203251758' + ' ' + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('h3', {
      className: 'jsx-1203251758',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, title))), _react2.default.createElement('p', {
      className: 'jsx-1203251758',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1203251758' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, 'Date:'), ' ', day, ' ', _react2.default.createElement('span', {
      className: 'jsx-1203251758' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, ' Time:'), ' ', time), _react2.default.createElement('span', {
      className: 'jsx-1203251758' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Category: '), _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1203251758' + ' ' + 'category',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, category)), _react2.default.createElement('br', {
      className: 'jsx-1203251758',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }), _react2.default.createElement('br', {
      className: 'jsx-1203251758',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }), _react2.default.createElement('span', {
      className: 'jsx-1203251758' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, 'Langauge: '), _react2.default.createElement(_link2.default, { as: '/lang/' + language, href: '/language?id=' + language, __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1203251758' + ' ' + 'category',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, language))), _react2.default.createElement('hr', {
      className: 'jsx-1203251758',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }));
  })), _react2.default.createElement(_rightbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, props.list.map(function (_ref2) {
    var category = _ref2.category;
    return _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, _react2.default.createElement('a', { key: category, className: 'jsx-1203251758' + ' ' + 'list',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, category, ' '));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1203251758',
    css: 'h1.jsx-1203251758{color:rgb(199,50,50);}div.news.jsx-1203251758{vertical-align:middle;}div.content.jsx-1203251758{overflow:auto;margin-top:3%;width:50%;float:left;margin-left:5%;padding:2%;}div.info.jsx-1203251758{display:inline-block;width:70%;text-align:justify;}div.image.jsx-1203251758{display:inline-block;width:30%;}img.jsx-1203251758{border-radius:10px;width:90%;height:90%;}a.title.jsx-1203251758{text-decoration:none;color:rgba(5,132,163,0.829);}a.category.jsx-1203251758{text-decoration:none;color:rgba(0,0,0,0.829);}a.category.jsx-1203251758:hover{text-decoration:underline;}span.news.jsx-1203251758{font-weight:bold;}a.list.jsx-1203251758{display:inline-block;padding:1%;background:rgb(223,219,219);border-radius:10px;margin-left:1%;margin-bottom:1%;color:rgb(35,107,62);text-decoration:none;}a.list.jsx-1203251758:hover{background-color:rgb(53,51,51);color:rgb(13,172,13);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDZ0IsQUFJZ0MsQUFJSCxBQUlOLEFBUU8sQUFLQSxBQUtGLEFBS0UsQUFJQSxBQUtLLEFBR1QsQUFHSSxBQVVZLGNBL0NwQixHQW1DZixFQWpCWSxFQTFCZCxBQWdCYyxBQUtBLEFBVXFCLEFBSUosQUFXaEIsQ0ExQ2YsSUFvQ0UsRUEvQlksQ0FrQkMsRUFWUSxBQU1yQixBQWlDeUIsQ0FUTyxNQXJDbkIsRUFrQmIsS0FRQSxJQXpCaUIsQUFxQmpCLENBZEEsRUF1Q0EsUUFUb0IsSUFwQ1AsV0FDZixJQW9DbUIsZUFDRSxpQkFDTSxxQkFDRixxQkFDdkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzaWNfbGF5b3V0J1xuaW1wb3J0IFJpZ2h0YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvcmlnaHRiYXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuICA8QmxheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cbiAgICAgIDxoMT5OZXdzPC9oMT5cbiAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICB7cHJvcHMubmV3cy5tYXAoKHsgdGl0bGUsbGFuZ3VhZ2UsIGxpbmssIGRheSwgdGltZSwgaWQsIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiIGNsYXNzTmFtZT1cInJvd1wiIGtleT17aWR9PlxuICAgICAgICAgIHsvKiBJbWFnZSBmb3IgYSBuZXdzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogT3RoZXIgZGV0YWlscyBvZiBuZXdzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj48aDM+e3RpdGxlfTwvaDM+PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwibmV3c1wiPkRhdGU6PC9zcGFuPiB7ZGF5fSA8c3BhbiBjbGFzc05hbWU9XCJuZXdzXCI+IFRpbWU6PC9zcGFuPiB7dGltZX08L3A+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ld3NcIj5DYXRlZ29yeTogPC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvbmV3cy8ke2NhdGVnb3J5fWB9IGhyZWY9e2AvY2F0ZWdvcnk/aWQ9JHtjYXRlZ29yeX1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57Y2F0ZWdvcnl9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPjxici8+XG5cbiAgICAgICAgICAgIDxiciAvPjxzcGFuIGNsYXNzTmFtZT1cIm5ld3NcIj5MYW5nYXVnZTogPC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgYXM9e2AvbGFuZy8ke2xhbmd1YWdlfWB9IGhyZWY9e2AvbGFuZ3VhZ2U/aWQ9JHtsYW5ndWFnZX1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj57bGFuZ3VhZ2V9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG5cbiAgICA8UmlnaHRiYXI+XG4gICAgICB7cHJvcHMubGlzdC5tYXAoKHtjYXRlZ29yeX0pPT4oXG4gICAgICAgICAgICA8TGluayBhcz17YC9uZXdzLyR7Y2F0ZWdvcnl9YH0gaHJlZj17YC9jYXRlZ29yeT9pZD0ke2NhdGVnb3J5fWB9PjxhIGNsYXNzTmFtZT1cImxpc3RcIiBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9IDwvYT48L0xpbms+XG4gICAgICAgICkpfVxuICAgIDwvUmlnaHRiYXI+XG5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICBoMXtcbiAgICAgICAgY29sb3I6IHJnYigxOTksIDUwLCA1MCk7XG4gICAgfVxuXG4gICAgZGl2Lm5ld3N7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIGRpdi5jb250ZW50e1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDozJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgfVxuICAgIGRpdi5pbmZve1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICB9XG4gICAgICBkaXYuaW1hZ2V7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgfVxuICAgICAgYS50aXRsZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoNSwgMTMyLCAxNjMsIDAuODI5KTtcbiAgICAgIH1cbiAgICAgIGEuY2F0ZWdvcnl7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MjkpO1xuICAgICAgfVxuXG4gICAgICBhLmNhdGVnb3J5OmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBzcGFuLm5ld3N7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgYS5saXN0e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyMTksIDIxOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgICAgIGNvbG9yOiByZ2IoMzUsIDEwNywgNjIpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBhLmxpc3Q6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTEsIDUxKTtcbiAgICAgICAgY29sb3I6IHJnYigxMywgMTcyLCAxMyk7XG4gICAgICB9XG5gfTwvc3R5bGU+XG4gIDwvQmxheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NhdGVnb3J5JylcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKVxuXG5cblxuICByZXR1cm4ge1xuICAgIG5ld3M6IGRhdGEsXG4gICAgbGlzdDogZGF0YTJcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=pages/index.js?entry */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJSaWdodGJhciIsIkxpbmsiLCJmZXRjaCIsIkluZGV4IiwicHJvcHMiLCJuZXdzIiwibWFwIiwidGl0bGUiLCJsYW5ndWFnZSIsImxpbmsiLCJkYXkiLCJ0aW1lIiwiaWQiLCJjYXRlZ29yeSIsImltYWdlIiwibGlzdCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzMiIsImRhdGEyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7eUJBQ1osQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUVDLGVBQUEsQUFBTSxLQUFOLEFBQVcsSUFBSSxnQkFBQTtRQUFBOztRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBUyxnQkFBVCxBQUFTO1FBQVQsQUFBbUIsWUFBbkIsQUFBbUI7UUFBbkIsQUFBeUIsV0FBekIsQUFBeUI7UUFBekIsQUFBOEIsWUFBOUIsQUFBOEI7UUFBOUIsQUFBb0MsVUFBcEMsQUFBb0M7UUFBcEMsQUFBd0MsZ0JBQXhDLEFBQXdDO1FBQXhDLEFBQWtELGFBQWxELEFBQWtEOzJCQUNoRSxjQUFBLGlDQUFLLFdBQUwsQUFBZSxRQUF1QixLQUF0QyxBQUEyQyxnR0FBM0MsQUFBZ0M7Z0JBQWhDO2tCQUFBO0FBQUEsUUFFRSx1Q0FBQSxjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNPLEtBQUwsQUFBVSxrQkFBVjs7a0JBQUE7b0JBSEosQUFFRSxBQUNFLEFBR0Y7QUFIRTt5QkFHRixjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLHVCQUNFLEFBQUMsZ0NBQUssV0FBTixBQUFlO2tCQUFmO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOzBDQUFBLEFBQWE7O2tCQUFiO29CQUFBLEFBQXFCO0FBQXJCO0FBQUEsdUJBQXFCLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBLEFBQUs7QUFBTDtBQUFBLE9BRnpCLEFBQ0UsQUFDRSxBQUFxQixBQUV2QiwwQkFBQSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFHO0FBQUg7QUFBQSx1QkFBRyxjQUFBOzBDQUFBLEFBQWdCOztrQkFBaEI7b0JBQUE7QUFBQTtBQUFBLE9BQUgsQUFBRyxVQUFxQyxLQUF4QyxLQUE2QyxxQkFBQSxjQUFBOzBDQUFBLEFBQWdCOztrQkFBaEI7b0JBQUE7QUFBQTtBQUFBLE9BQTdDLEFBQTZDLFdBQXNDLEtBSnJGLEFBSUUsQUFFQSx1QkFBQSxjQUFBOzBDQUFBLEFBQWdCOztrQkFBaEI7b0JBQUE7QUFBQTtBQUFBLE9BTkYsQUFNRSxBQUNBLCtCQUFBLEFBQUMsZ0NBQUssZUFBTixBQUFtQixVQUFZLHdCQUEvQixBQUFxRDtrQkFBckQ7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7MENBQUEsQUFBYTs7a0JBQWI7b0JBQUEsQUFBeUI7QUFBekI7QUFBQSxPQVJKLEFBT0UsQUFDRSxBQUNLO2lCQUFBOztrQkFBQTtvQkFUVCxBQVNTLEFBRVA7QUFGTztBQUFBO2lCQUVQOztrQkFBQTtvQkFYRixBQVdFLEFBQU07QUFBTjtBQUFBLHdCQUFNLGNBQUE7MENBQUEsQUFBZ0I7O2tCQUFoQjtvQkFBQTtBQUFBO0FBQUEsT0FYUixBQVdRLEFBQ04sK0JBQUEsQUFBQyxnQ0FBSyxlQUFOLEFBQW1CLFVBQVksd0JBQS9CLEFBQXFEO2tCQUFyRDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUF5QjtBQUF6QjtBQUFBLE9BbkJOLEFBTUUsQUFZRSxBQUNFLEFBSUo7aUJBQUE7O2tCQUFBO29CQXhCWSxBQUNkLEFBdUJFO0FBQUE7QUFBQSxNQXZCRjtBQUxOLEFBQ0UsQUFHRyxBQTZCSCx1QkFBQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxXQUNHLEFBQU0sS0FBTixBQUFXLElBQUksaUJBQUE7UUFBQSxBQUFFLGlCQUFGLEFBQUU7MkJBQ1osQUFBQyxnQ0FBSyxlQUFOLEFBQW1CLFVBQVksd0JBQS9CLEFBQXFEO2tCQUFyRDtvQkFBQSxBQUFpRTtBQUFqRTtLQUFBLGtCQUFpRSxjQUFBLE9BQW9CLEtBQXBCLEFBQXlCLDhDQUF6QixBQUFhOztrQkFBYjtvQkFBQSxBQUFvQztBQUFwQztPQUFBLFVBRHZELEFBQ1YsQUFBaUU7QUFuQzNFLEFBaUNFLEFBQ0c7YUFsQ0w7U0FEWSxBQUNaO0FBQUE7QUFERjs7QUEwR0EsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTt1QkFBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0osaUNBREksQUFDSixBQUFNOzthQUFsQjtBQURnQix5QkFBQTswQkFBQTtpQkFFSCxJQUZHLEFBRUgsQUFBSTs7YUFBakI7QUFGZ0IsMEJBQUE7MEJBQUE7aUJBSUgsaUNBSkcsQUFJSCxBQUFNOzthQUFuQjtBQUpnQiwwQkFBQTswQkFBQTtpQkFLRixLQUxFLEFBS0YsQUFBSzs7YUFBbkI7QUFMZ0IsMkJBQUE7O2tCQVNmLEFBQ0MsQUFDTjtrQkFYb0IsQUFTZixBQUVDO0FBRkQsQUFDTDs7YUFWb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBZ0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QifQ==