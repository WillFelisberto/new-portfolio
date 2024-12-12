import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard, { Project } from '.';

const mockDefaultProject: Project = {
  title: 'My Awesome Project',
  slug: 'my-awesome-project',
  shortDescription: 'A short description of the project.',
  description: {
    root: {
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
      children: [
        {
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          text: 'Studied advanced computer science topics, including algorithms, data structures, and machine learning.',
          type: 'text',
          version: 1,
        },
      ],
    },
  },
  technologies: [
    { name: 'React', icon: '<svg></svg>' },
    { name: 'Next.js', icon: '<svg></svg>' },
    { name: 'TypeScript', icon: '<svg></svg>' },
  ],
  thumbnail: { url: 'https://via.placeholder.com/420x304' },
};

describe('ProjectCard Component', () => {
  it('renders the project title and description', () => {
    const { container } = render(<ProjectCard project={mockDefaultProject} />);

    const title = screen.getByRole('heading', { name: /my awesome project/i });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      /a short description of the project\./i,
    );
    expect(description).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders the project thumbnail', () => {
    render(<ProjectCard project={mockDefaultProject} />);

    const thumbnail = screen.getByAltText(
      /thumbnail do projeto my awesome project/i,
    );
    expect(thumbnail).toBeInTheDocument();
  });

  it('renders technology badges', () => {
    render(<ProjectCard project={mockDefaultProject} />);

    mockDefaultProject.technologies.forEach((tech) => {
      const badge = screen.getByText(tech.name);
      expect(badge).toBeInTheDocument();
    });
  });
});
