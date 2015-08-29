'use strict';

var React = require('react-native');
var Nj18R52 = require('./Nj18R52.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'bookmarks'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view7Tabbarios8]}
        >
        <TabBarIOS.Item 
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'bookmarks'}
        onPress={() => {
          this.setState({
            selectedTab: 'bookmarks',
          });
        }}>
        <Nj18R52 />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='downloads'
        selected={this.state.selectedTab === 'downloads'}
        onPress={() => {
          this.setState({
            selectedTab: 'downloads',
          });
        }}>
        <Nj18R52 />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view7Tabbarios8:{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 
});
