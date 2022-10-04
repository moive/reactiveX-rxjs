import {
	mergeMap,
	of,
	interval,
	take,
	map,
	fromEvent,
	takeUntil,
	last,
} from "rxjs";

export default function () {
	const letters$ = of("a", "b", "c");

	letters$
		.pipe(
			mergeMap((letter) =>
				interval(1000).pipe(
					map((i) => letter + i),
					take(3)
				)
			)
		)
		.subscribe({
			next: (val) => console.log("next: ", val),
			complete: () => console.log("complete"),
		});

	const mousedown$ = fromEvent(document, "mousedown");
	const mouseup$ = fromEvent(document, "mouseup");
	const interval$ = interval(100);

	mousedown$
		.pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$), last())))
		.subscribe(console.log);
}
