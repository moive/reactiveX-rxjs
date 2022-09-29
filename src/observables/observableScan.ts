import { reduce, from, scan, map, sample } from "rxjs";
export default function () {
	const numbers = [1, 2, 3, 4, 5];

	const totalReducer = (acc: number, cur: number) => acc + cur;

	// Reduce
	from(numbers)
		.pipe(reduce(totalReducer))
		.subscribe({
			next: (val) => console.log("next: ", val),
			complete: () => console.log("complete"),
		});
	// Scan
	from(numbers)
		.pipe(scan(totalReducer, 8))
		.subscribe({
			next: (val) => console.log("acc: ", val),
			complete: () => console.log("complete scan"),
		});

	// Redux
	interface User {
		id?: string;
		authenticated?: boolean;
		token?: string | null;
		age?: number;
	}

	const user: User[] = [
		{
			id: "alicope",
			authenticated: false,
			token: null,
		},
		{
			id: "alicope",
			authenticated: true,
			token: "abc",
		},
		{
			id: "alicope",
			authenticated: true,
			token: "abc123",
		},
	];

	const state$ = from(user).pipe(
		scan<User, User>((acc, cur) => ({ ...acc, ...cur }), { age: 33 })
	);

	const id$ = state$.pipe(map((state) => state.id));

	id$.subscribe(console.log);
}
