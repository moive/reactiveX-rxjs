import {
	distinct,
	of,
	from,
	distinctUntilChanged,
	distinctUntilKeyChanged,
	map,
} from "rxjs";
export default function () {
	const numbers$ = of(1, 1, 1, "1", 2, 2, 3, 3, 3, 4, 4, 1, "1", 3);

	numbers$.pipe(distinctUntilChanged()).subscribe(console.log);
}

interface Person {
	name: string;
	type: {
		serie: string;
	};
}

const persons: Person[] = [
	{ name: "Megaman", type: { serie: "B" } },
	{ name: "Megaman", type: { serie: "C" } },
	{ name: "Zero", type: { serie: "A" } },
	{ name: "Dr. Wily", type: { serie: "A" } },
	{ name: "X ", type: { serie: "D" } },
	{ name: "X ", type: { serie: "D" } },
	{ name: "Zero", type: { serie: "C" } },
	{ name: "Dr. Wily", type: { serie: "C" } },
];

from(persons)
	.pipe(
		map((v) => v),
		distinctUntilChanged((p, n) => p.type.serie === n.type.serie)
	)
	.subscribe(console.log);
