import QuizForm from "@/components/QuizForm";
import IntroText from "@/components/IntroText";
import ImageTextModule from "@/components/ImageTextModule";

export default function QuizPage({ handleSubmit }) {
  return (
    <div>
      <ImageTextModule showimage={false}>
        Answer the following questions and the genie will let you know which dog
        fits to you.
      </ImageTextModule>
      <QuizForm onSubmit={handleSubmit} />
    </div>
  );
}
