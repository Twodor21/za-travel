import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { MobileStepper } from '@mui/material';

import AppButton from '@features/ui/AppButton';

import { WIZARD_STEPS } from '../../data';

export default function Pagination() {
  const currentStep = 0;

  return (
    <MobileStepper
      variant="text"
      steps={WIZARD_STEPS.length}
      position="static"
      activeStep={currentStep}
      nextButton={
        <AppButton type="submit" endIcon={<ArrowForward />}>
          Next
        </AppButton>
      }
      backButton={
        <AppButton
          variant="outlined"
          startIcon={<ArrowBack />}
          sx={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
        >
          Back
        </AppButton>
      }
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        p: { xs: 2, md: 3 },
        borderRadius: 4,
      }}
    />
  );
}
