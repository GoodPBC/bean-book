import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer className="footer">
        <a
            className="footer-company"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by Good Inc. {'  '}
            <span className="footer-logo-wrapper">
                <Image src="/GOOD.png" alt="Good Inc Logo" width={32} height={32} />
            </span>
        </a>
      </footer>
    </div>
    
  )

}

export default MyApp;
