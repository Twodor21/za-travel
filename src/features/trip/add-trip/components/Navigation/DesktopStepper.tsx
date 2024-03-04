import { Step, StepLabel, Stepper } from '@mui/material';

import { useBreakpoints } from '@hooks/useBreakpoints';

import type { WizzardSteps } from '../../types';

interface Props {
  currentStep: number;
  steps: WizzardSteps[];
}

export default function DesktopStepper({ currentStep, steps }: Props) {
  const { xl } = useBreakpoints();
  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel={!xl}
      sx={{ display: { xs: 'none', lg: 'flex' }, mb: 8 }}
    >
      {steps.map(({ title }) => {
        return (
          <Step key={title}>
            <StepLabel
              StepIconProps={{
                sx: {
                  height: { xs: 35, xl: 49 },
                  width: { xs: 35, xl: 49 },
                },
              }}
            >
              {title}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
