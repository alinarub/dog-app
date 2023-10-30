import LinkButton from "@/components/LinkButton";
import Headline from "@/components/Headline";
import ImageTextModule from "@/components/ImageTextModule";

export default function HomePage() {
  return (
    <>
      <ImageTextModule showImage>
        Welcome, child! As a genie of knowledge and guidance, I am here to
        assist you in your quest to find the perfect canine companion.
        Let&apos;s embark on this magical journey together!
      </ImageTextModule>
      <Headline>Find your dog</Headline>
      <LinkButton $fullwidth href="/quiz-page">
        Start the quiz
      </LinkButton>
    </>
  );
}
