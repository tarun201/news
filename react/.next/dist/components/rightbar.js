'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _jsxFileName = '/home/justdial/news/react/components/rightbar.js';


var Rightbar = function Rightbar(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-241222017' + ' ' + 'right',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('h3', {
        className: 'jsx-241222017',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, 'Categories'), _react2.default.createElement(_style2.default, {
        styleId: '241222017',
        css: 'div.jsx-241222017{margin-top:3%;width:30%;display:inline-block;float:left;margin-right:5%;margin-left:1%;padding:2%;border:1px solid black;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmlnaHRiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVksQUFHc0IsY0FDSCxVQUNXLHFCQUNWLFdBQ0ssZ0JBQ0QsZUFDSixXQUNZLHVCQUNKLG1CQUN2QiIsImZpbGUiOiJjb21wb25lbnRzL3JpZ2h0YmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2p1c3RkaWFsL25ld3MvcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2Jhc2ljX2xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IFJpZ2h0YmFyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICA8aDM+Q2F0ZWdvcmllczwvaDM+XG4gICAgXG48c3R5bGUganN4PntgXG4gICAgZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOjMlO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG5gfTwvc3R5bGU+XG48L2Rpdj5cbilcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0YmFyIl19 */\n/*@ sourceURL=components/rightbar.js */'
    }));
};

exports.default = Rightbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmlnaHRiYXIuanMiXSwibmFtZXMiOlsiQmxheW91dCIsIkxpbmsiLCJmZXRjaCIsIlJpZ2h0YmFyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEOzJCQUNiLGNBQUE7MkNBQUEsQUFBZTs7c0JBQWY7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJO2lCQURKO2FBRGEsQUFDYjtBQUFBO0FBREosQUFzQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmlnaHRiYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvanVzdGRpYWwvbmV3cy9yZWFjdCJ9