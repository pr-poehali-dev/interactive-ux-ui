import PageLayout from "@/components/PageLayout";
import { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Вы видите, что коллега систематически опаздывает, хотя формально это не нарушает трудовой договор. Как вы поступите?",
    options: [
      "Промолчу — это не моё дело, закон не нарушен",
      "Поговорю с ним лично — это некрасиво",
      "Скажу руководителю — пусть разбирается",
      "Зависит от обстоятельств",
    ],
  },
  {
    id: 2,
    text: "Если закон несправедлив — нужно ли его соблюдать?",
    options: [
      "Да, всегда — иначе наступит хаос",
      "Нет, несправедливый закон не обязывает",
      "Зависит от степени несправедливости",
      "Надо менять закон, а не нарушать",
    ],
  },
  {
    id: 3,
    text: "Что для вас важнее при принятии решения в спорной ситуации?",
    options: [
      "Что говорит закон",
      "Что скажут люди",
      "Что подсказывает совесть",
      "Что выгоднее для меня",
    ],
  },
  {
    id: 4,
    text: "Как вы относитесь к людям, нарушившим закон из моральных соображений (например, укрывавшим преследуемых)?",
    options: [
      "Они герои, несмотря ни на что",
      "Правы по сути, но закон важнее",
      "Каждый случай надо рассматривать отдельно",
      "Нарушение закона никогда нельзя оправдать",
    ],
  },
];

export default function Survey() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <PageLayout>
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Спасибо за участие!</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Ваши ответы сохранены. Этот опрос не имеет правильных ответов —
            он помогает задуматься о том, как вы принимаете решения на стыке права и морали.
          </p>
          <div className="bg-card border border-border rounded-sm p-6 text-left mb-8">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Ваши ответы</h2>
            {questions.map((q) => (
              <div key={q.id} className="mb-4 last:mb-0">
                <p className="text-sm font-semibold text-foreground mb-1">{q.text}</p>
                <p className="text-sm text-muted-foreground">→ {answers[q.id]}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setSubmitted(false); setAnswers({}); }}
            className="bg-foreground text-background px-6 py-3 text-sm uppercase tracking-wide hover:opacity-80 transition-opacity duration-200"
          >
            Пройти ещё раз
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Мини-опрос</p>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
          Как вы принимаете решения?
        </h1>
        <p className="text-lg text-foreground/70 leading-relaxed mb-10">
          Четыре вопроса о том, как вы действуете, когда право и мораль расходятся.
          Правильных ответов нет — есть только ваши.
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-3xl">
        {questions.map((question) => (
          <div key={question.id} className="border border-border rounded-sm p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Вопрос {question.id} из {questions.length}
            </p>
            <p className="text-base md:text-lg font-semibold text-foreground mb-5">
              {question.text}
            </p>
            <div className="flex flex-col gap-3">
              {question.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(question.id, option)}
                  className={`text-left px-4 py-3 border text-sm transition-all duration-200 rounded-sm ${
                    answers[question.id] === option
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:border-muted-foreground"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`mt-2 px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-200 ${
            allAnswered
              ? "bg-foreground text-background hover:opacity-80 cursor-pointer"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {allAnswered ? "Отправить ответы" : `Ответьте на все вопросы (${Object.keys(answers).length}/${questions.length})`}
        </button>
      </div>
    </PageLayout>
  );
}