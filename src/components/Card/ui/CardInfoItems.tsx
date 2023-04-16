import { CardInfo } from '../../UI/CardInfo';
import { numberUpdate } from '@helpers';
import { CARD_INFO } from '../constants';
import { CardItemProps } from '../';

export const CardInfoItems = ({
	description,
	forksCount,
	stars,
}: Pick<
	CardItemProps,
	'description' | 'stars' | 'forksCount'
>): JSX.Element => {
	return (
		<>
			<CardInfo
				title={CARD_INFO.DESCRIPTION}
				description={description}
				sx={{ flexGrow: 1 }}
			/>
			<CardInfo
				title={CARD_INFO.FORKS_COUNT}
				description={numberUpdate(forksCount)}
			/>
			<CardInfo title={CARD_INFO.STARS} description={numberUpdate(stars)} />
		</>
	);
};
