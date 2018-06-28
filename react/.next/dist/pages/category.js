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
      lineNumber: 5
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1125832998' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-1125832998',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'News'), props.news.map(function (_ref) {
    var title = _ref.title,
        link = _ref.link,
        date = _ref.date,
        id = _ref.id,
        category = _ref.category,
        image = _ref.image;
    return _react2.default.createElement('div', { key: id, className: 'jsx-1125832998' + ' ' + 'news',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement('div', {
      className: 'jsx-1125832998' + ' ' + 'image',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('img', { src: image, className: 'jsx-1125832998',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    })), _react2.default.createElement('div', {
      className: 'jsx-1125832998' + ' ' + 'info',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement(_link2.default, { href: '' + link, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, _react2.default.createElement('a', {
      className: 'jsx-1125832998' + ' ' + 'title',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement('h3', {
      className: 'jsx-1125832998',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, title))), _react2.default.createElement('p', {
      className: 'jsx-1125832998',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement('span', {
      className: 'jsx-1125832998',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, 'Date:'), ' ', date)), _react2.default.createElement('hr', {
      className: 'jsx-1125832998',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }));
  })), _react2.default.createElement(_style2.default, {
    styleId: '1125832998',
    css: 'h1.jsx-1125832998{color:rgb(199,50,50);}div.content.jsx-1125832998{overflow:auto;margin-top:3%;width:50%;display:inline-block;float:left;margin-left:5%;padding:2%;border:1px solid black;border-radius:10px;font-family:\'Times New Roman\';margin-bottom:1%;}div.info.jsx-1125832998{display:inline-block;width:70%;}div.image.jsx-1125832998{display:inline-block;width:30%;}img.jsx-1125832998{border-radius:10px;width:90%;height:90%;}a.title.jsx-1125832998{text-decoration:none;color:rgba(5,132,163,0.829);}a.jsx-1125832998:hover{text-decoration:underline;}span.jsx-1125832998{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFJNEIsQUFJVCxBQWFPLEFBSUEsQUFLRixBQUtFLEFBTUssQUFHVCxjQW5DSixHQW9DZixFQWRZLEVBMUJkLEFBaUJjLEFBSUEsQUFVcUIsS0FNakMsRUFoQ1ksQ0FzQkMsRUFUYixBQUtBLE9BakJ1QixFQXNCdkIsU0FJQSxVQXpCYSxXQUNJLGVBQ0osV0FDWSx1QkFDSixtQkFDVyw4QkFDYixpQkFDckIiLCJmaWxlIjoicGFnZXMvY2F0ZWdvcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYmFzaWNfbGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmNvbnN0IENhdGVnb3J5ID0gKHByb3BzKSA9PiAoXG4gIDxCbGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxoMT5OZXdzPC9oMT5cbiAgICAgICAgey8qIGxvb3AgZm9yIGVhY2ggbmV3cyAqL31cbiAgICAgICAge3Byb3BzLm5ld3MubWFwKCh7IHRpdGxlLCBsaW5rLCBkYXRlLCBpZCwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NcIiBrZXk9e2lkfT5cbiAgICAgICAgICB7LyogSW1hZ2UgZm9yIGEgbmV3cyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogT3RoZXIgZGV0YWlscyBvZiBuZXdzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2xpbmt9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj48aDM+e3RpdGxlfTwvaDM+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwPjxzcGFuPkRhdGU6PC9zcGFuPiB7ZGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8c3R5bGUganN4PntgXG5cbmgxe1xuICAgIGNvbG9yOiByZ2IoMTk5LCA1MCwgNTApO1xufVxuXG5kaXYuY29udGVudHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW4tdG9wOjMlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJztcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cbmRpdi5pbmZve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIGRpdi5pbWFnZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBcbiAgfVxuICBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICB9XG4gIGEudGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogcmdiYSg1LCAxMzIsIDE2MywgMC44MjkpO1xuICB9XG4gIFxuXG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIHNwYW57XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmB9PC9zdHlsZT5cblxuICA8L0JsYXlvdXQ+XG4pXG5cbkNhdGVnb3J5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IGlkPWNvbnRleHQucXVlcnkuY2F0ZWdvcnk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvbmV3cy9jYXRlZ29yeS8ke2lkfWApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBuZXdzOiBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnkiXX0= */\n/*@ sourceURL=pages/category.js?entry */'
  }));
};

Category.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.category;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('http://localhost:8080/news/category/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            console.log('Show data fetched. Count: ' + data.length);

            return _context.abrupt('return', {
              data: data,
              news: data
            });

          case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkJsYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJDYXRlZ29yeSIsInByb3BzIiwibmV3cyIsIm1hcCIsInRpdGxlIiwibGluayIsImRhdGUiLCJpZCIsImNhdGVnb3J5IiwiaW1hZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBQ1AsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDt5QkFDZixBQUFDOztnQkFBRDtrQkFBQSxBQUNJO0FBREo7QUFBQSxHQUFBLGtCQUNJLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBRUMsZUFBQSxBQUFNLEtBQU4sQUFBVyxJQUFJLGdCQUFBO1FBQUEsQUFBRyxhQUFILEFBQUc7UUFBSCxBQUFVLFlBQVYsQUFBVTtRQUFWLEFBQWdCLFlBQWhCLEFBQWdCO1FBQWhCLEFBQXNCLFVBQXRCLEFBQXNCO1FBQXRCLEFBQTBCLGdCQUExQixBQUEwQjtRQUExQixBQUFvQyxhQUFwQyxBQUFvQzsyQkFDbEQsY0FBQSxTQUFzQixLQUF0QixBQUEyQix3Q0FBM0IsQUFBZTs7a0JBQWY7b0JBQUEsQUFFRTtBQUZGO0tBQUEsa0JBRUUsY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNFO0FBREY7QUFBQSw4Q0FDTyxLQUFMLEFBQVUsa0JBQVY7O2tCQUFBO29CQUhKLEFBRUUsQUFDRSxBQUdGO0FBSEU7eUJBR0YsY0FBQTswQ0FBQSxBQUFlOztrQkFBZjtvQkFBQSxBQUNFO0FBREY7QUFBQSx1QkFDRSxBQUFDLGdDQUFLLFdBQU4sQUFBZTtrQkFBZjtvQkFBQSxBQUNFO0FBREY7dUJBQ0UsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUFxQjtBQUFyQjtBQUFBLHVCQUFxQixjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFLO0FBQUw7QUFBQSxPQUZ6QixBQUNFLEFBQ0UsQUFBcUIsQUFFdkIsMEJBQUEsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUEsQUFBRztBQUFIO0FBQUEsdUJBQUcsY0FBQTtpQkFBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BQUgsQUFBRyxVQUFvQixLQVYzQixBQU1FLEFBSUUsQUFFRjtpQkFBQTs7a0JBQUE7b0JBYlksQUFDZCxBQVlFO0FBQUE7QUFBQTtBQWpCVixBQUNJLEFBR0c7YUFKUDtTQURlLEFBQ2Y7QUFBQTtBQURGOztBQXlFQSxTQUFBLEFBQVMsOEJBQVQ7dUZBQTJCLGlCQUFBLEFBQWdCLFNBQWhCO2lCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQ25CO0FBRG1CLGlCQUNoQixRQUFBLEFBQVEsTUFEUSxBQUNGOzRCQURFO21CQUVQLDBFQUZPLEFBRVAsQUFBNkM7O2VBQXpEO0FBRm1CLDJCQUFBOzRCQUFBO21CQUdOLElBSE0sQUFHTixBQUFJOztlQUFqQjtBQUhtQiw0QkFLekI7O29CQUFBLEFBQVEsbUNBQWlDLEtBTGhCLEFBS3pCLEFBQThDOzs7b0JBRXZDLEFBRUw7b0JBVHVCLEFBT2xCLEFBRUM7QUFGRCxBQUNMOztlQVJ1QjtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQTNCOzt1QkFBQTs2QkFBQTtBQUFBO0FBYUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY2F0ZWdvcnkuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9