import React, {FC} from 'react';
import clN from "./headCube.module.scss"
import logo from 'assets/images/topIcon.svg'

const HeadCube: FC = () => {
    return (
        <div className={clN.headCube}>
            <div className={clN.headCube__contentDiv}>
                <h2 className={clN.tittle}>
                    All time Highest Scorers
                </h2>
                <div className={clN.topUsers}>

                </div>
            </div>
            <img className={clN.headCube__logo} src={logo} alt={"Logo"} width={300} height={200}/>
        </div>
    );
};

export default HeadCube;
