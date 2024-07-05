export default function MainPage(){
    return (<>
    <div class="bg-[url('bg-curvy-desktop.svg')] bg-no-repeat bg-contain bg-bottom">
        <div className="flex flex-col items-center text-white gap-1 pb-4">
            

                <div><img src="illustration-intro.png" className="h-96"></img></div>
                <div className="font-bold text-4xl ">All your files in one secure location,</div>
                <div className="font-bold text-4xl pb-6">accessible anywhere.</div>
                <div className="text-sm ">Fylo stores all your most important files in one secure location.</div>
                <div className="text-sm ">Access them wherever you need, share and collaborate with</div>
                <div className="text-sm pb-3">friends family, and co-workers.</div>
                <button className="rounded-full bg-cyan-400 px-16 py-2 text-sm">Get Started</button>
            </div>   
        </div>
    </>);
}