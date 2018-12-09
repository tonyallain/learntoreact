import React, { Component } from 'react';
// Feet
import FeetMove from './player-components/feet/FeetMove';
import FeetIdle from './player-components/feet/FeetIdle';
import FeetWalk from './player-components/feet/FeetWalk';
import FeetStrafeLeft from './player-components/feet/FeetStrafeLeft';
import FeetStrafeRight from './player-components/feet/FeetStrafeRight';
// Handgun
import HandgunMove from './player-components/handgun/HandgunMove';
import HandgunMelee from './player-components/handgun/HandgunMelee';
import HandgunReload from './player-components/handgun/HandgunReload';
import HandgunShoot from './player-components/handgun/HandgunShoot';
import HandgunIdle from './player-components/handgun/HandgunIdle';
// Knife
import KnifeIdle from './player-components/knife/KnifeIdle';
import KnifeMove from './player-components/knife/KnifeMove';
import KnifeMelee from './player-components/knife/KnifeMelee';
// Shotgun
import ShotgunIdle from './player-components/shotgun/ShotgunIdle';
import ShotgunMelee from './player-components/shotgun/ShotgunMelee';
import ShotgunMove from './player-components/shotgun/ShotgunMove';
import ShotgunReload from './player-components/shotgun/ShotgunReload';
import ShotgunShoot from './player-components/shotgun/ShotgunShoot';
// Rifle
import RifleIdle from './player-components/rifle/RifleIdle';
import RifleMove from './player-components/rifle/RifleMove';
import RifleReload from './player-components/rifle/RifleReload';
import RifleMelee from './player-components/rifle/RifleMelee';
import RifleShoot from './player-components/rifle/RifleShoot';
// Flashlight
import FlashlightMove from './player-components/flashlight/FlashlightMove';
import FlashlightIdle from './player-components/flashlight/FlashlightIdle';
import FlashlightMelee from './player-components/flashlight/FlashlightMelee';

class Player extends Component {
    constructor(props) {
        super(props);

        this.pickWeapon.bind(this);
        this.pickFeet.bind(this);
    }

    pickWeapon() {
        switch (this.props.weapon) {
            case 'flashlight':
                if (this.props.isMoving) {
                    return <FlashlightMove />;
                } else {
                    return <FlashlightIdle />;
                }
            case 'knife':
                if (this.props.isMoving) {
                    return <KnifeMove />;
                } else {
                    return <KnifeIdle />;
                }
            case 'handgun':
                if (this.props.isMoving) {
                    return <HandgunMove position={this.props.position} />;
                } else {
                    return <HandgunIdle />;
                }
            case 'shotgun':
                if (this.props.isMoving) {
                    return <ShotgunMove />;
                } else {
                    return <ShotgunIdle />;
                }
            case 'rifle':
                if (this.props.isMoving) {
                    return <RifleMove />;
                } else {
                    return <RifleIdle />;
                }
            default:
                return <div />;
        }
    }

    pickFeet() {
        if (this.props.isMoving) {
            switch (this.props.strafeDirection) {
                case 0:
                    return <FeetMove />;
                case 1:
                    return <FeetStrafeRight />;
                case -1:
                    return <FeetStrafeLeft />;
                default:
                    return <div />;
            }
        } else {
            return <FeetIdle />;
        }
    }

    render() {
        return (
            <div
                className='player'
                style={{
                    left: this.props.position.x,
                    top: this.props.position.y,
                    transform: `rotate(${
                        this.props.position.r
                    }deg) translate(-50%, -50%)`
                }}
            >
                {this.pickFeet()}
                {this.pickWeapon()}
            </div>
        );
    }
}

export default Player;
