/**
 * Ejercicio: Realizar que los dos observables finales,
 * emitan exactamente el mismo valor
 *
 * Tip: Hot Observable? subjects?
 */

import { interval, map, take, Subject } from "rxjs";

export default function () {
	// == NO TOCAR este bloque ====================
	const reloj$ = interval(1000).pipe(
		take(5),
		map((val) => Math.round(Math.random() * 100))
	);

	const subject$ = new Subject();
	reloj$.subscribe(subject$);

	// Estos dos observables deben de emitir exactamente los mismos valores
	subject$.subscribe((val) => console.log("obs1", val));
	subject$.subscribe((val) => console.log("obs2", val));
}
