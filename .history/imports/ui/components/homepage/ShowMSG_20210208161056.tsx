import React from 'react';
import { Meteor } from 'meteor/meteor';
import HeaderBody from './HeaderBody';
import Cards from './Cards';
import ChannelSlider from './ChannelSlider';
import Footer from './Footer';

import StyledCards from '../../elements/homepage/StyledCards';
import StyledChannelCard from '../../elements/homepage/StyledChannelCard';
import StyledChannelSlider from '../../elements/homepage/StyledChannelSlider';
import StyledSlider from '../../elements/homepage/StyledSliders';
import StyledShow from '../../elements/homepage/StyledShow';



const ShowMSG = (props: any): JSX.Element => {
    return (
        <StyledShowMSG>
            <div className="homepage-show">
                <HeaderBody
                //onSearch={handleCSearch}
                />
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
        </StyledShowMSG>
    )
}

export default ShowMSG;