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
    text: "В классном чате кто-то выложил мем, высмеивающий одноклассника. Все смеются. Что ты делаешь?",
    options: [
      "Ставлю лайк — смешно же, ничего страшного",
      "Молчу — не хочу проблем, но мне неприятно",
      "Пишу в личку тому, кого высмеяли — проверяю, как он",
      "Прошу в чате удалить — это унизительно",
    ],
  },
  {
    id: 2,
    text: "Друг просит дать списать домашнюю работу перед уроком. Если не дашь — обидится. Что важнее?",
    options: [
      "Дружба — помогу, это же мелочь",
      "Честность — дам подсказку, но не готовый ответ",
      "Его развитие — объясню, что так он ничему не научится",
      "Правила — списывать нечестно, откажу",
    ],
  },
  {
    id: 3,
    text: "Ты случайно узнал, что твой одноклассник планирует сбежать из дома. Ему плохо дома, но он просит молчать. Как поступишь?",
    options: [
      "Буду молчать — он мне доверился",
      "Попробую сам помочь и уговорить остаться",
      "Сообщу взрослому, которому он доверяет — даже если обидится",
      "Не знаю, это слишком сложно",
    ],
  },
  {
    id: 4,
    text: "В школьном туалете ты видишь, как старшеклассник отбирает деньги у младшего. Что сделаешь?",
    options: [
      "Пройду мимо — не моя проблема, я сам могу пострадать",
      "Сниму на видео — пусть знают, что это зафиксировано",
      "Сразу скажу учителю или взрослому рядом",
      "Подойду и вмешаюсь лично",
    ],
  },
  {
    id: 5,
    text: "Тебе написал незнакомый человек в соцсетях — просит прислать фото. Он кажется приятным и ровесником. Что важнее всего в этой ситуации?",
    options: [
      "Быть вежливым — неудобно отказывать",
      "Своя безопасность — лучше не рисковать",
      "Доверие своей интуиции — если что-то не так, это важный сигнал",
      "Сначала убедиться, что это реальный человек",
    ],
  },
  {
    id: 6,
    text: "Ты знаешь, что учитель несправедливо поставил плохую оценку твоему другу. Друг расстроен, но ничего не делает. Что ты сделаешь?",
    options: [
      "Ничего — это не моё дело",
      "Посоветую другу самому поговорить с учителем",
      "Предложу пойти вместе — поддержу его",
      "Сам поговорю с учителем или родителями друга",
    ],
  },
  {
    id: 7,
    text: "Твои друзья договорились не разговаривать с одним человеком из класса — «просто так», без объяснений. Тебя зовут присоединиться. Что сделаешь?",
    options: [
      "Присоединюсь — не хочу выпасть из компании",
      "Не буду участвовать в бойкоте, но и защищать его не стану",
      "Продолжу общаться с ним как обычно",
      "Спрошу у друзей, почему так — и попробую это остановить",
    ],
  },
  {
    id: 8,
    text: "Если закон несправедлив — что правильнее делать?",
    options: [
      "Всё равно соблюдать — иначе будет хаос",
      "Нарушать его, если он действительно несправедлив",
      "Добиваться его изменения законными способами",
      "Зависит от того, насколько он несправедлив",
    ],
  },
  {
    id: 9,
    text: "Ты случайно разбил телефон друга, пока он отошёл. Никто не видел. Что сделаешь?",
    options: [
      "Промолчу — может, он не заметит или решит, что сам сломал",
      "Скажу правду сразу — даже если это неприятно",
      "Попробую незаметно починить или заменить",
      "Признаюсь, только если он спросит напрямую",
    ],
  },
  {
    id: 10,
    text: "Что для тебя важнее всего, когда нужно принять трудное решение?",
    options: [
      "Что думают друзья и близкие",
      "Что говорят правила или закон",
      "Что подсказывает моя совесть",
      "Что будет выгоднее для меня в итоге",
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