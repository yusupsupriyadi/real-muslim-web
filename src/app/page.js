export default function Home() {
  return (
    <main className='mx-auto px-10 py-10 '>
      <section className=" justify-evenly">
        <div className="flex justify-center ">
          <img src="/images/mockup.webp" alt="Deskripsi Gambar" className="w-[150px]" />
        </div>

        <div className="font-ysabeau text-center ">
          <div className="flex justify-center mt-4">
            <img src="/images/icon-title.webp" className="w-[200px]" alt="" />
          </div>
          <h2 className="text-white text-xl font-semibold font-varela mt-6">Perjalanan Islami Murni Anda</h2>
          <div className="flex justify-center">
            <p className="text-white leading-relaxed font-varela text-sm mt-2 lg:w-2/4">
              real muslim app merupakan sahabat setia dalam perjalanan spiritual Anda. Jadikan Real Muslim App sebagai teman
              setia Anda dalam menguatkan ikatan Anda dengan agama, memperdalam pengetahuan Islami, dan menjadikan ibadah
              sebagai bagian integral dari kehidupan Anda sehari-hari.
              Unduh aplikasi Real Muslim App sekarang dan mulailah perjalanan Islami murni Anda
            </p>
          </div>

          <a href="https://play.google.com/" className="flex justify-center ">
            <button className="bg-white border-black border-2 mt-6 border-b-4 py-2 px-4 rounded-xl font-black  text-md flex items-center gap-2">
              DOWNLOAD
            </button>
          </a>
        </div>
      </section>
    </main>
  )
}
