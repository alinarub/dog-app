import QuizForm from "@/components/QuizForm";
import ImageTextModule from "@/components/ImageTextModule";

export default function QuizPage({ handleSubmit }) {
  return (
    <>
      <ImageTextModule showImage={false}>
        Answer the following questions and the genie will let you know which dog
        fits to you.
      </ImageTextModule>
      <QuizForm onSubmit={handleSubmit} />
    </>
  );
}
