'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Language } from "@/lib/i18n"

function FAQItem({ item, index }: { item: any; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!itemRef.current) return
      
      const rect = itemRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      setMousePosition({ x, y })
    }

    const item = itemRef.current
    if (item) {
      item.addEventListener('mousemove', handleMouseMove)
      item.addEventListener('mouseenter', () => setIsHovered(true))
      item.addEventListener('mouseleave', () => setIsHovered(false))
    }

    return () => {
      if (item) {
        item.removeEventListener('mousemove', handleMouseMove)
        item.removeEventListener('mouseenter', () => setIsHovered(true))
        item.removeEventListener('mouseleave', () => setIsHovered(false))
      }
    }
  }, [])

  return (
    <AccordionItem 
      ref={itemRef}
      key={index} 
      value={`item-${index}`} 
      className="relative rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-lg transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(224, 112, 32, 0.15), transparent 60%)`,
            opacity: 1,
            pointerEvents: 'none'
          }}
        />
      )}
      <AccordionTrigger className="px-6 hover:no-underline">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 text-muted-foreground">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  )
}

const faqItemsZh = [
  {
    question: 'PaperStation Browser 与其他浏览器有什么不同？',
    answer: 'PaperStation Browser 基于 Electron+Chromium 打造，专注于知识管理功能，拥有独特的知识捕获、智能总结和结构化导出功能，帮助用户在浏览过程中高效积累知识。'
  },
  {
    question: 'PaperStation Browser 支持哪些平台？',
    answer: '支持全平台，您可以在下载页面选择适合您系统的版本。'
  },
  {
    question: '如何使用知识捕获功能？',
    answer: '在浏览网页时，点击浏览器右上角的知识捕获按钮，或使用快捷键 Ctrl+Shift+C，系统会自动识别并提取页面中的重要信息，您可以对捕获的内容进行编辑和分类。'
  },
  {
    question: 'PaperStation Browser 的智能总结功能是如何工作的？',
    answer: '智能总结功能基于先进的自然语言处理技术，能够自动分析网页内容，提取关键信息并生成简洁的总结，帮助您快速理解页面主要内容。'
  },
  {
    question: '是否支持导入和导出知识内容？',
    answer: '是的，PaperStation Browser 支持多种格式的知识导出，包括 Markdown、PDF 和 JSON 等，您也可以导入其他知识库的内容到 PaperStation 中。'
  },
  {
    question: '浏览器的性能如何？',
    answer: 'PaperStation Browser 虽然添加了知识管理功能，但通过优化代码和资源使用，保持了与主流浏览器相当的性能表现，同时提供了更丰富的功能。'
  },
]

const faqItemsEn = [
  {
    question: 'How is PaperStation Browser different from other browsers?',
    answer: 'PaperStation Browser is built on Electron+Chromium and focuses on knowledge management features. It has unique knowledge capture, smart summarization, and structured export functions to help users efficiently accumulate knowledge while browsing.'
  },
  {
    question: 'What platforms does PaperStation Browser support?',
    answer: 'Supports all platforms, you can choose the version suitable for your system on the download page.'
  },
  {
    question: 'How to use the knowledge capture feature?',
    answer: 'While browsing web pages, click the knowledge capture button in the upper right corner of the browser, or use the shortcut Ctrl+Shift+C. The system will automatically identify and extract important information from the page, and you can edit and categorize the captured content.'
  },
  {
    question: 'How does the smart summarization feature work?',
    answer: 'The smart summarization feature is based on advanced natural language processing technology that can automatically analyze web page content, extract key information, and generate concise summaries to help you quickly understand the main content of the page.'
  },
  {
    question: 'Does it support importing and exporting knowledge content?',
    answer: 'Yes, PaperStation Browser supports knowledge export in multiple formats, including Markdown, PDF, and JSON. You can also import content from other knowledge bases into PaperStation.'
  },
  {
    question: 'How is the browser performance?',
    answer: 'Although PaperStation Browser has added knowledge management features, it maintains performance comparable to mainstream browsers through code and resource optimization, while providing richer features.'
  },
]

export function FAQSection({ lang }: { lang: Language }) {
  const safeLang = (lang === 'zh' || lang === 'en') ? lang : 'zh'
  const faqItems = safeLang === 'zh' ? faqItemsZh : faqItemsEn

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div data-aos="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{safeLang === 'zh' ? '常见问题' : 'FAQ'}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {safeLang === 'zh' ? '关于 PaperStation Browser 的常见问题解答' : 'Frequently asked questions about PaperStation Browser'}
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}