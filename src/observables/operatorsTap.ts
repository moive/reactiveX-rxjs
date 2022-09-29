import { map, range, tap } from "rxjs";
export default function () {
	const numbers$ = range(1, 10);

	numbers$
		.pipe(
			tap((x) => console.log("before: ", x)),
			map((val) => val * 10),
			tap({
				next: (y) => console.log("after: ", y),
				complete: () => console.log("Finished"),
			})
		)
		.subscribe(console.log);
}
