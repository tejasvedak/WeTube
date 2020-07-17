import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='CarryisLive' broadcasting/>
        <Subscription label='BeerBiceps' amountNewVideos={10}/>
        <Subscription label='CarryMinati' amountNewVideos={17}/>
        <Subscription label='Be Younick' amountNewVideos={8}/>
        <Subscription label='ashish chanchlani vines' amountNewVideos={7}/>
        <Divider/>
      </React.Fragment>
    );
  }
}