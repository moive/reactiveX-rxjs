import { debounceTime, fromEvent, map, distinctUntilChanged, tap } from "rxjs";
export default function () {
	const click$ = fromEvent(document, "click");

	click$.pipe(debounceTime(3000)).subscribe(console.log);

	const input = document.createElement("input");
	document.querySelector("body")?.append(input);

	const input$ = fromEvent<KeyboardEvent>(input, "keyup");

	input$
		.pipe(
			debounceTime(1000),
			map((v) => (v.target as HTMLInputElement).value),
			distinctUntilChanged()
		)
		.subscribe(console.log);
}
