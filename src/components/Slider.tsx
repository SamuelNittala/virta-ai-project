import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 55px;
`;

export default function InputSlider({onBalanceChange} : any) {
  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    1800,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
    onBalanceChange(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    onBalanceChange(event.target.value);
  };

  return (
    <Box sx={{ width: 350}}>
      <Typography id="input-slider" gutterBottom>
        Balance
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min= {1000}
            step= {500}
            max = {4000}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="large"
            onChange={handleInputChange}
            inputProps={{
              step: 500,
              min: 1000,
              max: 4000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
