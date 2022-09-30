import { fromEvent, map, sampleTime, interval, sample } from "rxjs";
export default function () {
	const interval$ = interval(500);

	const click$ = fromEvent<PointerEvent>(document, "click");

	interval$.pipe(sample(click$)).subscribe(console.log);
}
