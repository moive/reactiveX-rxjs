import { of, interval, take, forkJoin, catchError } from "rxjs";
import { ajax } from "rxjs/ajax";
export default function () {
	const num$ = of(1, 2, 3, 4);
	const int$ = interval(1000).pipe(take(3));
	const let$ = of("a", "b", "c");

	forkJoin({ num: num$, int: int$, let: let$ }).subscribe(console.log);

	const GITHUB_API_URL = "https://api.github.com/users";
	const GITHUB_USER = "moive";

	forkJoin({
		user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
		repos: ajax
			.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repo123`)
			.pipe(catchError((err) => of([]))),
		gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
	})
		.pipe(catchError((e) => of(e)))
		.subscribe(console.log);
}
