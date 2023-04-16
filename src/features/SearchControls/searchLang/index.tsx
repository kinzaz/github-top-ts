import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RADIO_LANGUAGE } from './constants';
import { dataLang } from './data.content';
import { setLanguage } from '../searchLang.slice';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { selectorCurrentLanguage } from '../searchLang.selector';
import { TSearchByLang } from './data.content';
import { toggleTheme } from '../../theme/theme.slice';

export const SwitchLangSearch = () => {
	const dispatch = useAppDispatch();
	const currentLanguage = useSelector(selectorCurrentLanguage);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setLanguage(event.target.value as TSearchByLang['value']));
		dispatch(toggleTheme());
	};

	return (
		<FormControl>
			<FormLabel
				sx={{ fontSize: '15px' }}
				id="demo-controlled-radio-buttons-group"
			>
				{RADIO_LANGUAGE}
			</FormLabel>
			<RadioGroup
				name="controlled-radio-buttons-group"
				value={currentLanguage}
				onChange={handleChange}
			>
				{dataLang.map(lang => {
					return (
						<>
							<FormControlLabel
								value={lang.value}
								control={<Radio />}
								label={lang.langName}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 18,
									},
									'& .MuiTypography-root': {
										fontSize: 12,
									},
								}}
							/>
						</>
					);
				})}
			</RadioGroup>
		</FormControl>
	);
};
