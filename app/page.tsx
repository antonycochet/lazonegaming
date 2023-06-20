import * as motion from '../lib/motion'

export default function Page() {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="flex-col">
                <h1 className="text-7xl text-white font-bold text-center pb-28">LA ZONE GAMING</h1>
                <div className="flex gap-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[700px] overflow-hidden p-2">
                    <img src="./images/tft.jpg" className="hover:scale-110 transition duration-300 cursor-pointer object-cover"></img>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[700px] overflow-hidden p-2">
                    <img src="./images/valorant.jpg" className="hover:scale-110 transition duration-300 cursor-pointer object-cover"></img>
                </motion.div>
                </div>
            </div>
        </main>
    )
}