import QuizForm from "@/components/QuizForm";
import IntroText from "@/components/IntroText";

export default function QuizPage({ handleSubmit }) {
  return (
    <div>
      <IntroText />
      <QuizForm onSubmit={handleSubmit} />
    </div>
  );
}
