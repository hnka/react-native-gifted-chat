import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

export default class MessageAudio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onPressPlay(this.props.currentMessage)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'purple'
  }
});

MessageAudio.defaultProps = {
  currentMessage: {
    audio: null,
  },
  containerStyle: {}
};

MessageAudio.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  onPressPlay: React.PropTypes.func
};
