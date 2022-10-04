import { mergeMap, of, interval, take, map } from "rxjs";

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
}
