import { distinct, of, from, distinctUntilChanged } from "rxjs";
export default function () {
	const numbers$ = of(1, 1, 1, "1", 2, 2, 3, 3, 3, 4, 4, 1, "1", 3);

	numbers$.pipe(distinctUntilChanged()).subscribe(console.log);
}

interface Person {
	name: string;
}

const persons: Person[] = [
	{ name: "Megaman" },
	{ name: "Megaman" },
	{ name: "Zero" },
	{ name: "Dr. Wily" },
	{ name: "X " },
	{ name: "X " },
	{ name: "Zero" },
	{ name: "Dr. Wily" },
];

from(persons)
	.pipe(distinctUntilChanged((prev, next) => prev.name === next.name))
	.subscribe(console.log);
