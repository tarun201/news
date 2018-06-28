webpackHotUpdate(6,{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = __webpack_require__(390);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _basic_layout = __webpack_require__(392);

var _basic_layout2 = _interopRequireDefault(_basic_layout);

var _link = __webpack_require__(391);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(398);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/justdial/news/react/pages/category.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/justdial/news/react/pages/category.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/category")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi41NzJkMmNlYjYwZDM4YjFhMzQ5My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2F0ZWdvcnkuanM/ZWNmOTg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2ljX2xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4gKFxuICA8QmxheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8aDE+TmV3czwvaDE+XG4gICAgICAgIHsvKiBsb29wIGZvciBlYWNoIG5ld3MgKi99XG4gICAgICAgIHtwcm9wcy5uZXdzLm1hcCgoeyB0aXRsZSwgbGluaywgZGF0ZSwgaWQsIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzXCIga2V5PXtpZH0+XG4gICAgICAgICAgey8qIEltYWdlIGZvciBhIG5ld3MgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIE90aGVyIGRldGFpbHMgb2YgbmV3cyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rfWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+PGgzPnt0aXRsZX08L2gzPjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8cD48c3Bhbj5EYXRlOjwvc3Bhbj4ge2RhdGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuXG5oMXtcbiAgICBjb2xvcjogcmdiKDE5OSwgNTAsIDUwKTtcbn1cblxuZGl2LmNvbnRlbnR7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWFyZ2luLXRvcDozJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5kaXYuaW5mb3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICBkaXYuaW1hZ2V7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgXG4gIH1cbiAgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuICBhLnRpdGxlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoNSwgMTMyLCAxNjMsIDAuODI5KTtcbiAgfVxuICBcblxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICBzcGFue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gfTwvc3R5bGU+XG5cbiAgPC9CbGF5b3V0PlxuKVxuXG5DYXRlZ29yeS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCBpZD1jb250ZXh0LnF1ZXJ5LmNhdGVnb3J5O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL25ld3MvY2F0ZWdvcnkvJHtpZH1gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgbmV3czogZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2F0ZWdvcnkuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQUpBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUF3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFJQTtBQUNBOztBQUdBO0FBQUE7QUFEQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=