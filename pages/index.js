import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import LinkButton from "@/components/LinkButton";
import Headline from "@/components/Headline";
import ImageTextModule from "@/components/ImageTextModule";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function HomePage() {
  const { data: dogs, isLoading } = useSWR(`/api/dogs`);

  if (!dogs || isLoading) {
    return <LoadingSpinner />;
  }

  const randomNumber = Math.floor(Math.random() * dogs.length);
  const randomDog = dogs[randomNumber];
  return (
    <>
      <ImageTextModule $showImage>
        Welcome, child! As a genie of knowledge and guidance, I am here to
        assist you in your quest to find the perfect canine companion.
      </ImageTextModule>
      <Headline> Start your journey!</Headline>
      <LinkButton $fullWidth href="/quiz-page">
        Let&apos;s begin
      </LinkButton>
      <Headline>Dog of the moment</Headline>
      <StyledLink href={`dogs/${randomDog.name}`}>
        <div>
          <StyledFigure>
            <StyledImage
              src={randomDog.image_link}
              alt={`Image of ${randomDog.name}`}
              width={256}
              height={171}
              blurDataURL="data:..."
              placeholder="blur" // Optional blur-up while loading
            />
          </StyledFigure>
        </div>
        <StyledParagraph>{randomDog.name}</StyledParagraph>
      </StyledLink>
    </>
  );
}

const StyledImage = styled(Image)`
  border-radius: var(--borderradius-medium);
  outline: 2px solid var(--primary-color);
  outline-offset: 0.5rem;
  margin: auto;
  margin-top: 2rem;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: var(--font-color);
`;

const circle = keyframes`
  0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      width: 120%;
      height: 120%;
      opacity: 0;
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);

  &:hover figure::before {
    animation: ${circle} 0.5s;
  }

  figure::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: block;
    content: "";
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

const StyledFigure = styled.figure`
  position: relative;
`;
