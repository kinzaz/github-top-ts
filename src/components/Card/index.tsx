import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Link from '@mui/material/Link';

import { Button } from '@mui/material';
import { getImage } from '@helpers';
import { CARD_BTN } from './constants';
import { CardHeaderItem } from './ui/CardHeaderItem';
import { CardInfoItems } from './ui/CardInfoItems';
import { CardStyle } from './style';

export type CardItemProps = {
	avatar: string;
	repoName: string;
	createdAt: Date;
	linkToRepo: string;
	description: string;
	forksCount: number;
	homePage: string;
	language: string;
	stars: number;
};

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
}: CardItemProps) => {
	return (
		<Card sx={CardStyle}>
			<CardHeaderItem
				avatar={avatar}
				createdAt={createdAt}
				linkToRepo={linkToRepo}
				repoName={repoName}
			/>
			<CardMedia
				component='img'
				height='270'
				image={getImage(language)}
				alt='image'
			/>
			<CardInfoItems
				description={description}
				forksCount={forksCount}
				stars={stars}
			/>
			{homePage && (
				<Link href={homePage} color='inherit' underline='none' target='_blank'>
					<Button variant='contained'>{CARD_BTN}</Button>
				</Link>
			)}
		</Card>
	);
};
