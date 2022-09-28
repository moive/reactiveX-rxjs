import { of } from "rxjs";

export default function () {
	// const obs$ = of(1, 2, 3, 4, 5, 6, 7, 8);
	// const obs$ = of(...[1, 2, 3, 4, 5, 6, 7, 8]);

	const obs$ = of(
		[1, 2],
		{ a: 1, b: 2 },
		function () {},
		true,
		Promise.resolve(true)
	);

	console.log("start of obs");
	obs$.subscribe({
		next: (next) => console.log("next", next),
		error: (e) => console.error(e),
		complete: () => console.log("We finish the sequence"),
	});
	console.log("end of obs");
}
