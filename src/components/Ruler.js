import Ruler from "@scena/react-ruler";
import {useEffect, useRef, useState} from "react";


function Rulers({imageWidth, imageHeight}) {
    const rulerHorizontal = useRef()
    const rulerVertical = useRef()


    // function handleResize() {
    //     rulerHorizontal.current.resize();
    //     rulerVertical.current.resize();
    // }

    // useEffect(() => {
    //     rulerHorizontal.current.resize();
    //     rulerVertical.current.resize();
    //     console.log("offsetWidth")
    //
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, [])


    return (
        <>
            <div className='ruler horizontal'>
                <Ruler
                    type="horizontal"
                    width={imageWidth}
                    style={{width: `${imageWidth}px`, height: "100%"}}
                    ref={rulerHorizontal}
                />
            </div>
            <div className='ruler vertical'>
                <Ruler
                    type="vertical"
                    height={imageHeight}
                    style={{width: '100%', height: `${imageHeight}px`}}
                    ref={rulerVertical}
                />
            </div>
        </>
    );
}

export default Rulers;
