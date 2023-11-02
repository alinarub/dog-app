import LinkButton from "@/components/LinkButton";
import Headline from "@/components/Headline";
import ImageTextModule from "@/components/ImageTextModule";

export default function HomePage() {
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
    </>
  );
}
