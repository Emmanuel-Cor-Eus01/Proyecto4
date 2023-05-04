import CardChoice from "../components/Card-choice";
import Card from "../components/Card-serv";
function Home() {
    return (
        <>
            <div className="banner text-center">
                <div className="content">
                <h1 className="h1">SERVICIO TECNICO Y VENTA DE PRODUCTOS ELECTRONICOS</h1>
                </div>
            </div>
            <div className="services">
                <div className="cont-serv text-center">
                    <h2 className="serv">SERVICIOS</h2>
                    <Card className="card"></Card>
                </div>
            </div>
            <div className="choice">
                <div className="cont-choi text-center">
                    <h2 className="chice">¿Por que elegirnos?</h2>
                    <CardChoice className="card"></CardChoice>
                </div>
            </div>
        </>
     );
}

export default Home;