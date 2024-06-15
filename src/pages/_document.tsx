import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </Html>
  );
}
