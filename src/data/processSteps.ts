export interface ProcessStep {
  number: string
  title: string
  description: string
  points: string[]
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Start with how the business actually works — not with technology. Map the workflows, identify where time or customers are lost, and clarify what the system genuinely needs to solve.',
    points: [
      'Walk through current workflows and manual processes',
      'Identify friction points and unmet customer needs',
      'Establish what a successful outcome looks like',
    ],
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Turn the problem into a written scope before development starts. The important workflows, key screens, integrations and technical boundaries are confirmed and agreed first.',
    points: [
      'Key screens, user flows and integrations agreed',
      'Responsibilities and technical boundaries documented',
      'Priorities set so the most important things ship first',
    ],
  },
  {
    number: '03',
    title: 'Build & Review',
    description:
      'Development proceeds in practical stages. Working progress is shown during the build — not just described — and important flows are reviewed before final delivery.',
    points: [
      'Working progress demonstrated, not just reported',
      'Feedback incorporated at meaningful intervals',
      'Quality checked against the agreed scope',
    ],
  },
  {
    number: '04',
    title: 'Launch & Improve',
    description:
      'The agreed system is deployed, validated in the live environment and handed over properly. Further improvements and support can be arranged separately.',
    points: [
      'Deployment and go-live approach agreed',
      'Critical flows verified in the live environment',
      'Code remains understandable and maintainable after handover',
    ],
  },
]
