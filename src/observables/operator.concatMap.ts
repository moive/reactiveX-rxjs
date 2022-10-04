import { interval, take, fromEvent, concatMap } from "rxjs";
export default function () {
	const interval$ = interval(500).pipe(take(3));
	const click$ = fromEvent(document, "click");

	click$.pipe(concatMap(() => interval$)).subscribe(console.log);
}
