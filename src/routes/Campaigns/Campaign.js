import React from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Body, Text, H2 } from 'native-base';

const Campaign = () => (
  <Card>
    <CardItem style={{padding: 0}}>
      <Body style={{padding: 0}}>
        <Image
          source={{uri: 'http://cdn2.tstatic.net/kupang/foto/bank/images/tenun-ikat-alor.jpg'}}
          style={{width: '100%', height: 200, resizeMode: 'cover'}}
        />
      <View style={{padding: 10}}>
        <H2 style={{color: '#EB9532'}}>Batik Tenun Project</H2>
        <Text>
            Lorem Ipsum 232
        </Text>
      </View>
      </Body>
    </CardItem>
  </Card>
);

export default Campaign;
