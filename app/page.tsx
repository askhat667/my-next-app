import Link from "next/link";
import { PageIntro, SectionTitle, ServiceCard } from "./_components/site";

const categories = ["Монтаж", "Съёмка", "Анимация", "Реклама", "Цветокоррекция"];

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> МАРКЕТПЛЕЙС ВИДЕОУСЛУГ</p>
          <h1>Идеи заслуживают<br />быть <span>увиденными.</span></h1>
          <p className="hero-description">Найдите видеоспециалистов, которые превратят вашу задумку в историю. Или покажите свой талант миру.</p>
          <div className="hero-actions">
            <Link className="button button-lime" href="/catalog">Найти видеоспециалиста <span aria-hidden="true">↗</span></Link>
            <Link className="button button-outline" href="/register">Я — автор</Link>
          </div>
          <div className="hero-proof"><div className="avatar-stack"><span className="avatar">A</span><span className="avatar avatar-peach">M</span><span className="avatar avatar-blue">K</span></div><p><strong>Уже 1 200+</strong><br />креаторов на платформе</p></div>
        </div>
        <div className="hero-art" aria-label="Подборка видеоработ">
          <div className="hero-art-top"><span>ИСТОРИИ В ДВИЖЕНИИ</span><span>№ 001 — 024</span></div>
          <div className="hero-poster poster-large"><span className="poster-sun" /><span className="poster-type">ДРУГОЙ<br />ВЗГЛЯД</span><span className="poster-meta">Короткий метр · 02:48</span></div>
          <div className="hero-poster poster-small"><span className="poster-stripe" /><span className="poster-label">MAKE<br />IT MOVE</span></div>
          <div className="floating-note"><span className="note-star">✳</span><span>Твоя идея.<br /><strong>Новый кадр.</strong></span></div>
          <span className="hero-index">VM / 2026</span>
        </div>
      </section>

      <section className="category-strip page-shell">
        <span className="strip-label">ЧТО ВЫ ИЩЕТЕ?</span>
        {categories.map((category, index) => <Link href="/catalog" className="category-pill" key={category}><span>0{index + 1}</span>{category}<span aria-hidden="true">↗</span></Link>)}
      </section>

      <section className="content-section page-shell">
        <SectionTitle title="Работы, которые цепляют" detail="Свежие идеи от авторов VideoMarket" href="/catalog" />
        <div className="service-grid">
          <ServiceCard title="Монтаж, который держит внимание" category="ВИДЕОМОНТАЖ" price="15 000" seller="Алина К." theme="mint" />
          <ServiceCard title="Сниму историю вашего бренда" category="СЪЁМКА" price="28 000" seller="Марат С." theme="peach" />
          <ServiceCard title="Оживлю ваш проект в 3D" category="АНИМАЦИЯ" price="12 000" seller="Кира Н." theme="blue" />
        </div>
      </section>

      <section className="creator-band">
        <div className="page-shell creator-band-inner">
          <div><p className="eyebrow">ДЛЯ АВТОРОВ</p><h2>Твоя работа.<br /><span>Твоя аудитория.</span></h2></div>
          <p>Покажи портфолио, найди клиентов и занимайся тем, что любишь. Всё остальное — в одном месте.</p>
          <Link className="button button-lime" href="/register">Открыть профиль <span aria-hidden="true">↗</span></Link>
          <span className="band-mark" aria-hidden="true">V</span>
        </div>
      </section>

      <section className="content-section page-shell bottom-section">
        <PageIntro eyebrow="ПРОСТО НАЧАТЬ" title="От идеи до готового видео" description="Понятный путь для обеих сторон — от первого сообщения до финального кадра." />
        <div className="steps-grid">
          <article><span>01</span><h3>Найдите своего автора</h3><p>Смотрите работы, портфолио и услуги в каталоге.</p></article>
          <article><span>02</span><h3>Обсудите проект</h3><p>Напишите исполнителю и договоритесь о деталях.</p></article>
          <article><span>03</span><h3>Получите результат</h3><p>Следите за этапами заказа и примите готовую работу.</p></article>
        </div>
      </section>
    </main>
  );
}
