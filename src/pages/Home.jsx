import Navbar from "../components/Navbar"
import Atas from "../assets/img/atas.png"
import B1 from "../assets/img/bawah-1.png"
import B2 from "../assets/img/bawah-2.png"
import B3 from "../assets/img/bawah-3.png"

export default function Home({ username }){
    return(
        <>
            <Navbar />
            <div className="bento">
                <div className="top">
                    <img src={Atas} alt="top-bento" />
                </div>
                <div className="bottom">
                    <div className="bento-tb">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid assumenda voluptate ipsa explicabo architecto labore, voluptas nulla fuga quae esse incidunt dolorum quod reiciendis pariatur exercitationem deserunt veniam aperiam. Natus, hic expedita? Quae repellendus veritatis aspernatur sit adipisci repellat amet, iste commodi pariatur molestiae minima, mollitia neque consequuntur excepturi praesentium ad dolore unde eaque officiis exercitationem nemo? Voluptates deserunt, placeat accusantium dolorem sed ipsam sequi! Mollitia tempora exercitationem illo quaerat magnam ut.</p>
                        <button>EXPLORE FOOD</button>
                    </div>
                    <div className="bimg flex flex-row">
                        <img src={B1} alt="bottom-bento" />
                        <img src={B2} alt="bottom-bento" />
                        <img src={B3} alt="bottom-bento" />
                    </div>
                </div>
            </div>
        </>
    )
}