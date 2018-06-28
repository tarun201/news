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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/justdial/news/react/components/rightbar.js';


var Rightbar = function Rightbar(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-241222017' + ' ' + 'right',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-241222017',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'Categories'), props.categories.map(function (_ref) {
        var category = _ref.category;
        return _react2.default.createElement('div', { key: category, className: 'jsx-241222017' + ' ' + 'list',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, _react2.default.createElement('span', {
            className: 'jsx-241222017' + ' ' + 'categories',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }, category));
    }), _react2.default.createElement(_style2.default, {
        styleId: '241222017',
        css: 'div.jsx-241222017{margin-top:3%;width:30%;display:inline-block;float:left;margin-right:5%;margin-left:1%;padding:2%;border:1px solid black;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmlnaHRiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVksQUFHc0IsY0FDSCxVQUNXLHFCQUNWLFdBQ0ssZ0JBQ0QsZUFDSixXQUNZLHVCQUNKLG1CQUN2QiIsImZpbGUiOiJjb21wb25lbnRzL3JpZ2h0YmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG5jb25zdCBSaWdodGJhciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgPGgzPkNhdGVnb3JpZXM8L2gzPlxuICAgICAgICB7cHJvcHMuY2F0ZWdvcmllcy5tYXAoKHsgY2F0ZWdvcnkgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2F0ZWdvcmllcyc+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgIFxuPHN0eWxlIGpzeD57YFxuICAgIGRpdntcbiAgICAgICAgbWFyZ2luLXRvcDozJTtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgICBwYWRkaW5nOiAyJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuYH08L3N0eWxlPlxuPC9kaXY+XG4pXG5cblJpZ2h0YmFyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NhdGVnb3J5YClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBcbiAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG4gIFxuICAgIHJldHVybiB7XG4gICAgICBjYXRlZ29yaWVzOiBkYXRhXG4gICAgfVxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRiYXIiXX0= */\n/*@ sourceURL=components/rightbar.js */'
    }));
};

Rightbar.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('http://localhost:8080/category');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;

                    console.log('Show data fetched. Count: ' + data.length);

                    return _context.abrupt('return', {
                        categories: data
                    });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Rightbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmlnaHRiYXIuanMiXSwibmFtZXMiOlsiTGluayIsImZldGNoIiwiUmlnaHRiYXIiLCJwcm9wcyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEOzJCQUNiLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0MscUJBQUEsQUFBTSxXQUFOLEFBQWlCLElBQUksZ0JBQUE7WUFBQSxBQUFHLGdCQUFILEFBQUc7K0JBQ3JCLGNBQUEsU0FBc0IsS0FBdEIsQUFBMkIsNkNBQTNCLEFBQWU7OzBCQUFmOzRCQUFBLEFBQ0k7QUFESjtTQUFBLGtCQUNJLGNBQUE7K0NBQUEsQUFBZ0I7OzBCQUFoQjs0QkFBQSxBQUNLO0FBREw7QUFBQSxXQUZjLEFBQ2xCLEFBQ0k7QUFKWixBQUVLO2lCQUZMO2FBRGEsQUFDYjtBQUFBO0FBREo7O0FBNEJBLFNBQUEsQUFBUywyRkFBa0IsbUJBQUE7YUFBQTtrRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FBQTsyQkFDTCxpQ0FESzs7cUJBQ2pCO0FBRGlCLG1DQUFBO29DQUFBOzJCQUVKLElBRkksQUFFSixBQUFJOztxQkFBakI7QUFGaUIsb0NBSXZCOzs0QkFBQSxBQUFRLG1DQUFpQyxLQUpsQixBQUl2QixBQUE4Qzs7O29DQUp2QixBQU1oQixBQUNPO0FBRFAsQUFDTDs7cUJBUHFCO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBO0FBQTNCLEFBWUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmlnaHRiYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9