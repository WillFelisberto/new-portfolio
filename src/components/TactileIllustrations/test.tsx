import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  WorkbenchTape,
  TactileWire,
  TinyMLOscilloscope,
  EmptyStateProbeRobot,
} from './index';

describe('TactileIllustrations', () => {
  describe('<WorkbenchTape />', () => {
    it('renders tape without label', () => {
      const { container } = render(<WorkbenchTape color="coral" />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders tape with custom label and angle', () => {
      render(<WorkbenchTape color="lime" label="// QA TEST" angle={5} />);
      expect(screen.getByText('// QA TEST')).toBeInTheDocument();
    });
  });

  describe('<TactileWire />', () => {
    it('renders horizontal curved variant with label', () => {
      render(<TactileWire label="SIG: 3.3V" />);
      expect(screen.getByText('SIG: 3.3V')).toBeInTheDocument();
    });

    it('renders vertical drape variant', () => {
      const { container } = render(<TactileWire variant="vertical-drape" />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('<TinyMLOscilloscope />', () => {
    it('renders oscilloscope with initial sine mode and toggles on click', () => {
      render(<TinyMLOscilloscope />);
      expect(
        screen.getByText(/EDGE AI \/\/ ESP32-S3 LAB/i),
      ).toBeInTheDocument();
      expect(screen.getByText('RUN: 14FPS')).toBeInTheDocument();

      const region = screen.getByRole('region', {
        name: /tinyml oscilloscope simulator/i,
      });
      fireEvent.click(region);

      expect(screen.getByText('TRIG: OK')).toBeInTheDocument();
    });
  });

  describe('<EmptyStateProbeRobot />', () => {
    it('renders the isometric probe robot SVG', () => {
      const { container } = render(<EmptyStateProbeRobot />);
      expect(container.querySelector('svg')).toBeInTheDocument();
      expect(screen.getByText('?')).toBeInTheDocument();
    });
  });
});
