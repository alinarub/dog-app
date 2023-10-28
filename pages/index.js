import LinkButton from "@/components/LinkButton";
import Headline from "@/components/Headline";
import ImageTextModule from "@/components/ImageTextModule";

export default function HomePage() {
  return (
    <div>
      <ImageTextModule>
        I am the dog genie and I will help you to find the right dog for you.
        First let us take a short quiz!
      </ImageTextModule>
      <Headline>Find your dog</Headline>
      <LinkButton fullwidth={true ? 1 : 0} href="/quiz-page">
        Start the quiz
      </LinkButton>
    </div>
  );
}
