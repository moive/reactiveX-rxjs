import { distinct, of, from } from "rxjs";
export default function () {
	const numbers$ = of(1, 1, 1, "1", 2, 2, 3, 3, 3, 4, 4, 1, "1", 3);

	numbers$.pipe(distinct()).subscribe(console.log);
}

interface Person {
	name: string;
}

const persons: Person[] = [
	{ name: "Megaman" },
	{ name: "X " },
	{ name: "Zero" },
	{ name: "Dr. Wily" },
	{ name: "Megaman" },
	{ name: "X " },
	{ name: "Zero" },
	{ name: "Dr. Wily" },
];

from(persons)
	.pipe(distinct((x) => x.name))
	.subscribe(console.log);
