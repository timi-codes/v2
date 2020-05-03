import Head from 'next/head'
import Avatar from '../components/Avatar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Timi Tejumola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="hello">Hello! <span className="emoji wave-hand"></span></h1>
        <p className="description">
          I'm <span>Timi Tejumola</span>, a design-minded software engineer focused on building beautiful interfaces & experiences across mobile & web platforms.🚀
        </p>
        <div className="section-two">
          <div/>
          <div className="links">
            <a
              href="https://docs.google.com/document/d/1B3m6d2JoUdv5Zb-TwwVKVTotKpSLIXKIAWtu9iyO7lA/edit"
              className="resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >RESUME</a>
            <ul>
              <li><a href="https://www.github.com/timi-codes"><img src="/images/github.svg"/></a></li>
              <li><a href="https://www.linkedin.com/timitejumola"><img src="/images/linkedin.svg" /></a></li>
              <li><a href="https://www.twitter.com/timicodes"><img src="/images/twitter.svg"/></a></li>
              <li><a href="https://www.medium.com/timitejumola"><img src="/images/medium.svg"/></a></li>
            </ul>
          </div>
          <Avatar />
        </div>
      </main>
      <footer>
        <h1>TIMI TEJUMOLA</h1>
      </footer>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: -8rem;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .wave-hand {
          background-image: url(/images/emoji/wave.png);
          margin-left: 10px;
          cursor: pointer;
]          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation-name: wave;
          animation-name: wave;
        }
        @-webkit-keyframes wave {
          from {
            -webkit-transform: none;
            transform: none;
          }

          15% {
            -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          30% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
          }

          45% {
            -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          60% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
          }

          75% {
            -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes wave {
          from {
            -webkit-transform: none;
            transform: none;
          }

          15% {
            -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          30% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
          }

          45% {
            -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
          }

          60% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
          }

          75% {
            -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        .hello,
        .description {
          text-align: center;
          margin: 0;
          font-weight: 300;
        }
        .description {
          font-size: 2rem;
          font-weight: 300;
          margin: 0;
        }
        .description span {
          font-weight: 800;
        }
        .section-two {
          display: flex;
          justify-content: space-between;
        }
        .section-two .links {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .resume-link {
          padding: 0.56rem 2.2rem;
          border: 2px solid #000000;
          border-radius: 5px;
          margin-top: 2rem;
          font-weight: 800;
          font-size: 0.7rem;
        }
        footer h1 {
          font-size: 15rem;
          margin: 0;
          color: #787878;
          opacity: 0.1;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: #000000;
        }
        ul {
          display: flex;
          margin-left: 0px;
        }
        li {
          list-style: none;
          padding: 1.5rem;
        }
      `}</style>
    </div>
  )
}