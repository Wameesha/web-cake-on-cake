"use client";

export default function Contact() {
    return (
        <section id="contact" className="w-full min-h-[600px] flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-pink-200 to-white mb-0 pb-0 rounded-none" style={{ paddingBottom: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-5xl mx-auto items-stretch">
                <div className="flex justify-center items-center p-8 md:p-0">
                    <img src="/images/contactimage.png" alt="Contact" className="w-[340px] h-[340px] object-cover rounded-3xl" />
                </div>
                <div className="flex flex-col justify-center items-center pt-10 md:pt-16 pb-0">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 bg-clip-text text-transparent mb-8 drop-shadow">Get in Touch</h2>
                    <form className="flex flex-col gap-6 w-full max-w-md">
                        <input type="text" placeholder="Name" required className="px-5 py-4 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 text-lg transition-all duration-200" />
                        <input type="email" placeholder="Email" required className="px-5 py-4 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 text-lg transition-all duration-200" />
                        <input type="tel" placeholder="Contact Number" required className="px-5 py-4 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 text-lg transition-all duration-200" />
                        <textarea placeholder="Message" required className="px-5 py-4 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 text-lg resize-none transition-all duration-200" rows={4} />
                        <button type="submit" className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-white font-bold py-4 rounded-xl hover:scale-105 transition-all duration-200 mb-11">Send Message</button>
                    </form>
                </div>
            </div>

        </section>
    );
}
