import HeaderLogos from "./HeaderLogos";

export default function HeaderText() {

    return (<div className="flex flex-col">
        <h1 className="mt-6 text-base text-zinc-600 text-center md:text-left">Nick Hermann</h1>
        <h2 className="text-4xl font-bold  text-zinc-800  sm:text-5xl text-center md:text-left">Software Developer und Produktentwickler.</h2>
        <div className="h-12"></div>
        <h3 className="mt-6 text-base text-zinc-600 text-center md:text-left">Hi! Ich bin Nick, 20 Jahre alt und studiere Informatik an der Uni Hannover. Ich bin begeisterter Software Developer und Produktentwickler</h3>
        <div className="h-12"></div>
        <HeaderLogos></HeaderLogos>
    </div>)
}