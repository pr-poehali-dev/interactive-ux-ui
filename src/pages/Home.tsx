import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    path: "/law-allowed",
    number: "I",
    title: "Что закон разрешает, но мораль осуждает",
    description:
      "Законность — это минимум, а не идеал. Разбираем случаи, когда право молчит, а совесть говорит громко.",
  },
  {
    path: "/moral-required",
    number: "II",
    title: "Что мораль требует, а закон не обязывает",
    description:
      "Там, где нет ни статьи, ни санкции — есть долг. Примеры, когда мораль идёт дальше права.",
  },
  {
    path: "/conscience",
    number: "III",
    title: "Когда закон можно нарушить по совести",
    description:
      "История знает случаи, когда нарушитель оказывался на стороне справедливости. Как это возможно?",
  },
  {
    path: "/choice",
    number: "IV",
    title: "Как сделать выбор",
    description:
      "Практические шаги для принятия трудного решения, когда право и мораль расходятся.",
  },
  {
    path: "/survey",
    number: "↗",
    title: "Мини-опрос",
    description:
      "Четыре вопроса о том, как вы принимаете решения. Правильных ответов нет — есть только ваши.",
  },
];

export default function Home() {
  return (
    <PageLayout>
      <div className="max-w-3xl mb-16">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Образовательный проект
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
          Право и мораль
          <br />
          <span className="text-muted-foreground">в аспекте возможного</span>
        </h1>
        <p className="text-lg text-foreground/70 leading-relaxed mb-4">
          Мы живём в мире, где законы определяют границы дозволенного — но не правильного.
          Этот проект исследует пространство между нормой и ценностью: где они совпадают,
          где расходятся и что делать, когда приходится выбирать.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Здесь нет готовых ответов. Есть вопросы, примеры и инструменты для размышления.
          Для студентов, преподавателей и всех, кто задаётся вопросом: как поступить правильно?
        </p>
      </div>

      <div className="grid gap-px bg-border border border-border">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="group bg-card px-6 py-6 md:py-8 flex items-start gap-6 hover:bg-accent transition-colors duration-200"
          >
            <span className="text-2xl md:text-3xl font-bold text-border group-hover:text-muted-foreground transition-colors duration-200 shrink-0 w-10">
              {section.number}
            </span>
            <div className="flex-1">
              <h2 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
            </div>
            <span className="shrink-0 text-border group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 mt-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}