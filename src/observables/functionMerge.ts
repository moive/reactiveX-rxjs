import { fromEvent, merge, map } from "rxjs";

export default function () {
	const keyup$ = fromEvent(document, "keyup").pipe(map((ev) => ev.type));
	const click$ = fromEvent(document, "click").pipe(map((ev) => ev.type));

	merge(keyup$, click$).subscribe(console.log);
}
