"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/dashboard/organisation/page",{

/***/ "(app-pages-browser)/./src/app/(dashboard)/dashboard/organisation/page.js":
/*!************************************************************!*\
  !*** ./src/app/(dashboard)/dashboard/organisation/page.js ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.jsx\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer,Sector!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer,Sector!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/PieChart.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer,Sector!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/polar/Pie.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer,Sector!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Cell.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Organisation() {\n    var _Object;\n    _s();\n    const [transactions, setTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Organisation.useEffect\": ()=>{\n            async function fetchTransactions() {\n                const res = await fetch(\"http://localhost:8000/transactions\");\n                const data = await res.json();\n                setTransactions(data);\n            }\n            fetchTransactions();\n        }\n    }[\"Organisation.useEffect\"], []);\n    // Calculate expense breakdown for current month\n    const currentDate = new Date();\n    const currentMonthExpenses = transactions === null || transactions === void 0 ? void 0 : transactions.filter((t)=>{\n        const transactionDate = new Date(t.date);\n        return t.type === \"Expense\" && transactionDate.getMonth() === currentDate.getMonth() && transactionDate.getFullYear() === currentDate.getFullYear();\n    });\n    // Group expenses by category\n    const expensesByCategory = currentMonthExpenses === null || currentMonthExpenses === void 0 ? void 0 : currentMonthExpenses.reduce((acc, transaction)=>{\n        const category = transaction.cat;\n        if (!acc[category]) {\n            acc[category] = 0;\n        }\n        acc[category] += transaction.amount;\n        return acc;\n    }, {});\n    // Format data for pie chart\n    const pieChartData = (_Object = Object) === null || _Object === void 0 ? void 0 : _Object.entries(expensesByCategory).map((param)=>{\n        let [category, amount] = param;\n        return {\n            name: category,\n            value: amount\n        };\n    });\n    // const data01 = [{ name: \"Group A\", value: 1000 }];\n    // const data02 = [\n    //   { name: \"A1\", value: 100 },\n    //   { name: \"A2\", value: 300 },\n    //   { name: \"B1\", value: 100 },\n    //   { name: \"B2\", value: 80 },\n    //   { name: \"B3\", value: 40 },\n    //   { name: \"B4\", value: 30 },\n    //   { name: \"B5\", value: 50 },\n    //   { name: \"C1\", value: 100 },\n    //   { name: \"C2\", value: 200 },\n    //   { name: \"D1\", value: 150 },\n    //   { name: \"D2\", value: 50 },\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm md:text-lg mb-4\",\n                children: \"Here's an Organisation of all your balances.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                            children: \"Category wise Monthly Expenses\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"h-[300px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer, {\n                                width: \"100%\",\n                                height: \"100%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_4__.PieChart, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_5__.Pie, {\n                                            data: pieChartData,\n                                            cx: \"50%\",\n                                            cy: \"50%\",\n                                            outerRadius: 80,\n                                            fill: \"#8884d8\",\n                                            dataKey: \"value\",\n                                            label: (param)=>{\n                                                let { name, value } = param;\n                                                return \"\".concat(name, \": $\").concat(value.toFixed(2));\n                                            },\n                                            children: pieChartData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_Sector_recharts__WEBPACK_IMPORTED_MODULE_6__.Cell, {\n                                                    fill: COLORS[index % COLORS.length]\n                                                }, \"cell-\".concat(index), false, {\n                                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                                            formatter: (value)=>\"$\".concat(value.toFixed(2)),\n                                            contentStyle: {\n                                                backgroundColor: \"hsl(var(--popover))\",\n                                                border: \"1px solid hsl(var(--border))\",\n                                                borderRadius: \"var(--radius)\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Legend, {}, void 0, false, {\n                                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\All files\\\\MERN STACK\\\\Personal Finance\\\\client\\\\src\\\\app\\\\(dashboard)\\\\dashboard\\\\organisation\\\\page.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Organisation, \"dybQbhqA0/1/bd4nOd4gdhGVdIE=\");\n_c = Organisation;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Organisation);\nvar _c;\n$RefreshReg$(_c, \"Organisation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGRhc2hib2FyZCkvZGFzaGJvYXJkL29yZ2FuaXNhdGlvbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBT1g7QUFFb0M7QUFFNUUsU0FBU2E7UUFxQ2NDOztJQXBDckIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFFakRELGdEQUFTQTtrQ0FBQztZQUNSLGVBQWVnQjtnQkFDYixNQUFNQyxNQUFNLE1BQU1DLE1BQU07Z0JBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtnQkFDM0JMLGdCQUFnQkk7WUFDbEI7WUFDQUg7UUFDRjtpQ0FBRyxFQUFFO0lBRUwsZ0RBQWdEO0lBQ2hELE1BQU1LLGNBQWMsSUFBSUM7SUFDeEIsTUFBTUMsdUJBQXVCVCx5QkFBQUEsbUNBQUFBLGFBQWNVLE1BQU0sQ0FBQyxDQUFDQztRQUNqRCxNQUFNQyxrQkFBa0IsSUFBSUosS0FBS0csRUFBRUUsSUFBSTtRQUN2QyxPQUNFRixFQUFFRyxJQUFJLEtBQUssYUFDWEYsZ0JBQWdCRyxRQUFRLE9BQU9SLFlBQVlRLFFBQVEsTUFDbkRILGdCQUFnQkksV0FBVyxPQUFPVCxZQUFZUyxXQUFXO0lBRTdEO0lBRUEsNkJBQTZCO0lBQzdCLE1BQU1DLHFCQUFxQlIsaUNBQUFBLDJDQUFBQSxxQkFBc0JTLE1BQU0sQ0FDckQsQ0FBQ0MsS0FBS0M7UUFDSixNQUFNQyxXQUFXRCxZQUFZRSxHQUFHO1FBQ2hDLElBQUksQ0FBQ0gsR0FBRyxDQUFDRSxTQUFTLEVBQUU7WUFDbEJGLEdBQUcsQ0FBQ0UsU0FBUyxHQUFHO1FBQ2xCO1FBQ0FGLEdBQUcsQ0FBQ0UsU0FBUyxJQUFJRCxZQUFZRyxNQUFNO1FBQ25DLE9BQU9KO0lBQ1QsR0FDQSxDQUFDO0lBR0gsNEJBQTRCO0lBQzVCLE1BQU1LLGdCQUFlekIsVUFBQUEsb0JBQUFBLDhCQUFBQSxRQUFRMEIsT0FBTyxDQUFDUixvQkFBb0JTLEdBQUcsQ0FDMUQ7WUFBQyxDQUFDTCxVQUFVRSxPQUFPO2VBQU07WUFDdkJJLE1BQU1OO1lBQ05PLE9BQU9MO1FBQ1Q7O0lBR0YscURBQXFEO0lBQ3JELG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLEtBQUs7SUFFTCxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDQztnQkFBRUMsV0FBVTswQkFBMEI7Ozs7OzswQkFJdkMsOERBQUMzQyxxREFBSUE7O2tDQUNILDhEQUFDRywyREFBVUE7a0NBQ1QsNEVBQUNDLDBEQUFTQTtzQ0FBQzs7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNILDREQUFXQTtrQ0FDViw0RUFBQzJDOzRCQUFRRCxXQUFVO3NDQUNqQiw0RUFBQ2xDLDZIQUFtQkE7Z0NBQUNvQyxPQUFNO2dDQUFPQyxRQUFPOzBDQUN2Qyw0RUFBQ3pDLGtIQUFRQTs7c0RBQ1AsOERBQUNDLDZHQUFHQTs0Q0FDRlcsTUFBTW1COzRDQUNOVyxJQUFHOzRDQUNIQyxJQUFHOzRDQUNIQyxhQUFhOzRDQUNiQyxNQUFLOzRDQUNMQyxTQUFROzRDQUNSQyxPQUFPO29EQUFDLEVBQUViLElBQUksRUFBRUMsS0FBSyxFQUFFO3VEQUFLLEdBQWFBLE9BQVZELE1BQUssT0FBc0IsT0FBakJDLE1BQU1hLE9BQU8sQ0FBQzs7c0RBRXREakIsYUFBYUUsR0FBRyxDQUFDLENBQUNnQixPQUFPQyxzQkFDeEIsOERBQUMvQyw4R0FBSUE7b0RBRUgwQyxNQUFNTSxNQUFNLENBQUNELFFBQVFDLE9BQU9DLE1BQU0sQ0FBQzttREFEOUIsUUFBYyxPQUFORjs7Ozs7Ozs7OztzREFLbkIsOERBQUNHOzRDQUNDQyxXQUFXLENBQUNuQixRQUFVLElBQXFCLE9BQWpCQSxNQUFNYSxPQUFPLENBQUM7NENBQ3hDTyxjQUFjO2dEQUNaQyxpQkFBaUI7Z0RBQ2pCQyxRQUFRO2dEQUNSQyxjQUFjOzRDQUNoQjs7Ozs7O3NEQUVGLDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakI7R0F6R1N0RDtLQUFBQTtBQTJHVCxpRUFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXEFsbCBmaWxlc1xcTUVSTiBTVEFDS1xcUGVyc29uYWwgRmluYW5jZVxcY2xpZW50XFxzcmNcXGFwcFxcKGRhc2hib2FyZClcXGRhc2hib2FyZFxcb3JnYW5pc2F0aW9uXFxwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy91aS9jYXJkXCI7XHJcblxyXG5pbXBvcnQgeyBQaWVDaGFydCwgUGllLCBTZWN0b3IsIENlbGwsIFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tIFwicmVjaGFydHNcIjtcclxuXHJcbmZ1bmN0aW9uIE9yZ2FuaXNhdGlvbigpIHtcclxuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyYW5zYWN0aW9ucygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvdHJhbnNhY3Rpb25zXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0VHJhbnNhY3Rpb25zKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZmV0Y2hUcmFuc2FjdGlvbnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSBleHBlbnNlIGJyZWFrZG93biBmb3IgY3VycmVudCBtb250aFxyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBjdXJyZW50TW9udGhFeHBlbnNlcyA9IHRyYW5zYWN0aW9ucz8uZmlsdGVyKCh0KSA9PiB7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGUgPSBuZXcgRGF0ZSh0LmRhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdC50eXBlID09PSBcIkV4cGVuc2VcIiAmJlxyXG4gICAgICB0cmFuc2FjdGlvbkRhdGUuZ2V0TW9udGgoKSA9PT0gY3VycmVudERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICB0cmFuc2FjdGlvbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgLy8gR3JvdXAgZXhwZW5zZXMgYnkgY2F0ZWdvcnlcclxuICBjb25zdCBleHBlbnNlc0J5Q2F0ZWdvcnkgPSBjdXJyZW50TW9udGhFeHBlbnNlcz8ucmVkdWNlKFxyXG4gICAgKGFjYywgdHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0cmFuc2FjdGlvbi5jYXQ7XHJcbiAgICAgIGlmICghYWNjW2NhdGVnb3J5XSkge1xyXG4gICAgICAgIGFjY1tjYXRlZ29yeV0gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGFjY1tjYXRlZ29yeV0gKz0gdHJhbnNhY3Rpb24uYW1vdW50O1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSxcclxuICAgIHt9XHJcbiAgKTtcclxuXHJcbiAgLy8gRm9ybWF0IGRhdGEgZm9yIHBpZSBjaGFydFxyXG4gIGNvbnN0IHBpZUNoYXJ0RGF0YSA9IE9iamVjdD8uZW50cmllcyhleHBlbnNlc0J5Q2F0ZWdvcnkpLm1hcChcclxuICAgIChbY2F0ZWdvcnksIGFtb3VudF0pID0+ICh7XHJcbiAgICAgIG5hbWU6IGNhdGVnb3J5LFxyXG4gICAgICB2YWx1ZTogYW1vdW50LFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICAvLyBjb25zdCBkYXRhMDEgPSBbeyBuYW1lOiBcIkdyb3VwIEFcIiwgdmFsdWU6IDEwMDAgfV07XHJcbiAgLy8gY29uc3QgZGF0YTAyID0gW1xyXG4gIC8vICAgeyBuYW1lOiBcIkExXCIsIHZhbHVlOiAxMDAgfSxcclxuICAvLyAgIHsgbmFtZTogXCJBMlwiLCB2YWx1ZTogMzAwIH0sXHJcbiAgLy8gICB7IG5hbWU6IFwiQjFcIiwgdmFsdWU6IDEwMCB9LFxyXG4gIC8vICAgeyBuYW1lOiBcIkIyXCIsIHZhbHVlOiA4MCB9LFxyXG4gIC8vICAgeyBuYW1lOiBcIkIzXCIsIHZhbHVlOiA0MCB9LFxyXG4gIC8vICAgeyBuYW1lOiBcIkI0XCIsIHZhbHVlOiAzMCB9LFxyXG4gIC8vICAgeyBuYW1lOiBcIkI1XCIsIHZhbHVlOiA1MCB9LFxyXG4gIC8vICAgeyBuYW1lOiBcIkMxXCIsIHZhbHVlOiAxMDAgfSxcclxuICAvLyAgIHsgbmFtZTogXCJDMlwiLCB2YWx1ZTogMjAwIH0sXHJcbiAgLy8gICB7IG5hbWU6IFwiRDFcIiwgdmFsdWU6IDE1MCB9LFxyXG4gIC8vICAgeyBuYW1lOiBcIkQyXCIsIHZhbHVlOiA1MCB9LFxyXG4gIC8vIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQtbGcgbWItNFwiPlxyXG4gICAgICAgIEhlcmUncyBhbiBPcmdhbmlzYXRpb24gb2YgYWxsIHlvdXIgYmFsYW5jZXMuXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmRUaXRsZT5DYXRlZ29yeSB3aXNlIE1vbnRobHkgRXhwZW5zZXM8L0NhcmRUaXRsZT5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC1bMzAwcHhdXCI+XHJcbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICA8UGllQ2hhcnQ+XHJcbiAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e3BpZUNoYXJ0RGF0YX1cclxuICAgICAgICAgICAgICAgICAgY3g9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPXs4MH1cclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17KHsgbmFtZSwgdmFsdWUgfSkgPT4gYCR7bmFtZX06ICQke3ZhbHVlLnRvRml4ZWQoMil9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3BpZUNoYXJ0RGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjZWxsLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e0NPTE9SU1tpbmRleCAlIENPTE9SUy5sZW5ndGhdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9QaWU+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4gYCQke3ZhbHVlLnRvRml4ZWQoMil9YH1cclxuICAgICAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImhzbCh2YXIoLS1wb3BvdmVyKSlcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGhzbCh2YXIoLS1ib3JkZXIpKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJ2YXIoLS1yYWRpdXMpXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExlZ2VuZCAvPlxyXG4gICAgICAgICAgICAgIDwvUGllQ2hhcnQ+XHJcbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmdhbmlzYXRpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZERlc2NyaXB0aW9uIiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIlBpZUNoYXJ0IiwiUGllIiwiU2VjdG9yIiwiQ2VsbCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJPcmdhbmlzYXRpb24iLCJPYmplY3QiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2FjdGlvbnMiLCJmZXRjaFRyYW5zYWN0aW9ucyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjdXJyZW50TW9udGhFeHBlbnNlcyIsImZpbHRlciIsInQiLCJ0cmFuc2FjdGlvbkRhdGUiLCJkYXRlIiwidHlwZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJleHBlbnNlc0J5Q2F0ZWdvcnkiLCJyZWR1Y2UiLCJhY2MiLCJ0cmFuc2FjdGlvbiIsImNhdGVnb3J5IiwiY2F0IiwiYW1vdW50IiwicGllQ2hhcnREYXRhIiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZSIsImRpdiIsInAiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjeCIsImN5Iiwib3V0ZXJSYWRpdXMiLCJmaWxsIiwiZGF0YUtleSIsImxhYmVsIiwidG9GaXhlZCIsImVudHJ5IiwiaW5kZXgiLCJDT0xPUlMiLCJsZW5ndGgiLCJUb29sdGlwIiwiZm9ybWF0dGVyIiwiY29udGVudFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiTGVnZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(dashboard)/dashboard/organisation/page.js\n"));

/***/ })

});