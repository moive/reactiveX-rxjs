import { asyncScheduler } from "rxjs";

export default function () {
	const greeting = () => console.log("Hello world!");
	const greeting2 = ({ firstname, lastname }: any) =>
		console.log(`Hello ${firstname} ${lastname}!`);

	asyncScheduler.schedule(greeting2, 2000, {
		firstname: "Moises",
		lastname: "Velasquez",
	});

	const subs = asyncScheduler.schedule(
		function (state) {
			console.log("state", state);

			this.schedule(state! + 1, 1000);

			if (state == 10) this.unsubscribe();
		},
		3000,
		0
	);

	setTimeout(() => {
		subs.unsubscribe();
	}, 6000);
}
