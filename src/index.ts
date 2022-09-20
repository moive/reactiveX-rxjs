import { Observable } from "rxjs";
import "./sass/site.scss";

const obs$ = new Observable<string>((subs) => {
	subs.next("Hello");
	subs.next("world");

	subs.next("Hello");
	subs.next("world");

	subs.complete();

	subs.next("finished");
});

obs$.subscribe(console.log);
