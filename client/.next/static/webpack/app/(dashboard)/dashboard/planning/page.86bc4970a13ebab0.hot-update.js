"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/dashboard/planning/page",{

/***/ "(app-pages-browser)/./src/app/(dashboard)/dashboard/planning/page.js":
/*!********************************************************!*\
  !*** ./src/app/(dashboard)/dashboard/planning/page.js ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.jsx\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/pencil.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.jsx\");\n/* harmony import */ var _components_ui_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ui/progress */ \"(app-pages-browser)/./src/components/ui/progress.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst currentExpenses = 2000;\nconst initialBudget = 10000;\nfunction Planning() {\n    var _budget_initialBudget_amount, _budget_initialBudget;\n    _s();\n    const [budget, setBudget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Planning.useEffect\": ()=>{\n            async function fetchbudget() {\n                const res = await fetch(\"http://localhost:8000/budget\");\n                const data = await res.json();\n                setBudget(data);\n            }\n            fetchbudget();\n        }\n    }[\"Planning.useEffect\"], []);\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newBudget, setNewBudget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((budget === null || budget === void 0 ? void 0 : (_budget_initialBudget = budget.initialBudget) === null || _budget_initialBudget === void 0 ? void 0 : (_budget_initialBudget_amount = _budget_initialBudget.amount) === null || _budget_initialBudget_amount === void 0 ? void 0 : _budget_initialBudget_amount.toString()) || \"\");\n    const initialBudget = budget === null || budget === void 0 ? void 0 : budget.budget;\n    const currentExpenses = (budget === null || budget === void 0 ? void 0 : budget.currentExpenses) || 0;\n    const percentUsed = initialBudget ? currentExpenses / initialBudget * 100 : 0;\n    const handleUpdateBudget = async ()=>{};\n    const handleCancel = ()=>{\n        var _initialBudget_amount;\n        setNewBudget((initialBudget === null || initialBudget === void 0 ? void 0 : (_initialBudget_amount = initialBudget.amount) === null || _initialBudget_amount === void 0 ? void 0 : _initialBudget_amount.toString()) || \"\");\n        setIsEditing(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm md:text-lg mb-5\",\n                children: \"Here's your Budget Planning.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                        className: \"flex items-center justify-between space-y-0 pb-7\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    children: \"Monthly Budget\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center gap-2 mt-1\",\n                                    children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                                type: \"number\",\n                                                value: newBudget,\n                                                onChange: (e)=>setNewBudget(e.target.value),\n                                                className: \"w-32\",\n                                                placeholder: \"Enter amount\",\n                                                autoFocus: true\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                variant: \"ghost\",\n                                                size: \"icon\",\n                                                onClick: handleUpdateBudget,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    className: \"h-4 w-4 text-green-500\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                variant: \"ghost\",\n                                                size: \"icon\",\n                                                onClick: handleCancel,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    className: \"h-4 w-4 text-red-500\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                                                children: initialBudget ? \"$\".concat(currentExpenses.toFixed(2), \" of $\").concat(initialBudget.amount.toFixed(2), \" spent\") : \"No budget set\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                variant: \"ghost\",\n                                                size: \"icon\",\n                                                onClick: ()=>setIsEditing(true),\n                                                className: \"h-6 w-6\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    className: \"h-3 w-3\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        children: initialBudget && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_progress__WEBPACK_IMPORTED_MODULE_5__.Progress, {\n                                    value: percentUsed,\n                                    extraStyles: \"\".concat(// add to Progress component\n                                    percentUsed >= 90 ? \"bg-red-500\" : percentUsed >= 75 ? \"bg-yellow-500\" : \"bg-green-500\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-muted-foreground text-right\",\n                                    children: [\n                                        percentUsed.toFixed(1),\n                                        \"% used\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\planning\\\\page.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Planning, \"h07LIle9xpka96jm+6j0yC7o0X8=\");\n_c = Planning;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Planning);\nvar _c;\n$RefreshReg$(_c, \"Planning\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGRhc2hib2FyZCkvZGFzaGJvYXJkL3BsYW5uaW5nL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVtRDtBQU9YO0FBQ1E7QUFDUTtBQUNFO0FBQ0k7QUFFOUQsTUFBTWMsa0JBQWtCO0FBQ3hCLE1BQU1DLGdCQUFnQjtBQUV0QixTQUFTQztRQWNMQyw4QkFBQUE7O0lBYkYsTUFBTSxDQUFDQSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBOzhCQUFDO1lBQ1IsZUFBZWtCO2dCQUNiLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtnQkFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO2dCQUMzQkwsVUFBVUk7WUFDWjtZQUNBSDtRQUNGOzZCQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ3dCLFdBQVdDLGFBQWEsR0FBR3pCLCtDQUFRQSxDQUN4Q2UsQ0FBQUEsbUJBQUFBLDhCQUFBQSx3QkFBQUEsT0FBUUYsYUFBYSxjQUFyQkUsNkNBQUFBLCtCQUFBQSxzQkFBdUJXLE1BQU0sY0FBN0JYLG1EQUFBQSw2QkFBK0JZLFFBQVEsT0FBTTtJQUcvQyxNQUFNZCxnQkFBZ0JFLG1CQUFBQSw2QkFBQUEsT0FBUUEsTUFBTTtJQUNwQyxNQUFNSCxrQkFBa0JHLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUgsZUFBZSxLQUFJO0lBRW5ELE1BQU1nQixjQUFjZixnQkFDaEIsa0JBQW1CQSxnQkFBaUIsTUFDcEM7SUFFSixNQUFNZ0IscUJBQXFCLFdBQWE7SUFDeEMsTUFBTUMsZUFBZTtZQUNOakI7UUFBYlksYUFBYVosQ0FBQUEsMEJBQUFBLHFDQUFBQSx3QkFBQUEsY0FBZWEsTUFBTSxjQUFyQmIsNENBQUFBLHNCQUF1QmMsUUFBUSxPQUFNO1FBQ2xESixhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQztnQkFBRUMsV0FBVTswQkFBMEI7Ozs7OzswQkFFdkMsOERBQUNoQyxxREFBSUE7O2tDQUNILDhEQUFDRSwyREFBVUE7d0JBQUM4QixXQUFVO2tDQUNwQiw0RUFBQ0Y7NEJBQUlFLFdBQVU7OzhDQUNiLDhEQUFDN0IsMERBQVNBOzhDQUFDOzs7Ozs7OENBQ1gsOERBQUMyQjtvQ0FBSUUsV0FBVTs4Q0FDWlgsMEJBQ0MsOERBQUNTO3dDQUFJRSxXQUFVOzswREFDYiw4REFBQ3hCLHVEQUFLQTtnREFDSnlCLE1BQUs7Z0RBQ0xDLE9BQU9YO2dEQUNQWSxVQUFVLENBQUNDLElBQU1aLGFBQWFZLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnREFDNUNGLFdBQVU7Z0RBQ1ZNLGFBQVk7Z0RBQ1pDLFNBQVM7Ozs7OzswREFHWCw4REFBQzlCLHlEQUFNQTtnREFDTCtCLFNBQVE7Z0RBQ1JDLE1BQUs7Z0RBQ0xDLFNBQVNkOzBEQUdULDRFQUFDdkIsMEZBQUtBO29EQUFDMkIsV0FBVTs7Ozs7Ozs7Ozs7MERBRW5CLDhEQUFDdkIseURBQU1BO2dEQUNMK0IsU0FBUTtnREFDUkMsTUFBSztnREFDTEMsU0FBU2I7MERBR1QsNEVBQUN0QiwwRkFBQ0E7b0RBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzZEQUlqQjs7MERBQ0UsOERBQUM1QixnRUFBZUE7MERBQ2JRLGdCQUNHLElBRVNBLE9BRkxELGdCQUFnQmdDLE9BQU8sQ0FDekIsSUFDQSxTQUF1QyxPQUFoQy9CLGNBQWNhLE1BQU0sQ0FBQ2tCLE9BQU8sQ0FBQyxJQUFHLFlBQ3pDOzs7Ozs7MERBRU4sOERBQUNsQyx5REFBTUE7Z0RBQ0wrQixTQUFRO2dEQUNSQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1wQixhQUFhO2dEQUM1QlUsV0FBVTswREFFViw0RUFBQzFCLDBGQUFNQTtvREFBQzBCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU85Qiw4REFBQy9CLDREQUFXQTtrQ0FDVFcsK0JBQ0MsOERBQUNrQjs0QkFBSUUsV0FBVTs7OENBQ2IsOERBQUN0Qiw2REFBUUE7b0NBQ1B3QixPQUFPUDtvQ0FDUGlCLGFBQWEsR0FPWixPQU5DLDRCQUE0QjtvQ0FDNUJqQixlQUFlLEtBQ1gsZUFDQUEsZUFBZSxLQUNmLGtCQUNBOzs7Ozs7OENBR1IsOERBQUNJO29DQUFFQyxXQUFVOzt3Q0FDVkwsWUFBWWdCLE9BQU8sQ0FBQzt3Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhDO0dBaEhTOUI7S0FBQUE7QUFrSFQsaUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxBbGwgZmlsZXNcXE1FUk4gU1RBQ0tcXFBlcnNvbmFsIEZpbmFuY2VcXGNsaWVudFxcc3JjXFxhcHBcXChkYXNoYm9hcmQpXFxkYXNoYm9hcmRcXHBsYW5uaW5nXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IENoZWNrLCBQZW5jaWwsIFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvcHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IGN1cnJlbnRFeHBlbnNlcyA9IDIwMDA7XHJcbmNvbnN0IGluaXRpYWxCdWRnZXQgPSAxMDAwMDtcclxuXHJcbmZ1bmN0aW9uIFBsYW5uaW5nKCkge1xyXG4gIGNvbnN0IFtidWRnZXQsIHNldEJ1ZGdldF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoYnVkZ2V0KCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9idWRnZXRcIik7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRCdWRnZXQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaGJ1ZGdldCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbmV3QnVkZ2V0LCBzZXROZXdCdWRnZXRdID0gdXNlU3RhdGUoXHJcbiAgICBidWRnZXQ/LmluaXRpYWxCdWRnZXQ/LmFtb3VudD8udG9TdHJpbmcoKSB8fCBcIlwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbEJ1ZGdldCA9IGJ1ZGdldD8uYnVkZ2V0O1xyXG4gIGNvbnN0IGN1cnJlbnRFeHBlbnNlcyA9IGJ1ZGdldD8uY3VycmVudEV4cGVuc2VzIHx8IDA7XHJcblxyXG4gIGNvbnN0IHBlcmNlbnRVc2VkID0gaW5pdGlhbEJ1ZGdldFxyXG4gICAgPyAoY3VycmVudEV4cGVuc2VzIC8gaW5pdGlhbEJ1ZGdldCkgKiAxMDBcclxuICAgIDogMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlQnVkZ2V0ID0gYXN5bmMgKCkgPT4ge307XHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0TmV3QnVkZ2V0KGluaXRpYWxCdWRnZXQ/LmFtb3VudD8udG9TdHJpbmcoKSB8fCBcIlwiKTtcclxuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6dGV4dC1sZyBtYi01XCI+SGVyZSdzIHlvdXIgQnVkZ2V0IFBsYW5uaW5nLjwvcD5cclxuXHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzcGFjZS15LTAgcGItN1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgPENhcmRUaXRsZT5Nb250aGx5IEJ1ZGdldDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LTFcIj5cclxuICAgICAgICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3QnVkZ2V0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3QnVkZ2V0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMyXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZUJ1ZGdldH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1ncmVlbi01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LXJlZC01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbml0aWFsQnVkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAkJHtjdXJyZW50RXhwZW5zZXMudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9IG9mICQke2luaXRpYWxCdWRnZXQuYW1vdW50LnRvRml4ZWQoMil9IHNwZW50YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIk5vIGJ1ZGdldCBzZXRcIn1cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGVuY2lsIGNsYXNzTmFtZT1cImgtMyB3LTNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIHtpbml0aWFsQnVkZ2V0ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJjZW50VXNlZH1cclxuICAgICAgICAgICAgICAgIGV4dHJhU3R5bGVzPXtgJHtcclxuICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIFByb2dyZXNzIGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICBwZXJjZW50VXNlZCA+PSA5MFxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHBlcmNlbnRVc2VkID49IDc1XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLXllbGxvdy01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cGVyY2VudFVzZWQudG9GaXhlZCgxKX0lIHVzZWRcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGFubmluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2hlY2siLCJQZW5jaWwiLCJYIiwiSW5wdXQiLCJCdXR0b24iLCJQcm9ncmVzcyIsImN1cnJlbnRFeHBlbnNlcyIsImluaXRpYWxCdWRnZXQiLCJQbGFubmluZyIsImJ1ZGdldCIsInNldEJ1ZGdldCIsImZldGNoYnVkZ2V0IiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIm5ld0J1ZGdldCIsInNldE5ld0J1ZGdldCIsImFtb3VudCIsInRvU3RyaW5nIiwicGVyY2VudFVzZWQiLCJoYW5kbGVVcGRhdGVCdWRnZXQiLCJoYW5kbGVDYW5jZWwiLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJ2YXJpYW50Iiwic2l6ZSIsIm9uQ2xpY2siLCJ0b0ZpeGVkIiwiZXh0cmFTdHlsZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(dashboard)/dashboard/planning/page.js\n"));

/***/ })

});