import { jsx } from 'theme-ui'

export const Layout = ({ children, page }) => {
  return (
    <div>
      <header></header>

      <main>{children}</main>
      <style jsx global>{`
        // Defaults
        *,
        *:before,
        *:after,
        *:link,
        *:visited,
        *:active,
        *:focus,
        *:focus-within,
        *:checked,
        *:disabled {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden !important;
        }
        ul,
        ol,
        li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        img {
          max-width: 100%;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a,
        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          text-transform: none;
          appearance: none;
          cursor: pointer;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin-top: 0;
        }
        img,
        svg,
        picture,
        span,
        b,
        u,
        i,
        small,
        sub,
        strong,
        label {
          display: inline-block;
        }
        table,
        thead,
        tbody,
        tfoot,
        tr,
        td,
        th {
          border-spacing: 0;
          border-collapse: collapse;
          text-align: left;
        }
        table {
          width: 100%;
        }
      `}</style>
      <style jsx global>{`
        html {
          background: linear-gradient(
            153deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(38, 29, 81, 1) 50%,
            rgba(12, 10, 29, 1) 100%
          );
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center bottom;
        }
        body {
          overflow: auto;
          scroll-behavior: smooth;
          height: 100vh;
        }
        .layout {
          max-width: 1260px;
          margin: auto;
          padding: 0 20px;
          position: relative;
        }

        @media screen and (max-width: 900px) {
          table {
            border: 0;
          }

          table caption {
            font-size: 1.3em;
          }

          table thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
          }

          table tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: 0.625em;
          }

          table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: 0.8em;
            text-align: right;
          }

          table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
          }

          table td:last-child {
            border-bottom: 0;
            text-align: center;

            div {
              opacity: 1;
            }
          }
        }

        div::selection,
        p::selection,
        h1::selection {
        }
      `}</style>
    </div>
  )
}
