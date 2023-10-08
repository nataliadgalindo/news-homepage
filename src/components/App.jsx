import Navbar from "./Navbar"
import { newArticles, topArticles } from "../../data"

function App() {
  return (
    <div className="content-wrapper">
      <header>
        <Navbar />
      </header>

      <div className="grid-container">
        <main>
          <div className="main-img"></div>
          <article className="main-heading">
            <h1 className="main-title">The Bright Future of Web 3.0?</h1>
            <div className="main-desc">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read More</button>
            </div>
          </article>
        </main>

        <aside>
          <h2>New</h2>
          {newArticles.map(({ title, desc }, i) => {
            return (
              <div key={i}>
                <article>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
                {i < 2 ? <hr /> : ""}
              </div>
            )
          })}
        </aside>

        <div className="top-articles">
          <ul>
            {topArticles.map(({ img, title, desc }, i) => {
              return (
                <li key={i} className={`top-article-${i + 1}`}>
                  <img src={img} alt="" />

                  <article>
                    <strong>0{i + 1}</strong>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
