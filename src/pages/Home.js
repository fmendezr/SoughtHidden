import maps from "../maps";
import MapPreview from "../components/MapPreview";

const Home = () => {
    return (
        <>
            <div>
                <p>Leaderboard</p>
                <h1>Sought of Hidden</h1>
                <p>Contact</p>
            </div>
            <main className="homePage">
              {maps.map((map) => {
                return (
                    <MapPreview 
                        name={map.name}
                        image={map.image}
                        key={map.id}
                    />
                )
              })}
            </main>
        </>
    )
}

export default Home;