export default function Details(){
    return(<>
        <div class="bg-gray-cap text-white  flex flex-col gap-56 p-5  items-center pt-32">
            {/* row 1 */}
            <div class="">
                <div class="flex-row flex gap-56 pb-32">
                    <div class="items-center flex flex-col">
                        <div class="pb-7"><img src="icon-access-anywhere.svg" alt="anywhere icon"></img></div>
                        <div class="font-bold text-xl pb-2"> Access your files, anywhere</div>
                        <div class="text-sm">The ability to use a smartphone, tablet, or computer</div>
                        <div class="text-sm">to access your account means your files follow you</div>
                        <div class="text-sm">everywhere.</div>
                    </div>
                    <div class="items-center flex flex-col">
                        <div class="pb-7"><img src="icon-security.svg" alt="anywhere icon"></img></div>
                        <div class="font-bold text-xl pb-2">Security you can trust</div>
                        <div class="text-sm">2-factor authentication and user-controlled encryption are</div>
                        <div class="text-sm">Just a couple of the security features we allow to help</div>
                        <div class="text-sm">secure your files.</div>
                    </div>
                </div>
                {/* row 2 */}
                <div class="flex-row flex gap-56 pb-32 ">
                    <div class="items-center flex flex-col">
                        <div class="pb-7"><img src="icon-collaboration.svg" alt="anywhere icon"></img></div>
                        <div class="font-bold text-xl pb-2">Real-time collaboration</div>
                        <div class="text-sm">Securely share files and folders with friends, family and</div>
                        <div class="text-sm"></div>colleagues for live collaboration. No email attachments
                        <div class="text-sm">required.</div>
                    </div>
                    <div class="items-center flex flex-col">
                        <div class="pb-7"><img src="icon-any-file.svg" alt="anywhere icon"></img></div>
                        <div class="font-bold text-xl pb-2">Store any type of file</div>
                        <div class="text-sm">Whether you're sharing holidays photos or work</div>
                        <div class="text-sm">documents, Fylo has you covered allowing for all file</div>
                        <div class="text-sm">types to be securely stored and shared.</div>
                    </div>
                </div>      
            </div>     
        </div>
    </>);
}