import { asyncScheduler, observeOn, of, range } from "rxjs";

export default function () {
	// const src1$ = range(1, 5, asyncScheduler); //deprecated
	const src1$ = range(1, 5).pipe(observeOn(asyncScheduler));

	console.log("start");
	src1$.subscribe(console.log);
	console.log("end");
}
