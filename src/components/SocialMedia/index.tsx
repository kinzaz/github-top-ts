import React from 'react';
import { data } from './data';
import IconButton from '@mui/material/IconButton';

export const SocialMedia = () => {
	return (
		<>
			{data.map(item => {
				return (
					<React.Fragment key={item.id}>
						<IconButton
							size={item.size}
							aria-label={item.ariaLabel}
							href={item.link}
							color="inherit"
							target="_blank"
						>
							{<item.img />}
						</IconButton>
					</React.Fragment>
				);
			})}
		</>
	);
};
