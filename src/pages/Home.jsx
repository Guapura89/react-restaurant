import { Fade, Zoom } from "react-awesome-reveal";
import { useState, useEffect, useRef } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Images
const gif = 'https://www.icegif.com/wp-content/uploads/2021/10/icegif-1130.gif';
const friends = 'https://images.pexels.com/photos/2769753/pexels-photo-2769753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const taqueria = 'https://media.istockphoto.com/id/1173702984/photo/spoonful-of-birria-caldo.jpg?b=1&s=612x612&w=0&k=20&c=OXaxA9Phym0p642wePC70qfp3dbqdtCqw_bR7yQroKA=';
const menu1 = 'https://images.pexels.com/photos/4958518/pexels-photo-4958518.jpeg?auto=compress&cs=tinysrgb&w=1600';
const menu2 = 'https://images.pexels.com/photos/4958519/pexels-photo-4958519.jpeg?auto=compress&cs=tinysrgb&w=1600';
const menu3 = 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=1600';
const opinion = 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1600';

const Home = () => {
    const reservForm = useRef(null)
    const [reservations, setReservations] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [people, setPeople] = useState("");
    const [count, setCount] = useState(0);

    
    const notifySuccess = () => toast.success('Reservacion exitosa!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    
    const notifyIncorrect = () => toast.error('Error al reservar!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const addReservation = async (event) => {
        event.preventDefault();

        // Get user information
        const formData = new FormData(reservForm.current)
        const data = {
            fecha: formData.get('date'),
            hora: formData.get('time'),
            nombre: formData.get('uname'),
            numeroNinos: formData.get('kids'),
            numeroPersonas: formData.get('dinners')
        }
        
        try {
            const docRef = await  addDoc(collection(db, "reservations"), data);
            setCount(count + 1)
            console.log(docRef.id);
            reservForm.current.reset();
            notifySuccess();
        } catch(err) {
            console.error("Error adding doc: ", err);
            notifyIncorrect();
        }
    }
    

    const fetchPorst = async () => {
        await getDocs(collection(db, "reservations")).then((querySnapshot) => {
            const res = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
            setReservations(res);
        });
    }

    const reser = reservations.map((res) => {
        return(
            <div key={res.id} className="flex gap-4 p-2 rounded-xl justify-center my-2 md:text-lg hover:bg-slate-600">
                <p className="font-bold">{res.nombre}</p>
                <p>{res.fecha}</p>
                <p>{res.hora}</p>
            </div>
        )
    })

    useEffect(() => {
        fetchPorst();

    }, [])

    return (
        <div className="bg-slate-800 scroll-smooth">
            {/* First section */}
            <div id="home" className="bg-[url('https://images.pexels.com/photos/8230019/pexels-photo-8230019.jpeg?auto=compress&cs=tinysrgb&w=1600')] h-screen bg-no-repeat bg-center bg-cover flex items-center text-white">
                <div className="absolute backdrop-brightness-50 h-screen w-full flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl my-2">Taco-tástico</h1>
                        <p className="text-2xl md:text-3xl">"El sabor auténtico de México en cada bocado"</p>
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
            <div className="w-11/12 lg:w-4/5 mx-auto p-4 lg:p-10 h-screen">
                <div className="flex flex-col md:flex-row justify-between h-full">
                    <div className="w-full md:w-1/2 h-full grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="grid lg:grid-rows-3">
                            <Fade triggerOnce direction="down" delay={300} className="lg:row-span-2">
                                <img className="w-full h-full rounded-2xl object-cover" src={friends} alt="" />
                            </Fade>
                        </div>
                        <div className="grid lg:grid-rows-3">
                            <Fade triggerOnce direction="down" delay={300}  className="lg:row-start-2 lg:row-span-2">
                                <img className="w-full h-full rounded-2xl object-cover" src={taqueria} alt="" />
                            </Fade>
                        </div>
                    </div>
                    <div className="w-full order-first md:order-last md:w-1/2 p-4 lg:p-10">
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
            <div id="menu" className="w-full sm:w-4/5 mx-auto p-10">
                <div className="text-center">
                    <h1 className="my-6"><span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Menu</span></h1>
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                    <div className="w-full h-[600px] rounded-2xl bg-white overflow-hidden">
                        <div className="h-1/2">
                            <img className="w-full h-full object-cover" src={menu1} alt="menu1" />
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
                    <div className="w-full h-[600px] rounded-2xl bg-white overflow-hidden">
                        <div className="h-1/2">
                            <img className="w-full h-full object-cover" src={menu2} alt="menu2" />
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
                    <div className="w-full h-[600px] rounded-2xl bg-white overflow-hidden">
                        <div className="h-1/2">
                            <img className="w-full h-full object-cover" src={menu3} alt="menu3" />
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
                <div className="relative bg-[url('https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1600')] backdrop:brightness-50 bg-center h-5/6 md:h-3/6 w-full">
                    <div className="absolute backdrop-brightness-25 flex justify-center items-center w-full h-full">
                        <div className="w-full sm:w-4/5 text-center">
                            <h1 className="text-4xl">Que opina la gente de nosotros?</h1>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-6">
                                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                    <img src={opinion} className="w-full h-full object-cover" alt="opinion person" />
                                </div>
                                <div className="w-11/12 md:w-1/2">
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
            <div id="reservation" className="h-screen">
                <div className="w-11/12 md:w-4/5 h-full flex items-center mx-auto">
                    <form action="/" ref={reservForm} className="text-white text-xl flex flex-col w-10/12 lg:w-1/2 mx-auto">
                        <label htmlFor="date" className="text-white font-bold">Fecha <span className="text-red-500">*</span></label>
                        <input onChange={(e) => setDate(e.target.value)} type="date" name="date" className="text-black py-2 px-4 rounded-full mb-6 mt-2" />

                        <label htmlFor="uname" className="text-white font-bold">Nombre en la reserva <span className="text-red-500">*</span></label>
                        <input onChange={(e) => setName(e.target.value)} type="text" required name="uname" placeholder="John Smith" className="text-black py-2 px-4 rounded-full mb-6 mt-2" />
                        
                        <label htmlFor="dinners" className="text-white font-bold">Numero de personas <span className="text-red-500">*</span></label>
                        <div className="w-full flex flex-col md:flex-row gap-4 mb-6 mt-2">
                            <select name="dinners" onChange={(e) => setPeople(e.target.value)} id="dinners" className="text-black py-2 px-4 bg-white rounded-full">
                                <option value=""> -- select</option>
                                <option value="1">1 persona</option>
                                <option value="2">2 personas</option>
                                <option value="3">3 a 5 personas</option>
                                <option value="5">Mas de 5 personas</option>
                            </select>
                            <select name="kids" id="kids" className="text-black py-2 bg-white px-4 rounded-full">
                                <option value=""> -- select</option>
                                <option value="0">0 niños</option>
                                <option value="1">1 niño</option>
                                <option value="2">2 niños</option>
                                <option value="3">3 a 5 niños</option>
                                <option value="5">Mas de 5 niños</option>
                            </select>
                        </div>

                        <label htmlFor="time" className="text-white font-bold">Hora de reserva <span className="text-red-500">*</span></label>
                        <div className="flex justify-start gap-6 items-center mb-6 mt-2">
                            <select name="time" id="time" onChange={(e) => setHour(e.target.value)} className="text-black py-2 bg-white px-4 rounded-full">
                                <option value=""> -- select</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                            </select>
                            <p className="text-green-400">Table is available</p>
                        </div>

                        <div className="w-full flex justify-center my-6">
                            {
                                (
                                    name !== "" &&
                                    date !== "" &&
                                    hour !== "" &&
                                    people !== "" 
                                )
                                ? <button type="submit" className="bg-orange-500 p-2 w-1/3 rounded-full hover:bg-orange-400" onClick={ addReservation }>Reservar</button>
                                : <button disabled className="bg-slate-200 p-2 w-1/2 md:w-1/3 rounded-full">Reservar</button>
                            }
                        </div>
                    </form>
                </div>
            </div>

            <div className="h-screen flex justify-center flex-col">
                <div className="text-center">
                    <h1 className="mb-6"><span className="text-transparent text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">Reservaciones</span></h1>
                </div>
                <div className="w-11/12 md:w-4/5 mx-auto bg-slate-700 rounded-2xl p-6">
                    { reser }
                </div>
            </div>
        </div>
    );
}

export { Home };