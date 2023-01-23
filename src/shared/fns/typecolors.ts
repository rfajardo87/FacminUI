import type { ButtonType } from '../enums/button';
import { Colors, Semaphore } from '../enums/colors';

export const typeColors = (type: ButtonType) => {
	const found = Object.entries(Colors).find((color) => color[0] == `${type}`);
	return found && found[1];
};

type typeKeyColor = Colors | Semaphore;

export const keyColor = (key: string, enumObj?: typeKeyColor): typeKeyColor | undefined => {
	return (Object.entries(enumObj ?? Semaphore).find((prop) => prop[0] === key) ?? [
		undefined,
		undefined
	])[1];
};
