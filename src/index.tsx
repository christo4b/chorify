import * as React from "react";
import * as ReactDOM from "react-dom";
import TimerView from "./components/timerview/component-timerview";
import TimerViewState from "./components/timerview/state-timerview";

const appState =  new TimerViewState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById("root"));
