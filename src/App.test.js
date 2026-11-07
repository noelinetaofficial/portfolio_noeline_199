import { render, screen } from '@testing-library/react';
import SkillBadge from './components/SkillBadge';
import ProjectCard from './components/ProjectCard';

test('renders SkillBadge component with skill name', () => {
  render(<SkillBadge skill="React.js" category="Frontend" level="Advanced" />);
  expect(screen.getByText(/React.js/i)).toBeInTheDocument();
  expect(screen.getByText(/Advanced/i)).toBeInTheDocument();
});

test('renders ProjectCard component with title and description', () => {
  render(
    <ProjectCard 
      title="Personal Portfolio Website" 
      description="Practical Examination Project for Ziuke Infotech"
      tags={['React', 'CSS']}
    />
  );
  expect(screen.getByText(/Personal Portfolio Website/i)).toBeInTheDocument();
  expect(screen.getByText(/Practical Examination Project/i)).toBeInTheDocument();
  expect(screen.getByText(/React/i)).toBeInTheDocument();
});
