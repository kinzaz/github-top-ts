import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import Avatar from '@mui/material/Avatar';

import { dateUpdate } from '../../helpers/dateUpdate';
import Link from '@mui/material/Link';

import { Button } from '@mui/material';
import { getImage } from '../../helpers/getImage';
import { CARD_BTN } from './constants';
import { CardHeaderItem } from './ui/CardHeaderItem';
import { CardInfoItems } from './ui/CardInfoItems';

export const CardItem = ({
	avatar,
	repoName,
	createdAt,
	linkToRepo,
	description,
	forksCount,
	homePage,
	language,
	stars,
}) => {
	return (
		<Card>
			<CardHeaderItem
				avatar={avatar}
				createdAt={createdAt}
				linkToRepo={linkToRepo}
				repoName={repoName}
			/>
			<CardMedia
				component="img"
				height="270"
				image={getImage(language)}
				alt="image"
			/>
			<CardInfoItems
				description={description}
				forksCount={forksCount}
				stars={stars}
			/>
			<Link href={homePage} color="inherit" underline="none" target="_blank">
				<Button variant="contained">{CARD_BTN}</Button>
			</Link>
		</Card>
	);
};
