import {
	fromEvent,
	tap,
	map,
	mergeMap,
	catchError,
	of,
	switchMap,
	exhaustMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";
export default function () {
	const link = document.createElement("link");
	const body = document.querySelector("body");
	const linkIcon = document.querySelector("link");
	const form = document.createElement("form");
	const inputEmail = document.createElement("input");
	const inputPass = document.createElement("input");
	const submitBtn = document.createElement("button");

	const bootstrap =
		"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css";

	// config

	link.href = bootstrap;
	link.setAttribute("crossorigin", "anonymous");
	link.setAttribute(
		"integrity",
		"sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
	);
	link.rel = "stylesheet";
	link.setAttribute("type", "text/css");
	linkIcon?.after(link);

	inputEmail.type = "Email";
	inputEmail.placeholder = "Enter email";
	inputEmail.value = "eve.holt@reqres.in";
	inputEmail.classList.add("form-control", "my-3");

	inputPass.type = "password";
	inputPass.placeholder = "Password";
	inputPass.value = "cityslicka";
	inputPass.classList.add("form-control", "my-3");

	submitBtn.textContent = "Submit";
	form.classList.add("container");
	form.append(inputEmail, inputPass, submitBtn);
	body?.append(form);

	// Helper
	const requestHttpLogin = (user: any) =>
		ajax.post("https://reqres.in/api/login?delay=1", user).pipe(
			map((e: any) => e.response.token),
			catchError((err) => of("xxx"))
		);

	// streams
	const submitForm$ = fromEvent<Event>(form, "submit");
	submitForm$
		.pipe(
			tap((ev) => ev.preventDefault()),
			map((ev: any) => ({
				email: ev.target[0].value,
				password: ev.target[1].value,
			})),
			exhaustMap(requestHttpLogin)
		)
		.subscribe((token) => console.log(token));
}
