export default function Header(){
    return <>
            <div className="flex text-white justify-between flex-row pt-5 items-center px-10">

            <div><img src="logo.svg" alt="logo"></img></div>
            <div className="flex gap-8">
                <div>Features</div>
                <div>Team</div>
                <div>Sign up</div>
            </div>
            </div>
    </>
}