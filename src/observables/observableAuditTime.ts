import { auditTime, fromEvent, map, tap } from "rxjs";

export default function () {
	const click$ = fromEvent<PointerEvent>(document, "click");

	click$
		.pipe(
			map(({ x }) => x),
			tap((x) => console.log("tap: ", x)),
			auditTime(2000)
		)
		.subscribe(console.log);
}
