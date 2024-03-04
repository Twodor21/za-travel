export interface WizzardSteps {
  title: string;
  description: string;
  Component: () => JSX.Element;
}
