import { filter, range, from } from "rxjs";

export default function () {
	range(1, 5)
		.pipe(filter((val) => val % 2 === 1))
		.subscribe(console.log);
}

interface Person {
	name: string;
	type: string;
}

const person: Person[] = [
	{
		name: "Batman",
		type: "hero",
	},
	{
		name: "Robin",
		type: "hero",
	},
	{
		name: "Joker",
		type: "villano",
	},
];

from(person)
	.pipe(filter((val) => val.type != "hero"))
	.subscribe(console.log);
