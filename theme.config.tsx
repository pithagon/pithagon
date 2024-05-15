/* eslint sort-keys: error */
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { LocaleSwitch, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'
import type { ComponentProps, ReactElement } from 'react'


{/* <svg viewBox="0 0 291 69" fill="none" {...props}>
    <path
      d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z"
      fill="currentColor"
    />
  </svg> */}

export const SWRLogo = (props: ComponentProps<'svg'>): ReactElement => (
  <svg height="40" viewBox="0 0 50 50" fill="none" {...props}><path d="M22.2152 16.7835C22.2556 16.2576 22.2712 15.6957 22.3145 15.1632H19.5033C19.394 16.1084 19.303 16.9961 19.1864 17.8805C18.9671 19.5432 18.7458 21.2058 18.5018 22.865C18.1914 24.9765 17.5367 26.9906 16.5526 28.8751C15.8835 30.1563 15.0873 31.3742 14.3011 32.5901C13.6279 33.6313 12.8132 34.5885 12.5248 35.8374C12.3186 36.7304 12.465 37.5526 13.0481 38.2734C13.5833 38.9349 14.2974 39.2452 15.1263 39.4122C16.5589 39.7009 18.2743 39.0213 19.0065 37.6043C19.9133 35.8493 20.2827 33.9446 20.6398 32.0393C20.8985 30.6593 21.056 29.2599 21.2423 27.867C21.3845 26.8047 21.5186 25.7406 21.6235 24.6741C21.7148 23.7457 21.757 22.8125 21.8266 21.8818C21.9463 20.2823 22.0692 18.6829 22.1921 17.0836L22.2152 16.7835Z" fill="#0877B9"></path><path d="M32.531 32.6683C32.0515 30.7604 32.0007 28.83 32.1603 26.8767L32.8706 15.1631H28.7109L27.3681 30.4462C27.3098 31.2805 27.2149 32.1148 27.2098 32.9496C27.2062 33.5378 27.303 34.1305 27.3951 34.7148C27.6367 36.2475 28.2992 37.5483 29.6124 38.4366C31.0172 39.3868 32.5723 39.6223 34.241 39.3965C36.041 39.1529 37.3358 38.1948 38.3003 36.7166C39.0879 35.5097 39.4763 34.1475 39.7768 32.7604C39.9066 32.1614 39.9463 31.5429 40.028 30.9257H38.846C38.7415 31.9375 38.446 32.8623 37.8 33.5911C36.8781 34.6312 35.6805 34.807 34.3781 34.4211C33.4642 34.1503 32.7759 33.643 32.531 32.6683Z" fill="#2489CA"></path><path d="M14.4241 15.7506C16.0251 14.9051 17.7531 15.2311 19.5033 15.1632L39.9533 15.1631V10.5779H39.3864C35.7737 10.5779 32.1607 10.5434 28.5486 10.5873C24.6886 10.6343 20.8227 10.3735 16.9688 10.7749C15.7134 10.9056 14.5772 11.326 13.6706 12.2404C12.0689 13.856 11.0991 15.8365 10.3984 17.9679C10.2424 18.4422 10.1076 18.9234 9.96094 19.4085C10.6998 19.5514 11.2793 19.5347 11.5477 18.7659C11.6138 18.5765 11.7583 18.411 11.8813 18.2453C12.5975 17.2803 13.3297 16.3285 14.4241 15.7506Z" fill="#3C99D4"></path></svg>
)

export const SWRBlack = (props: ComponentProps<'svg'>): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
    <g clip-path="url(#clip0_5_10)">
      <rect width="40" height="40" fill="white" />
      <g filter="url(#filter0_dd_5_10)">
        <path d="M17.7721 13.4267C17.8044 13.006 17.8169 12.5565 17.8515 12.1305H15.6025C15.5151 12.8866 15.4423 13.5968 15.349 14.3043C15.1736 15.6345 14.9965 16.9646 14.8014 18.2919C14.553 19.9811 14.0293 21.5924 13.242 23.1C12.7067 24.1249 12.0698 25.0993 11.4408 26.072C10.9022 26.905 10.2505 27.6707 10.0197 28.6698C9.85476 29.3843 9.97186 30.042 10.4384 30.6186C10.8666 31.1479 11.4378 31.3961 12.101 31.5297C13.2471 31.7606 14.6194 31.2169 15.2051 30.0834C15.9306 28.6794 16.226 27.1556 16.5117 25.6314C16.7187 24.5274 16.8447 23.4079 16.9938 22.2936C17.1075 21.4437 17.2148 20.5924 17.2987 19.7392C17.3718 18.9965 17.4055 18.2499 17.4612 17.5054C17.5569 16.2259 17.6552 14.9466 17.7536 13.6673L17.7721 13.4267Z" fill="#011018" />
      </g>
      <g filter="url(#filter1_dd_5_10)">
        <path d="M26.0248 26.1346C25.6413 24.6084 25.6006 23.064 25.7283 21.5014L26.2966 12.1305H22.9688L21.8946 24.357C21.8479 25.0245 21.772 25.6919 21.7679 26.3597C21.7651 26.8149 21.8375 27.2733 21.9089 27.7259L21.9162 27.7719C22.1095 28.998 22.6394 30.0387 23.69 30.7493C24.8139 31.5095 26.058 31.6979 27.3929 31.5172C28.8329 31.3224 29.8687 30.5558 30.6403 29.3733C31.2704 28.4078 31.5811 27.318 31.8215 26.2084C31.9253 25.7292 31.9571 25.2344 32.0225 24.7406H31.0768C30.9933 25.55 30.7568 26.2899 30.2401 26.8729C29.5026 27.705 28.5445 27.8456 27.5026 27.5369C26.7714 27.3202 26.2208 26.9144 26.0248 26.1346Z" fill="#040F16" />
      </g>
      <g filter="url(#filter2_dd_5_10)">
        <path d="M11.5393 12.6005C12.8201 11.9241 14.2025 12.1848 15.6026 12.1305L31.9626 12.1305V8.46234H31.5091C28.619 8.46234 25.7286 8.43472 22.8389 8.46986C19.7509 8.50741 16.6582 8.29879 13.5751 8.61989C12.5708 8.72449 11.6617 9.06084 10.9365 9.79236C9.65511 11.0848 8.87926 12.6692 8.31868 14.3743C8.19394 14.7538 8.08608 15.1387 7.96875 15.5268C8.55988 15.6411 9.02347 15.6278 9.23815 15.0127C9.29106 14.8612 9.40664 14.7288 9.50503 14.5962C10.078 13.8242 10.6637 13.0628 11.5393 12.6005Z" fill="#050F15" />
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_5_10" x="-4.45103" y="4.13049" width="36.7026" height="48.2514" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_10" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1.2" />
        <feGaussianBlur stdDeviation="1.8" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_5_10" result="effect2_dropShadow_5_10" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5_10" result="shape" />
      </filter>
      <filter id="filter1_dd_5_10" x="7.36782" y="4.13049" width="39.0546" height="48.2503" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_10" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1.2" />
        <feGaussianBlur stdDeviation="1.8" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_5_10" result="effect2_dropShadow_5_10" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5_10" result="shape" />
      </filter>
      <filter id="filter2_dd_5_10" x="-6.43125" y="0.4375" width="52.7939" height="35.945" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="6.4" />
        <feGaussianBlur stdDeviation="7.2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_10" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1.2" />
        <feGaussianBlur stdDeviation="1.8" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_5_10" result="effect2_dropShadow_5_10" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5_10" result="shape" />
      </filter>
      <clipPath id="clip0_5_10">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
)


const Vercel = () => (
  <svg height="40" viewBox="0 0 50 50" fill="none" ><path d="M22.2152 16.7835C22.2556 16.2576 22.2712 15.6957 22.3145 15.1632H19.5033C19.394 16.1084 19.303 16.9961 19.1864 17.8805C18.9671 19.5432 18.7458 21.2058 18.5018 22.865C18.1914 24.9765 17.5367 26.9906 16.5526 28.8751C15.8835 30.1563 15.0873 31.3742 14.3011 32.5901C13.6279 33.6313 12.8132 34.5885 12.5248 35.8374C12.3186 36.7304 12.465 37.5526 13.0481 38.2734C13.5833 38.9349 14.2974 39.2452 15.1263 39.4122C16.5589 39.7009 18.2743 39.0213 19.0065 37.6043C19.9133 35.8493 20.2827 33.9446 20.6398 32.0393C20.8985 30.6593 21.056 29.2599 21.2423 27.867C21.3845 26.8047 21.5186 25.7406 21.6235 24.6741C21.7148 23.7457 21.757 22.8125 21.8266 21.8818C21.9463 20.2823 22.0692 18.6829 22.1921 17.0836L22.2152 16.7835Z" fill="#0877B9"></path><path d="M32.531 32.6683C32.0515 30.7604 32.0007 28.83 32.1603 26.8767L32.8706 15.1631H28.7109L27.3681 30.4462C27.3098 31.2805 27.2149 32.1148 27.2098 32.9496C27.2062 33.5378 27.303 34.1305 27.3951 34.7148C27.6367 36.2475 28.2992 37.5483 29.6124 38.4366C31.0172 39.3868 32.5723 39.6223 34.241 39.3965C36.041 39.1529 37.3358 38.1948 38.3003 36.7166C39.0879 35.5097 39.4763 34.1475 39.7768 32.7604C39.9066 32.1614 39.9463 31.5429 40.028 30.9257H38.846C38.7415 31.9375 38.446 32.8623 37.8 33.5911C36.8781 34.6312 35.6805 34.807 34.3781 34.4211C33.4642 34.1503 32.7759 33.643 32.531 32.6683Z" fill="#2489CA"></path><path d="M14.4241 15.7506C16.0251 14.9051 17.7531 15.2311 19.5033 15.1632L39.9533 15.1631V10.5779H39.3864C35.7737 10.5779 32.1607 10.5434 28.5486 10.5873C24.6886 10.6343 20.8227 10.3735 16.9688 10.7749C15.7134 10.9056 14.5772 11.326 13.6706 12.2404C12.0689 13.856 11.0991 15.8365 10.3984 17.9679C10.2424 18.4422 10.1076 18.9234 9.96094 19.4085C10.6998 19.5514 11.2793 19.5347 11.5477 18.7659C11.6138 18.5765 11.7583 18.411 11.8813 18.2453C12.5975 17.2803 13.3297 16.3285 14.4241 15.7506Z" fill="#3C99D4"></path></svg>
)

const TITLE = {
  en: 'Wonderful science in your hand',
  es: 'Mirinda scienco en via mano',
  ru: 'Чудесная наука в твоих руках'
}

const EDIT_TEXT = {
  en: 'Edit this page on GitHub →',
  es: 'Edite esta página en GitHub',
  ru: 'Редактировать на GitHub'
}

const FOOTER_LINK = {
  en: 'https://pithagon.com/?utm_source=swr',
  es: 'https://pithagon.com/?utm_source=swr_es-es',
  ru: 'https://pithagon.com/?utm_source=swr_ru'
}

const FOOTER_LINK_TEXT = {
  en: (
    <>
      Powered by
      <Vercel />
    </>
  ),
  es: (
    <>
      Desarrollado por
      <Vercel />
    </>
  ),
  ru: (
    <>
      Работает на
      <Vercel />
    </>
  )
}

const config: DocsThemeConfig = {
  backgroundColor: {
    dark: '13,13,13',
    light: '255,255,255'
  },
  banner: {
    content: 'Pithagon.com →',
    key: 'pithagon'
  },
  // chat: {
  //   link: 'https://discord.com'
  // },
  darkMode: true,
  docsRepositoryBase:
    'https://github.com/pithagon/nextra/blob/core/examples/pithagon.github.io',
  editLink: {
    content: function useText() {
      const { locale } = useRouter()
      return EDIT_TEXT[locale!]
    }
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
    useLink() {
      const config = useConfig()
      return `https://google.com/search?q=${encodeURIComponent(
        `Feedback for ${config.title}`
      )}`
    }
  },
  footer: {
    content: function useText() {
      const { locale } = useRouter()
      return (
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 font-semibold"
          href={FOOTER_LINK[locale!]}
        >
          {FOOTER_LINK_TEXT[locale!]}
        </a>
      )
    }
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>()
    const { locale } = useRouter()
    const description =
      config.frontMatter.description ||
      'SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.'
    const image =
      config.frontMatter.image ||
      'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'
    const title = `${config.title} | SWR (${locale})`
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pithagon" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    )
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { direction: 'rtl', locale: 'es', name: 'Español RTL' },
    { locale: 'ru', name: 'Русский' }
  ],
  logo: function Logo() {
    const { locale } = useRouter()
    return (
      <>
        <SWRLogo className="h-10" />
        <span
          className="max-md:hidden select-none font-extrabold ltr:ml-2 rtl:mr-2"
          title={`Pithagon: ${TITLE[locale!] || ''}`}
        >
          Pithagon
        </span>
      </>
    )
  },
  navbar: {
    extraContent: LocaleSwitch
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  project: {
    link: 'https://github.com/vercel/swr'
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    float: true
  }
}

export default config
