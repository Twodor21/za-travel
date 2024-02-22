import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { type SxProps, type Theme, Typography } from '@mui/material';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  LinkComponent?: React.ElementType;
  href?: string;
  endIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function AppButton({
  type = 'button',
  variant = 'contained',
  fullWidth,
  loading,
  LinkComponent,
  href,
  children,
  endIcon,
  sx,
  onClick,
}: Props) {
  return (
    <LoadingButton
      loading={loading}
      LinkComponent={LinkComponent}
      href={href}
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      endIcon={endIcon}
      onClick={onClick}
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
    </LoadingButton>
  );
}
