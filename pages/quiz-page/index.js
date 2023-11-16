import QuizForm from "@/components/QuizForm";
import ImageTextModule from "@/components/ImageTextModule";
import QuizFormMultiStep from "@/components/QuizFormMultiStep";

export default function QuizPage({ handleSubmit }) {
  return (
    <>
      <ImageTextModule>
        Answer the following questions and the genie will let you know which dog
        fits to you.
      </ImageTextModule>

      <QuizFormMultiStep />
      {/* <QuizForm onSubmit={handleSubmit} /> */}
    </>
  );
}
