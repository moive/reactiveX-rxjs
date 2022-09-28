import { fromEvent } from "rxjs";

export default function () {
	const src1$ = fromEvent<PointerEvent>(document, "click");
	const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

	const observer = {
		next: (val: any) => console.log("next: ", val),
	};

	src1$.subscribe(({ x, y }) => {
		console.log(x, y);
	});
	src2$.subscribe((event) => console.log(event.key));
}
