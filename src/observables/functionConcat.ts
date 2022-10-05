import { concat, interval, take, of } from "rxjs";
export default function () {
	const interval$ = interval(1000);

	const test = concat(
		interval$.pipe(take(3)),
		interval$.pipe(take(2)),
		of("5")
	);

	test.subscribe(console.log);
}
