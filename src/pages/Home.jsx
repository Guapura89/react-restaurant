import { Fade, Slide } from "react-awesome-reveal";

// Images
const gif = 'https://www.icegif.com/wp-content/uploads/2021/10/icegif-1130.gif';
const friends = 'https://images.pexels.com/photos/2769753/pexels-photo-2769753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const taqueria = 'https://media.istockphoto.com/id/1173702984/photo/spoonful-of-birria-caldo.jpg?b=1&s=612x612&w=0&k=20&c=OXaxA9Phym0p642wePC70qfp3dbqdtCqw_bR7yQroKA=';

const Home = () => {
    return (
        <div className="bg-slate-800 scroll-smooth">
            {/* First section */}
            <div className="bg-[url('https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&w=1600')] h-screen bg-no-repeat bg-center bg-cover flex items-center text-white">
                <div className="absolute backdrop-brightness-50 h-screen w-full flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-6xl my-2">Taco-tástico</h1>
                        <p className="text-3xl">"El sabor auténtico de México en cada bocado"</p>
                        <div className="w-full mx-auto my-10 flex justify-center">
                            <img src={gif} alt="taco-tastico" className="w-1/3" />
                        </div>
                        <div className="w-full">
                            <button className="p-4 bg-orange-500 rounded-full w-1/2 hover:bg-orange-400 font-bold">Reservar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our story section */}
            <div className="w-4/5 mx-auto p-10 h-screen">
                <div className="flex justify-between h-full">
                    <div className="w-1/2 h-full grid grid-cols-2 gap-4">
                        <div className="grid grid-rows-3">
                            <Fade direction="down" delay={300} className="row-span-2">
                                <img className="w-full h-full rounded-2xl object-cover" src={friends} alt="" />
                            </Fade>
                        </div>
                        <div className="grid grid-rows-3">
                            <Fade direction="down" delay={300}  className="row-start-2 row-span-2">
                                <img className="w-full h-full rounded-2xl object-cover" src={taqueria} alt="" />
                            </Fade>
                        </div>
                    </div>
                    <div className="w-1/2 p-10">
                        <div className="h-full grid place-items-center">
                            <div className="text-justify">
                                <h1 className="my-6"><span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Nuestra historia</span></h1>
                                <p>En 1985, dos amigos, Juan y Carlos, decidieron abrir una pequeña taquería en el centro de la ciudad. Con una pasión por la comida mexicana y una visión de compartir su amor por los tacos con la comunidad local, comenzaron a preparar tacos de pollo, carne asada y carnitas en un pequeño puesto callejero.</p>
                                <p>En los años siguientes, la taquería se expandió aún más y se abrieron nuevas ubicaciones en diferentes partes de la ciudad. Hoy en día, "El Sabor de México" sigue siendo propiedad de la familia de Juan y Carlos, y sigue siendo un lugar favorito para los amantes de los tacos y la comida mexicana en general.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Home };