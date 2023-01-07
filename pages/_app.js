export default function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}