export const Delegate = () => {
  return (
    <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g opacity=".64" stroke="#FFF" strokeLinejoin="round">
          <path d="M.5 5h9M5 .5L9.5 5 5 9.5" />
        </g>
        <g transform="translate(6.5 -4)" filter="url(#a)">
          <path
            d="M9 4.5A2.25 2.25 0 109 9a2.25 2.25 0 000-4.5m4.5 7.877v.672c0 .249-.202.451-.451.451H4.95a.451.451 0 01-.451-.451v-.672a2.252 2.252 0 012.252-2.252h4.496a2.252 2.252 0 012.252 2.252"
            fill="#FFF"
          />
        </g>
      </g>
    </svg>
  )
}
