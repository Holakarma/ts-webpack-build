import Example from "shared/assets/example.svg";

const App = () => {

    if (__PLATFORM__ === 'desktop') { // DefinePlugin(); при сборке mobile эта часть кода выпилится из билда
        return <div>
            <Example/>
            desktop version
        </div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>mobile version</div>
    }
};

export default App;