import { combineLatest, fromEvent, map } from "rxjs";
export default function () {
	const input1 = document.createElement("input");
	const input2 = document.createElement("input");

	document.querySelector("body")?.append(input1, input2);

	input1.type = "email";
	input1.placeholder = "test@test.com";

	input2.type = "password";
	input2.placeholder = "*********";

	// Helper
	const getInputStream = (elem: HTMLElement) =>
		fromEvent<KeyboardEvent>(elem, "keyup").pipe(
			map((val) => (val.target as HTMLInputElement).value)
		);

	combineLatest([getInputStream(input1), getInputStream(input2)])
		// .pipe(map((a) => `${a}`))
		.subscribe(console.log);
}
