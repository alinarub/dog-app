import LinkButton from "@/components/LinkButton";
import Headline from "@/components/Headline";
import ImageTextModule from "@/components/ImageTextModule";

export default function HomePage() {
  return (
    <div>
      <ImageTextModule />
      <Headline name="Find your dog" />
      <LinkButton fullwidth={true} href="/quiz-page" name="Start the quiz!" />
    </div>
  );
}
