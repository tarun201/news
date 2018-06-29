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

var _rightbar = require('../components/rightbar');

var _rightbar2 = _interopRequireDefault(_rightbar);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/justdial/news/react/pages/category.js?entry';


var Category = function Category(props) {
  return _react2.default.createElement(_basic_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-3670816163' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-3670816163',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'News'), props.news.map(function (_ref) {
    var title = _ref.title,
        link = _ref.link,
        day = _ref.day,
        time = _ref.time,
        id = _ref.id,
        language = _ref.language,
        image = _ref.image;
    return _react2.default.createElement('div', { key: id, className: 'jsx-3670816163' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-3670816163' + ' ' + 'image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('img', { src: image, className: 'jsx-3670816163',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-3670816163' + ' ' + 'info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-3670816163' + ' ' + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('h3', {
      className: 'jsx-3670816163',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, title))), _react2.default.createElement('p', {
      className: 'jsx-3670816163',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-3670816163' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, 'Date:'), ' ', day, ' ', _react2.default.createElement('span', {
      className: 'jsx-3670816163' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, ' Time:'), ' ', time), _react2.default.createElement('span', {
      className: 'jsx-3670816163' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Langauge: '), _react2.default.createElement(_link2.default, { as: '/lang/' + language, href: '/language?id=' + language, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-3670816163' + ' ' + 'category',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, language))), _react2.default.createElement('hr', {
      className: 'jsx-3670816163',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }));
  })), _react2.default.createElement(_rightbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, props.list.map(function (_ref2) {
    var category = _ref2.category;
    return _react2.default.createElement(_link2.default, { as: '/news/' + category, href: '/category?id=' + category, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, _react2.default.createElement('a', { key: category, className: 'jsx-3670816163' + ' ' + 'list',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }, category, ' '));
  })), _react2.default.createElement(_style2.default, {
    styleId: '3670816163',
    css: 'h1.jsx-3670816163{color:rgb(199,50,50);}div.content.jsx-3670816163{overflow:auto;margin-top:3%;width:50%;display:inline-block;float:left;margin-left:5%;padding:2%;margin-bottom:1%;}div.news.jsx-3670816163{vertical-align:middle;}div.info.jsx-3670816163{display:inline-block;width:70%;text-align:justify;}div.image.jsx-3670816163{display:inline-block;width:30%;}img.jsx-3670816163{border-radius:10px;width:90%;height:90%;}a.title.jsx-3670816163{text-decoration:none;color:rgba(5,132,163,0.829);}a.title.jsx-3670816163:hover{text-decoration:underline;}a.list.jsx-3670816163{display:inline-block;padding:1%;background:rgb(223,219,219);border-radius:10px;margin-left:1%;margin-bottom:1%;color:rgb(35,107,62);text-decoration:none;}a.list.jsx-3670816163:hover{background-color:rgb(53,51,51);color:rgb(13,172,13);}a.category.jsx-3670816163{text-decoration:none;color:rgba(0,0,0,0.829);}a.category.jsx-3670816163:hover{text-decoration:underline;}span.jsx-3670816163{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZ0IsQUFJNEIsQUFJVCxBQVVNLEFBSUMsQUFLQSxBQUtGLEFBS0UsQUFNSyxBQUdMLEFBVVksQUFJWixBQUtLLEFBR1QsY0EzREosR0E0RGYsRUFwQ1ksRUE1QmQsQUFrQmMsQUFLQSxBQVVxQixBQVNwQixBQWNnQixDQTFDL0IsSUF5QkUsQUFzQkEsRUF4RFksQ0F3QkMsRUFWUSxBQU1yQixBQTJCeUIsQ0FUTyxNQXJDVCxFQXdCdkIsS0EyQkEsSUF2QkEsQ0FkQSxFQWlDQSxPQTlDYSxDQXFDTyxVQXBDSCxTQXFDQSxNQXBDSixTQXFDTSxFQXBDQSxlQXFDTSxFQXBDM0IsbUJBcUN5QixxQkFDdkIiLCJmaWxlIjoicGFnZXMvY2F0ZWdvcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzaWNfbGF5b3V0J1xuaW1wb3J0IFJpZ2h0YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvcmlnaHRiYXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4gKFxuICA8QmxheW91dD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxoMT5OZXdzPC9oMT5cbiAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICB7cHJvcHMubmV3cy5tYXAoKHsgdGl0bGUsIGxpbmssIGRheSwgdGltZSwgaWQsbGFuZ3VhZ2UsIGltYWdlIH0pID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCIga2V5PXtpZH0+XG4gICAgICAgICAgey8qIEltYWdlIGZvciBhIG5ld3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiBPdGhlciBkZXRhaWxzIG9mIG5ld3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMz57dGl0bGV9PC9oMz48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJuZXdzXCI+RGF0ZTo8L3NwYW4+IHtkYXl9IDxzcGFuIGNsYXNzTmFtZT1cIm5ld3NcIj4gVGltZTo8L3NwYW4+IHt0aW1lfTwvcD5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3c1wiPkxhbmdhdWdlOiA8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBhcz17YC9sYW5nLyR7bGFuZ3VhZ2V9YH0gaHJlZj17YC9sYW5ndWFnZT9pZD0ke2xhbmd1YWdlfWB9PlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPntsYW5ndWFnZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPFJpZ2h0YmFyPlxuICAgICAge3Byb3BzLmxpc3QubWFwKCh7IGNhdGVnb3J5IH0pID0+IChcbiAgICAgICAgPExpbmsgYXM9e2AvbmV3cy8ke2NhdGVnb3J5fWB9IGhyZWY9e2AvY2F0ZWdvcnk/aWQ9JHtjYXRlZ29yeX1gfT48YSBjbGFzc05hbWU9XCJsaXN0XCIga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fSA8L2E+PC9MaW5rPlxuICAgICAgKSl9XG4gICAgPC9SaWdodGJhcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcblxuaDF7XG4gICAgY29sb3I6IHJnYigxOTksIDUwLCA1MCk7XG59XG5cbmRpdi5jb250ZW50e1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6MyU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xufVxuZGl2Lm5ld3N7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmRpdi5pbmZve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgZGl2LmltYWdle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIFxuICB9XG4gIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gIH1cbiAgYS50aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDUsIDEzMiwgMTYzLCAwLjgyOSk7XG4gIH1cbiAgXG5cbiAgYS50aXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgYS5saXN0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIzLCAyMTksIDIxOSk7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4OyBcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgY29sb3I6IHJnYigzNSwgMTA3LCA2Mik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGEubGlzdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDUxLCA1MSk7XG4gICAgY29sb3I6IHJnYigxMywgMTcyLCAxMyk7XG4gIH1cbiAgYS5jYXRlZ29yeXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MjkpO1xuICB9XG5cbiAgYS5jYXRlZ29yeTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYH08L3N0eWxlPlxuXG4gIDwvQmxheW91dD5cbilcblxuQ2F0ZWdvcnkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MvY2F0ZWdvcnkvJHtpZH1gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NhdGVnb3J5JylcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIGxpc3Q6IGRhdGEyLFxuICAgIG5ld3M6IGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdfQ== */\n/*@ sourceURL=pages/category.js?entry */'
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
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/category');

          case 9:
            res2 = _context.sent;
            _context.next = 12;
            return res2.json();

          case 12:
            data2 = _context.sent;

            console.log('Show data fetched. Count: ' + data.length);

            return _context.abrupt('return', {
              list: data2,
              news: data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJSaWdodGJhciIsIkxpbmsiLCJmZXRjaCIsIkNhdGVnb3J5IiwicHJvcHMiLCJuZXdzIiwibWFwIiwidGl0bGUiLCJsaW5rIiwiZGF5IiwidGltZSIsImlkIiwibGFuZ3VhZ2UiLCJpbWFnZSIsImxpc3QiLCJjYXRlZ29yeSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzMiIsImRhdGEyIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7eUJBQ2YsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUVDLGVBQUEsQUFBTSxLQUFOLEFBQVcsSUFBSSxnQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBVSxZQUFWLEFBQVU7UUFBVixBQUFnQixXQUFoQixBQUFnQjtRQUFoQixBQUFxQixZQUFyQixBQUFxQjtRQUFyQixBQUEyQixVQUEzQixBQUEyQjtRQUEzQixBQUE4QixnQkFBOUIsQUFBOEI7UUFBOUIsQUFBd0MsYUFBeEMsQUFBd0M7MkJBQ3RELGNBQUEsU0FBc0IsS0FBdEIsQUFBMkIsd0NBQTNCLEFBQWU7O2tCQUFmO29CQUFBLEFBRUU7QUFGRjtLQUFBLGtCQUVFLGNBQUE7MENBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsOENBQ08sS0FBTCxBQUFVLGtCQUFWOztrQkFBQTtvQkFISixBQUVFLEFBQ0UsQUFHRjtBQUhFO3lCQUdGLGNBQUE7MENBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQyxnQ0FBSyxXQUFOLEFBQWU7a0JBQWY7b0JBQUEsQUFDRTtBQURGO3VCQUNFLGNBQUE7MENBQUEsQUFBYTs7a0JBQWI7b0JBQUEsQUFBcUI7QUFBckI7QUFBQSx1QkFBcUIsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUEsQUFBSztBQUFMO0FBQUEsT0FGekIsQUFDRSxBQUNFLEFBQXFCLEFBRXZCLDBCQUFBLGNBQUE7aUJBQUE7O2tCQUFBO29CQUFBLEFBQUc7QUFBSDtBQUFBLHVCQUFHLGNBQUE7MENBQUEsQUFBZ0I7O2tCQUFoQjtvQkFBQTtBQUFBO0FBQUEsT0FBSCxBQUFHLFVBQXFDLEtBQXhDLEtBQTZDLHFCQUFBLGNBQUE7MENBQUEsQUFBZ0I7O2tCQUFoQjtvQkFBQTtBQUFBO0FBQUEsT0FBN0MsQUFBNkMsV0FBc0MsS0FKckYsQUFJRSxBQUVBLHVCQUFBLGNBQUE7MENBQUEsQUFBZ0I7O2tCQUFoQjtvQkFBQTtBQUFBO0FBQUEsT0FORixBQU1FLEFBQ0EsK0JBQUEsQUFBQyxnQ0FBSyxlQUFOLEFBQW1CLFVBQVksd0JBQS9CLEFBQXFEO2tCQUFyRDtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUF5QjtBQUF6QjtBQUFBLE9BZE4sQUFNRSxBQU9FLEFBQ0UsQUFHSjtpQkFBQTs7a0JBQUE7b0JBbEJZLEFBQ2QsQUFpQkU7QUFBQTtBQUFBO0FBdEJSLEFBQ0UsQUFHRyxBQXNCSCx1QkFBQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxXQUNHLEFBQU0sS0FBTixBQUFXLElBQUksaUJBQUE7UUFBQSxBQUFHLGlCQUFILEFBQUc7MkJBQ2pCLEFBQUMsZ0NBQUssZUFBTixBQUFtQixVQUFZLHdCQUEvQixBQUFxRDtrQkFBckQ7b0JBQUEsQUFBaUU7QUFBakU7S0FBQSxrQkFBaUUsY0FBQSxPQUFvQixLQUFwQixBQUF5Qiw4Q0FBekIsQUFBYTs7a0JBQWI7b0JBQUEsQUFBb0M7QUFBcEM7T0FBQSxVQURuRCxBQUNkLEFBQWlFO0FBNUJ2RSxBQTBCRSxBQUNHO2FBM0JMO1NBRGUsQUFDZjtBQUFBO0FBREY7O0FBMkdBLFNBQUEsQUFBUyw4QkFBVDt1RkFBMkIsaUJBQUEsQUFBZ0IsU0FBaEI7NkJBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDbkI7QUFEbUIsaUJBQ2QsUUFBQSxBQUFRLE1BRE0sQUFDQTs0QkFEQTttQkFFUCwwRUFGTyxBQUVQLEFBQTZDOztlQUF6RDtBQUZtQiwyQkFBQTs0QkFBQTttQkFHTixJQUhNLEFBR04sQUFBSTs7ZUFBakI7QUFIbUIsNEJBQUE7NEJBQUE7bUJBS04saUNBTE0sQUFLTixBQUFNOztlQUFuQjtBQUxtQiw0QkFBQTs0QkFBQTttQkFNTCxLQU5LLEFBTUwsQUFBSzs7ZUFBbkI7QUFObUIsNkJBUXpCOztvQkFBQSxBQUFRLG1DQUFpQyxLQVJoQixBQVF6QixBQUE4Qzs7O29CQUV2QyxBQUNDLEFBQ047b0JBWnVCLEFBVWxCLEFBRUM7QUFGRCxBQUNMOztlQVh1QjtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQTNCOzt1QkFBQTs2QkFBQTtBQUFBO0FBZ0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNhdGVnb3J5LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QifQ==