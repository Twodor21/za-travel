import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  ButtonBase,
  type SxProps,
  type Theme,
  Typography,
} from '@mui/material';

import { Colors } from '@config/styles';

interface Props {
  mainText: string;
  subText: string;
  sx?: SxProps<Theme>;
}

export default function UploadFileButton({ mainText, subText, sx }: Props) {
  return (
    <Box sx={{ width: '100%', height: '100%', ...sx }}>
      <ButtonBase
        sx={{
          bgcolor: Colors.lightGreen,
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
          color: 'primary.main',
          borderRadius: 4,
          height: { xs: '100%', md: 260 },
          width: '100%',
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23729E65FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='87' stroke-linecap='square'/%3e%3c/svg%3e");
          border-radius: 16px;`,
          px: 1,
        }}
      >
        <AddIcon fontSize="large" />
        <Typography component="span" variant="body2">
          {mainText}
        </Typography>
        <Typography component="span" color="text.secondary" variant="caption">
          {subText}
        </Typography>
      </ButtonBase>
    </Box>
  );
}
