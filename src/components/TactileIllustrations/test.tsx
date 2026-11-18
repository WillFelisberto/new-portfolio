import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  WorkbenchTape,
  TactileWire,
  TinyMLOscilloscope,
  EmptyStateProbeRobot,
  TactileNodeConnector,
  TactileJumperWire,
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
    it('renders tactile wire with default TEST POINT #01 label', () => {
      render(<TactileWire />);
      expect(screen.getByText('TEST POINT #01')).toBeInTheDocument();
    });

    it('renders tactile wire with custom label', () => {
      render(<TactileWire label="SIG: 3.3V" />);
      expect(screen.getByText('SIG: 3.3V')).toBeInTheDocument();
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
    it('renders the isometric probe robot SVG with default symbol', () => {
      const { container } = render(<EmptyStateProbeRobot />);
      expect(container.querySelector('svg')).toBeInTheDocument();
      expect(screen.getByText('?')).toBeInTheDocument();
    });

    it('renders with custom statusBadge and symbol', () => {
      render(
        <EmptyStateProbeRobot
          statusBadge="// NO SIGNALS DETECTED [RETRY PROBE]"
          symbol="✉"
        />,
      );
      expect(
        screen.getByText('// NO SIGNALS DETECTED [RETRY PROBE]'),
      ).toBeInTheDocument();
      expect(screen.getByText('✉')).toBeInTheDocument();
    });
  });

  describe('<TactileNodeConnector />', () => {
    it('renders top node connector SVG', () => {
      const { container } = render(
        <TactileNodeConnector position="top" color="lime" />,
      );
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    it('renders bottom node connector with pulsing indicator', () => {
      const { container } = render(
        <TactileNodeConnector position="bottom" color="violet" />,
      );
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('<TactileJumperWire />', () => {
    it('renders continuous jumper wire with optional label', () => {
      render(<TactileJumperWire color="violet" label="// BUS.01" />);
      expect(screen.getByText('// BUS.01')).toBeInTheDocument();
    });

    it('renders grounded termination lug when isLast is true', () => {
      render(<TactileJumperWire color="lime" isLast />);
      expect(screen.getByText('GND')).toBeInTheDocument();
    });
  });
});
