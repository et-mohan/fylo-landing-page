export default function Footer(){
    return (<>
        <div class="text-white p-20">
            <div class="pb-5 ">
                <img src="logo.svg" alt="logo"/>
            </div>
            <div class="flex  text-sm gap-32">
                <div class="flex gap-5">
                    <div><img src="icon-location.svg" alt="location"/></div>
                   <div>
                    <div >Lorem ipsum dolor sit amet, consectetur                     
                        </div>
                        <div> adipiscing elit, sed do eiusmod tempor</div>
                        <div> incididunt ut labore et dolore magna aliqua</div>
                   </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-4">
                        <img src="icon-phone.svg"  alt="phone"/>
                        <div>+1-543-123-4567</div>
                    </div>
                    <div class="flex gap-4">
                        <img src="icon-email.svg"  alt="email"/>
                        <div>example@fylo.com</div>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div>About Us</div>
                    <div>jobs</div>
                    <div>Press</div>
                    <div>Blog</div>
                </div>
                <div class="flex flex-col gap-4">
                    <div>Contact Us</div>
                    <div>Terms</div>
                    <div>Privacy</div>
                </div>
                <div class="flex  gap-4">
                    <img src="" alt="facebook"/>
                    <img src="" alt="twitter/x"/>
                    <img src="" alt="instagram"/>
                </div>
            </div>
        </div>
    </>)
}