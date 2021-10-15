import React from 'react';
import CarouselGif from './GIF';

const GIFItem = (props: any): JSX.Element => {
    // Il faut faire passer la proprieter onClick a fabItem car le compossant ne prend pas en compte onClick
    const { children, iconName, bg, onClick } = props;

    return (
        <div onClick={onClick} className="gif">
            <CarouselGif onGifClick={(gif, e) => {
                console.log("gif", gif);
                e.preventDefault();
                setModalGif(gif);
            }}
      />
            {modalGif && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, .8)"
                    }}
                    onClick={e => {
                        e.preventDefault();
                        setModalGif(undefined);
                    }}
                >
    
        </div>

    )
}

export default GIFItem;