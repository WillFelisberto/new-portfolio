import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RichTextComponent, { RichTextProps } from '.';

const sampleData: RichTextProps = {
  lexicalData: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Homepage',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
};

const multipleParagraphsData: RichTextProps = {
  lexicalData: {
    root: {
      version: 1,
      direction: 'ltr',
      format: '',
      indent: 0,
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              version: 1,
              type: 'text',
              text: 'This is the first paragraph',
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
        },
        {
          type: 'paragraph',
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
          textFormat: 0,
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              version: 1,
              type: 'text',
              text: 'This is the second paragraph.',
            },
          ],
        },
      ],
      type: 'root',
    },
  },
};

describe('<RichTextComponent />', () => {
  it('renders a single paragraph correctly', () => {
    const { container } = render(
      <RichTextComponent lexicalData={sampleData.lexicalData} />,
    );

    // Verifica se o texto está presente no documento
    expect(screen.getByText('Homepage')).toBeInTheDocument();

    // Verifica se o componente renderizado corresponde ao snapshot
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders multiple paragraphs correctly', () => {
    render(
      <RichTextComponent lexicalData={multipleParagraphsData.lexicalData} />,
    );

    // Verifica se ambos os parágrafos são renderizados corretamente
    expect(screen.getByText('This is the first paragraph')).toBeInTheDocument();
    expect(
      screen.getByText('This is the second paragraph.'),
    ).toBeInTheDocument();
  });

  it('renders numbered lists correctly', () => {
    const listData: RichTextProps = {
      lexicalData: {
        root: {
          version: 1,
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'root',
          children: [
            {
              type: 'list',
              listType: 'number',
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
              start: 1,
              tag: 'ol',
              children: [
                {
                  type: 'listitem',
                  version: 1,
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  value: 1,
                  children: [
                    {
                      type: 'text',
                      text: 'First item.',
                      version: 1,
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                    },
                  ],
                },
                {
                  type: 'text',
                  text: 'Second item.',
                  version: 1,
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                },
              ],
            },
          ],
        },
      },
    };

    render(<RichTextComponent lexicalData={listData.lexicalData} />);

    // Verifica se os itens da lista estão presentes
    expect(screen.getByText('First item.')).toBeInTheDocument();
    expect(screen.getByText('Second item.')).toBeInTheDocument();
  });
});
