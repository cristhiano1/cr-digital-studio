export interface ProcessStep {
  number: string
  title: string
  description: string
  output: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We look at the current workflow, where time is being lost, and what is already working before deciding whether anything new needs to be built.',
    output: 'Clear problem definition',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'The solution is reduced to the parts that actually matter. Core flows, boundaries and priorities are agreed before development begins.',
    output: 'Focused build scope',
  },
  {
    number: '03',
    title: 'Build & Review',
    description:
      'Working parts are built and reviewed in stages so feedback can shape the system before it is finished.',
    output: 'Working system flows',
  },
  {
    number: '04',
    title: 'Launch & Improve',
    description:
      'The system is moved into its live environment, checked in real use and improved where the workflow shows it is needed.',
    output: 'A usable live system',
  },
]
