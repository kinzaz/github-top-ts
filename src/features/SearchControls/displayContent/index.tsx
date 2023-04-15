import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../../../store';
import { setQuantityContent } from './displayContent.slice';
import { useSelector } from 'react-redux';
import { selectQuantityContent } from './displayContent.selector';
import { FormLabel } from '@mui/material';
import { QUANTITY_DISPLAYED } from './constants';
import { displayContentStyle } from './style';

export const DisplaySelect = () => {
	const dispatch = useAppDispatch();
	const quantityContent = useSelector(selectQuantityContent);
	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setQuantityContent(event.target.value));
	};

	return (
		<>
			<Box sx={displayContentStyle}>
				<FormLabel sx={{ fontSize: '15px' }}>{QUANTITY_DISPLAYED}</FormLabel>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Content</InputLabel>
					<Select
						id="demo-simple-select"
						value={quantityContent}
						label="Quantity content"
						onChange={handleChange}
						sx={{ width: '50%' }}
					>
						<MenuItem value={9}>9</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={50}>50</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</>
	);
};
