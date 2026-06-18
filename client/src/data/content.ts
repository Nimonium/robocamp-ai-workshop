export interface WorkshopDetail {
  icon: string;
  label: string;
  value: string;
  color: 'primary' | 'secondary';
}

export const workshopDetails: WorkshopDetail[] = [
  { icon: 'group', label: 'Age Group', value: '8–14 Years', color: 'secondary' },
  { icon: 'schedule', label: 'Duration', value: '4 Weeks', color: 'primary' },
  { icon: 'laptop_mac', label: 'Mode', value: 'Online', color: 'secondary' },
  { icon: 'currency_rupee', label: 'Fee', value: '₹2,999', color: 'primary' },
  { icon: 'calendar_month', label: 'Start Date', value: '15 July 2026', color: 'secondary' }
];

export interface LearningOutcome {
  icon: string;
  text: string;
  color: 'primary' | 'secondary' | 'tertiary';
  span?: boolean;
}

export const learningOutcomes: LearningOutcome[] = [
  { icon: 'smart_toy', text: 'Build and program a simple robot from scratch', color: 'primary' },
  { icon: 'code', text: 'Understand basic coding logic and block-based programming', color: 'secondary' },
  { icon: 'lightbulb', text: 'Learn beginner-friendly AI concepts (pattern recognition, simple ML ideas)', color: 'tertiary' },
  { icon: 'settings', text: 'Develop teamwork and problem-solving skills through hands-on challenges', color: 'primary' },
  { icon: 'emoji_events', text: 'Present a final robotics project to peers and instructors', color: 'secondary', span: true }
];

export interface FAQItemData {
  question: string;
  answer: string;
}

export const faqItems: FAQItemData[] = [
  { 
    question: 'Do kids need prior coding experience?', 
    answer: 'No prior experience is needed! Our curriculum is designed to take kids from the basics to building their first robot.' 
  },
  { 
    question: 'What software or hardware is required to join?', 
    answer: 'All you need is a laptop with a stable internet connection. We provide all the necessary software and a hardware kit that will be shipped to your home!' 
  },
  { 
    question: 'Will there be a certificate after completing the workshop?', 
    answer: 'Yes! Every participant receives a personalized \'Young AI Engineer\' certificate upon successfully completing their final project.' 
  }
];
