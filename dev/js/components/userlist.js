import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from '../actions/form';

class Userlist extends Component {
    constructor(props) {
        super(props)
    }

    // createListTable = async () => {
    //     await this.props.getUserList(this.successCallback);
    //     console.log('list',this.props.userlist);
    //     const userlistt = this.props.userlist
    //     console.log('dhdh',userlistt[i]);
    //     let mylist = [];
    //     for (let i = 0; i < userlistt.length; i++) {
    //         // console.log('number',userlistt.length);
    //         mylist.push(userlistt);

    //     } console.log('hello', mylist);

    componentWillMount = async () => {
        // let mylist = [];
        await this.props.getUserList(this.successCallback);
        const userlistt = await this.props.userlist
        console.log('dhdh', userlistt);
        const mylist = [];
        const length = userlistt.userlist.length;
        await console.log(length);
        for (let i = 0; i < length; i++) {
            await console.log('gvhbf', mylist.push(userlistt.userlist[i]));
        }
        await console.log('wooden', mylist);
    }
    render() {
        // { this.getUsers() }
        return (
            <div>
                <h2>USER DETAILS</h2>
                {/* {() => this.getUsers()} */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('state', state.userlist);
    return {
        userlist: state.userlist
    }
}
export default connect(mapStateToProps, { getUserList })(Userlist);