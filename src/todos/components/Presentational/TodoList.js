import React, {Component} from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {todo:'',list: [{name: 'correr', state: false, id: 1}, {name: 'Aprender Redux', state: true, id: 2}]};
    }

    componentDidMount() {
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleChange( id) {
        const newList = this.state.list.map(i => {
            if (i.id === id) {
                i.state = !i.state;
            }
            return i;
        });

        this.setState({list: newList});
    }

    handleInput({target}){
        const name = target.value;
        this.setState({todo:name});
    }
    addTodo(){
        const id = this.state.list.length+1;
        const newList = [...this.state.list, {id:id, name:this.state.todo, state:false}];
        this.setState({list:newList});
    }

    render() {
        return (
            <div className="">
                <input type="text" value={this.state.todo} onChange={this.handleInput}/>
                <button onClick={()=>this.addTodo()}>Add</button>
                <ul>
                    {this.state.list.map(i => (
                        <li key={i.name}>
                            <input name='state' type="checkbox" value={i.state} checked={i.state}
                                   onChange={()=>this.handleChange(i.id)}/> <span>{i.name}</span>
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}
