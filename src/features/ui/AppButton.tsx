import React from 'react';

import { Button, type SxProps, type Theme, Typography } from '@mui/material';

interface Props {
  type: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function AppButton({
  type,
  variant = 'contained',
  fullWidth,
  sx,
  children,
}: Props) {
  return (
    <Button
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        height: { xs: 48, md: 56 },
        ...sx,
      }}
    >
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </Button>
  );
}
