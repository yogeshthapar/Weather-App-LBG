import * as abcReducer from '../../reducers/reducers';

import * as action from '../../actions/actions';

import expect from 'expect';

describe('abc reducer',() => {
    describe("undefined ", () =>{
        it('should',()=>{
            const ac ={} ;

            const actual = abcReducer.weatherReducer(undefined,ac);
            expect(actual).toEqual(abcReducer.initialState);

        })
    })
})