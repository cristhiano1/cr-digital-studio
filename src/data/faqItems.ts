export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'systems',
    question: 'What kinds of systems can you build?',
    answer:
      'The focus is on business websites, lead and quote capture systems, online booking and customer flows, internal tools, workflow automation and integrations between existing systems. When custom development is the right fit, the system is designed around the specific workflow and requirements of the business. Projects are generally focused on a defined problem rather than trying to replicate large platforms.',
  },
  {
    id: 'spec',
    question: 'Do I need to know exactly what I need before getting in touch?',
    answer:
      'No. Most projects start with a manual process, a bottleneck or a friction point — not a finished specification. The first step is understanding how the business currently works, where time or enquiries are being lost, and what a practical outcome would look like. Scope is defined before development expands, so getting in touch at an early stage is the right time.',
  },
  {
    id: 'custom-vs-existing',
    question: 'Do I need custom software, or can an existing setup be improved or extended instead?',
    answer:
      'Custom software is not automatically the right answer. If an existing tool mostly fits the workflow, it is often better to improve or extend what is already there rather than replace it. Custom development becomes useful when the workflow is specific enough that off-the-shelf tools create significant friction, when several systems need to be connected, or when the business is consistently working around limitations in the current setup. The first conversation is usually about understanding which situation applies.',
  },
  {
    id: 'integrations',
    question: 'Can you connect the tools we already use?',
    answer:
      'Many business tools expose APIs that allow data to move between systems — for example, connecting a lead form to a CRM, triggering emails from a booking system, or pulling data from external services into an internal dashboard. Whether a specific integration is feasible depends on the tools involved and what their APIs allow. This is assessed during the scoping phase rather than assumed upfront.',
  },
  {
    id: 'start',
    question: 'How does a project start?',
    answer:
      'A project starts with a conversation about the workflow — what is currently happening, what is getting stuck and what a useful outcome would look like. From there, the scope is defined: the key flows, the technical boundaries and the priorities. Development begins once that scope is agreed, which means the project has a defined shape from the start rather than expanding as it goes. This follows the same process described in the How We Work section on this page.',
  },
  {
    id: 'timeline',
    question: 'How long does a project take?',
    answer:
      'Timing depends on the scope, the number of integrations, how much already exists and how quickly feedback and decisions can happen on both sides. A focused website or a single workflow is a different scale to an internal system with multiple user roles and integrations. The important point is that scope is agreed before development begins, so the project has a defined shape rather than an open-ended timeline.',
  },
  {
    id: 'who',
    question: 'Who will I be working with directly?',
    answer:
      'You will work directly with Cristhian M., who is responsible for understanding the workflow, designing the system and building it. There is no account management layer between you and the person doing the work. Technical questions, decisions and progress are communicated directly throughout the project.',
  },
  {
    id: 'after-launch',
    question: 'What happens after the system launches?',
    answer:
      'After launch, the critical flows are checked in the live environment to confirm they work as agreed. The code and system are handed over in a state that is understandable and maintainable. Improvements or additional features after launch can be scoped and agreed separately. Ongoing support is not automatically included as part of the initial project, but can be arranged depending on the situation.',
  },
  {
    id: 'agency-difference',
    question: 'How is CR Digital Systems different from a traditional web agency?',
    answer:
      'A traditional web agency typically focuses on marketing websites, branding, content and campaigns — which is a valid and useful service. The emphasis at CR Digital Systems is different: the website may be one part of a broader system that includes data, backend logic, workflow automation and integrations. The starting point is the business workflow rather than visual design, which means the technical scope often goes further than a purely marketing-focused agency. Some agencies also build software — the distinction is one of emphasis and approach.',
  },
  {
    id: 'demos',
    question: 'Are the systems shown on this site real client projects?',
    answer:
      'The systems in the Concept Systems section are concept demos built to illustrate system thinking, interaction design and technical capability. They use sample data and are not real client deployments. Their purpose is to show how systems of this type work in practice — the flows, the logic and the interface — and they are presented as illustrative examples rather than completed client work.',
  },
]
