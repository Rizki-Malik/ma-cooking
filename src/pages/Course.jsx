import Navbar from "../components/Navbar"
import Atas from "../assets/img/atas.png"
import Bawah from "../assets/img/bawah-3.png"

export default function Course(){
    return(
        <>
            <Navbar />
            <div className="list">
                <div className="list-item-l">
                    <img src={Atas} alt="bbq" className="fit" />
                    <div className="info-course-l">
                        <h1 className="title">Barbecue</h1>
                        <h3 className="period">A 6-week online course</h3>
                        <p className="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laudantium facilis, ipsum blanditiis voluptate tempora natus recusandae neque illo, consequatur id quia quas deserunt expedita commodi velit similique assumenda repellat nesciunt eveniet error? Maxime consequuntur dicta, modi totam perferendis quis ullam. Voluptatum praesentium sequi asperiores maiores illum natus placeat deleniti.</p>
                        <a href="/"><button className="button lb">READ MORE</button></a>
                    </div>
                </div>
                <div className="list-item-r">
                    <div className="info-course-r">
                        <h1 className="title">Pastery Cake</h1>
                        <h3 className="period">A 4-week online course</h3>
                        <p className="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laudantium facilis,</p>
                        <p className="summary">ipsum blanditiis voluptate tempora natus recusandae neque illo, consequatur id quia</p>
                        <p className="summary">quas deserunt expedita commodi velit similique assumenda repellat nesciunt eveniet</p>
                        <p className="summary">praesentium sequi asperiores maiores illum natus placeat deleniti.</p>
                        <a href="/"><button className="button lb">READ MORE</button></a>
                    </div>
                    <img src={Bawah} alt="cake" className="fit" />
                </div>
            </div>
        </>
    )
}