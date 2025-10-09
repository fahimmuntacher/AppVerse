import React, { useEffect, useState } from 'react';
import { Mail, Twitter, Instagram, Github, Linkedin, ArrowUp, ArrowDown } from 'lucide-react';
import { toast } from 'react-toastify';
import logo from "../../assets/logo (1).png"

export default function AppVerseFooter() {
  const [top, setTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY === 0);
    };
     window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };


  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    if (!email) {
      toast.warn('Please enter a valid email!');
      return;
    }

    toast.success(`Thanks! ${email} has been added to AppVerse updates ✨`);
    e.target.reset();
  };


  return (
    <footer className="bg-gradient-to-r from-[#0f0f20] via-[#1c1c35] to-[#0f0f20] text-gray-100 pt-12 pb-6">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BRAND + BLURB */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-sm">
                <img src={logo} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AppVerse</h3>
                <p className="text-sm text-gray-300">Discover, explore & rate the best apps from across the digital universe.</p>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              Built for app lovers find trending apps, share reviews, and explore what’s next in the world of mobile innovation.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a aria-label="Twitter" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Twitter size={18} />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Instagram size={18} />
              </a>
              <a aria-label="GitHub" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Github size={18} />
              </a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="flex justify-between gap-10 md:justify-center md:col-span-1">
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">Top Apps</a></li>
                <li><a href="#" className="hover:underline">Categories</a></li>
                <li><a href="#" className="hover:underline">New Releases</a></li>
                <li><a href="#" className="hover:underline">Submit App</a></li>
              </ul>
            </div>

            <div className='flex flex-col items-center'>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:underline">About AppVerse</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">Get updates on trending apps, UI tips & exclusive developer stories.</p>

            <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-br from-[#6d28d9] to-[#9f62f2] hover:opacity-95 font-semibold"
              >
                <Mail size={16} />
                Subscribe
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-400">
              <p>Privacy-first. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} AppVerse. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-300 hover:underline">Terms</a>
            <a href="#" className="text-sm text-gray-300 hover:underline">Privacy</a>
            <a href="#" className="text-sm text-gray-300 hover:underline">Support</a>
          </div>
        </div>

        {/* Floating back-to-top button */}
        <button
      onClick={ top ? scrollToBottom : scrollToTop}
      aria-label={ top ? "Scroll Down" : "Scroll Up"}
      className="fixed right-6 bottom-6 bg-gradient-to-br from-[#9f62f2] to-[#632ee3] p-3 rounded-full shadow-lg hover:scale-105 transform transition md:flex items-center justify-center"
    >
      { top ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
    </button>
      </div>
    </footer>
  );
}
