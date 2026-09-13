function getInitial(): boolean {
	if (typeof document === 'undefined') return false;
	return document.documentElement.classList.contains('dark');
}

let dark = $state(getInitial());

export function useTheme() {
	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			// ignore
		}
	}

	return {
		get dark() {
			return dark;
		},
		toggle
	};
}
