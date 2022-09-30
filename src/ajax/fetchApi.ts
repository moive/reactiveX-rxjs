export default function () {
	const url = "https://api.github.com/userXXs?per_page=5";

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

	fetchPromise
		.then(handleErrors)
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.warn("Error in users", err));
}
