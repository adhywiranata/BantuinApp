import React from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Body, Text, H2, Icon, Button } from 'native-base';

const Campaign = props => (
  <Card>
    <CardItem style={{padding: 0}}>
      <Body style={{padding: 0}}>
        <Image
          source={{uri: props.photo }}
          style={{width: '100%', height: 130, resizeMode: 'cover'}}
        />
      <View style={{padding: 10}}>
        <View style={{width: '90%'}}>
          <Text style={{color: '#666666', fontSize: 14, }}>{props.user}</Text>
          <H2 style={{color: '#353535', marginTop: 10, fontSize: 18,}}>
            {props.title}
          </H2>
          <Text style={{color: '#666666', fontSize: 12, }}>
            Didukung oleh <Icon name="person" style={{fontSize: 12, color: '#333'}} /> 120 orang
          </Text>
        </View>
      </View>

      <View style={{width: '100%', padding: 10}}>
        <View style={{
            width: '100%',
            height: 6,
            borderRadius: 8,
            marginTop: 0,
            marginBottom: 10,
            padding: 0,
            backgroundColor: '#DDD'}}>
            <View style={{
                position: 'absolute',
                width: (props.obtained * 100 / props.target) + '%',
                height: 6,
                borderRadius: 8,
                backgroundColor: 'teal'}}>
            </View>
        </View>

        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
          <Text style={{color: '#666666', fontSize: 12, }}>
            <Icon name="paper-plane" style={{fontSize: 16, color: 'teal'}}/> tercapai Rp. {props.obtained.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
          </Text>
          <Text style={{color: '#666666', fontSize: 12, fontWeight: 'bold'}}>
             <Icon name="trophy" style={{fontSize: 16, color: 'gold'}}/> Rp. {props.target.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
          </Text>
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: '#rgba(0, 0, 0, 0.1)', marginTop: 10, marginBottom: 5,}}></View>
        <Text style={{color: '#666666', fontSize: 12,}}>
            {props.description}
        </Text>
      </View>
      <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Button block style={{margin: '2.5%', width: '45%', backgroundColor: 'teal'}}>
          <Text>Saya mau Dukung</Text>
        </Button>
        <Button block style={{margin: '2.5%', width: '45%', backgroundColor: 'darkgrey'}}>
          <Text>
            Bookmark
          </Text>
        </Button>
      </View>
      </Body>
    </CardItem>
  </Card>
);

export default Campaign;
