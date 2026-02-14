import { use } from 'react'
import { AlertTriangle, Bug, Zap, RefreshCw } from 'lucide-react'
import type { Language } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ExtensionErrorEffects } from '@/components/extension-error-effects'

export async function generateStaticParams() {
  return [
    { lang: 'zh' },
    { lang: 'en' }
  ]
}

export default function ExtensionErrorPage({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params) // 使用 React.use() 解包 Promise

  const t = {
    zh: {
      title: '糟了！我们掉进陷阱里了！',
      subtitle: '你的浏览器扩展挖了个坑，我们掉进去了！',
      errorType: '错误类型',
      errorMessage: '错误信息',
      problemSource: '问题来源',
      howToFix: '如何爬出这个坑？',
      solution1: '暂时禁用这个浏览器扩展',
      solution2: '刷新页面试试',
      solution3: '如果还是不行，试试用隐私模式访问',
      humorTip: '别担心，这不是 PaperStation 的错，是你的浏览器扩展太调皮了！',
      backHome: '回到首页'
    },
    en: {
      title: 'Oops! We fell into a trap!',
      subtitle: 'Your browser extension dug a hole and we fell into it!',
      errorType: 'Error Type',
      errorMessage: 'Error Message',
      problemSource: 'Problem Source',
      howToFix: 'How to get out of this trap?',
      solution1: 'Temporarily disable this browser extension',
      solution2: 'Try refreshing the page',
      solution3: 'If that doesn\'t work, try accessing in incognito mode',
      humorTip: "Don't worry, this isn't PaperStation's fault - your browser extension is just being naughty!",
      backHome: 'Back to Home'
    }
  }[lang] || {
    title: 'Oops! We fell into a trap!',
    subtitle: 'Your browser extension dug a hole and we fell into it!',
    errorType: 'Error Type',
    errorMessage: 'Error Message',
    problemSource: 'Problem Source',
    howToFix: 'How to get out of this trap?',
    solution1: 'Temporarily disable this browser extension',
    solution2: 'Try refreshing the page',
    solution3: 'If that doesn\'t work, try accessing in incognito mode',
    humorTip: "Don't worry, this isn't PaperStation's fault - your browser extension is just being naughty!",
    backHome: 'Back to Home'
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ExtensionErrorEffects />
      <Navbar lang={lang} />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl mx-auto">
            {/* 错误头部 */}
            <div className="bg-red-50 border border-red-200 p-8 rounded-2xl mb-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <AlertTriangle className="h-16 w-16 text-red-500" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
                {t.title}
              </h1>
              <p className="text-center text-red-500 text-xl mb-6">
                {t.subtitle}
              </p>
            </div>

            {/* 错误详情 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-8">
              <div className="flex items-start mb-6">
                <Bug className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{t.errorType}</h2>
                  <p className="text-gray-600 text-lg">Runtime TypeError</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Zap className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{t.errorMessage}</h2>
                  <p className="text-gray-600 font-mono text-sm bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    'deleteProperty' on proxy: trap returned falsish for property '__tm_start'
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <AlertTriangle className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">{t.problemSource}</h2>
                  <p className="text-gray-600 text-lg">
                    {lang === 'zh' ? '浏览器扩展脚本（如 Tampermonkey、油猴等用户脚本管理器）' : 'Browser extension scripts (like Tampermonkey userscript managers)'}
                  </p>
                </div>
              </div>
            </div>

            {/* 解决方案 */}
            <div className="bg-green-50 rounded-xl p-8 border border-green-200 mb-8">
              <h2 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
                <RefreshCw className="h-6 w-6 mr-3" /> {t.howToFix}
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                  <span className="text-lg">{t.solution1}</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                  <span className="text-lg">{t.solution2}</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                  <span className="text-lg">{t.solution3}</span>
                </li>
              </ul>
            </div>

            {/* 幽默提示 */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg mb-8">
                {t.humorTip}
              </p>
              <a 
                href={`/${lang}`} 
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
              >
                <RefreshCw className="h-5 w-5" />
                {t.backHome}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  )
}