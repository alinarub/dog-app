import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
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
        <StyledImage
          src={randomDog.image_link}
          alt={`Image of ${randomDog.name}`}
          width={256}
          height={171}
          blurDataURL="data:..."
          placeholder="blur" // Optional blur-up while loading
        />
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);
`;
