import { ajax } from "rxjs/ajax";
import { debounceTime, fromEvent, map, mergeAll } from "rxjs";
export default function () {
	const textInput = document.createElement("input");

	document.querySelector("body")?.append(textInput);

	const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

	input$
		.pipe(
			debounceTime(500),
			map((ev) => (ev.target as HTMLInputElement).value),
			map((text) =>
				ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
			),
			mergeAll(),
			map(({ items }: any) => items)
		)
		.subscribe(console.log);
}
