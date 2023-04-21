import { Fade, Zoom } from "react-awesome-reveal";

// Images
const gif = 'https://www.icegif.com/wp-content/uploads/2021/10/icegif-1130.gif';
const friends = 'https://images.pexels.com/photos/2769753/pexels-photo-2769753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const taqueria = 'https://media.istockphoto.com/id/1173702984/photo/spoonful-of-birria-caldo.jpg?b=1&s=612x612&w=0&k=20&c=OXaxA9Phym0p642wePC70qfp3dbqdtCqw_bR7yQroKA=';
const menu1 = 'https://images.pexels.com/photos/4958518/pexels-photo-4958518.jpeg?auto=compress&cs=tinysrgb&w=1600';
const menu2 = 'https://images.pexels.com/photos/4958519/pexels-photo-4958519.jpeg?auto=compress&cs=tinysrgb&w=1600';
const menu3 = 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=1600';
const opinion = 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1600';

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
                            <a href="#reservation"><button className="p-4 bg-orange-500 rounded-full w-1/2 hover:bg-orange-400 font-bold">Reservar</button></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our story section */}
            <div className="w-4/5 mx-auto p-10 h-screen">
                <div className="flex justify-between h-full">
                    <div className="w-1/2 h-full grid grid-cols-2 gap-4">
                        <div className="grid grid-rows-3">
                            <Fade triggerOnce direction="down" delay={300} className="row-span-2">
                                <img className="w-full h-full rounded-2xl object-cover" src={friends} alt="" />
                            </Fade>
                        </div>
                        <div className="grid grid-rows-3">
                            <Fade triggerOnce direction="down" delay={300}  className="row-start-2 row-span-2">
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

            {/* Menu section */}
            <div id="menu" className="w-4/5 h-screen mx-auto p-10">
                <div className="text-center">
                    <h1 className="my-6"><span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Menu</span></h1>
                </div>
                <div className="grid grid-cols-3 gap-10 mt-14 h-4/6">
                    <div className="w-full h-full rounded-2xl bg-white overflow-hidden">
                        <div className="h-1/2 bg-black">
                            <img className="w-full h-full object-cover" src={menu1} alt="" />
                        </div>
                        <div className="w-full h-1/2 p-8 text-black">
                            <p className="font-bold text-xl">Ordern de tacos</p>
                            <p>$150</p>

                            <ul className="mt-4">
                                <li> - Salsas y limones incluidos.</li>
                                <li> - Hasta 2 tipos de tacos (Pastor, Arrachera, Bistech, Tripitas).</li>
                                <li> - Sin bebidas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-full rounded-2xl bg-white overflow-hidden">
                        <div className="h-1/2 bg-black">
                            <img className="w-full h-full object-cover" src={menu2} alt="" />
                        </div>
                        <div className="w-full h-1/2 p-8 text-black">
                            <p className="font-bold text-xl">Orden familiar</p>
                            <p>$450</p>

                            <ul className="mt-4">
                                <li> - 3 ordenes de tacos</li>
                                <li> - Eleccion al gusto.</li>
                                <li> - Refrescos o aguas de sdabor incluidas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-full rounded-2xl bg-white overflow-hidden">
                        <div className="h-1/2 bg-black">
                            <img className="w-full h-full object-cover" src={menu3} alt="" />
                        </div>
                        <div className="w-full h-1/2 p-8 text-black">
                            <p className="font-bold text-xl">Cubeta de cerveza</p>
                            <p>$250</p>

                            <ul className="mt-4">
                                <li> - Cubeta con 6 cervezas de su eleccion</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Opinion section */}
            <div className="h-screen mx-auto flex items-center">
                <div className="relative bg-[url('https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1600')] backdrop:brightness-50 bg-center h-3/6 w-full">
                    <div className="absolute backdrop-brightness-50 flex justify-center items-center w-full h-full">
                        <div className="w-4/5 text-center">
                            <h1 className="text-4xl">Que opina la gente de nosotros?</h1>
                            <div className="flex items-center justify-center gap-6 my-6">
                                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                    <img src={opinion} className="w-full h-full object-cover" alt="opinion person" />
                                </div>
                                <div className="w-1/2">
                                    <p>"La taquería en la que comí recientemente fue increíble. Los tacos estaban deliciosos, especialmente el de carne asada. La salsa que acompañaba a los tacos tenía un sabor auténtico y picante, justo como me gusta. Además, el servicio fue excelente y el ambiente del lugar era acogedor. Definitivamente volveré a visitar esta taquería y la recomendaré a mis amigos y familiares".</p>
                                </div>
                            </div>

                            <div className="w-1/2 mx-auto flex justify-center gap-6">
                                <div className="w-4 h-4 border border-white rounded-full bg-white hover:cursor-pointer">
                                </div>
                                <div className="w-4 h-4 border border-white rounded-full hover:cursor-pointer hover:bg-white">
                                </div>
                                <div className="w-4 h-4 border border-white rounded-full hover:cursor-pointer hover:bg-white">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reservations section */}
            <div className="h-screen">
                <div className="w-4/5 hfull">
                    <form action="" className="text-white text-xl">
                        <label htmlFor="date" className="text-white">Fecha <span className="text-red-500">*</span></label>
                        <input type="date" />

                        <label htmlFor="name">Nombre en la reserva</label>
                        <input type="text" placeholder="John Smith" />
                        
                        <label htmlFor="dinners">Numero de personas</label>
                        <div>
                            <select name="dinners" id="dinners">
                                <option value="1">1 persona</option>
                                <option value="2">2 personas</option>
                                <option value="3">3 a 5 personas</option>
                                <option value="4">Mas de 5 personas</option>
                            </select>
                            <select name="kids" id="kids">
                                <option value="1">0 niños</option>
                                <option value="2">1 niño</option>
                                <option value="3">2 niños</option>
                                <option value="4">3 a 5 niños</option>
                                <option value="5">Mas de 5 niños</option>
                            </select>
                        </div>
                        <div>
                            <select name="time" id="time">
                                <option value="1">10:00 AM</option>
                                <option value="2">11:00 AM</option>
                                <option value="3">12:00 PM</option>
                                <option value="4">1:00 PM</option>
                            </select>
                            <p>Table is vailable</p>
                        </div>

                        <div>
                            <button>Reservar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { Home };