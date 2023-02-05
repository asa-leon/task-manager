"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
function App({ Component, pageProps }) {
    return (<>
      <head_1.default>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head_1.default>
      <Component {...pageProps}/>
    </>);
}
exports.default = App;
