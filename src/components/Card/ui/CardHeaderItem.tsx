import { Avatar, CardHeader, Link } from '@mui/material';
import { dateUpdate } from '@helpers';
import { CardItemProps } from '../';

export const CardHeaderItem = ({
	linkToRepo,
	avatar,
	createdAt,
	repoName,
}: Pick<
	CardItemProps,
	'linkToRepo' | 'avatar' | 'createdAt' | 'repoName'
>): JSX.Element => {
	return (
		<Link href={linkToRepo} color='inherit' underline='none' target='_blank'>
			<CardHeader
				avatar={<Avatar aria-label='avatar' src={avatar} />}
				title={repoName}
				subheader={`Created: ${dateUpdate(new Date(createdAt))}`}
			/>
		</Link>
	);
};
