interface CheckProps {}

const Check = (props: CheckProps) => (
  <svg
    style={{ position: "absolute", top: "-10px", right: "-10px" }}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
      fill="#2E5BFF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8466 7.69213L8.86419 13.7094C8.47889 14.0969 7.85513 14.0969 7.47082 13.7094L4.97183 11.1968C4.58752 10.8093 4.58752 10.1819 4.97183 9.79435C5.35712 9.4078 5.98088 9.4078 6.36519 9.79435L8.16751 11.6071L13.4532 6.29066C13.8375 5.90312 14.4613 5.90312 14.8466 6.29066C15.2319 6.67721 15.2319 7.3046 14.8466 7.69213Z"
      fill="white"
    />
  </svg>
);

export default Check;
