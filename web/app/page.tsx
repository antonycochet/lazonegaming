import * as motion from '../lib/motion'
import Link from 'next/link'
import Image from 'next/image'

const games: string[] = ['tft','valorant']

export default function Page() {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="flex-col">
                <h1 className="text-9xl text-white font-bold tracking-tighter mb-16">LA ZONE GAMING</h1>
                <div className="flex gap-16">
                    {games.map((game, index) => {
                        return(
                            <div key={index} className='flex-col relative'>
                                <motion.h1 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="text-8xl text-white font-bold ml-4 absolute -bottom-6 z-10">{game.toUpperCase()}</motion.h1>
                                <motion.div 
                                    initial={{ opacity: 0, scale: .5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: .3 }}
                                    className="max-w-[700px] overflow-hidden"
                                >
                                    <Link href={`/${game}`}>
                                        <Image src={`/images/${game}.jpg`} alt={game} width={700} height={393} className="hover:scale-125 hover:rotate-3 transition duration-300 object-cover shadow-2xl"/>
                                    </Link>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}