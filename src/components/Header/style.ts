import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	paddingTop: theme.spacing(2),
	paddingBottom: theme.spacing(2),
}));
