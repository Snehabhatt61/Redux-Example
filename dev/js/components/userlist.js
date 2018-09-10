import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList , deleteUserItem , updateUserItem } from '../actions/form';

class Userlist extends Component {
    constructor(props) {
        super(props)
    }
    createListTable = async () => {
        await this.props.getUserList(this.successCallback);
        const userlistt = await this.props.userlist
        console.log('dhdh', userlistt);
    }
    deleteUserItem = async id => {
        // e.preventDefault();
        this.props.deleteUserItem(id);
    }
    updateUserItem = async data => {
        this.props.updateUserItem(data);
        const updatedlist = await this.props.userlist
        await console.log('updated', data.name);
    }
    // Can also be done using componentWillMount
    // componentWillMount = async () => {
    //     let mylist = [];
    //     await this.props.getUserList(this.successCallback);
    //     const userlistt = await this.props.userlist
    //     console.log('dhdh', userlistt);
    //     const mylist = [];
    //     const length = userlistt.userlist.length;
    //     await console.log(length);
    //     for (let i = 0; i < length; i++) {
    //         await console.log('gvhbf', mylist.push(userlistt.userlist[i]));

    //         <div>{mylist.name}</div>

    //     }
    //     await console.log('wooden', mylist);
    // };
    render() {
        const listme = (this.props.userlist);
        return (
            <div>
                <h2>USER DETAILS</h2>
                {listme && listme.map((list, key) => {
                    return (
                        <div>
                            <div>
                                <span>Name: </span>
                                <span>{list.name}</span>
                            </div>
                            <div>
                                <span>Age:</span>
                                <span>{list.age}</span>           
                            </div>
                            <button onClick={() => this.updateUserItem()}>Edit</button>
                            <button onClick={() =>this.deleteUserItem(list._id)}>Delete</button>
                            <hr />
                        </div>
                    );
                })}
                <button onClick={this.createListTable}>Click Me</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userlist: state.userlist.userlist,
        // deleteItem: index

    }
}
export default connect(mapStateToProps, { getUserList ,deleteUserItem , updateUserItem
 })(Userlist); 