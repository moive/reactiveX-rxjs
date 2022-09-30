import { of, catchError } from "rxjs";
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
		console.warn("Error: ", res.message);
		return of({
			ok: false,
			users: [],
		});
	};

	obs$.pipe(catchError(handleError)).subscribe((data) =>
		console.log("getJSON", data)
	);
	obs2$
		.pipe(catchError(handleError))
		.subscribe((data) => console.log("ajax", data));
}
