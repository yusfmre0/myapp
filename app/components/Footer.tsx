import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-full py-5 flex gap-5">
            <div className="flex items-center gap-2">
                <h6 className="text-zinc-100">Github:</h6>
                <Link href={'https://github.com/yusfmre0'} target="_blank" className="text-zinc-100">yusfmre0</Link>
            </div>

            <div className="flex items-center gap-2">
                <h6 className="text-zinc-100">Telegram:</h6>
                <Link href={'https://t.me/yusfmre'} target="_blank" className="text-zinc-100">@yusfmre</Link>
            </div>
        </footer>
    )
}