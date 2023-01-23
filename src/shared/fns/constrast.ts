import { Colors } from '../enums/colors';

export const contrastTextColor = (bg?: Colors, expected?: Colors): Colors => {
	if (
		bg &&
		[Colors.primary, Colors.secondary, Colors.success, Colors.danger, Colors.dark].includes(bg)
	) {
		return expected ?? Colors.light;
	}
	return expected ?? Colors.body;
};
