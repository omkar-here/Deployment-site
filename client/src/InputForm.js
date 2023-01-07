import React,{useState} from 'react';
import axios from 'axios'
import "./styles.css"


export default function InputForm(){
    const [content,setContent]=useState("")
    
    function handleSubmit(event){
        event.preventDefault()
        console.log(event.target.content.value)
        axios.post('/content', {
            "text": event.target.content.value
          },[]
          )
          .then((response) => {
            console.log(response.data.text);
            setContent(response.data.text)
          }, (error) => {
            console.log(error);
          });
    }
    function DisplayContent(content){
        console.log({content})
        if(content!==""){
        return (<div className="section-main">
        <h1 className="section-text">Your Content Is BELOW</h1>
        <div className="output">{content}</div>
    </div>)
        }
        else{
            return (<div className="section-main">
            <h1 className="section-text">Your Content Is BELOW</h1>
            <div className="output">Nothing entered</div>
        </div>)
        }
    }

    
    return (<section className="rest">
    <form onSubmit={handleSubmit} >
        <div className="searchBox">
            <input  type="text" className="input-box" name="content" />
            <button type="submit" className="submit-button"><strong>GO</strong></button>
        </div>
    </form>
    
    {content?DisplayContent(content):DisplayContent("")}
</section>)
}

//axious se hit karna padega (for post )