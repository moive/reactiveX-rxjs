import { interval, reduce, take, tap } from "rxjs";
export default function () {
	const numbers = [1, 2, 3, 4, 5];

	const totalReducer = (accumulator: number, current: number) =>
		accumulator + current;

	const total = numbers.reduce(totalReducer, 0);

	console.log("total: ", total);

	interval(1000)
		.pipe(take(4), tap(console.log), reduce(totalReducer, 8))
		.subscribe({
			next: (val) => console.log("next: ", val),
			complete: () => console.log("complete"),
		});
}
