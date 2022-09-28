import { asyncScheduler } from "rxjs";

export default function () {
	const greeting = () => console.log("Hello world!");
	const greeting2 = ({ firstname, lastname }: any) =>
		console.log(`Hello ${firstname} ${lastname}!`);

	asyncScheduler.schedule(greeting2, 2000, {
		firstname: "Moises",
		lastname: "Velasquez",
	});
}
