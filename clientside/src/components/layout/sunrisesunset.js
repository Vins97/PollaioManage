import React from 'react';

import Grid from '@material-ui/core/Grid';

import moon from '../../resources/moon.png';
import sun from '../../resources/sunny.png';

var SunCalc = require('suncalc');

//TODO 
class Posizionedelsole extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: this.props.coords,
        }

    }

    getPosizoneSole() {
        return SunCalc.getPosition(new Date(), this.state.coords.lat, this.state.coords.log)
    }

    render() {
        return (            
                <Grid item xs>
                    {this.getPosizoneSole().altitude <= 0 ?
                        <img src={moon} alt={'Moon'} width={40} height={40} />
                        :
                        <img src={sun} alt={'Sun'} width={40} height={40} />}
                </Grid>
        )
    }
}
export default Posizionedelsole;