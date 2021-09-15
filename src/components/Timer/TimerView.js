import { observer } from "mobx-react-lite";

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ store }) => {
  return <span>Seconds passed: {store.secondsPassed}</span>;
});

export default TimerView;
