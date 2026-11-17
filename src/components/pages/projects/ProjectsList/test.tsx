import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectsList } from '.';
import { Project } from '@/app/(payload)/payload-types';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & { layout?: boolean }) => {
      delete (props as Record<string, unknown>).layout;
      return (
        <div className={className} {...props}>
          {children}
        </div>
      );
    },
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

const mockProjects: Project[] = [
  {
    id: 'p1',
    title: 'fadigAI - Driver Drowsiness',
    slug: 'fadigai',
    category: 'edge-ai',
    shortDescription: 'TinyML on ESP32-S3',
    description: {
      root: {
        type: 'root',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [],
      },
    },
    technologies: [
      { id: 't1', name: 'TinyML', icon: '', createdAt: '', updatedAt: '' },
    ],
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
  },
  {
    id: 'p2',
    title: 'Shelfkeep Asset Manager',
    slug: 'shelfkeep',
    category: 'web',
    shortDescription: 'Asset inventory web platform',
    description: {
      root: {
        type: 'root',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [],
      },
    },
    technologies: [
      { id: 't2', name: 'NextJS', icon: '', createdAt: '', updatedAt: '' },
    ],
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
  },
  {
    id: 'p3',
    title: 'Technical test at IBM',
    slug: 'ibmbrasil',
    category: 'challenges',
    shortDescription: 'React frontend test',
    description: {
      root: {
        type: 'root',
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
        children: [],
      },
    },
    technologies: [
      { id: 't3', name: 'React', icon: '', createdAt: '', updatedAt: '' },
    ],
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
  },
];

describe('ProjectsList Component', () => {
  it('renders empty state when projects array is empty', () => {
    render(<ProjectsList projects={[]} />);
    expect(screen.getByText(/no projects here yet/i)).toBeInTheDocument();
  });

  it('renders all projects and category filter buttons', () => {
    render(<ProjectsList projects={mockProjects} />);

    expect(
      screen.getByRole('button', { name: /all projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /edge ai \/\/ tinyml/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /fullstack & web/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /technical challenges/i }),
    ).toBeInTheDocument();

    expect(screen.getByText('fadigAI - Driver Drowsiness')).toBeInTheDocument();
    expect(screen.getByText('Shelfkeep Asset Manager')).toBeInTheDocument();
    expect(screen.getByText('Technical test at IBM')).toBeInTheDocument();
  });

  it('filters projects when a category is clicked', () => {
    render(<ProjectsList projects={mockProjects} />);

    const edgeAiButton = screen.getByRole('button', {
      name: /edge ai \/\/ tinyml/i,
    });
    fireEvent.click(edgeAiButton);

    expect(screen.getByText('fadigAI - Driver Drowsiness')).toBeInTheDocument();
    expect(
      screen.queryByText('Shelfkeep Asset Manager'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Technical test at IBM')).not.toBeInTheDocument();
  });

  it('filters projects using the search input', () => {
    render(<ProjectsList projects={mockProjects} />);

    const searchInput = screen.getByPlaceholderText(
      /search projects or stack\.\.\./i,
    );
    fireEvent.change(searchInput, { target: { value: 'shelfkeep' } });

    expect(screen.getByText('Shelfkeep Asset Manager')).toBeInTheDocument();
    expect(
      screen.queryByText('fadigAI - Driver Drowsiness'),
    ).not.toBeInTheDocument();
  });

  it('shows empty filter state and resets when reset button is clicked', () => {
    render(<ProjectsList projects={mockProjects} />);

    const searchInput = screen.getByPlaceholderText(
      /search projects or stack\.\.\./i,
    );
    fireEvent.change(searchInput, { target: { value: 'non-existing-query' } });

    expect(
      screen.getByText(/no projects matched your filter/i),
    ).toBeInTheDocument();

    const resetButton = screen.getByRole('button', {
      name: /reset filters/i,
    });
    fireEvent.click(resetButton);

    expect(screen.getByText('fadigAI - Driver Drowsiness')).toBeInTheDocument();
    expect(screen.getByText('Shelfkeep Asset Manager')).toBeInTheDocument();
  });
});
