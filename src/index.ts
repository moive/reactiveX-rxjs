import { Observable, Observer } from "rxjs";
import "./sass/site.scss";

const obs$ = new Observable<string>((subs) => {
	subs.next("Hello");
	subs.next("world");

	// const a = undefined;
	// a.name = "Hello";

	subs.next("Hello");
	subs.next("world");

	subs.complete();

	subs.next("finished");
});

const observer: Observer<any> = {
	next: (value) => console.log("step [next]: ", value),
	error: (error) => console.error("error [obs]: ", error),
	complete: () => console.info("completed [obs]"),
};

obs$.subscribe(observer);
