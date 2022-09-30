import {
	debounceTime,
	fromEvent,
	map,
	distinctUntilChanged,
	throttleTime,
	tap,
	asyncScheduler,
} from "rxjs";
export default function () {
	const click$ = fromEvent(document, "click");

	click$.pipe(throttleTime(3000)).subscribe(console.log);

	const input = document.createElement("input");
	document.querySelector("body")?.append(input);

	const input$ = fromEvent<KeyboardEvent>(input, "keyup");

	input$
		.pipe(
			throttleTime(1000, asyncScheduler, {
				leading: true,
				trailing: true,
			}),
			map((v) => (v.target as HTMLInputElement).value),
			distinctUntilChanged()
		)
		.subscribe(console.log);
}
