import { interval, timer } from "rxjs";

export default function () {
	const observer = {
		next: (val: any) => console.log("next: ", val),
		complete: () => console.log("complete"),
	};

	const today = new Date();
	today.setSeconds(today.getSeconds() + 5);

	const interval$ = interval(1000);
	// const timer$ = timer(2000);
	// const timer$ = timer(2000, 1000);
	const timer$ = timer(today); // timer wil run 5 seconds later

	console.log("start");
	// interval$.subscribe(observer);
	timer$.subscribe(observer);
	console.log("end");
}
