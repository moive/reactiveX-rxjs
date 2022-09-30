import { interval, takeUntil, fromEvent, skip, tap } from "rxjs";
export default function () {
	const button = document.createElement("button");
	button.textContent = "Stop timer";

	document.querySelector("body")?.append(button);

	// const click$ = fromEvent(button, "click");
	const click$ = fromEvent(button, "click").pipe(
		tap(() => console.log("before...")),
		skip(1),
		tap(() => console.log("after..."))
	);

	const counter$ = interval(1000)
		.pipe(takeUntil(click$))
		.subscribe({
			next: (val) => console.log("next: ", val),
			complete: () => console.log("complete"),
		});
}
