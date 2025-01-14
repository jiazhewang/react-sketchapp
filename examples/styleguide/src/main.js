import * as React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';

const Document = ({ system }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        This is an example react-sketchapp document, showing how to render a styleguide from a data
        representation of your design system.
      </Label>
    </View>

    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen key={name} name={name} style={TextStyles.get(name)} />
      ))}
    </Section>

    <Section title="Color Palette">
      <Palette colors={system.colors} />
    </Section>
  </View>
);

export default () => {
  TextStyles.create(designSystem.fonts, {
    clearExistingStyles: true,
  });

  render(<Document system={designSystem} />, context.document.currentPage());
};
