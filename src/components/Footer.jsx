import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-3 pb-2 text-center">
      <div className="flex items-center justify-center gap-4 mb-2">
        <h1>suivew nous sur nos pages </h1>
        <a
          href="https://www.facebook.com/share/1F2bqPe9EZ/"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/gboro.app.ci?igsh=MTB1OGs4cHhqZ3J2Yg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.tiktok.com/@gboro.app.ci?_r=1&_t=ZS-978YBVUT7TO%0A"
          target="_blank"
          rel="noreferrer"
          className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
        >
          <FaTiktok />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        Powered by <span className="font-semibold">Ronna Group</span>
      </p>
    </footer>
  );
}