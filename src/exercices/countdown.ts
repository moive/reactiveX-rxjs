import { interval, map, take } from "rxjs";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

export default function () {
	const initial = 7;
	const countdown$ = interval(700).pipe(
		map((val) => initial - val),
		take(initial + 1)
	);

	// No tocar esta línea ==================
	countdown$.subscribe(console.log); // =
	// ======================================
}
