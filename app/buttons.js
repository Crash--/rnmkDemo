/**
 * Created by ywu on 15/7/16.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native'
const MK = require('react-native-material-kit');
const appStyles = require('./styles');


const {
  MKButton,
  MKColor,
} = MK;

// customize the material design theme
// MK.setTheme({
//   primaryColor: MKColor.Teal,
//   accentColor: MKColor.Purple,
// });

const styles = Object.assign({}, appStyles, StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  fab: {
    // width: 200,
    // height: 200,
    // borderRadius: 100,
  },
}));

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();
const AccentColoredRaisedButton = MKButton.accentColoredButton()
  .build();
const PlainRaisedButton = MKButton.button()
  .withText('BUTTON')
  .build();
const FlatButton = MKButton.flatButton()
  .withText('BUTTON')
  .build();
const ColoredFlatButton = MKButton.coloredFlatButton()
  .withText('BUTTON')
  .build();
const AccentColoredFlatButton = MKButton.accentColoredFlatButton()
  .withText('BUTTON')
  .build();

const ColoredFab = MKButton.coloredFab()
  .withStyle(styles.fab)
  .build();
const AccentColoredFab = MKButton.accentColoredFab()
  .withStyle(styles.fab)
  .build();
const PlainFab = MKButton.plainFab()
  .withStyle(styles.fab)
  .build();

const Buttons = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <PlainRaisedButton/>
            <Text style={styles.legendLabel}>Raised button</Text>
          </View>
          <View style={styles.col}>
            <ColoredRaisedButton/>
            <Text style={styles.legendLabel}>Colored</Text>
          </View>
          <View style={styles.col}>
            <AccentColoredRaisedButton disabled={true}>
              <Text pointerEvents="none" style={styles.buttonText}>BUTTON</Text>
            </AccentColoredRaisedButton>
            <Text style={styles.legendLabel}>Accent colored</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <PlainFab>
              <Image pointerEvents="none" source={require('../img/plus_dark.png')} />
            </PlainFab>
            <Text style={styles.legendLabel}>Plain FAB</Text>
          </View>
          <View style={styles.col}>
            <ColoredFab>
              <Image pointerEvents="none" source={require('../img/plus_white.png')} />
            </ColoredFab>
            <Text style={styles.legendLabel}>Colored</Text>
          </View>
          <View style={styles.col}>
            <AccentColoredFab>
              <Image pointerEvents="none" source={require('../img/plus_white.png')} />
            </AccentColoredFab>
            <Text style={styles.legendLabel}>Accent colored</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <FlatButton/>
            <Text style={styles.legendLabel}>Flat button</Text>
          </View>
          <View style={styles.col}>
            <ColoredFlatButton/>
            <Text style={styles.legendLabel}>Colored</Text>
          </View>
          <View style={styles.col}>
            <AccentColoredFlatButton/>
            <Text style={styles.legendLabel}>Accent colored</Text>
          </View>
        </View>
      </ScrollView>
    );
  },
});

module.exports = Buttons;
