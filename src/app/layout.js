import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Real Muslim App',
  description: "real muslim app merupakan sahabat setia dalam perjalanan spiritual Anda. Jadikan Real Muslim App sebagai teman setia Anda dalam menguatkan ikatan Anda dengan agama, memperdalam pengetahuan Islami, dan menjadikan ibadah sebagai bagian integral dari kehidupan Anda sehari-hari. Unduh aplikasi Real Muslim App sekarang dan mulailah perjalanan Islami murni Anda",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/app-icon.png" type="image/x-icon"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
