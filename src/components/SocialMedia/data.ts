// import GithubLogo from '../../assets/logo-github.svg';
// import TelegramLogo from '../../assets/logo-telegram.svg';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
	ExtendButtonBase,
	IconButtonTypeMap,
	SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type TCustomnData = {
	id: number;
	link: string;
	img: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	size: 'large' | 'small' | 'medium';
	ariaLabel: string;
};

export const data: TCustomnData[] = [
	{
		id: 1,
		link: 'https://github.com/kinzaz',
		img: GitHubIcon,
		size: 'large',
		ariaLabel: 'display github',
	},
	{
		id: 2,
		link: 'https://t.me/vv_579',
		img: TelegramIcon,
		size: 'large',
		ariaLabel: 'display telegram',
	},
];
