import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
// Image paths from the public directory
const wealthAgentImage = '/Wealth Agent.png';
const intelligenceImage = '/Intelligence3.png';
const controlImage = '/Control.png';

export default function Features() {
    return (
        <section className="bg-zinc-50 py-20 md:py-36 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to Grow, Designed for Precision</h2>
                    <p className="mt-4">TradeX empowers investors with next-generation wealth infrastructure — blending data, discipline, and technology to deliver performance that adapts to you.</p>
                </div>
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    <Card className="group border-2 border-black shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col transform hover:scale-[1.02] transition-transform">
                        <CardHeader className="pb-3 flex-grow">
                            <div className="flex justify-center mb-6 p-2">
                                <Image
                                    src={wealthAgentImage}
                                    alt="Wealth Agent"
                                    width={200}
                                    height={200}
                                    className="rounded-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Customizable Wealth Strategies</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-base text-gray-700">Shape your portfolio the way you want. Choose your markets, define your risk levels, and let TradeX&apos;s quant models fine-tune performance for your personal goals.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-2 border-black shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col transform hover:scale-[1.02] transition-transform">
                        <CardHeader className="pb-3 flex-grow">
                            <div className="flex justify-center mb-6 p-2">
                                <Image
                                    src={intelligenceImage}
                                    alt="Intelligent Automation"
                                    width={200}
                                    height={200}
                                    className="rounded-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Our AI-powered systems scan global financial markets in real time, executing data-backed trades with precision and speed — eliminating emotion and maximizing efficiency.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-2 border-black shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col transform hover:scale-[1.02] transition-transform">
                        <CardHeader className="pb-3 flex-grow">
                            <div className="flex justify-center mb-6 p-2">
                                <Image
                                    src={controlImage}
                                    alt="Transparent Control"
                                    width={200}
                                    height={200}
                                    className="rounded-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Transparent Control</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Stay in command with complete portfolio visibility, detailed analytics, and instant performance tracking. Every decision, move, and result — fully transparent, fully yours.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
