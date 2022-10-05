import { endWith, of, startWith } from "rxjs";
export default function () {
	const number$ = of(...[1, 2, 3, 4]).pipe(startWith(0), endWith(5, 6, 7));

	number$.subscribe(console.log);
}
