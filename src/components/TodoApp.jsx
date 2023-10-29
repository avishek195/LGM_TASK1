import { useState } from "react";
import {FaCheck} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";

import "./todoapp.style.css"

const TodoApp = () => {
    const [item, setItem] = useState("");
    const [lists, setLists] = useState([]);
    const [show, setShow] = useState(false);
    const [styles, setStyles] = useState(false);
    const changeValue = (event) => {
        setItem(event.target.value);
    }
    const showList = () => {
        setLists([...lists, item]);
        setShow(true);
        // console.log(event.target.value);
        setItem("");

    }

    const deletelist = (lists,index) => {
        lists.splice(index,1);
        setLists([...lists])
    }

    const changeBack = (event) => {
        setStyles((pre) => !pre);
         event.preventDefault();   
         if( event.target.className === "lists"){
            if(styles){
            console.log(event.target.className);
           event.currentTarget.style.color = 'white';  
           event.currentTarget.style.backgroundColor = 'rgb(136, 136, 228)';  
           event.target.firstChild.children[1].style.textDecoration = "line-through";
           event.target.firstChild.firstChild.style.visibility = "visible";
        }else{
            event.currentTarget.style.color = 'black';
            event.currentTarget.style.backgroundColor = 'white'; 
            event.target.firstChild.children[1].style.textDecoration = "none";
            event.target.firstChild.firstChild.style.visibility = "collapse";
        }
         }
    }
    return(
        <>
            <div className="todo-container">
                <h1>My To Do List</h1>
                <div className="input">
                <input type="text" className="text-input" placeholder="Title..." onChange={changeValue}  />
                <div className="button" onClick={showList}>Add</div>
                </div>
                
            </div>
            {
                (show) && (
                    <div className="todo-list">
                        {
                            lists.map((list, index) => {
                                return(
                                    <>
                                    <div className="lists" key={index} onClick={changeBack} >
                                        <div className="left" >
                                       <FaCheck className="check" style={{visibility: "collapse"}}/>
                                       <div className="list">{list}</div> 
                                        </div>
                                        
                                        <div className="right">
                                        <FaXmark className="cross" onClick={()=>deletelist(lists,index)}/>
                                        </div>   
                                    </div>
                                    </>
                                    
                                )
                            })
                        }
                    </div>
                )

            }
        </>
    )
}

export default TodoApp;