import * as React from 'react';
import { View, Image } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { Colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { FontSizes, Sizes } from '../../theme/sizes';
// TODO: create BText component
import { Text as BText } from './Text';
import { transactionIcons, actionIcons } from '../../../assets/icons';

interface Props {
  value: any;
  items: Array<SelectItem<any>>
  title?: string;
  rightElement?: React.ReactNode;
  onChange: (value: any) => void;
  placeholder?: string;
}

export interface SelectItem<T> extends Item {
  value: T;
}

const defaultStyles: any = {
  fontSize: FontSizes.MEDIUM,
  fontFamily: fonts.noto,
  letterSpacing: -1,
  fontWeight: '500',
  color: Colors.WHITE,
  borderColor: Colors.BLUE,
  borderWidth: 1,
  backgroundColor: Colors.BLACK,
  padding: Sizes.MEDIUM,
  shadowColor: Colors.BLACK,
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3
};

const styles: any = {
  wrapper: {
    marginBottom: Sizes.MEDIUM
  },
  inputIOS: {
    ...defaultStyles
  },
  inputAndroid: {
    ...defaultStyles
  },
  iconContainer: {
    top: 0,
    bottom: 0,
    right: Sizes.MEDIUM,
    height: '100%',
    paddingVertical: Sizes.MEDIUM
  },
  placeholder: {
    color: Colors.GREY_LIGHT
  },
  chevron: {
    width: 25,
    height: 25,
    marginTop: 3
  }
};

export class BSelect extends React.PureComponent<Props> {
  render () {
    const { rightElement, items, value, title, placeholder = '' } = this.props;
    const placeholderObject = {
      value: null,
      label: placeholder
    };

    return (
      <View style={styles.wrapper}>
        {title ? (
          <BText size={FontSizes.SMALL} color={Colors.WHITE}>{title}</BText>
        ) : null}
        <RNPickerSelect
          onValueChange={this.props.onChange}
          items={items}
          value={value}
          style={styles}
          placeholder={placeholderObject}
          Icon={rightElement ? rightElement : () => {
            return <Image source={actionIcons.chevronDown} style={styles.chevron} />;
          }}
        />
      </View>
    );
  }
}
