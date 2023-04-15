import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
	display: flex;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
`;

export const CardSkeleton = (): JSX.Element => {
	return (
		<Wrapper>
			{new Array(12).fill(null).map(item => {
				return (
					<>
						<Skeleton variant="rounded" width={280} height={310} />
					</>
				);
			})}
		</Wrapper>
	);
};
