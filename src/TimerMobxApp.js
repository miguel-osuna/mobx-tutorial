import React from "react";

import TimerStore from "./stores/Timer";
import TimerView from "./components/Timer/TimerView";

const timerStore = new TimerStore();

setInterval(() => {
  timerStore.increaseTimer();
}, 1000);

const TimerMobxApp = () => <TimerView store={timerStore} />;

export default TimerMobxApp;
