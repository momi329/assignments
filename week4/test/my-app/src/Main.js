
import React, { useState } from "react";
const contentBox=[1,2,3,4];
const contentBox2=[5,6,7,8];
const box=document.querySelector('.content-box')

const Main=()=>{
    const [newArr, setNewArr] = useState([]);
    // useEffect(()=>console.log(newArr),[newArr])
    //const[click,setClick]=useState(true);
    //const useClick = () => { setClick(!click);};

    return(
        <main>
            <h3 className="section-title">Section Title</h3>
            <section className="content-box">
                {contentBox.map(num=>(
                    <div className="box" key={contentBox.index}>
                    <p>Content Box{num}</p>
                </div> 
                ))}
            </section>
            <div className="button" onClick={()=>newArr.length===0?(setNewArr(contentBox2)):(setNewArr([]))}>
            {/* newArr===[] ? (setNewArr(contentBox2)):(setNewArr([])) */}
                <p>Call to action</p>
            </div>
            <section className="content-box">
                {newArr.map(num=>(
                    <div className="box" key={contentBox2.index}>
                    <p>Content Box{num}</p>
                </div>
                ))}
            </section>
        </main>
    )
}

export default Main;

