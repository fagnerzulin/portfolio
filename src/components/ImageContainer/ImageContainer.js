import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Container, Image, SocialMedias } from './imageContainer.styled';
import image from '../../image/perfil.jpeg';

export default function ImageContainer() {
  return (
    <Container>
      <Image src={image} />
      <SocialMedias>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </SocialMedias>
    </Container>
  );
}
