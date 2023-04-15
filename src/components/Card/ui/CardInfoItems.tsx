import { CardInfo } from '../../UI/CardInfo';
import { numberUpdate } from '../../../helpers/numberUpdate';
import { CARD_INFO } from '../constants';

export const CardInfoItems = ({
	description,
	forksCount,
	stars,
}): JSX.Element => {
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
