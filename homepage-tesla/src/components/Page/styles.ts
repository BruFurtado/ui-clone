import styled from 'styled-components';
import Img1 from '../../assets/images/image1.jpg'
import Img2 from '../../assets/images/image2.jpg'
import Img3 from '../../assets/images/image3.jpg'
import Img4 from '../../assets/images/image4.jpg'
import Img5 from '../../assets/images/image5.jpg'
import Img6 from '../../assets/images/image6.jpg'
import Img7 from '../../assets/images/image7.jpg'

export const Container = styled.div`
    .colored:nth-child(1) {
        background-image: url(${Img1});
        background-repeat: round;
    }
    .colored:nth-child(2) {
        background-image: url(${Img2});
        background-repeat: round;
    }
    .colored:nth-child(3) {
        background-image: url(${Img3});
        background-repeat: round;
    }
    .colored:nth-child(4) {
        background-image: url(${Img4});
        background-repeat: round;
    }
    .colored:nth-child(5) {
        background-image: url(${Img5});
        background-repeat: round;
    }
    .colored:nth-child(6) {
        background-image: url(${Img6});
        background-repeat: round;
    }
    .colored:nth-child(7) {
        background-image: url(${Img7});
        background-repeat: round;
    }
`;

export const Spacer = styled.div`
    height: 15vh;
    background: #000;
`;
