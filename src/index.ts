import { Observable } from "rxjs";
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

obs$.subscribe(
	(value) => console.log("next", value),
	(error) => console.error("error", error),
	() => console.log("Completed")
);
