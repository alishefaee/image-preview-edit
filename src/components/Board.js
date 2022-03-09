import React, {useEffect, useRef, useState} from 'react';
import {Stage, Layer, Text, Image} from 'react-konva';
import ColoredRect from './ColoredRect'
import useImage from "use-image";

const Board = ({preview, setImageWidth, setImageHeight, imageWidth, imageHeight}) => {
    const [image, status] = useImage(preview, "Anonymous");

    useEffect(() => {
        if (status === 'loaded') {
            console.log("status")
            console.log(status)
            console.log(preview)
            console.log(image.width)
            setImageWidth(image.width)
            setImageHeight(image.height)
        }
    }, [status,preview])

    return (
        <>
            <Stage width={imageWidth} height={imageHeight} x={30} y={30}>
                <Layer>
                    <Image image={image}/>
                </Layer>
                <Layer>
                    <Text text="Try click on rect"/>
                    <ColoredRect/>
                </Layer>
            </Stage>
        </>
    );
};

export default Board;