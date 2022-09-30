import { ajax } from "rxjs/ajax";

export default function () {
	// const url = "https://api.github.com/users?per_page=5";
	const url = "https://httpbin.org/delay/1";

	const obs$ = ajax.getJSON(url, {
		"Content-Type": "application/json",
		"my-token": "ABC123",
	});

	const obs2$ = ajax({
		url,
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"my-token": "ABC1234",
		},
	});

	obs$.subscribe((data) => console.log("getJSON", data));
	obs2$.subscribe((data) => console.log("ajax", data));
}
