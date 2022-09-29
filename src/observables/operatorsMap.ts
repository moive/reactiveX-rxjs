import { map, range, fromEvent } from "rxjs";
export default function () {
	range(1, 10)
		.pipe(map<number, string>((val) => (val * 10).toString()))
		.subscribe(console.log);

	const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

	const keyupCode$ = keyup$.pipe(map((event) => event.code));

	keyupCode$.subscribe((code) => console.log("map: ", code));
}
