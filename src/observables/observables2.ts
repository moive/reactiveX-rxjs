import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
	next: (value) => console.log("step: ", value),
	error: (error) => console.error("error: ", error),
	complete: () => console.info("completed"),
};

let count = 0;

const intervalo$ = new Observable<number>((subs) => {
	const interval = setInterval(() => {
		count++;
		subs.next(count);
		console.log(count);
	}, 1000);

	setTimeout(() => {
		subs.complete();
	}, 2500);

	return () => {
		clearInterval(interval);
		console.log("Destroyed interval");
	};
});

const subs = intervalo$.subscribe(observer);

setTimeout(() => {
	subs.unsubscribe();
	console.log("Completed timeout");
}, 3000);

export default subs;
