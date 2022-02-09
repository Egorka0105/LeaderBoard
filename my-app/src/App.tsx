import React, {FC} from 'react';
import HeadCube from "./pages/HeadCube/HeadCube";
import BodyCube from "./pages/BodyCube/BodyCube"
import 'App.module.scss';
import clN from "./App.module.scss";

const App: FC = () => {
    return (
        <div className={clN.app}>
            <HeadCube/>
            <h1 className={clN.app__tittle}>Cube<span className={clN.digit}>19</span>Leaderboard</h1>
            <BodyCube/>
        </div>
    );
}

export default App;
