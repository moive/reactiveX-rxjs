import { ajax } from "rxjs/ajax";
import {
	debounceTime,
	fromEvent,
	map,
	mergeAll,
	Observable,
	tap,
	mergeMap,
} from "rxjs";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";
export default function () {
	const textInput = document.createElement("input");
	const orderList = document.createElement("ol");
	document.querySelector("body")?.append(textInput, orderList);

	// Helpers
	const showUsers = (users: GithubUser[]) => {
		orderList.innerHTML = "";

		for (const user of users) {
			const li = document.createElement("li");
			const img = document.createElement("img");
			const anchor = document.createElement("a");

			img.src = user.avatar_url;
			anchor.href = user.html_url;
			anchor.text = "View Page";
			anchor.target = "_blank";

			li.append(img);
			li.append(user.login + " ");
			li.append(anchor);

			orderList.append(li);
		}
	};

	const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

	input$
		.pipe(
			debounceTime<KeyboardEvent>(500),
			map<KeyboardEvent, string>(
				(ev) => (ev.target as HTMLInputElement).value
			),
			mergeMap<string, Observable<GithubUsersResp>>((text) =>
				ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
			),
			map<GithubUsersResp, GithubUser[]>(({ items }) => items)
		)
		.subscribe(showUsers);
}
