import { first, fromEvent, take, tap, map } from "rxjs";
export default function () {
	const click$ = fromEvent<PointerEvent>(document, "click");

	click$
		.pipe(
			tap(() => console.log("tap")),
			map(({ clientX, clientY }) => ({ clientX, clientY })),
			first((v) => v.clientY >= 150)
		)
		.subscribe({
			next: (v) => console.log("next: ", v),
			complete: () => console.log("complete"),
		});
}
