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
import { Channel } from '../../../api/models';



const Show = (props: any): JSX.Element => {

    const [pattern, setPattern] = React.useState<string>("");
    const [channels2, setChannels] = React.useState<Channel[]>([]);
    
    const handleCSearch = (pattern: string): void => {
        setPattern(pattern);
        setChannels(Meteor.channels.find({
            name: { $regex: pattern, $options: 'i' }
        }, {
            sort: {
                name: 1
            }
        }).fetch())
    }
    
    return (
        <StyledShow>
            <div className="homepage-show">
                <HeaderBody
                    onSearch={handleCSearch}
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
        </StyledShow>
    )
}

export default Show;