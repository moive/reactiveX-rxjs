import { of, catchError, Observer } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

export default function () {
	// const url = "https://api.github.com/users?per_page=5";
	const url = "https://httpbinXX.org/delay/1";

	const obs$ = ajax.getJSON(url, {
		"Content-Type": "application/json",
		"my-token": "ABC123",
	});

	const obs2$ = ajax({
		url,
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"my-token": "ABC1234",
		},
	});

	const handleError = (res: AjaxError) => {
		console.warn("Error handle-error: ", res.message);
		// throw new Error(res.message);
		return of({
			ok: false,
			users: [],
		});
	};
	const observer: Observer<any> = {
		next: (val: any) => console.log("next: ", val),
		error: (err: any) => console.warn("error subs: ", err),
		complete: () => console.log("complete"),
	};
	obs$.pipe(catchError(handleError)).subscribe(observer);
	obs2$.pipe(catchError(handleError)).subscribe(observer);
}
