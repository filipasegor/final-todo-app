import { createGlobalStyle } from 'styled-components';

import RooftopRegular from './RooftopRegular.otf';


export default createGlobalStyle`
    @font-face {
        font-family: 'Rooftop-Regular';
        src: local('Rooftop-Regular'), local('Rooftop-Regular'),
        url("./RooftopRegular.otf") format('opentype'),
        font-weight: normal;
    }
`
