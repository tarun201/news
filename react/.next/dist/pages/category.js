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

var _jsxFileName = '/home/justdial/news/react/pages/category.js?entry';


var Category = function Category(props) {
  return _react2.default.createElement(_basic_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1466609361' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-1466609361',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'News'), props.news.map(function (_ref) {
    var title = _ref.title,
        link = _ref.link,
        date = _ref.date,
        time = _ref.time,
        id = _ref.id,
        image = _ref.image;
    return _react2.default.createElement('div', { key: id, className: 'jsx-1466609361' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1466609361' + ' ' + 'image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, _react2.default.createElement('img', { src: image, className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1466609361' + ' ' + 'info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1466609361' + ' ' + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement('h3', {
      className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, title))), _react2.default.createElement('p', {
      className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, 'Date:'), ' ', date), _react2.default.createElement('p', {
      className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, 'Date:'), ' ', time)), _react2.default.createElement('hr', {
      className: 'jsx-1466609361',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1466609361',
    css: 'h1.jsx-1466609361{color:rgb(199,50,50);}div.content.jsx-1466609361{overflow:auto;margin-top:3%;width:50%;display:inline-block;float:left;margin-left:5%;padding:2%;border:1px solid black;border-radius:10px;font-family:\'Times New Roman\';margin-bottom:1%;}div.news.jsx-1466609361{vertical-align:middle;}div.info.jsx-1466609361{display:inline-block;width:70%;text-align:justify;}div.image.jsx-1466609361{display:inline-block;width:30%;}img.jsx-1466609361{border-radius:10px;width:90%;height:90%;}a.title.jsx-1466609361{text-decoration:none;color:rgba(5,132,163,0.829);}a.jsx-1466609361:hover{text-decoration:underline;}span.jsx-1466609361{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFJNEIsQUFJVCxBQWFNLEFBSUMsQUFLQSxBQUtGLEFBS0UsQUFNSyxBQUdULGNBeENKLEdBeUNmLEVBZFksRUEvQmQsQUFxQmMsQUFLQSxBQVVxQixDQW5CbkMsSUF5QkUsRUFyQ1ksQ0EyQkMsRUFWUSxBQU1yQixPQXRCdUIsRUEyQnZCLFNBSUEsQ0FkQSxTQWhCYSxXQUNJLGVBQ0osV0FDWSx1QkFDSixtQkFDVyw4QkFDYixpQkFDckIiLCJmaWxlIjoicGFnZXMvY2F0ZWdvcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzaWNfbGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgQ2F0ZWdvcnkgPSAocHJvcHMpID0+IChcbiAgPEJsYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPGgxPk5ld3M8L2gxPlxuICAgICAgICB7LyogbG9vcCBmb3IgZWFjaCBuZXdzICovfVxuICAgICAgICB7cHJvcHMubmV3cy5tYXAoKHsgdGl0bGUsIGxpbmssIGRhdGUsdGltZSwgaWQsaW1hZ2UgfSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c1wiIGtleT17aWR9PlxuICAgICAgICAgIHsvKiBJbWFnZSBmb3IgYSBuZXdzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBPdGhlciBkZXRhaWxzIG9mIG5ld3MgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMz57dGl0bGV9PC9oMz48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHA+PHNwYW4+RGF0ZTo8L3NwYW4+IHtkYXRlfTwvcD5cbiAgICAgICAgICAgICAgPHA+PHNwYW4+RGF0ZTo8L3NwYW4+IHt0aW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuaDF7XG4gICAgY29sb3I6IHJnYigxOTksIDUwLCA1MCk7XG59XG5cbmRpdi5jb250ZW50e1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6MyU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nO1xuICAgIG1hcmdpbi1ib3R0b206IDElO1xufVxuZGl2Lm5ld3N7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmRpdi5pbmZve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgZGl2LmltYWdle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIFxuICB9XG4gIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gIH1cbiAgYS50aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDUsIDEzMiwgMTYzLCAwLjgyOSk7XG4gIH1cbiAgXG5cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYH08L3N0eWxlPlxuXG4gIDwvQmxheW91dD5cbilcblxuQ2F0ZWdvcnkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9uZXdzL2NhdGVnb3J5LyR7aWR9YClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIG5ld3M6IGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdfQ== */\n/*@ sourceURL=pages/category.js?entry */'
  }));
};

Category.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/news/category/' + id);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;

            console.log('Show data fetched. Count: ' + data.length);

            return _context.abrupt('return', {
              data: data,
              news: data
            });

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = Category;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJDYXRlZ29yeSIsInByb3BzIiwibmV3cyIsIm1hcCIsInRpdGxlIiwibGluayIsImRhdGUiLCJ0aW1lIiwiaWQiLCJpbWFnZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7eUJBQ2YsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDSTtBQURKO0FBQUEsR0FBQSxrQkFDSSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUVDLGVBQUEsQUFBTSxLQUFOLEFBQVcsSUFBSSxnQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBVSxZQUFWLEFBQVU7UUFBVixBQUFnQixZQUFoQixBQUFnQjtRQUFoQixBQUFxQixZQUFyQixBQUFxQjtRQUFyQixBQUEyQixVQUEzQixBQUEyQjtRQUEzQixBQUE4QixhQUE5QixBQUE4QjsyQkFDNUMsY0FBQSxTQUFzQixLQUF0QixBQUEyQix3Q0FBM0IsQUFBZTs7a0JBQWY7b0JBQUEsQUFFRTtBQUZGO0tBQUEsa0JBRUUsY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNFO0FBREY7QUFBQSw4Q0FDTyxLQUFMLEFBQVUsa0JBQVY7O2tCQUFBO29CQUhKLEFBRUUsQUFDRSxBQUdGO0FBSEU7eUJBR0YsY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLGdDQUFLLFdBQU4sQUFBZTtrQkFBZjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUFxQjtBQUFyQjtBQUFBLHVCQUFxQixjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFLO0FBQUw7QUFBQSxPQUZ6QixBQUNFLEFBQ0UsQUFBcUIsQUFFdkIsMEJBQUEsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUEsQUFBRztBQUFIO0FBQUEsdUJBQUcsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BQUgsQUFBRyxVQUFvQixLQUp6QixBQUlFLEFBQ0EsdUJBQUEsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUEsQUFBRztBQUFIO0FBQUEsdUJBQUcsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BQUgsQUFBRyxVQUFvQixLQVgzQixBQU1FLEFBS0UsQUFFRjtpQkFBQTs7a0JBQUE7b0JBZFksQUFDZCxBQWFFO0FBQUE7QUFBQTtBQWxCVixBQUNJLEFBR0c7YUFKUDtTQURlLEFBQ2Y7QUFBQTtBQURGOztBQStFQSxTQUFBLEFBQVMsOEJBQVQ7dUZBQTJCLGlCQUFBLEFBQWdCLFNBQWhCO2FBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDUCwwRUFETyxBQUNQLEFBQTZDOztlQUF6RDtBQURtQiwyQkFBQTs0QkFBQTttQkFFTixJQUZNLEFBRU4sQUFBSTs7ZUFBakI7QUFGbUIsNEJBSXpCOztvQkFBQSxBQUFRLG1DQUFpQyxLQUpoQixBQUl6QixBQUE4Qzs7O29CQUV2QyxBQUVMO29CQVJ1QixBQU1sQixBQUVDO0FBRkQsQUFDTDs7ZUFQdUI7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUEzQjs7dUJBQUE7NkJBQUE7QUFBQTtBQVlBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNhdGVnb3J5LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QifQ==