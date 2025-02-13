import Highlights from "../components/Highlights";
import LatestEvents from "../components/Events"
import '../style.css';

const Home = () => {
    return (
        <div className="home">
            <Highlights />
            <LatestEvents />
        </div>
    )
}

export default Home;