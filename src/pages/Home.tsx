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
      "Десять вопросов о том, как вы принимаете решения. Правильных ответов нет — есть только ваши.",
  },
];

const LIBRARY_IMG = "https://cdn.poehali.dev/projects/d025cd0a-d46e-49be-9499-9ed6cb03d959/files/e18b2f90-3d61-4b7f-82f3-24f7c633f032.jpg";
const SEA_IMG = "https://cdn.poehali.dev/projects/d025cd0a-d46e-49be-9499-9ed6cb03d959/files/be3f7ade-c4b7-434c-9a9d-19707c30acd5.jpg";
const BLONDE_IMG = "https://cdn.poehali.dev/projects/d025cd0a-d46e-49be-9499-9ed6cb03d959/files/50c0df7b-d9bd-48be-a90d-00a19b94b306.jpg";
const PATTERN_IMG = "https://cdn.poehali.dev/projects/d025cd0a-d46e-49be-9499-9ed6cb03d959/files/e93ab21b-c4b5-4b5e-a9d5-10ee1942b50b.jpg";

export default function Home() {
  return (
    <PageLayout>
      {/* Декоративный узор — верхний правый угол */}
      <div className="relative">
        <div
          className="absolute -top-12 -right-6 w-64 h-64 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${PATTERN_IMG})`, backgroundSize: "cover", borderRadius: "50%" }}
        />
      </div>

      {/* Hero-блок с библиотекой */}
      <div className="relative mb-16 overflow-hidden rounded-sm">
        <img
          src={LIBRARY_IMG}
          alt="Уютная розовая библиотека"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-2">Образовательный проект</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Право и мораль
            <br />
            <span className="text-white/70">в аспекте возможного</span>
          </h1>
        </div>
      </div>

      {/* Описание + девушка из «Блондинка в законе» */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <p className="text-lg text-foreground/70 leading-relaxed mb-4">
            Мы живём в мире, где законы определяют границы дозволенного — но не правильного.
            Этот проект исследует пространство между нормой и ценностью: где они совпадают,
            где расходятся и что делать, когда приходится выбирать.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Здесь нет готовых ответов. Есть вопросы, примеры и инструменты для размышления.
            Для подростков, студентов и всех, кто задаётся вопросом: как поступить правильно?
          </p>
        </div>
        <div className="relative">
          <img
            src={BLONDE_IMG}
            alt="Уверенная девушка с книгой о праве"
            className="w-full h-72 object-cover rounded-sm"
          />
          {/* Декоративная рамка */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-border rounded-sm pointer-events-none" />
        </div>
      </div>

      {/* Список разделов */}
      <div className="grid gap-px bg-border border border-border mb-16">
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

      {/* Море + вдохновляющая цитата */}
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={SEA_IMG}
          alt="Спокойное розовое море"
          className="w-full h-56 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <blockquote className="text-white text-center text-xl md:text-3xl font-light italic leading-snug max-w-2xl">
            «Действуй только так, как если бы правило твоего действия могло стать всеобщим законом»
            <footer className="text-white/60 text-sm font-normal not-italic mt-3">— Иммануил Кант</footer>
          </blockquote>
        </div>
      </div>
    </PageLayout>
  );
}
