import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder, delReminder, clearReminder } from '../actions';
import moment from 'moment';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    delReminder(id) {
        this.props.delReminder(id);
    }

    clearReminder(){
        this.props.clearReminder();
    }

    renderReminders() {
        const { reminders } = this.props;

        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id}
                                className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em> </div>
                                </div>
                                <div className="list-item delete-button"
                                    onClick={() => this.delReminder(reminder.id)}>
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className="Title">
                    Reminder pro componente
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">

                        <input type="text"
                            className="form-control"
                            placeholder="I have to do..."
                            onChange={(event) => {
                                this.setState(
                                    { text: event.target.value }
                                )
                            }
                            }
                        />

                        <input type="datetime-local"
                            className="form-control"
                            onChange={(event) => this.setState({ dueDate: event.target.value })}
                        />



                        <button type="button"
                            className="btn btn-success"
                            onClick={() => this.addReminder()}
                        >
                            Add Reminder
                        </button>

                        <button type="button"
                            className="btn btn-danger"
                            onClick={() => this.clearReminder()}
                        >
                            Clear Reminder
                        </button>



                    </div>


                </div>

                <div>

                    {this.renderReminders()}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addReminder, delReminder, clearReminder }, dispatch);
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);