'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`rounded-xl border bg-card overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-brand/40 shadow-lg shadow-brand/5"
                : "border-border hover:border-brand/20 hover:shadow-md"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left group"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 text-sm font-medium text-white group-hover:text-brand transition-colors duration-200">
                <HelpCircle className={`h-4 w-4 shrink-0 transition-colors duration-200 ${
                  isOpen ? "text-brand" : "text-muted-foreground"
                }`} />
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'rotate-180 text-brand'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-4 pl-12 text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
