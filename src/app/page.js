import Link from "next/link";

export default function Home() {
  return (
    <main className='mx-auto px-10 py-10 '>
      <section className=" justify-evenly ">
        <div className="flex justify-center ">
          <img src="/images/mockup.webp" alt="Deskripsi Gambar" className="w-[150px]" />
        </div>

        <div className="font-ysabeau text-center ">
          <div className="flex justify-center mt-4">
            <img src="/images/icon-title.png" className="w-[200px]" alt="" />
          </div>
          <h2 className="text-white text-xl font-semibold font-varela mt-6">Perjalanan Islami Murni Anda</h2>
          <div className="flex justify-center">
            <p className="text-white leading-relaxed font-varela text-sm mt-2 w-2/4">
              real muslim app merupakan sahabat setia dalam perjalanan spiritual Anda. Jadikan Real Muslim App sebagai teman
              setia Anda dalam menguatkan ikatan Anda dengan agama, memperdalam pengetahuan Islami, dan menjadikan ibadah
              sebagai bagian integral dari kehidupan Anda sehari-hari.
              Unduh aplikasi Real Muslim App sekarang dan mulailah perjalanan Islami murni Anda
            </p>
          </div>

          <a href="https://play.google.com/" className="flex justify-center ">
            <button className="bg-white border-black border mt-6 border-b-2 py-2 px-4 rounded-xl font-bold font-ysabeau text-md flex items-center gap-2">
              <h1>DOWNLOAD</h1>
              <svg class="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
            </button>
          </a>
        </div>
      </section>
    </main>
  )
}
