import {observable} from "mobx";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class TimerViewState {
    @observable public timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    public resetTimer() {
        this.timer = 0;
    }
}
