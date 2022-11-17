import { of, interval, take, forkJoin } from "rxjs";
export default function () {
	const num$ = of(1, 2, 3, 4);
	const int$ = interval(1000).pipe(take(3));
	const let$ = of("a", "b", "c");

	forkJoin({ num: num$, int: int$, let: let$ }).subscribe(console.log);
}
