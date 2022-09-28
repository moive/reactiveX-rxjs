import { from } from "rxjs";

export default function () {
	/**
	 * of = takes arguments and generates sequence
	 * from = array, promise, iterator, observable
	 */

	const observer = {
		next: (value: any) => console.log("next: ", value),
		complete: () => console.log("complete"),
	};

	// const sources$ = from([1, 2, 3, 4, 5]);
	// const sources$ = from("Moises");
	const sources$ = from(fetch("https://api.github.com/users/klerith"));

	sources$.subscribe(async (res) => {
		console.log(res);
		const data = await res.json();
		console.log(data);
	});

	const myGenerator = function* () {
		yield 1;
		yield 2;
		yield 3;
		yield 4;
		yield 5;
	};

	const myIterator = myGenerator();

	// for (let id of myIterator) {
	// 	console.log(id);
	// }

	from(myIterator).subscribe(observer);
}
