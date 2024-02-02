import * as React from 'react';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InfoRounded from '@mui/icons-material/InfoRounded';

export default function RealEstateCard({ sx, ...props }: CardProps) {
  return (
    <Card
      variant="outlined"
      {...props}
      sx={[
        (theme) => ({
          display: 'flex',
          flexWrap: 'wrap',
          p: 2,
          zIndex: 1,
          boxShadow: '0 2px 4px rgba(0, 127, 255, 0.1)',
          ...theme.applyDarkStyles({
            bgcolor: 'primaryDark.900',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <CardMedia
        component="img"
        width="100"
        height="100"
        alt="123 Main St, Phoenix, AZ cover"
        src="/static/images/cards/real-estate.png"
        sx={{
          borderRadius: 0.5,
          width: 'clamp(100px, (304px - 100%) * 999 , 100%)',
        }}
      />
      <Box sx={{ width: 'clamp(15px, (304px - 100%) * 999 , 100%)', height: 15 }} />
      <Box sx={{ alignSelf: 'center' }}>
        <Typography variant="caption" color="text.secondary" fontWeight="medium">
          123 Main St, Phoenix, AZ
        </Typography>
        <Typography fontWeight="bold" noWrap>
          $280k - $310k
        </Typography>
        <Box
          sx={(theme) => ({
            mt: 1,
            py: 0.4,
            pl: 0.5,
            pr: 1,
            typography: 'caption',
            borderRadius: 10,
            display: 'flex',
            bgcolor: 'primary.50',
            border: '1px solid',
            borderColor: 'primary.100',
            color: 'primary.700',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.700',
              color: 'primary.200',
              borderColor: 'primary.900',
            }),
          })}
        >
          <InfoRounded sx={{ fontSize: 16, mr: 0.5, mt: '1px' }} /> Confidence score: 85%
        </Box>
      </Box>
    </Card>
  );
}
