import JSLogo from '../assets/JavaScript-logo.png';
import TSLogo from '../assets/TypeScript-logo.png';

export const getImage = (lang: string) => {
	switch (lang) {
		case 'TypeScript': {
			return TSLogo;
		}
		case 'JavaScript': {
			return JSLogo;
		}
		default:
			throw new Error('Unavailable argument');
	}
};
