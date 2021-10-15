import React from 'react';
import { Meteor } from 'meteor/meteor';
import HeaderBody from './HeaderBody';
import Cards from './Cards';
import ChannelSlider from './ChannelSlider';
import StyledCards from '../../elements/homepage/StyledCards';
import StyledChannelCard from '../../elements/homepage/StyledChannelCard';
import StyledChannelSlider from '../../elements/homepage/StyledChannelSlider';
import StyledSlider from '../../elements/homepage/StyledSliders';
import StyledShow from '../../elements/homepage/StyledShow';
import { Channel } from '../../../api/models';
import { ChannelsCollection } from '../../../api/channels';



const Show = (props: any): JSX.Element => {

    
    return (
        <StyledShow>
            <div className="homepage-show">
                <HeaderBody />
                <StyledChannelSlider>
                    <StyledSlider>
                        <ChannelSlider />
                    </StyledSlider>
                </StyledChannelSlider>
                <StyledCards>
                    <StyledChannelCard>
                        <Cards />
                    </StyledChannelCard>
                </StyledCards>
            </div>
        </StyledShow>
    )
}

export default Show;