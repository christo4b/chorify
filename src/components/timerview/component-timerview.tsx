import {observable} from "mobx";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";
import TimerViewState from "./state-timerview";

@observer
export default class TimerView extends React.Component<{appState: TimerViewState}, {}> {
    public render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools />
            </div>
        );
     }

     public onReset = () => {
         this.props.appState.resetTimer();
     }
}
