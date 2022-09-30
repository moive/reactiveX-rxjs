import { ajax } from "rxjs/ajax";
export default function () {
	// const url = "https://api.github.com/users?per_page=5";
	const url = "https://httpbin.org/delay/1";

	ajax.post(
		url,
		{ id: 1, name: "Moises" },
		{ "my-token": "abc123", "Content-Type": "application/json" }
	).subscribe((val) => console.log("post: ", val));

	ajax.put(
		url,
		{ id: 1, name: "Moises" },
		{ "my-token": "abc1234", "Content-Type": "application/json" }
	).subscribe((val) => console.log("put: ", val));

	ajax.delete(url, {
		"my-token": "abc1235",
		"Content-Type": "application/json",
	}).subscribe((val) => console.log("delete: ", val));

	ajax({
		url,
		method: "POST",
		headers: {
			"my-token": "123456789abc",
		},
		body: {
			id: 565,
			name: "test",
		},
	}).subscribe((val) => console.log("ajax: ", val));
}
