import JSLogo from '../assets/javascript-logo.png';
import TSLogo from '../assets/typescript-logo.png';

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
