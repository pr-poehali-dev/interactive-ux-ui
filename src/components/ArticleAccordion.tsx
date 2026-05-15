import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

interface Article {
  title: string;
  summary: string;
  content: string;
}

interface ArticleAccordionProps {
  articles: Article[];
}

export default function ArticleAccordion({ articles }: ArticleAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4 mt-8">
      {articles.map((article, index) => (
        <div key={index} className="border border-neutral-200 rounded-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-start gap-4 px-6 py-5 text-left bg-white hover:bg-neutral-50 transition-colors duration-200"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Пример</p>
              <h3 className="text-base md:text-lg font-semibold text-neutral-900">{article.title}</h3>
              <p className="text-sm text-neutral-500 mt-1">{article.summary}</p>
            </div>
            <span className="shrink-0 mt-1 text-neutral-400">
              <Icon name={openIndex === index ? "ChevronUp" : "ChevronDown"} size={20} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 text-neutral-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {article.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
