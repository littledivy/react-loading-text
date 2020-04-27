import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// Add more statements here!
var statements = [
    "Loading",
    "Establishing secure connection",
    "Speeding up the process",
    "Applying turbo chargers",
    "Generating ciphers",
    "Decoding material",
    "Hang on tight",
    "Transpiling modules",
    "Performing SSL handshake",
    "Lanching eventbus",
    "Encrypting connection",
    "Securing gateway",
    "Flying aeroplanes",
    "Almost there",
    "Generating meeting"
];

/**
usage_jsx: <LoadingView interval={1000} extras={["bruh"]} />
**/
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            index: 0
        };
        if (_this.props.extras) {
            statements.concat(_this.props.extras);
        }
        return _this;
    }
    LoadingView.prototype.componentDidMount = function () {
        var _this = this;
        this.timeout = setInterval(function () {
            var currentIdx = _this.state.index;
            if (currentIdx + 1 === statements.length) {
                _this.setState({ index: 0 });
            }
            else {
                _this.setState({ index: currentIdx + 1 });
            }
        }, this.props.interval || 2000);
    };
    LoadingView.prototype.componentWillUnmount = function () {
        clearInterval(this.timeout);
    };
    LoadingView.prototype.render = function () {
        var currentStatement = statements[this.state.index];
        return (React.createElement(React.Fragment, null, currentStatement));
    };
    return LoadingView;
}(React.Component));

export default LoadingView;
//# sourceMappingURL=index.es.js.map
