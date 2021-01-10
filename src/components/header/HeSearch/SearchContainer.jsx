import React from 'react'
import { connect } from 'react-redux';
import { addSerchResultAC, isFetchingSerchAC, serchChangeAC } from '../../../redux/SerchReducer';
import Search from './Search';
import { dellSerchTextAC } from './../../../redux/SerchReducer';
import axios from 'axios';


class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    // componentDidUpdate(text) {
    //     this.props.toggleIsFetching(true)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5&term=${text}`)
    //         .then(response => {
    //             this.props.toggleIsFetching(false)
    //             this.props.resultSerchItems(response.data.items)
    //             console.log(response.data.items)
    //         });
    // }
    render() {
        let newSerchV = (text) => {
            this.props.onSerchChange(text)
        }
        let dellSerchText = () => {
            this.props.onBlurSerchText()
        }
        let onSerchRes = () => {
          this.props.serchResult.map( (e)=> {
              <div>{e.name}</div>
          })
        }
        return <Search 
        newSerchV={newSerchV}
        dellSerchText={dellSerchText}
        newSerchValue= {this.props.newSerchValue}
        onSerchRes={onSerchRes}
        isFetching={this.props.isFetching} />
    }
}

const mapStateToProps = (state) => {
    return {
        newSerchValue: state.SerchPage.newSerchValue,
        serchResult: state.SerchPage.serchResult,
        isFetching: state.SerchPage.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSerchChange: (newSerchText) => {
            dispatch(serchChangeAC(newSerchText))
        },
        onBlurSerchText: () => {
          dispatch(dellSerchTextAC())
        },
        resultSerchItems: (result) => {
          dispatch(addSerchResultAC(result))
        },
        toggleIsFetching: () => {
          dispatch(isFetchingSerchAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

