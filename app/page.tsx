export default function Page() {
  return (
    <div className="font-sans text-gray-800">
      {/* ヘッダー */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-xl font-bold text-blue-700">癒しチェア本舗</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#products" className="hover:text-blue-500">製品一覧</a>
          <a href="#shop" className="hover:text-blue-500">店舗紹介</a>
          <a href="#contact" className="hover:text-blue-500">お問い合わせ</a>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">極上の癒しを、あなたに</h2>
          <p className="text-lg md:text-xl mb-6">家庭用マッサージチェア専門店</p>
          <a href="#products" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">製品を見る</a>
        </div>
      </section>

      {/* 製品一覧 */}
      <section id="products" className="py-12 px-6 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-8">人気のマッサージチェア</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {['black', 'brown', 'beige'].map((color, index) => (
            <div key={index} className="bg-white rounded shadow p-4 text-center">
              <img src={`/chair-${color}.png`} alt={`${color} マッサージチェア`} className="w-full h-60 object-contain mb-4" />
              <h4 className="text-lg font-semibold mb-2">マッサージチェア（{color}）</h4>
              <p className="text-sm text-gray-600">全身をしっかりと癒す多機能チェア</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">詳しく見る</button>
            </div>
          ))}
        </div>
      </section>

      {/* 店舗紹介 */}
      <section id="shop" className="py-12 px-6 bg-white">
        <h3 className="text-2xl font-bold text-center mb-8">店舗紹介</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="/store.png" alt="店舗写真" className="rounded shadow" />
          <div>
            <h4 className="text-lg font-semibold mb-2">癒しチェア本舗 渋谷店</h4>
            <p className="text-gray-700 mb-2">東京都渋谷区○○1-2-3<br />営業時間：10:00〜20:00（年中無休）</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26092.638694242556!2d136.91453439999998!3d35.16709805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1743838193009!5m2!1sja!2sjp" // ← 適当な地図リンク
              width="100%"
              height="200"
              className="rounded"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p className="text-sm">© 2025 癒しチェア本舗. All rights reserved.</p>
      </footer>
    </div>
  )
}