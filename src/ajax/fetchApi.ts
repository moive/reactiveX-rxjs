import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, of } from "rxjs";

export default function () {
	const url = "https://api.github.com/userxxs?per_page=5";

	const handleErrors = (response: Response) => {
		console.log(response);
		if (!response.ok) {
			throw new Error(
				response.statusText == "" ? "Not found" : response.statusText
			);
		}
		return response;
	};
	const fetchPromise = fetch(url);

	// fetchPromise
	// 	.then(handleErrors)
	// 	.then((res) => res.json())
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.warn("Error in users", err));

	const handleError = (err: AjaxError) => {
		console.warn("Error in users", err);
		return of([]);
	};

	ajax(url)
		.pipe(
			map(({ response }) => response),
			catchError(handleError)
		)
		.subscribe((users) => console.log("users: ", users));
}
