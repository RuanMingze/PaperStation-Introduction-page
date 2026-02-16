import { use } from 'react'
import { AlertTriangle, Bug, Zap, RefreshCw } from 'lucide-react'
import type { Language } from '@/lib/i18n'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ExtensionErrorEffects } from '@/components/extension-error-effects'

export async function generateStaticParams() {
  return [
    { lang: 'zh' },
    { lang: 'en' },
    { lang: 'ja' },
    { lang: 'ko' },
    { lang: 'es' },
    { lang: 'fr' },
    { lang: 'de' },
    { lang: 'ru' },
    { lang: 'pt' },
    { lang: 'ar' }
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
    },
    ja: {
      title: 'あちゃー！罠に落ちちゃった！',
      subtitle: 'ブラウザ拡張機能が穴を掘って、私たちが落ちちゃった！',
      errorType: 'エラータイプ',
      errorMessage: 'エラーメッセージ',
      problemSource: '問題の原因',
      howToFix: 'どうやってこの穴から出るの？',
      solution1: '一時的にこのブラウザ拡張機能を無効にする',
      solution2: 'ページを更新してみる',
      solution3: 'それでもダメなら、シークレットモードでアクセスしてみる',
      humorTip: '心配しないで、これはPaperStationのせいじゃないよ。ブラウザ拡張機能が悪戯してるだけ！',
      backHome: 'ホームに戻る'
    },
    ko: {
      title: '이런! 함정에 빠졌어요!',
      subtitle: '브라우저 확장 프로그램이 구멍을 파서 우리가 빠졌어요!',
      errorType: '오류 유형',
      errorMessage: '오류 메시지',
      problemSource: '문제 원인',
      howToFix: '이 함정에서 어떻게 빠져나갈까요?',
      solution1: '일시적으로 이 브라우저 확장 프로그램을 비활성화하세요',
      solution2: '페이지를 새로고침해 보세요',
      solution3: '그래도 안 되면 시크릿 모드로 접속해 보세요',
      humorTip: '걱정하지 마세요, 이건 PaperStation의 잘못이 아니에요. 브라우저 확장 프로그램이 장난을 치는 거예요!',
      backHome: '홈으로 돌아가기'
    },
    es: {
      title: '¡Ups! ¡Cayimos en una trampa!',
      subtitle: '¡Tu extensión del navegador cavó un agujero y caímos en él!',
      errorType: 'Tipo de error',
      errorMessage: 'Mensaje de error',
      problemSource: 'Fuente del problema',
      howToFix: '¿Cómo salir de esta trampa?',
      solution1: 'Deshabilita temporalmente esta extensión del navegador',
      solution2: 'Intenta actualizar la página',
      solution3: 'Si eso no funciona, intenta acceder en modo incógnito',
      humorTip: '¡No te preocupes, esto no es culpa de PaperStation - tu extensión del navegador solo está siendo traviesa!',
      backHome: 'Volver al inicio'
    },
    fr: {
      title: 'Oups! Nous sommes tombés dans un piège!',
      subtitle: 'Votre extension de navigateur a creusé un trou et nous y sommes tombés!',
      errorType: 'Type d\'erreur',
      errorMessage: 'Message d\'erreur',
      problemSource: 'Source du problème',
      howToFix: 'Comment sortir de ce piège?',
      solution1: 'Désactivez temporairement cette extension de navigateur',
      solution2: 'Essayez de rafraîchir la page',
      solution3: 'Si ça ne marche pas, essayez d\'accéder en mode navigation privée',
      humorTip: 'Ne vous inquiétez pas, ce n\'est pas la faute de PaperStation - votre extension de navigateur est juste coquine!',
      backHome: 'Retour à l\'accueil'
    },
    de: {
      title: 'Hoppla! Wir sind in eine Falle getappt!',
      subtitle: 'Deine Browser-Erweiterung hat ein Loch gegraben und wir sind hineingefallen!',
      errorType: 'Fehlertyp',
      errorMessage: 'Fehlermeldung',
      problemSource: 'Problemquelle',
      howToFix: 'Wie kommen wir aus dieser Falle heraus?',
      solution1: 'Deaktiviere diese Browser-Erweiterung vorübergehend',
      solution2: 'Versuche, die Seite neu zu laden',
      solution3: 'Wenn das nicht funktioniert, versuche im Inkognito-Modus zuzugreifen',
      humorTip: 'Keine Sorge, das ist nicht PaperStations Schuld - deine Browser-Erweiterung ist nur frech!',
      backHome: 'Zurück zur Startseite'
    },
    ru: {
      title: 'Ой! Мы попали в ловушку!',
      subtitle: 'Ваше расширение браузера выкопало яму, и мы упали в неё!',
      errorType: 'Тип ошибки',
      errorMessage: 'Сообщение об ошибке',
      problemSource: 'Источник проблемы',
      howToFix: 'Как выбраться из этой ловушки?',
      solution1: 'Временно отключите это расширение браузера',
      solution2: 'Попробуйте обновить страницу',
      solution3: 'Если это не поможет, попробуйте зайти в режиме инкогнито',
      humorTip: 'Не волнуйтесь, это не вина PaperStation - ваше расширение браузера просто хулиганит!',
      backHome: 'Вернуться на главную'
    },
    pt: {
      title: 'Ops! Caímos numa armadilha!',
      subtitle: 'Sua extensão do navegador cavou um buraco e caímos nele!',
      errorType: 'Tipo de erro',
      errorMessage: 'Mensagem de erro',
      problemSource: 'Fonte do problema',
      howToFix: 'Como sair desta armadilha?',
      solution1: 'Desative temporariamente esta extensão do navegador',
      solution2: 'Tente atualizar a página',
      solution3: 'Se isso não funcionar, tente acessar no modo anônimo',
      humorTip: 'Não se preocupe, isso não é culpa do PaperStation - sua extensão do navegador está apenas sendo travessa!',
      backHome: 'Voltar ao início'
    },
    ar: {
      title: 'أوه! وقعنا في فخ!',
      subtitle: 'امتداد المتصفح الخاص بك حفر حفرة ووقعنا فيها!',
      errorType: 'نوع الخطأ',
      errorMessage: 'رسالة الخطأ',
      problemSource: 'مصدر المشكلة',
      howToFix: 'كيف نخرج من هذا الفخ؟',
      solution1: 'عطل هذا امتداد المتصفح مؤقتاً',
      solution2: 'حاول تحديث الصفحة',
      solution3: 'إذا لم ينجح ذلك، حاول الدخول في وضع التصفح الخاص',
      humorTip: 'لا تقلق، هذا ليس خطأ PaperStation - امتداد المتصفح الخاص بك فقط يلعب!',
      backHome: 'العودة إلى الصفحة الرئيسية'
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