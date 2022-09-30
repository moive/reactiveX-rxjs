import { ajax } from "rxjs/ajax";
import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";
export default function () {
	const textInput = document.createElement("input");

	document.querySelector("body")?.append(textInput);

	const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

	input$
		.pipe(
			debounceTime<KeyboardEvent>(500),
			map<KeyboardEvent, string>(
				(ev) => (ev.target as HTMLInputElement).value
			),
			map<string, Observable<GithubUsersResp>>((text) =>
				ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
			),
			mergeAll<Observable<GithubUsersResp>>(),
			map<GithubUsersResp, GithubUser[]>(({ items }) => items)
		)
		.subscribe((res) => console.log(res));
}
