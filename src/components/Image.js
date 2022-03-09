import React, {useRef} from 'react';

const Image = ({preview, setImageWidth, setImageHeight}) => {
    const imageRef = useRef(null)

    function onLoad() {
        setImageWidth(imageRef.current.offsetWidth)
        setImageHeight(imageRef.current.offsetHeight)
    }

    return (
        <img className='img' src={preview} ref={imageRef} onLoad={onLoad}/>
    );
};

export default Image;