import styled, { css } from 'styled-components';

const StyledChannelCard = styled.div`

  .all-channels__card {
    border: none;
    width: 100px
  }

    .all-channels__card-header {
      align-items: center;
      background-color: #1F1D24;
      border: solid 1px #5A5A5D;
      border-radius: 5px;
      display: flex;
      height: 125px;
      padding: 12px;
    }
`;


@import "bourbon@5.*"
@import "neat@2.*"
@import url('https://fonts.googleapis.com/css?family=Montserrat:700')


body
background - color: beige
font - family: 'Montserrat', sans - serif
display: flex
justify - content: center
align - items: center
height: 100vh

  .shiny - btn
color: white
font - weight: bold
font - size: 2rem
text - decoration: none
text - transform: uppercase
padding: 40px 90px
background - color: #7681b9
transition: transform 500ms $ease -in -out - back, background - position 800ms $ease -in -out - back, box - shadow 500ms linear
background - image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   width="1296px" height="768px" viewBox="0 0 1296 768" enable-background="new 0 0 1296 768" xml:space="preserve"><g><polygon fill="#8694D1" points="766.6,1.2 -0.2,768 200.7,768 967.5,1.2   "/></g><g><polygon fill="#8694D1" points="1094.8,1.2 328,768 528.9,768 1295.7,1.2   "/></g></svg>')
background - size: contain
background - position: -200px center
background - repeat: no - repeat
box - shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  &: hover
transform: scale(1.1)
background - position: -60px
box - shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  &: active
transform: scale(1)
background - position: 500px
box - shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)

export default StyledChannelCard;

