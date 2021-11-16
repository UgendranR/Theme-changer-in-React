import React,{useEffect,useState} from 'react'
import "./Theme1.css"


function Theme() {
    

  
    const [Theme, setTheme] = useState("Theme1");
  
    const Changeit = () => {
      console.log(Theme);
    
    
      if(Theme=="Theme1"){
        setTheme("Theme2");
      }
      else{
        setTheme("Theme1");
      }
    };



    

    return (
        <div className={Theme}>
           
            <button className="contact-me"onClick={Changeit}><span></span>
					<span></span>
					<span></span>
                    <span></span>
					 Change Theme </button>
                
        </div>
    )
}

export default Theme
